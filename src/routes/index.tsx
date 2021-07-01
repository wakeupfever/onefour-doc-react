import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import asyncComponent from '../assets/ts/asyncComponent'

const Recommend = asyncComponent(() => import('../pages/recommend/index'))

export default class RouteConfig extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Recommend}></Route>
          <Route path="/recommend" component={Recommend}></Route>
        </Switch>
      </HashRouter>
    )
  }
}