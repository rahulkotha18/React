import React, { Component } from 'react';
import axios from 'axios'

class PutForm extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            id:'',
            firstName:'',
            lastName:'',
            email:''
        }
    }

    changeHandler=(e)=>{
        this.setState(
            {[e.target.name]:e.target.value}
        )
    }

    submitHandler=(e) =>
    {
        e.preventDefault()
        console.log(this.state)
        axios.put("http://172.16.18.66:8080/api/employees",this.state)
        .then(response=>
            {console.log(response)})
            .catch(error=>
                {console.log(error)}
            )
    }

    render() {
        const{id,first_name,last_name,email}=this.state
        return (
            <div>
                <h2>Update form</h2>
                <form onSubmit={this.submitHandler}>
                    <div>
                        Id:   <input type="text" name="id" value={id} onChange={this.changeHandler} ></input>
                    </div>
                    <div>
                        First Name:<input type="text" name="firstName" value={first_name} onChange={this.changeHandler} ></input>
                    </div>
                    <div>
                        Last Name:<input type="text" name="lastName" value={last_name} onChange={this.changeHandler} ></input>
                    </div>
                    <div>
                        Email:<input type="text" name="email" value={email} onChange={this.changeHandler} ></input>
                    </div>
                    <button type="Update">Submit</button>
                </form>
            </div>
        );
    }
}

export default PutForm;