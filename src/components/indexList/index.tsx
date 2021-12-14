import { forwardRef, useEffect, useImperativeHandle } from 'react'
import { SingerItem, SingerItemGroupItem } from '~/pages/singer'
import { IndexListDivAlias } from './style'
import { useFixed } from './useFixed'
import { useShortcut } from './useShortcut'
import { ScrollProps } from '../base/scroll'

interface IndexListProps {
  data: SingerItem[]
}

export interface CustomUseProps extends IndexListProps {}

const ForwardRefIndexListDivAlias = forwardRef<HTMLDivElement, ScrollProps>(
  (props, ref) => (
    <IndexListDivAlias {...props} shortRef={ref}></IndexListDivAlias>
  )
)

const IndexList: React.FC<IndexListProps> = ({ data }) => {
  const { groupRef, onScroll, fixedTitle, fixedStyle, currentIndex } = useFixed({ data })
  const { shortcutList, scrollRef, onShortcutTouchStart, onShortcutTouchMove } = useShortcut({ data }, groupRef)
  
  useEffect(() => {
    console.log(scrollRef)
  }, [fixedTitle, scrollRef])

  return (
    <ForwardRefIndexListDivAlias
      className="index-list"
      probeType={3}
      ref={scrollRef}
      onScroll={onScroll}
    >
      <ul ref={groupRef}>
        {data.map((group: SingerItem) => (
          <li className="group" key={group.title}>
            <h2 className="title">{group.title}</h2>
            <ul>
              {group.list.map((item: SingerItemGroupItem) => (
                <li className="item" key={item.id}>
                  <img src={item.pic} className="avatar" alt="avatar" />
                  <span className="name">{item.name}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div
        className="fixed"
        style={{ ...fixedStyle, display: fixedTitle ? 'block' : 'none' }}
      >
        <div className="fixed-title">{fixedTitle}</div>
      </div>
      <div
        className="shortcut"
        onTouchStart={onShortcutTouchStart}
        onTouchMove={onShortcutTouchMove}
      >
        <ul>
          {shortcutList.map((item, index) => (
            <li
              key={index}
              data-index={index}
              className={[
                'item',
                currentIndex.current === index ? 'current' : '',
              ].join('')}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </ForwardRefIndexListDivAlias>
  )
}

export default IndexList
