import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { DivAlias } from './style'

const Header: React.FC = () => (
  <DivAlias>
    <span className='icon'></span>
    <h1 className='text'>Chicken Music</h1>
    <BrowserRouter>
      <Route path="/home"></Route>
    </BrowserRouter>
  </DivAlias>
)

export default Header