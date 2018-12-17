import React, { Component } from 'react';
class Search extends React.Component{
    constructor(props){
        super(props);
        this.name ='this is a test';
        this.state= {
            medicenName: ''
        }
    }
    handleChange = (e)=>{
        console.log(e.target.value)
       // console.log(this.state.search)
        this.setState({ [e.target.name]:e.target.value})
    }
    render(){
        return(
            <div>
              <input value = {this.state.medicenName} onChange = {this.handleChange} name = "medicenName"/>
              <button >Search</button>
            <div>{this.name}</div>
            </div>
          
        )
    }
}
export default Search
