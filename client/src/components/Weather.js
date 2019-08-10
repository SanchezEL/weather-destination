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
  fetch(`api/city/${id}`, { method: 'Post' })
  .then(res => res.json()).then((res) => {
  });
}
postData = (url = '', data = {}) => {
  // Default options are marked with *
    return fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', 
        referrer: 'no-referrer',
        body: JSON.stringify(data),
    })
    .then(response => response.json());
}
  render() {
    return (
     
      <div className="Weather">
        <h2>Search for a city...</h2>
        <div id="search" className="Search">
          <Input 
            onChange={(e)=>{this.setState({searchTerm: e.target.value})}} onKeyUp={
              (e) => {
                // this.handlePost(this.state.searchTerm)
                if (this.props.loadTime && e.key === "Enter" && this.state.searchTerm) {
                  this.postData('/api/city', {city: this.state.searchTerm})
                    .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
                    .catch(error => console.error(error));                  
                  this.props.loadTime(this.state.searchTerm);
                  this.props.hasSearched(true);
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
