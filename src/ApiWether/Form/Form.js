import React, { Component } from 'react'
import './Form.css'

class  Form extends Component{

render(){
    
    return (
        <form onSubmit={this.props.getWether} >
            <input type='text' name='country' placeholder='contury ....'/>
            <input type='text' name='city' placeholder='City ....'/>
            <input type='submit' value='Show Data' id='clickShow' />
        </form>
    )
}
}
export default Form