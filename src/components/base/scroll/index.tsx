import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
import React, { useRef, useEffect, useState } from 'react'

export interface ScrollPos {
  x: number;
  y: number;
}

interface ScrollProps {
  className: string;
  click?: true;
  probeType: number;
  style?: { [key: string]: string | number };
  onScroll?: Function;
}

BScroll.use(ObserveDOM)

const Scroll: React.FC<ScrollProps> = ({
  click,
  probeType,
  onScroll,
  className,
  style,
  children,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [scrollVal, setScrollVal] = useState<BScrollConstructor>()
  useEffect(() => {
    const scroll = new BScroll(
      (wrapperRef as React.MutableRefObject<HTMLDivElement>).current,
      {
        observeDOM: true,
        click,
        probeType,
      }
    )
    setScrollVal(scroll)
    return () => {
      setScrollVal(undefined)
    }
  }, [click, probeType])

  useEffect(() => {
    if (!scrollVal) return
    scrollVal.on('scroll', onScroll as Function)
    return () => {
      scrollVal.off('scroll', onScroll)
    }
  }, [scrollVal, onScroll])

  return (
    <div className={className} style={style} ref={wrapperRef}>
      {children}
    </div>
  )
}

export default Scroll
