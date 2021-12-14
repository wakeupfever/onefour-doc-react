import { RefObject, useEffect, useMemo, useRef } from 'react'
import { SingerItem } from '~/pages/singer'
import { CustomUseProps } from '.'

export const useShortcut = ({ data }: CustomUseProps, groupRef: RefObject<HTMLUListElement>) => {
  const ANCHOR_HEIGHT: number = 18

  const scrollRef = useRef<HTMLDivElement>(null)

  const shortcutList = useMemo(() => data.map(({ title }: SingerItem) => (title)), [data])

  const touch: { [key: string]: number } = {}

  const onShortcutTouchStart = (e: any) => {
    e.stopPropagation()
    const anchorIndex: number = Number(parseInt(e.target.dataset.index))
    touch.y1 = e.touches[0].pageY
    touch.anchorIndex = anchorIndex
    
    console.log(anchorIndex)
    scrollTo(anchorIndex)
  }

  const onShortcutTouchMove = (e: any) => {
    e.stopPropagation()
    touch.y2 = e.touches[0].pageY
    const delta: number = (touch.y2 - touch.y1) / ANCHOR_HEIGHT | 0
    const anchorIndex: number = touch.anchorIndex + delta
    
    console.log(anchorIndex)
    scrollTo(anchorIndex)
  }

  const scrollTo = (index: number) => {
    console.log(scrollRef)
    if (isNaN(index) || !groupRef.current || !scrollRef.current) {
      return
    }
    index = Math.max(0, Math.min(shortcutList.length - 1, index))
    const targetEl = groupRef.current.children[index]
    const scroll: any = scrollRef.current.scroll
    scroll.scrollToElement(targetEl, 0)
  }

  return {
    shortcutList,
    scrollRef,
    onShortcutTouchStart,
    onShortcutTouchMove
  }
}