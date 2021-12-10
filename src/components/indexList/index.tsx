import { useCallback, useRef } from 'react'
import { SingerItem, SingerItemGroupItem } from '~/pages/singer'
import { IndexListDivAlias } from './style'
import { useFixed } from './useFixed'

interface IndexListProps {
  data: SingerItem[]
}

const IndexList: React.FC<IndexListProps> = ({ data }) => {
  const groupRef = useRef<HTMLUListElement>(null)
  const scrollRef = useRef<HTMLElement>(null)

  const handleOnScroll = useCallback(() => {
  }, [])

  const { fixedTitle } = useFixed({ data })
  console.log(fixedTitle)
  return (
    <IndexListDivAlias
      className="index-list"
      probeType={3}
      onScroll={handleOnScroll}
      ref={scrollRef}
    >
      <ul ref={groupRef}>
        {data.map((group: SingerItem) => (
          <li className="group">
            <h2 className="title">{group.title}</h2>
            <ul>
              {group.list.map((item: SingerItemGroupItem) => (
                <li className="item">
                  <img src={item.pic} className="avatar" alt="avatar" />
                  <span className="name">{item.name}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="fixed"></div>
    </IndexListDivAlias>
  )
}

export default IndexList
