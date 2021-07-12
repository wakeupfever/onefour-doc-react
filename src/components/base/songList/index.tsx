import { SongListDivAlias } from './style'

interface SongListProps {
  songs: [];
  rank: boolean;
}

const SongList: React.FC<SongListProps> = ({ songs, rank }) => {
  console.log(songs)
  console.log(rank)
  return <SongListDivAlias></SongListDivAlias>
}

export default SongList