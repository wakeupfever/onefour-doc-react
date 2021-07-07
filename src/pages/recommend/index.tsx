import React from 'react'
import { useState, useEffect } from 'react'
import { SlidersItem, Slider } from '~/components/slider'
import { RecommendDivAlias } from './style'

const Recommend: React.FC = (): JSX.Element => {
  const [slider, setSlider] = useState<SlidersItem[]>([])
  const [albums, setAlbums] = useState([])
  
  const init = async() => {
    const { code, result } = await fetch(
      'http://localhost:9002/api/getRecommend'
    ).then((res) => res.json())
    if (code === 0) {
      const { sliders, albums } = result
      setSlider(sliders)
      setAlbums(albums)
    }
  }
  useEffect(() => {
    init()
  }, [])
  console.log(albums)

  return (
    <RecommendDivAlias className="recommend">
      <div className="recommend-content">
        <div>
          <div className="slider-wrapper">
            <div className="slider-content">
              {slider.length && <Slider sliders={slider}></Slider>}
            </div>
          </div>
          <div className="recommend-list">
            <h1 className="list-title">热门歌单推荐</h1>
          </div>
        </div>
      </div>
    </RecommendDivAlias>
  )
}

export default Recommend
