import React, { Component } from 'react';
import { Link,Route} from 'react-router-dom';
import Adduser from './adduser';

class Addform extends Component{

    send=(e)=>{
        e.preventDefault();
        let user=this.refs.user.value;
        let pnumber=this.refs.no.value;
        let acnumber=this.refs.ac.value;
        console.log(user);
        console.log(pnumber);
        console.log(acnumber);
        this.props.setvalues(user,pnumber,acnumber)
        this.refs.user.value='';
        this.refs.ac.value='';
    }


    render(){
        // let a= this.props.uname;

          //onClick={() => { this.setState({ selectedFood: value }) }
        return(
           <div>
               <Link to='/addform/adduser'>add user</Link>
               <Route path="/addform/adduser" component={Adduser} />
               <div>{this.props.user}</div>
               <center>
               <form action="" method="post">
               <table><tbody>
             <tr> <td> name :</td><td> <input className='input' type="text" name='name' ref='user' placeholder='Enter the name' /></td> </tr>
             <tr> <td> Account Type </td><td><select className='input' name="atype" ref="no">
             <option value="curent">curent</option>
             <option value="saving">saving</option>


             </select></td></tr>
             <tr> <td>Intial Payment</td><td><input className='input' type="number" name='pnumber' ref="ac" placeholder='1000' /></td></tr><h1></h1>
               <tr>  <td>    </td><td><input className='input' type="submit" value='sumbit' onClick={this.send} /></td> </tr>
               </tbody>
               </table>
               </form>

               </center>
               <div class="zee">
                   <h1>user details</h1>
                   
               </div>
           </div>
        )
    }
}
   
   
export default Addform;
