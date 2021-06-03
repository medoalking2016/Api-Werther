import React from 'react'
import './Data.css'


const Data = (props) =>{
   
    return (
        <div className='showData'>
            {props.country && <p>country is: {props.country}</p> }
            {props.city && <p>city is: {props.city}</p> }
            {props.temp && <p>temp is: {props.temp}</p> }
            {props.weather && <p >weather is: {props.weather}</p> }
            {props.lat && <p>lat is:{props.lat}</p> }
            {props.lon && <p>lon is: {props.lon}</p> }
            {props.error && <p>error is:{props.error}</p> }

        </div>
    )
}

export default Data