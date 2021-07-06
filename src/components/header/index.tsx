import React from 'react'
// import { Route, BrowserRouter } from 'react-router-dom'
import { DivAlias } from './style'

const Header: React.FC = () => (
  <DivAlias>
    <span className='icon'></span>
    <h1 className='text'>Chicken Music</h1>
  </DivAlias>
)

export default Header