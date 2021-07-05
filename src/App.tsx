
import { lazy, Suspense } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '~/assets/styles'

const Recommend = lazy(() => import('~/pages/recommend/index'))
const Header = lazy(() => import('~/components/header/index'))
const Tab = lazy(() => import('~/components/tab/index'))

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>loading...</div>}>
          <Header />
          <Tab />
          <HashRouter>
            <Switch>
              <Route path="/" component={Recommend} />
              <Route path="/recommend" component={Recommend} />
            </Switch>
          </HashRouter>
        </Suspense>
      </ThemeProvider>
    </div>
  )
}

export default App
