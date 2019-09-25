import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
class AddTask extends Component 
{
    constructor(props)
    {
        super(props)
        this.state={
            name:'',
            des:''
        }
    }
    handleSubmit()
    {
        var apiBaseUrl = "http://localhost:8080/";
        var payload={
          "task_name":this.state.name,
          "description":this.state.des
        }
        axios.post(apiBaseUrl+"addTask",payload)
        .then(response=>{
            if(response.data!=-1)
            {console.log(response)
            this.setState({id:response.data})
            }
        })
    }
    handleClick(event)
    {
        this.setState({[event.target.name]:event.target.value})

    }
    render() {
        return (
            <div>
         <h2>add task</h2>
         <div>
         <TextField name ="name"
         variant="filled"
         required="true"
         label="task name"
         onChange = {(event) => this.handleClick(event)}
         /><br/> <br/>
         <TextField name ="des"
         variant="filled"
         required="true"
         label="task description"
         onChange = {(event) => this.handleClick(event)}
         /> <br/><br/>
         </div>
         <Button variant="contained" color="primary" onClick={()=>this.handleSubmit()}>
             add task  </Button>
            </div>
        );
    }
}

export default AddTask;