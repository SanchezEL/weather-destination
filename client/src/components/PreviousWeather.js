import React, { Component } from 'react';
import 'whatwg-fetch';
import Button from '@material-ui/core/Button'

class PreviousWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      temps: [],
      loaded: false
    };
  }

  componentDidMount() {
    this.loadCitiesFromServer();
    console.log('anything')
    this.state.data.map(city =>{
      this.props.loadTime(city.city)
      console.log(this.props.weather, 'nerf')
    })
    console.log(this.state.data)
  }


  loadCitiesFromServer = () => {
    console.log('the props in prevWeather are: ', this.props)
    fetch('/api/city/')
      .then(data =>  data.json())
      .then((res) => {
          this.setState({ data: res.data });
          this.state.data.map(city => {
            this.props.loadTime(city.city)
          })
          this.setState({loaded: true})
          console.log(this.state.loaded, this.state.data, 'state data')

      })
      .catch(function(error) {                        
        console.log('Request failed', error);
      });
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
    var start = 0
    if(this.props.searched){
      start = 1;
    }
    if((this.props.weather.length >= this.state.data.length && this.props.weather.length>=1) && !(this.props.searched && this.props.weather.length ===1)){
      return (
        <div className="prev-container">
          <div className="prev-cities">
            <h2>Previous Cities:</h2>
            <ul>
              {this.state.data.map((city,i) =>{
                console.log(this.props.weather.length, this.props.weather, 'what the heck', i, i+start)
                if(i<4){
                  return(
                    <li key={city._id}>
                      <p><b>{city.city.toUpperCase()}:</b></p>
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