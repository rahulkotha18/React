import React, { Component } from 'react';

class auth extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default auth;

axios.post(apiBaseUrl+"auth",payload)
    .then(response=>{
        if(response.data!=-1)
        {console.log(response)
        this.setState({id:response.data})
        }