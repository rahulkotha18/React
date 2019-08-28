import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor()
    {
        super()
        this.inputRef=React.createRef();
    }
    componentDidMount()
    {
        this.inputRef.current.focus();
        console.log('rahul kotha jayesh kjhsjg')
    }
    render() {
        return (
            <div>
             <input type="text" ref={this.inputRef}/>
            </div>
        );
    }
}

export default RefsDemo;