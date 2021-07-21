import { SongItem } from '~/pages/album'
import { SongListUlAlias } from './style'

interface SongListProps {
  songs: SongItem[];
  rank?: boolean;
}

const SongList: React.FC<SongListProps> = ({ songs, rank = false }) => {
  return (
    <SongListUlAlias className="song-list">
      {songs.map((item: SongItem, index: number) => (
        <li className="item" key={index}>
          {rank ? (
            <div className="rank">
              <span className="text"></span>
            </div>
          ) : null}
          <div className="content" key={index}>
            <h2 className="name">{item.name}</h2>
            <p className="desc">{`${item.singer}·${item.album}`}</p>
          </div>
        </li>
      ))}
    </SongListUlAlias>
  )
}

export default SongList
