import React, { Component } from 'react';
// import Rightside from './rightside.js';
import Addform from './addform.js';
import { Link } from 'react-router-dom';


class Leftside extends Component {
    state = {
        display: false,
        ACnumber: 1,
        type: 'Account'
    }

    Addform = () => {
        console.log('this is my form');
        this.setState({ display: !this.state.display });

    }
    
    
    render() {
        let acount=this.props.names;
        console.log(acount);


        //onClick={() => { this.setState({ selectedFood: value }) }
        return (
            <div className='left' ref='main'>
                <div> &nbsp; Accounts
                    <a className='veiw' href='https://www.google.com'> veiw all</a>
                      <Link to='/account' className='addac'>+ add Accounts
                </Link>
                    {this.state.display === true ? '' :
                        <div className='detail'> <h1>{acount} </h1>
                            <h2>{this.state.type}</h2></div>}
                </div>
            </div>
        )
    }
}
export default Leftside;