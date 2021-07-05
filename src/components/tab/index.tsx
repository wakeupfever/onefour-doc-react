import React from 'react'
import { DivAlias } from './style'

interface Tabs {
  name: string
  path: string
}

const Tab: React.FC = () => {
  const tabs: Tabs[] = [
    {
      name: '推荐',
      path: '/recommend'
    },
    {
      name: '歌手',
      path: '/singer'
    },
    {
      name: '排行',
      path: '/top-list'
    },
    {
      name: '搜索',
      path: '/search'
    }
  ]
  return (<DivAlias>
    {
      tabs.map((item) => <div className='tab-item' key={item.name}>
        <span className='tab-link'>{item.name}</span>
      </div>)
    }
  </DivAlias>)
}

export default Tab