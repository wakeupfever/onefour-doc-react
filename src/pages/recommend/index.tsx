import React, { useState, useEffect, useCallback } from 'react'
import storage from 'good-storage'
import { useHistory, useLocation } from 'react-router-dom'
import { ALBUM_KEY } from '~/assets/ts/constant'
import { SlidersItem, Slider } from '~/components/slider'
import Scroll from '~/components/base/scroll'
import { RecommendDivAlias } from './style'
import { getRecommend } from '~/api/all'

export interface AlbumsItem {
  [key: string]: string
}

const Recommend: React.FC = (): JSX.Element => {
  const [slider, setSlider] = useState<SlidersItem[]>([])
  const [albums, setAlbums] = useState<AlbumsItem[]>([])
  // const [scrollInfo, setScrollInfo] = useState<number>(0)
  const history = useHistory()
  const params = useLocation()
  // console.log(scrollInfo)
  
  /** 
   * @type {*}
   * @description 初始化 
   */
  const init = useCallback(async () => {
    if (params.pathname === '/') {
      history.replace('/recommend')
      return
    }
    const { sliders, albums } = await getRecommend()
    setSlider(sliders)
    setAlbums(albums)
  }, [params, history])
  
  /** 
   * @type {*}
   * @description 缓存当前激活内容
   */
  const handleCacheAlbum = useCallback((album) => {
    storage.session.set(ALBUM_KEY, album)
  }, [])

  /** 
   * @type {*}
   * @description 跳转选项
   */
  const handleSelectItem = useCallback(
    (album) => {
      console.log(album)
      handleCacheAlbum(album)
      history.replace(`recommend/${album.id}`)
    },
    [handleCacheAlbum, history]
  )

  useEffect(() => {
    init()
  }, [init])

  return (
    <RecommendDivAlias className="recommend">
      <Scroll click={true} probeType={3} className="recommend-content">
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
      </Scroll>
    </RecommendDivAlias>
  )
}

export default Recommend
