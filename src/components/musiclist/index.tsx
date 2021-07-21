import { useCallback, useRef, useState, useEffect } from 'react'
import { SongItem } from '~/pages/album'
import Scroll from '../base/scroll'
import SongList from '../base/songList'
import { MusicListDivAlias } from './style'

interface MusicListProps {
  songs: SongItem[];
  title: string;
  pic: string;
  noResultText?: string;
  rank?: boolean;
}
const RESERVED_HEIGHT = 40

const MusicList: React.FC<MusicListProps> = ({ title, songs, pic }) => {
  const bgImage = useRef<HTMLDivElement>(null)
  const [imageHeight, setImageHeight] = useState<number>(0)
  const [maxTranslateY, setMaxTranslateY] = useState<number>(0)
  const [scrollY] = useState<number>(0)
  const [bgImageStyle, setBgImageStyle] = useState<{ [key: string]: string | number }>({})
  const [playBtnStyle] = useState(undefined)
  const [filterStyle] = useState(undefined)
  const [scrollStyle, setScrollStyle] = useState<{ [key: string]: string | number }>({})

  const onScroll = useCallback(() => {
    console.log('onscroll')
  }, [])

  const handleGoBack = useCallback(() => {
    console.log('back')
  }, [])

  const handleRandom = useCallback(() => {
    console.log('random')
  }, [])

  /** 
   * @type {*}
   * @description 初始化详情列表 style
   */
  const initScrollStyle = useCallback(() => {
    const bottom = 0
    setScrollStyle({
      top: `${imageHeight}px`,
      bottom
    })
  }, [imageHeight])

  /** 
   * @type {*}
   * @description 初始化 header 
   */
  const initBgImageStyle = useCallback(() => {
    let zIndex = 0
    let paddingTop = '70%'
    let height = '0'
    let translateZ = 0

    if (scrollY > maxTranslateY) {
      zIndex = 10
      paddingTop = '0'
      height = `${RESERVED_HEIGHT}px`
      translateZ = 1
    }

    let scale  = 1

    if (scrollY < 0) {
      scale = 1 + Math.abs(scrollY / imageHeight)
    }

    let result = {
      zIndex,
      paddingTop,
      height,
      backgroundImage: `url(${pic})`,
      transform: `scale(${scale})translateZ(${translateZ}px)`,
    }

    setBgImageStyle(result)
  }, [scrollY, maxTranslateY, pic, imageHeight])

  /** 
   * @type {*}
   * @description 初始化
   */
  const init = useCallback(() => {
    setImageHeight(bgImage.current?.clientHeight || 0)
    setMaxTranslateY(imageHeight - RESERVED_HEIGHT)
  }, [bgImage, imageHeight])

  useEffect(() => {
    init()
    initBgImageStyle()
    initScrollStyle()
  }, [init, initBgImageStyle, initScrollStyle])

  return (
    <MusicListDivAlias>
      <div className="back" onClick={handleGoBack}>
        <i className="icon-back"></i>
      </div>
      <h1 className="title">{title}</h1>
      <div className="bg-image" style={bgImageStyle} ref={bgImage}>
        <div className="play-btn-wrapper" style={playBtnStyle}>
          {songs.length > 0 ? (
            <div className="play-btn" onClick={handleRandom}>
              <i className="icon-play"></i>
              <span className="text">随机播放全部</span>
            </div>
          ) : null}
        </div>
        <div className="filter" style={filterStyle}></div>
      </div>
      <Scroll className="list" style={scrollStyle} setScroll={onScroll}>
        <div className="song-list-wrapper">
          <SongList songs={songs}></SongList>
        </div>
      </Scroll>
    </MusicListDivAlias>
  )
}

export default MusicList
