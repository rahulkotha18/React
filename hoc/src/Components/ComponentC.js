import React, { Component } from 'react';
import ComponentF from './ComponentF';

class ComponentC extends Component {
    render() {
        return (
            <div>
                this Component C
                <ComponentF/>
            </div>
        );
    }
}

export default ComponentC;