import React, { useCallback, useEffect, useState } from 'react'
import storage from 'good-storage'
import { getSingerList } from '~/api/all'
import { SINGER_KEY } from '~/assets/ts/constant'
import { SingerDivAlias } from './style'
import IndexList from '~/components/indexList'

export interface SingerItemGroupItem { pic: string, name: string, id: string | number, mid: string }
export interface SingerItem { title: string, list: SingerItemGroupItem[] }

const Singer: React.FC = (): JSX.Element => {
  const [singers, setSingers] = useState<SingerItem[]>([])
  const [selectedSinger, setSelectedSinger] = useState<SingerItem>()

  const init = useCallback(async () => {
    const { singers } = await getSingerList()
    setSingers(singers)
  }, [])

  useEffect(() => {
    init()
  }, [init])

  const selectSinger = useCallback(
    (singer: SingerItem) => {
      setSelectedSinger(() => ({ ...selectedSinger, ...singer }))
    },
    [selectedSinger]
  )

  const cacheSinger = useCallback((singer: SingerItem) => {
    storage.session.set(SINGER_KEY, singer)
  }, [])

  return (
    <SingerDivAlias className="singer">
      <IndexList data={singers}></IndexList>
    </SingerDivAlias>
  )
}

export default Singer