import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import { hasSearched } from '../actions/actions';

export default class Weather extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      city: '',
      inputValue: ' ',
      temp: '',
      searchTerm: ""
    }
  }
handlePost = (id) =>{
  console.log('user in weather', this.props)
  fetch(`api/city/${id}`, { method: 'Post' })
  .then(res => res.json()).then((res) => {
  });
}
postData = (url = '', data = {}) => {
  this.props.user.cities.push(this.state.searchTerm)
  console.log('whatsthisnoisenow', this.props.user.cities, this.props.user)
  this.props.updateUser(this.props.user, this.props.user.cities)
  console.log('whatsthisnoisenow', this.props.user.cities, this.props)
  // console.log('user in weather', this.props)
  //   return fetch(url, {
  //       method: 'POST', 
  //       mode: 'cors', 
  //       cache: 'no-cache',
  //       credentials: 'same-origin',
  //       headers: {
  //           'Content-Type': 'application/json',
  //       },
  //       redirect: 'follow', 
  //       referrer: 'no-referrer',
  //       body: JSON.stringify(data),
  //   })
  //   .then(response => response.json());
}
  render() {
    return (
     
      <div className="Weather">
        <h2>Search for a city...</h2>
        <div id="search" className="Search">
          <Input 
            onChange={(e)=>{this.setState({searchTerm: e.target.value})}} onKeyUp={
              (e) => {
                if (this.props.loadTime && e.key === "Enter" && this.state.searchTerm) {
                  this.postData('/api/city', {city: this.state.searchTerm}) //posts the searched city to the database
                    // .then(data => console.log(JSON.stringify(data))) 
                    // .catch(error => console.error(error));                  
                  this.props.loadTime(this.state.searchTerm);//pulls the travel time and weather data from the APIs
                  this.props.hasSearched(true); //lets the rest of the document know that the user has searched a city
                }
              }
            } 
            type="search" 
            placeholder="Your destination..." />
        </div>
      </div>
      
    )
  }
}
