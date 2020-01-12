import React, { Component } from 'react';

class Selfcounter extends Component {
    constructor(props) {
        super(props);
        this.state = { count :0 }
    }
    
    render() { 
        var count1=this.state.count;
        return ( 

            <p>{this.setState({count  : count1 + 1})}</p>
         );
    }
}
 
export default Selfcounter;