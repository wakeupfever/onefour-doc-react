import storage from 'good-storage'
import { ALBUM_KEY } from '~/assets/ts/constant'
import { AlbumDivAlias } from './style'
import { useCallback, useEffect, useState } from 'react'
import { AlbumsItem } from '../recommend'
import { getAlbum, processSongs } from '~/api/all'
import MusicList from '~/components/musicList'

export interface SongItem {
  [key: string]: string;
}

const Album: React.FC = () => {
  const [songs, setSongs] = useState<SongItem[]>([])
  const [cached, setCached] = useState<AlbumsItem>({
    id: '',
    pic: '',
    title: '',
    username: '',
  })
  const init = useCallback(async () => {
    const cachedVal: AlbumsItem = storage.session.get(ALBUM_KEY)
    setCached(cachedVal)

    const result = await getAlbum(cachedVal.id)
    const _songs = await processSongs(result.songs)
    console.log(_songs)
    setSongs(_songs)
  }, [])

  useEffect(() => {
    init()
  }, [init])

  return (
    <AlbumDivAlias>
      {songs.length ? (
        <MusicList
          title={cached.title}
          pic={cached.pic}
          songs={songs}
        ></MusicList>
      ) : null}
    </AlbumDivAlias>
  )
}

export default Album
