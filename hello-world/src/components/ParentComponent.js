import React, { Component } from 'react';
import RegComponent from './RegComponent';
import PurComponent from './PurComponent';

class ParentComponent extends Component {
  constructor(props)
  {
      super(props)
        this.state={
            name:'Rahu Kotha'
        }
  }
  componentDidMount()
  {
      setInterval( ()=>{this.setState(
        {name:'Kotha'}
    )},100)
  }
    render() {
        console.log('parent component ');
        return (
            <div>
                Parent Component
                <RegComponent name={this.state.name}></RegComponent>
                <PurComponent name={this.state.name}/>
            </div>
        );
    }
}

export default ParentComponent;