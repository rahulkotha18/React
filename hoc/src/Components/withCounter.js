import React from 'react';

const withCounter = (WrapperComponent,num)=> {
class WithCounter extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            count:0
        }
    }
    incrementCounter =()=>{
        this.setState(
            prevState=>{
                return {count:prevState.count+num}
            }
        )
    }
    render() {
        console.log(this.props.name)
        return <WrapperComponent count={this.state.count} incrementCounter={this.incrementCounter}
        {...this.props}/>
        }
    }
    return WithCounter
}

export default withCounter;