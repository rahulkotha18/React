import React, { Component } from 'react';
import { userConsumer } from './userContext';

class ComponentF extends Component {
    render() {
        return (
                <userConsumer>
                {
                    (username)=>
                    {
                        return <h2>{username}</h2>
                    }
                }
                </userConsumer>
        );
    }
}

export default ComponentF;