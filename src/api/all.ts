import { SongItem } from '~/pages/album'
import { get } from './base'

export const getRecommend = () => get('/api/getRecommend')

export const getAlbum = (id: string) => get('/api/getAlbum', { id })

export const processSongs = (songs: SongItem[]) => {
  if (!songs.length) {
    return Promise.resolve(songs)
  }

  return get('/api/getSongsUrl', {
    mid: songs.map((song: SongItem) => {
      return song.mid
    })
  }).then((result) => {
    const map = result.map
    return songs.map((song: SongItem) => {
      song.url = map[song.mid]
      return song
    }).filter((song: SongItem) => {
      return song.url && song.url.indexOf('vkey') > -1
    })
  })
} 

export const getSingerList = () => get('/api/getSingerList')

export const getSingerDetail = ({ mid }: { [key: string]: string | number }) => get('/api/getSingerDetail', { mid })