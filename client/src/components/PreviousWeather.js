import React, { Component } from 'react';
import 'whatwg-fetch';
import Button from '@material-ui/core/Button'
import { load } from '@oclif/config';

class PreviousWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      temps: [],
      loaded: false,
      start: false
    };
  }

  componentDidUpdate(prevProps) {
    console.log('did it update?', this.props, this.state)
    if(this.props.user.cities !== undefined){
      console.log(this.props.user.cities.length, this.state.data.length)
    }
    console.log(this.props.user.cities && (this.props.user.cities.length !== this.state.data.length))
    if(this.props.user.cities && (this.props.user.cities.length !== this.state.data.length)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
      this.loadCitiesFromServer();
    }
  } 
  mapTimeToWeather() {
    console.log('is it mapping', this.state.data)
    this.state.data.map(city =>{
      console.log(city)
      this.props.loadTime(city)
      console.log(this.props.weather, 'nerf')
    })
    console.log(this.state.data)
  }

  loadCitiesFromServer = () => {
    let newData = []
    if(this.props.user.cities){
      console.log('the props in prevWeather are: ', this.props)
      this.props.user.cities.map((item,i)=>{
        console.log('whats that item', item)
        newData[i] =(item)
      })
      newData.map(city =>{
        console.log(city)
        this.props.loadTime(city)
        console.log(this.props.weather, 'nerf')
      })
      console.log('newdata',newData)
      this.setState({ data: newData })
      console.log('kachow',this.state.data)
      this.mapTimeToWeather()
    }
    // finds the cities already in the database and find the time it will take to get there and the weather
  }
  handleDelete = (id) =>{
    const i = this.state.data.findIndex(city => city._id === id);
    const newData = [
      ...this.state.data.slice(0, i),
      ...this.state.data.slice(i + 1),
    ];
    this.setState({ data: newData})
    console.log(this.state.data)
    console.log(id, 'being deleted')
    fetch(`api/city/${id}`, { method: 'DELETE' })
    .then(res => res.json()).then((res) => {
      if (!res.success) this.setState({ error: res.error });
    });
  }

  render() {
    console.log(this.state.data, 'help me with backend', this.props.weather, this.props.weather[1])
    
    // if(this.props.searched){
    //   start = 1;
    // }
    //won't display unless there is already one city in the database
    if((this.props.weather.length >= this.state.data.length && this.props.weather.length>=1) && !(this.props.searched && this.props.weather.length ===1)){
      return (
        <div className="prev-container">
          <div className="prev-cities">
            <h2>Previous Cities:</h2>
            <ul>
              {this.state.data.map((city,i) =>{
                console.log(this.props.weather.length, this.props.weather, 'what the heck', i)
                if(i<4){
                  return(
                    <li key={i}>
                      <p><b>{city.toUpperCase()}:</b></p>
                      <p>It will be {Math.round((((this.props.weather[this.props.weather.length-1-i].main.temp) - 273.15) * (9/5) + 32 ))}°F with {this.props.weather[0].weather[0].description} at the estimated time of arrival...</p>
                      <Button id={city._id} color="primary" onClick={() =>{this.handleDelete(city._id)}}>remove</Button>
                    </li>
                  )
                }
            })}
            </ul>
          </div>
        </div>
      );
    }else{
      return(
        <div className="prev-container">
          
        </div>
      )
    }
   
  }
}

export default PreviousWeather;