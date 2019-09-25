import React, { Component } from 'react';
import AddTask from './AddTask';

class Assigntask extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            flag:0
        }
    }
    render() {
        if(this.state.flag==0)
        {
            return (
                <div>
                    <AddTask/>   
                </div>
            );
        }
        else
        {
        return (
            <div>
                
            </div>
        );
        }
    }
}

export default Assigntask;