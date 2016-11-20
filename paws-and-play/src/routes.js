import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'

import SignIn from './components/signIn'
import SignUp from './components/signUp'
import HomePage from './components/homePage'
import Welcome from './components/welcome'
import UserParksAndSchedule from './components/user_parks_and_schedule'




export default(
  <Route path='/' component={App}>
    <IndexRoute component={Welcome}/>
    <Route path='/signin' component={SignIn}/>
    <Route path='/signup' component={SignUp}/>
    <Route path='/homepage' component={HomePage}/>
    <Route path='/parks_and_schedule' component={UserParksAndSchedule}/>
  </Route>
  )
