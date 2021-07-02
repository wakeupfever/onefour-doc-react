import { Route, BrowserRouter } from 'react-router-dom'
import { DivAlias } from './style'

const Header = () => (
  <DivAlias>
    <span className='icon'></span>
    <h1 className='text'>Chicken Music</h1>
    <BrowserRouter>
      <Route path="/home">test</Route>
    </BrowserRouter>
  </DivAlias>
)

export default Header