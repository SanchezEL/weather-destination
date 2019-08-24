import React from 'react'
import { Route, Switch } from 'react-router'
import { Redirect } from 'react-router-dom'
import cookie from 'cookie'
import jwt from 'jsonwebtoken'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'


let loggedInUser = null;
const isAuth = (props) => {
  const cookies = cookie.parse(document.cookie)
  if (cookies.id_token){
    props.user = jwt.decode(cookies.id_token)
    return true
  } 
  return false
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuth(props) == true
      ? <Component { ...props} />
      : <Redirect to='/' />
  )} />
)

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
)

export default Router