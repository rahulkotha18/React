import React, { Component } from 'react';
import { PassThrough } from 'stream';

class ErrorBoundary extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error)
    {
        return {
            hasError:true
        }
    }
    render() {
        if(this.state.hasError)
        {
            return <h1>Something went wrong</h1>
        }
        else
        {
            return this.props.children
        }
    }
}

export default ErrorBoundary;