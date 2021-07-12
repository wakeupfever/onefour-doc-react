import { useCallback, useRef, useState } from 'react'
import Scroll from '../base/scroll'
import SongList from '../base/songList'
import { MusicListDivAlias } from './style'

interface MusicListProps {
  title: string
  songs: []
  rank: boolean
}

const MusicList: React.FC<MusicListProps> = ({ title, songs, rank }) => {
  const bgImage = useRef<HTMLDivElement>(null)
  const [bgImageStyle] = useState(undefined)
  const [playBtnStyle] = useState(undefined)
  const [filterStyle] = useState(undefined)
  const [scrollStyle] = useState(undefined)
  const onScroll = useCallback(() => {
    console.log('onscroll')
  }, [])
  const handleGoBack = useCallback(() => {
    console.log('back')
  }, [])
  const handleRandom = useCallback(() => {
    console.log('random')
  }, [])
  return (
    <MusicListDivAlias>
      <div className="back" onClick={handleGoBack}>
        <i className="icon-black"></i>
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
          <SongList songs={songs} rank={rank}></SongList>
        </div>
      </Scroll>
    </MusicListDivAlias>
  )
}

export default MusicList
