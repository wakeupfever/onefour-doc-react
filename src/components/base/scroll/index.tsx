import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
import React, { useRef, useEffect } from 'react'

export interface ScrollPos {
  x: number
  y: number
}

interface ScrollProps {
  options?: {
    click: boolean
    probeType: number
  }
  style?: { [key: string]: string | number }
  className?: string
  setScroll: Function
}

BScroll.use(ObserveDOM)

const Scroll: React.FC<ScrollProps> = ({ options = { click: true, probeType: 0 }, setScroll, className = '', style = {}, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const scrollVal = useRef<BScrollConstructor>()
  useEffect(() => {
    scrollVal.current = new BScroll(
      (wrapperRef as React.MutableRefObject<HTMLDivElement>).current,
      {
        observeDOM: true,
        ...options,
      }
    )
    if (options.probeType > 0) {
      scrollVal.current?.on('scroll', (pos: ScrollPos) => {
        setScroll(pos)
      })
    }
    return () => {
      // scrollVal.current?.destroy()
      scrollVal.current = undefined
    }
  }, [setScroll, options])

  return (
    <div className={className} ref={wrapperRef} style={style}>
      {children}
    </div>
  )
}

export default Scroll
