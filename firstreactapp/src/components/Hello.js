import React, { Component } from 'react';

class Hello extends Component {

    render() {
        return (
            <div>
               HEllo class {this.props.heroname} is real hero
            </div>
        );
    }
}

export default Hello;