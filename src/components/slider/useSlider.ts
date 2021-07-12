import BScroll from '@better-scroll/core'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
import Slide from '@better-scroll/slide'
import { useState, useEffect } from 'react'

BScroll.use(Slide)

const useSlider = (wrapperRef: unknown) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0)

  useEffect(() => {
    const sliderVal: BScrollConstructor = new BScroll((wrapperRef as React.MutableRefObject<HTMLDivElement>).current, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: true
    })
    
    sliderVal?.on('slideWillChange', (page: any) => {
      setCurrentPageIndex(page.pageX)
    })
    return () => {
      sliderVal?.destroy()
    }
  }, [wrapperRef])

  return [currentPageIndex]
}

export default useSlider