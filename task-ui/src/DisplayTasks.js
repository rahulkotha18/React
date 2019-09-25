import React, { Component } from 'react';
import { Table,Button} from 'reactstrap';
import axios from 'axios';
class DisplayTasks extends Component
{
    constructor(props)
    {
        super(props)

    }
    handleClick(assign)
    {
        var apiBaseUrl="http://localhost:8080/unassignTask"
        axios.post(apiBaseUrl,assign)
        .then(response=>{
            if(response.data!=1)
            {
              alert("error ocurred")
            }
            }
        )
        this.props.onDelete(assign.id);
    }
    render() {
        var buttoncolor="info"
        return (
            <div>
                <h2>Welcome</h2>
                <Table striped>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
             this.props.data.map(
              (abc,index) => 
              <tr key={abc.id}>  
                <td><li className="list-group-item list-group-item-warning" align="left">{abc.task.task_name}</li></td>
                <td><li className="list-group-item list-group-item-info" align="left">{abc.task.description}</li></td>
                <td><li className="list-group-item list-group-item-success" align="left">{abc.due}</li></td>
                <td><Button color={buttoncolor}  onClick={()=>this.handleClick(abc) }>Remove</Button>
                </td>
              </tr>
              )
              }
          </tbody>
        </Table>
            </div>
        );
    }    
}

export default DisplayTasks;