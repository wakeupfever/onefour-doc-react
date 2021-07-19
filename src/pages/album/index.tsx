import storage from 'good-storage'
import { ALBUM_KEY } from '~/assets/ts/constant'
import { AlbumDivAlias } from './style'
import { useCallback, useEffect, useState } from 'react'
import { AlbumsItem } from '../recommend'

const Album: React.FC = () => {
  // const [songs, setSongs] = useState([])
  const [cached, setCached] = useState<AlbumsItem>({
    id: '',
    pic: '',
    title: '',
    username: ''
  })
  const init = useCallback(() => {
    const cachedVal: AlbumsItem = storage.session.get(ALBUM_KEY)
    return cachedVal
  }, [])

  useEffect(() => {
    const cached = init()
    setCached(cached)
  }, [init])
  
  console.log(cached)
  return (
    <AlbumDivAlias>
      <span>{cached.id}</span>
    </AlbumDivAlias>
  )
}

export default Album