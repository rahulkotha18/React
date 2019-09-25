import React, { Component } from 'react';
import axios from 'axios'
import DisplayTasks from './DisplayTasks';
import AddTask from './AddTask';
import Button from '@material-ui/core/Button';
import Assigntask from './Assigntask';
class UserPage extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            flag:0,
            data:[]
        }
    }
    componentDidMount()
    {
        var apiBaseUrl = "http://localhost:8080/getTasks/";
        axios.get(apiBaseUrl+this.props.id)
            .then(response=>{
                if(response.data!=-1)
                {console.log(response)
                this.setState({data:response.data})
                }
            })
    }
    handleDelete(id)
    {
      const myFil = (word)=>word.id!=id
      const oldTasks = this.state.data
      const newTasks = oldTasks.filter(myFil)
      this.setState({data:newTasks});
    }
 
    render(){

        if(this.state.flag==1)
        {
        return(
        <div>
            <h3>rahul</h3>
            <Button variant="contained" color="primary" onClick={()=>{this.setState({flag:0})}}>Assign Task</Button>
            <DisplayTasks data={this.state.data} onDelete={(id)=>this.handleDelete(id)} />
        </div>
        )
        }
        else
        {
            return(
                <div>
                    <Button variant="contained" color="primary" onClick={()=>{this.setState({flag:1})}}>View Assigned tasks</Button>
                    <Assigntask/>
                </div>
            )
        }

    }
        
}

export default UserPage;