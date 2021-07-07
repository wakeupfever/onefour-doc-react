import React, { useRef } from 'react'
import { SliderDivAlias } from './style'
import useSlider from './useSlider'

export interface SlidersItem {
  link: string;
  pic: string
  id: string
}

interface SliderProps {
  sliders: SlidersItem[]
}

export const Slider: React.FC<SliderProps> = ({ sliders }) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const [currentPageIndex] = useSlider(rootRef)
  return (
    <SliderDivAlias ref={rootRef}>
      <div className="slider-group">
        {sliders.map((item, index) => (
          <div className="slider-page" key={index}>
            <a href={item.link}>
              <img src={item.pic} alt="test" />
            </a>
          </div>
        ))}
      </div>
      <div className="dots-wrapper">
        {sliders.map((item, index) => (
          <span
            key={index}
            className={[currentPageIndex === index ? 'active' : '', 'dot'].join(' ')}
          ></span>
        ))}
      </div>
    </SliderDivAlias>
  )
}

export default Slider
