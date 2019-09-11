import React, { Component } from 'react';
import axios from 'axios'
import {Button} from 'reactstrap'
class PostForm extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:'',
            password:''
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
        axios.post("http://localhost:8080/auth",this.state)
        .then(response=>
            {console.log(response)
            
            })
            .catch(error=>
                {console.log(error)}
            )
    }

    render() {
        const{id,first_name,last_name,email}=this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                     Name:<input type="text" name="name" value={first_name} onChange={this.changeHandler} ></input>
                    </div>
                    <div>
                     Password:<input type="text" name="password" value={last_name} onChange={this.changeHandler} ></input>
                    </div>
                    <Button color="secondary" type="submit">submit</Button>{' '}
                </form>
            </div>
        );
    }
}

export default PostForm;