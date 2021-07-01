
import { lazy, Suspense } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import './assets/scss/App.scss'

const Recommend = lazy(() => import('./pages/recommend/index'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <HashRouter>
          <Switch>
            <Route path="/recommend" component={Recommend}>
            </Route>
          </Switch>
        </HashRouter>
      </Suspense>
    </div>
  )
}

export default App
