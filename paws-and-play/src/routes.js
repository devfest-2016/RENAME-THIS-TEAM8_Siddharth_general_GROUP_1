import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'

import Login from './components/login'
import Signup from './components/signUp'
import HomePage from './components/homePage'
import Welcome from './components/welcome'



export default(
  <Route path='/' component={App}>
    <IndexRoute component={Welcome}/>

    <Route path='/login' component={Login}/>
    <Route path='/signup' component={Signup}/>

    <Route path='/homepage' component={HomePage}/>
  </Route>
  )
