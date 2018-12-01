import React, { Component } from 'react';
import  { Link } from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <div className='header'>
            <p>Bank &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
                <Link className='links' to='/'>Dashbord
                </Link>  &nbsp; &nbsp;
                <Link className='links' to='/account'>+ add Accounts
                </Link>   &nbsp; &nbsp;
                
                <Link className='links' to='/transection'> Acounts detials </Link>
                  </p>
              </div>
        )
    }
}
export default Header;