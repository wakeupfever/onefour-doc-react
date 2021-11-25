import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
import React, { useRef, useEffect, useState, forwardRef } from 'react'

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
  onScroll?: Function
}

BScroll.use(ObserveDOM)

const Scroll: React.FC<ScrollProps> = forwardRef(({ options = { click: true, probeType: 0 }, onScroll, className = '', style = {}, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [scrollVal, setScrollVal] = useState<BScrollConstructor>()
  useEffect(() => {
    const scroll = new BScroll(
      (wrapperRef as React.MutableRefObject<HTMLDivElement>).current,
      {
        observeDOM: true,
        ...options,
      }
    )
    setScrollVal(scroll)
    return () => {
      setScrollVal(null as any)
    }
  }, [options])

  useEffect(() => {
    if (!scrollVal) return
    scrollVal.on('scroll', onScroll as Function)
    return () => {
      scrollVal.off('scroll', onScroll)
    }
  }, [scrollVal, onScroll])

  return (
    <div className={className} ref={wrapperRef} style={style}>
      {children}
    </div>
  )
})

export default Scroll
