import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
   
    render() {
        const {count,incrementCounter} =this.props
        return ( 
            <div>
                <button onClick={incrementCounter}> {this.props.name} clicked {count} times</button>
            </div>
        );
}
}

export default withCounter(ClickCounter,4);