import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SingerItem } from '~/pages/singer'
import { CustomUseProps } from '.'
import { ScrollPos } from '../base/scroll'

export const useFixed = ({ data }: CustomUseProps) => {
  const TITLE_HEIGHT: number = 30
  const groupRef = useRef<HTMLUListElement>(null)
  const listHeights = useRef<number[]>([])
  const [scrollY, setScrollY] = useState<number>(0)
  const currentIndex = useRef<number>(0)
  const distance = useRef<number>(0)

  const fixedTitle: string = useMemo(() => {
    if (scrollY < 0) {
      return ''
    }
    const currentGroup: SingerItem = data[currentIndex.current]
    return currentGroup ? currentGroup.title : ''
  }, [data, scrollY])

  const fixedStyle: { [key: string]: string } = useMemo(() => {
    const distanceVal = distance.current
    const diff = (distanceVal > 0 && distanceVal < TITLE_HEIGHT) ? distanceVal - TITLE_HEIGHT : 0
    return {
      transform: `translate3d(0,${diff}px,0)`
    }
  }, [])

  const calculate = useCallback((data) => {
    if (!groupRef.current) return
    const list: unknown = groupRef.current?.children
    let height = 0
    listHeights.current = []
    listHeights.current.push(height)

    for (let i = 0; i < (list as HTMLCollection)?.length; i++) {
      height += (list as HTMLCollection)[i]?.clientHeight
      listHeights.current.push(height)
    }
  }, [])

  const onScroll = (pos: ScrollPos) => {
    setScrollY(-pos.y)
  }

  useEffect(() => {
    calculate(data)
  }, [calculate, data])

  useEffect(() => {
    if (listHeights.current === null) return
    const listHeightsVal = listHeights.current
    for (let i = 0; i < listHeightsVal.length; i++) {
      const heightTop = listHeightsVal[i]
      const heightBottom = listHeightsVal[i + 1]
      if (scrollY >= heightTop && scrollY <= heightBottom) {
        currentIndex.current = i
        distance.current = heightBottom - scrollY
      }
    }
  }, [scrollY])

  return {
    groupRef,
    onScroll,
    fixedTitle,
    fixedStyle,
    currentIndex
  }
}