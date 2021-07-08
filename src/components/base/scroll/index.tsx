import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
import React, { useRef, useEffect } from 'react'

interface ScrollProps {
  options?: {
    click: boolean
    probeType: number
  }
  className: string
  setScroll: Function
}

BScroll.use(ObserveDOM)

const Scroll: React.FC<ScrollProps> = ({ options = { click: true, probeType: 0 }, setScroll, className = 'recommend-content', children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const scrollVal: BScrollConstructor = new BScroll(
      (wrapperRef as React.MutableRefObject<HTMLDivElement>).current,
      {
        observeDOM: true,
        ...options,
      }
    )
    if (options.probeType > 0) {
      scrollVal?.on('scroll', (pos: any) => {
        setScroll(pos)
        console.log(pos)
      })
    }
    return () => {
      scrollVal?.destroy()
    }
  })

  return (
    <div className={className} ref={wrapperRef}>
      {children}
    </div>
  )
}

export default Scroll
