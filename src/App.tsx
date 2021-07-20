
import { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '~/assets/styles'

const Header = lazy(() => import('~/components/header/index'))

const Recommend = lazy(() => import('~/pages/recommend/index'))
const Album = lazy(() => import('~/pages/album/index'))
const Search = lazy(() => import('~/pages/search/index'))
const Singer = lazy(() => import('~/pages/singer/index'))
const TopList = lazy(() => import('~/pages/topList/index'))

interface Tabs {
  name: string
  path: string
}

export const DivAlias = styled.div`
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: ${(props: any) => props.theme.$fontSizeMedium};

  .tab-item {
    flex: 1;
    text-align: center;

    .tab-link {
      padding-bottom: 5px;
      color: ${(props: any) => props.theme.$colorTextL};
    }

    .router-link-active {
      color: ${(props: any) => props.theme.$colorTheme};
      border-bottom: 2px solid ${(props: any) => props.theme.$colorTheme};
    }
  }
`

const App: React.FC = () => {
  const tabs: Tabs[] = [
    {
      name: '推荐',
      path: '/recommend',
    },
    {
      name: '歌手',
      path: '/singer',
    },
    {
      name: '排行',
      path: '/top-list',
    },
    {
      name: '搜索',
      path: '/search',
    },
  ]
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>loading...</div>}>
          <Header />
          <BrowserRouter>
            <DivAlias>
              {tabs.map((item) => (
                <div className="tab-item" key={item.name}>
                  <NavLink
                    activeClassName="router-link-active"
                    className="tab-link"
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </div>
              ))}
            </DivAlias>
            <Switch>
              <Route exact path="/">
                <Recommend></Recommend>
              </Route>
              <Route exact path="/recommend">
                <Recommend></Recommend>
              </Route>
              <Route path="/recommend/:id">
                <Album></Album>
              </Route>
              <Route path="/search">
                <Search></Search>
              </Route>
              <Route path="/singer">
                <Singer></Singer>
              </Route>
              <Route path="/top-list">
                <TopList></TopList>
              </Route>
            </Switch>
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </div>
  )
}

export default App
