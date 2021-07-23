import { useMemo } from 'react'
import { useCallback, useRef, useState, useEffect } from 'react'
import { SongItem } from '~/pages/album'
import Scroll, { ScrollPos } from '../base/scroll'
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
  const [bgImageStyle, setBgImageStyle] = useState<{ [key: string]: string | number }>({})
  const [scrollY, setScrollY] = useState<number>(0)
  const [imageHeight, setImageHeight] = useState<number>(0)
  const [maxTranslateY, setMaxTranslateY] = useState<number>(0)

  const onScroll = (pos: ScrollPos) => {
    setScrollY(-pos.y)
    console.log(pos)
  }

  const handleGoBack = useCallback(() => {
    console.log('back')
  }, [])

  const handleRandom = useCallback(() => {
    console.log('random')
  }, [])

  const filterStyle = useMemo(() => {
    let blur = 0
    if (scrollY >= 0) {
      blur =
        Math.min(maxTranslateY / imageHeight, scrollY / imageHeight) *
        20
    }
    return {
      backdropFilter: `blur(${blur}px)`,
    }
  }, [scrollY, imageHeight, maxTranslateY])

  const playBtnStyle = useMemo(() => {
    let display = ''
    if (scrollY >= maxTranslateY) {
      display = 'none'
    }
    return { display }
  }, [maxTranslateY, scrollY])
  
  // const initBgImageStyle = useCallback(() => {
  //   let zIndex = 0
  //   let paddingTop = '70%'
  //   let height = '0'
  //   let translateZ = 0
  //   console.log(scrollY)

  //   if (scrollY > maxTranslateY) {
  //     zIndex = 10
  //     paddingTop = '0'
  //     height = `${RESERVED_HEIGHT}px`
  //     translateZ = 1
  //   }

  //   let scale = 1

  //   if (scrollY <= 0) {
  //     scale = 1 + Math.abs(scrollY / imageHeight)
  //   }

  //   let result = {
  //     zIndex,
  //     paddingTop,
  //     height,
  //     backgroundImage: `url(${pic})`,
  //     transform: `scale(${scale})translateZ(${translateZ}px)`,
  //   }

  //   setBgImageStyle(result)
  // }, [imageHeight, maxTranslateY, pic, scrollY])

  const scrollStyle = useMemo(() => {
    const bottom = 0
    return {
      top: `${imageHeight}px`,
      bottom,
    }
  }, [imageHeight])

  const init = useCallback(() => {
    setImageHeight(bgImage.current?.clientHeight || 0)
    setMaxTranslateY(imageHeight - RESERVED_HEIGHT)
    console.log(maxTranslateY)
  }, [imageHeight, maxTranslateY])

  useEffect(() => {
    init()
  }, [init])
  
  useEffect(() => {
    let zIndex = 0
    let paddingTop = '70%'
    let height = '0'
    let translateZ = 0
    console.log(scrollY)

    if (scrollY > maxTranslateY) {
      zIndex = 10
      paddingTop = '0'
      height = `${RESERVED_HEIGHT}px`
      translateZ = 1
    }

    let scale = 1

    if (scrollY <= 0) {
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
    return () => {
      scale = 1
      // setBgImageStyle({
      //   zIndex: 0,
      //   paddingTop: '70%',
      //   height: 0,
      //   scale: 1,
      //   translateZ: 0,
      // })
      zIndex = 0
      paddingTop = '70%'
      height = '0'
      translateZ = 0
      setScrollY(0)
    }
  }, [imageHeight, maxTranslateY, pic, scrollY])

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
      <Scroll
        className="list"
        options={{ click: true, probeType: 3 }}
        style={scrollStyle}
        setScroll={onScroll}
      >
        <div className="song-list-wrapper">
          <SongList songs={songs}></SongList>
        </div>
      </Scroll>
    </MusicListDivAlias>
  )
}

export default MusicList
