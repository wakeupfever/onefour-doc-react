import React, { useState, useEffect, useCallback } from 'react'
import storage from 'good-storage'
import { useHistory } from 'react-router-dom'
import { ALBUM_KEY } from '~/assets/ts/constant'
import { SlidersItem, Slider } from '~/components/slider'
import Scroll from '~/components/base/scroll'
import { RecommendDivAlias } from './style'

interface AlbumsItem {
  [key: string]: string
}

const Recommend: React.FC = ({ children }): JSX.Element => {
  const [slider, setSlider] = useState<SlidersItem[]>([])
  const [albums, setAlbums] = useState<AlbumsItem[]>([])
  const [scrollInfo, setScrollInfo] = useState<number>(0)
  const history = useHistory()
  console.log(scrollInfo)
  
  const init = async () => {
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
  
  const handleCacheAlbum = useCallback((album) => {
    storage.session.set(ALBUM_KEY, album)
  }, [])

  const handleSelectItem = useCallback(
    (album) => {
      console.log(album)
      handleCacheAlbum(album)
      history.replace(`recommend/${album.id}`)
    },
    [handleCacheAlbum, history]
  )

  return (
    <RecommendDivAlias className="recommend">
      <Scroll setScroll={setScrollInfo} className="recommend-content">
        <div>
          <div className="slider-wrapper">
            <div className="slider-content">
              {slider.length ? <Slider sliders={slider}></Slider> : null}
            </div>
          </div>
          <div className="recommend-list">
            <h1 className="list-title">热门歌单推荐</h1>
            <ul>
              {albums.length
                ? albums.map((item) => (
                  <li
                    className="item"
                    onClick={() => handleSelectItem(item)}
                    key={item.id}
                  >
                    <div className="icon">
                      <img width="60" height="60" src={item.pic} alt="test" />
                    </div>
                    <div className="text">
                      <h2 className="name">{item.username}</h2>
                      <p className="title">{item.title}</p>
                    </div>
                  </li>
                ))
                : null}
            </ul>
          </div>
        </div>
        {children}
      </Scroll>
    </RecommendDivAlias>
  )
}

export default Recommend
