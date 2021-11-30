import { useMemo } from 'react'
import { useCallback, useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { SongItem } from '~/pages/album'
import Scroll, { ScrollPos } from '../base/scroll/index'
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
  const history = useHistory()

  const bgImage = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState<number>(0)
  const [maxTranslateY, setMaxTranslateY] = useState<number>(0)
  const [imageHeight, setImageHeight] = useState<number>(0)
  
  useEffect(() => {
    setImageHeight(bgImage.current?.clientHeight || 0)
    setMaxTranslateY(imageHeight - RESERVED_HEIGHT)

    return () => {
      setImageHeight(0)
      setMaxTranslateY(0)
    }
  }, [imageHeight, maxTranslateY])
  
  const bgImageStyle = useMemo(() => {
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

    let scale = 1

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
    console.log(scrollY, imageHeight)
    
    return result
  }, [imageHeight, maxTranslateY, pic, scrollY])

  const playBtnStyle = useMemo(() => {
    let display = ''
    if (scrollY >= maxTranslateY) {
      display = 'none'
    }
    return {
      display,
    }
  }, [maxTranslateY, scrollY])

  const filterStyle = useMemo(() => {
    let blur = 0
    if (scrollY >= 0) {
      blur = Math.min(maxTranslateY / imageHeight, scrollY / imageHeight) * 20
    }
    return {
      backdropFilter: `blur(${blur}px)`,
    }
  }, [imageHeight, maxTranslateY, scrollY])

  const scrollStyle = useMemo(() => {
    const bottom = '0'
    return {
      top: `${imageHeight}px`,
      bottom,
    }
  }, [imageHeight])
  
  const handleGoBack = useCallback(() => {
    history.push('/recommend')
  }, [history])

  const handleRandom = useCallback(() => {
    console.log('random')
  }, [])

  const handleOnScroll = useCallback((pos: ScrollPos) => {
    console.log(pos, scrollY)
    setScrollY(() => -pos.y)
  }, [scrollY])

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
        click={true}
        probeType={3}
        onScroll={handleOnScroll}
        className="list"
        style={scrollStyle}
      >
        <div className="song-list-wrapper">
          <SongList songs={songs}></SongList>
        </div>
      </Scroll>
    </MusicListDivAlias>
  )
}

export default MusicList
