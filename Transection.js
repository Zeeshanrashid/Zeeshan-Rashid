import React, { Component } from 'react';
import Rightside from './rightside.js';

class Transection extends Component{
    remove=(index,item)=>{
        //  this.props.mymenu.splice(index,1);
        this.props.updateM(item,index);
        
    } 
    delete=(item,index)=>{
        //  this.props.mymenu.splice(index,1);
        this.props.delete(index);
        console.log(index);
        
    } 

    render(){
        // const menuItems = this.props.mymenu.map((value, index) => {
      
        //     return <li key={index}  onClick={() => { this.remove(index,value);

        //         // this.props.updateM( value );
        //     // console.log(index);
        //     // splice(index);
        // }}
        //      >  {value}  </li>
      
        //   })

          //onClick={() => { this.setState({ selectedFood: value }) }
console.log(this.props.names);

          let names= this.props.names.map((value,index)=>{
              return <tr key={index} ><td>{value.id}</td><td>{value.name}</td> <td>{value.phone}</td><td>{value.passkey}</td><td>{value.date}</td><td onClick={()=>this.delete(value,index) }>Click for delete</td></tr>

          })
        //   let phones= this.props.phones.map((value,index)=>{
        //     return `<tr><td>${value}</td><tr>`

        // })
        // let passkeys= this.props.passkeys.map((value,index)=>{
        //     return `<td>${value}</td></tr>`

        // })
        // console.log(this.refs.bod);
        // this.refs.bod.innerHTML='<tr><td>'+akdkfaj+'</td></tr>'

        return(
            <div >
            <div>
            <table border='1' className='tab' ><thead>
                <tr><th>Account Id</th><th>Name</th><th>Account type</th><th>initial Payment</th><th>Date</th><th>for Delete</th></tr>
                </thead>
                <tbody>
            {names}
                    {/* <tr><td> {this.props.nam}</td><td> {this.props.phone}</td><td> {this.props.passkey}</td></tr> */}
                </tbody>
                
                </table>
                </div>
                 </div>
        )
    }
}
export default Transection;