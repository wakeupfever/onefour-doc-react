
import { lazy, Suspense } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

const Recommend = lazy(() => import('./pages/recommend/index'))
const Header = lazy(() => import('./components/header/index'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Header />
        <HashRouter>
          <Switch>
            <Route path="/" component={Recommend} />
            <Route path="/recommend" component={Recommend} />
          </Switch>
        </HashRouter>
      </Suspense>
    </div>
  )
}

export default App
