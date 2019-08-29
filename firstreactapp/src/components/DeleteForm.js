import React, { Component } from 'react';
import axios from 'axios'

class DeleteForm extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            id:''
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
        const idd=this.state.id
        axios.delete("http://172.16.18.66:8080/api/employees/"+idd)
        .then(response=>
            {console.log(response)})
            .catch(error=>
                {console.log(error)}
            )
    }

    render() {
        const{id}=this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        Id:   <input type="text" name="id" value={id} onChange={this.changeHandler} ></input>
                    </div>
                    <button type="submit">delete</button>
                </form>
            </div>
        );
    }
}

export default DeleteForm;