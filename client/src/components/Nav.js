// import React from 'react'

// export default function Nav() {
//   return (
//     <div className="nav">
//       <h1>Weather Destination</h1>
//     </div>
//   )
// }
import React, { Component } from 'react'
import { Button } from '@material-ui/core'


export default class Nav extends Component {

  logout = (e) => {
    e.preventDefault()
    document.cookie = 'id_token= ;expires=Thu, 01 Jan 1970 00:00:01 GMT'
    window.location.reload();
  }
  
  render() {
    console.log('the logout', document.cookie.indexOf('id_token'))
    if(document.cookie.indexOf('id_token')===0){
      return (
        <div className="nav">
          <div className="title">
            <h1>Weather Destination</h1>
          </div>
          <div className="logoutButton">
            <Button onClick={this.logout}>Logout</Button>
          </div>
        </div>
      )
    }else{
      return (
        <div className="navBeforeLogin">
          <h1>Weather Destination</h1>
        </div>
      )
    }
    
  }
}
