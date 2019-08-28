import React, { Component } from 'react';
import Child from './Child'
class Parent extends Component {
    constructor()
    {
        super()
        this.state={
            parentName:'Parent',
            name:false,
            message:null
        }
        this.GreetParent=this.GreetParent.bind(this)
    }
    GreetParent(childName)
    {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        if(this.state.name)
                {
                    this.state.message='rahul';
                }
                else
                {
                    this.state.message='scientist'
                }
        return (
            <div>
                <Child greet={this.GreetParent}></Child>
                <div>{this.state.message}</div>
            </div>
        );
    }
}

export default Parent;