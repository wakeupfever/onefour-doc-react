import React, { useEffect } from 'react'
import { useState } from 'react'
// import { Route, BrowserRouter } from 'react-router-dom'
import { SliderDivAlias } from './style'

interface SlidersData {
  link: string;
  pic: string
  id: string
}

interface SliderProps {
  sliders: SlidersData[]
}

const Header: React.FC<SliderProps> = ({ sliders }) => {
  // const [sliders, useSliders] = useState<SlidersData[]>([])
  const [currentPageIndex, useCurrentPageIndex] = useState<number>(0)
  console.log(useCurrentPageIndex)
  
  useEffect(() => {
    // useCurrentPageIndex(0)
  }, [sliders])

  return (
    <SliderDivAlias>
      <div className="slider-group">
        {sliders.map((item, index) => (
          <div className="slider-page" key={index}>
            <a href={item.link}>
              <img src={item.pic} alt="test" />
            </a>
          </div>
        ))}
        <div className="dots-wrapper">
          <span className="dot"></span>
          {sliders.map((item, index) => (
            <span
              key={index}
              className={currentPageIndex === index ? 'active' : ''}
            ></span>
          ))}
        </div>
      </div>
    </SliderDivAlias>
  )
}

export default Header
