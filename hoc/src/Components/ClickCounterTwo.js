import React from 'react';

class ClickCounterTwo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    incrementCounter =()=>
    {
        this.setState(
            prevState =>{
               return {count:prevState.count+1}
            }
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCounter}>clicked {this.state.count} times</button>
            </div>
        );
    }
}

export default ClickCounterTwo;