import React, { Component } from 'react';

import Rightside from './rightside.js';
import Leftside from './leftside.js';
class Content extends Component {


  render() {
    
   let names=this.props.names;
   console.log(names)

    return (
      <div>
        
      
       <Leftside  names={names} />

        <Rightside />

      </div>
    )

  }

}
export default Content