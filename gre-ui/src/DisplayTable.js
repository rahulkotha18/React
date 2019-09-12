import React from 'react'
import { Table,Button } from 'reactstrap';
import { Navbar,Spinner,NavbarBrand } from 'reactstrap';
import axios from 'axios'
class DisplayTable extends React.Component {
    constructor(props)
    {
        super(props)
        this.State={
            x:this.props.data,
            f:true
        }
    }
   componentDidUpdate()
   {
    var url="http://localhost:8080/user/"+this.props.userid
    axios.get(url)
    .then(response=>
    {
        console.log("ra")
        this.setState({x:response.data})
        
    })
  }  
  

    handleClick=(id)=>
    {
        var apiBaseUrl="http://localhost:8080/";
        var payload={
            "u_id":this.props.userid,
            "w_id":id,
        }
        if(this.props.type=="all")
        {
            axios.post(apiBaseUrl+"addWord",payload)
            .then(response=>{
                if(response.data!=-1)
                {console.log(response)
                }
            })
        }
        else
        {
            axios.post(apiBaseUrl+"delWord",payload)
            .then(response=>{
                if(response.data!=-1)
                {console.log(response)
                }
            })  
            this.setState({f:true}) 
        }
     }
    render() {
        var ButtonColor="info";
        var text="add";
        if(this.props.type=="custom")
        {
            ButtonColor="danger";
            text="remove";
        }
      return (
        <div>
          <div>
            < Navbar color="grey" dark expand="md">
              <NavbarBrand text-color="white">
                <Spinner type="grow" color="primary" />
                <Spinner type="grow" color="secondary" />
                <Spinner type="grow" color="success" />
                <Spinner type="grow" color="danger" />
                <Spinner type="grow" color="warning" />
                <Spinner type="grow" color="info" />
                <Spinner type="grow" color="dark" />
              </NavbarBrand>
            </Navbar>
          </div>
  
        <Table striped>
          <thead>
            <tr>
              <th>sno</th>
              <th>Word</th>
              <th>Meaning</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
             this.props.data.map(
              (abc,index) => 
              <tr key={abc.id}>  
                <td><li class="list-group-item list-group-item-warning" align="left">{abc.id}</li></td>
                <td><li class="list-group-item list-group-item-info" align="left">{abc.word}</li></td>
                <td><li class="list-group-item list-group-item-success" align="left">{abc.meaning}</li></td>
                <td><Button color={ButtonColor} onClick={()=>this.handleClick(abc.id) }>{text}</Button>
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
  
  export default DisplayTable