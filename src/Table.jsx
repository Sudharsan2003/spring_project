import axios from "axios";
import React from "react";
import { Component } from "react";
class Table extends Component{
    state={
    data:[]
    }
    componentDidMount(){
        axios.get('http://localhost:8080/show')
        .then(response=>{
            this.setState({data:response.data});
        })
        .catch(error =>{
            console.log(error);
        });
        
        
    }
    deleteData(id){
        axios.delete('http://localhost:8080/delete/' + id)
        .then(response =>{
            console.log(response);
            const data = this.state.data.filter(item => item.id !==id);
            this.setState({data});
        });
        
    }
     handleUpdate = async (id) => {
        let carName = prompt("Enter new Car Name");
        let carType = prompt("Enter new Car Type");
        let owners = prompt("Enter new Owners");
        let currentOwnerName = prompt("Enter new CurrentOwner name");
        let mobile = prompt("Enter new mobile no");
        let address = prompt("Enter new address");
   
        let newData = {
         id : id,
         carName : carName , 
         carType : carType,
         owners  : owners  ,
         currentOwnerName  : currentOwnerName,
         mobile  : mobile,
         address : address
        }
   
        console.log(newData);
        
        await axios.put('http://localhost:8080/update/'+ id, newData);
        console.log(34234);
        window.location.reload();
     };
    render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>carname</th>
                        <th>carType</th>
                        <th>owners</th>
                        <th>currentOwnerName</th>
                        <th>mobile</th>
                        <th>address</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.carName}</td>
                            <td>{user.carType}</td>
                            <td>{user.owners}</td>
                            <td>{user.currentOwnerName}</td>
                            <td>{user.mobile}</td>
                            <td>{user.address}</td>
                            <td><button onClick={() => this.deleteData(user.id)}>Delete</button></td>
                            <td><button onClick={()=>this. handleUpdate(user.id)}>Update</button></td>
                           
                        </tr>

                    ))}
                </tbody>
            </table>
        );
    }
}
export default Table;