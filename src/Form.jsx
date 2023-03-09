import { Component } from "react";
import React from "react";
import axios from "axios";

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            carName:'',
            carType:'',
            owners:'',
            currentOwnerName:'',
            mobile:'',
            address:''
        };
    }
    handleSnoChange=(event)=>{
        this.setState({id:event.target.value});
    }

    handleSnoChange=(event)=>{
        this.setState({carName:event.target.value});
    }
    handleNameChange =(event)=>{
        this.setState({carType:event.target.value});
    };
    handleRatingChange=(event)=>{
        this.setState({owners:event.target.value});
    };
    handleVerdictChange=(event)=>{
        this.setState({currentOwnerName:event.target.value});
    };
    handleCreatorChange=(event)=>{
        this.setState({mobile:event.target.value});
    };
    handleYearChange=(event)=>{
        this.setState({address:event.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const data={
       id:this.state.id,
       carName:this.state.carName,
       carType:this.state.carType,
       owners:this.state.owners,
       currentOwnerName:this.state.currentOwnerName,
       mobile:this.state.mobile,
       address:this.state.address
        };
        axios.post('http://localhost:8080/add',data)
        
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit} id="inputdata">
                 <label>id</label>
                <input
                type="number"
                value={this.state.carname}
                onChange={this.handleSnoChange}
                />
                <label>carName</label>
                <input
                type="text"
                value={this.state.carname}
                onChange={this.handleSnoChange}
                />
                <label>carType</label>
                <input
                type="text"
                value={this.state.carType}
                onChange={this.handleNameChange}
                />
                <label>owners</label>
                <input
                type="number"
                value={this.state.owners}
                onChange={this.handleRatingChange}
                />
                <label>currentOwnerName</label>
                <input
                type="text"
                value={this.state.currentOwnerName}
                onChange={this.handleVerdictChange}
                />
                <label>mobile</label>
                <input
                type="int"
                value={this.state.mobile}
                onChange={this.handleCreatorChange}
                />
                <label>address</label>
                <input
                type="text"
                value={this.state.address}
                onChange={this.handleYearChange}
                />
                <button type="submit">Add</button>
                </form>
        )
    }
}
export default Form;