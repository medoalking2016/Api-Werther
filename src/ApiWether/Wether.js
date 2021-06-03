import React, { Component } from 'react'
import './Wether.css'
import Form from './Form/Form'
import Data from './ShowData/Data'

class Wether extends Component {
     state = {
        city:'',
        contury:'',
        temp:'',
        weather:'',
        lat: '',
        lon: '',
        error:''
     }
     getWether = async   (e)=>{
        e.preventDefault()
        const country = e.target.elements.country.value
        const city = e.target.elements.city.value
        const apiW = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=e36ed364400282e43250b6c4c0274d44`)
        const data = await apiW.json() 
        if(city && country){
            this.setState({
                city:data.name,
                country:data.sys.country,
                temp:data.main.temp,
                weather:data.weather[0].main,
                lat:data.coord.lat,
                lon:data.coord.lon,
                error:''
            })
        }
        else{
            this.setState({
                city:'',
                country:'',
                temp:'',
                weather:'',
                lat: '',
                lon: '',
                error:data.message
            })
        }
    
    }

    render(){
        return (
            <div align="center" className="align-middle center background">
                <h1 className='title'>Weather Now</h1>
                <Form getWether ={this.getWether}/>
                <Data
                 city={this.state.city}
                 country={this.state.country}
                 temp={this.state.temp}
                 weather={this.state.weather}
                 lat={this.state.lat}
                 lon={this.state.lon}
                 error={this.state.error}
                />
            </div>
        )
    }
}
export default Wether