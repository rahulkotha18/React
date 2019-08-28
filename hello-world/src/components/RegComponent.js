import React, { Component } from 'react';

class RegComponent extends Component {
    render() {
        console.log('*********8reg component ***********88');
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        );
    }
}

export default RegComponent;