import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './component/Header.js';
import Footer from './component/footer.js';
import Content from './component/content.js';
// import Rightside from './component/rightside.js';
// import Leftside from './component/leftside.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Addform from './component/addform.js';
import Transection from './component/Transection.js';

// import Rightside from './component/rightside.js';
import Leftside from './component/leftside.js';





import './App.css';
// import Transection from './component/Transection.js';

class App extends Component {


  constructor(){
    super();
    let saveItem=JSON.parse(localStorage.getItem('acount'));
    // console.log(saveItem);
   this.state.users=saveItem;
  }
state={
  person:{
     user:undefined,
     phone:undefined,
     passkey:undefined,
  },
  users:[],
  // phones:[],
  // passkeys:[]
};
 



  
update=(user,phone,passkey)=>{
  // this.state.phones.push(phone);
  // this.state.passkeys.push(passkey);
  
  
  // this.setState({
    // this.state.person.user=user;
    // this.state.person.phone=phone;
    // this.state.person.passkey=passkey;
    // // })
    let alldata=this.state.users;

    let acount={
      name:user,
      phone:phone,
      passkey:passkey,
      date:Date().slice(0,22),
      id:Math.round(Math.random()*10000000)
    }
    //alldata.unshift(acount);
    // alldata.unshift(phone);
    // alldata.unshift(passkey);
    localStorage.setItem('acount',JSON.stringify(alldata));

    console.log(alldata);
    this.setState({
      users:alldata,
    })
    
}
delete=(index)=>{
   let allarray=this.state.users.slice();
   allarray.splice(index,1);
   localStorage.setItem('acount',JSON.stringify(allarray));
   this.setState({
     users:allarray,
   })

}


  render() {
        

    return (
      <div >
        
           <BrowserRouter> 
          <div>
            <Header />
            {/* <Route path='/' Component={Content} /> */}
            {/* <Content /> */}
            <Switch>
            <Route path="/account"   render={()=><Addform setvalues={this.update} />}   />
            <Route  path="/transection"    render={()=><Transection delete={this.delete} names={this.state.users}/>} />
            <Route path="/" render={()=><Content names={this.state.users}/>} />
            {/* <PropsRoute path='/account' component={Addform} user={this.state.user} /> */}
            {/* <Route path="/" component={Home} />
          </Switch> */}


           </Switch>
           {/* <Leftside style={style} users={this.state.users} /> */}
            <Footer />

          </div>

      </BrowserRouter>
      </div>
    );
  }
}

export default App;
