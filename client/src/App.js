import React, {Component} from 'react';
import cookie from 'cookie'
import jwt from 'jsonwebtoken'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import store from './store';
import Router from './router'
import { setUser } from './actions/actions'
// import Nav from './components/Nav';
// import WeatherContainer from './containers/WeatherContainer';
// import DisplayContainer from './containers/DisplayContainer';
// import PreviousWeatherContainer from './containers/PreviousWeatherContainer';

class App extends Component {
    componentDidMount() {
      const cookies = cookie.parse(document.cookie)
      if (cookies.id_token) {
        const payload = jwt.verify(cookies.id_token, 'secret')
        this.props.setUser(payload._doc)
      }
    }
  render() {
    // <div className="App">
    return(
      <BrowserRouter>
      <Provider store={store}>
        {/* <GlobalStyle /> */}
        <Router />
      </Provider>
    </BrowserRouter>
    )
   
 
    }
}


const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(null, mapDispatchToProps)(App);
