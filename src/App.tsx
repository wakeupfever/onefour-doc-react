
import { lazy, Suspense } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

const Recommend = lazy(() => import('./pages/recommend/index'))
const Header = lazy(() => import('./components/header/index'))

const theme = {
  // 颜色定义规范
  $colorBackground: '#222',
  $colorBackgroundD: 'rgba(0, 0, 0, 0.3)',
  $colorHighlightBackground: '#333',
  $colorDialogBackground: '#666',
  $colorTheme: '#ffcd32',
  $colorThemeD: 'gba(255, 205, 49, 0.5)',
  $colorSubTheme: '#d93f30',
  $colorText: '#fff',
  $colorTextD: 'rgba(255, 255, 255, 0.3)',
  $colorTextL: 'rgba(255, 255, 255, 0.5)',
  $colorTextLl: 'rgba(255, 255, 255, 0.8)',

  // 字体定义规范
  $fontSizeSmallS: '10px',
  $fontSizeSmall: '12px',
  $fontSizeMedium: '14px',
  $fontSizeMediumX: '16px',
  $fontSizeLarge: '18px',
  $fontSizeLargeX: '22px',

  // 基础功能

  // $bgImage: ($url: string) => {
  //   return {
  //     backgroundImage: url($url + '@2x.png')
  //   }
  // }
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>loading...</div>}>
          <Header />
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
