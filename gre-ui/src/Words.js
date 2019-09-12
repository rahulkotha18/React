import React, { Component } from 'react';
import axios from 'axios'
import {Button,Box} from '@material-ui/core'
import DisplayTable from './DisplayTable'
const style = {
  margin: 15,
 };

class Words extends Component {
    
  constructor(props)
  {
      super(props)
      this.state={
          learnt:true,
          all:[],
          custom:[],
          type:''
      }
  }
  componentDidMount()
  {
      console.log(this.props.id)
      axios.get("http://localhost:8080/words")
      .then(response=>
          {
              
              this.setState({all:response.data})
              
          })
      var url="http://localhost:8080/user/"+this.props.id
        axios.get(url)
        .then(response=>
        {
          this.setState({custom:response.data})    
        })
   }
  
    render() {
        return (
            <div>
                <div>
                    <Box m={2}/>
                    <h2>Welcome</h2>
                </div>
                <div> 
                <Button onClick={()=>{this.setState({learnt:1})}} variant="contained" color="primary">
                    Show words      </Button>
                <Button onClick={()=>{this.setState({learnt:0})}} variant="contained" color="primary">
                    learnt words      </Button>
                </div>
                {
                    this.state.learnt ?
                    (<DisplayTable userid={this.props.id} data={this.state.all} type="all"/>):
                    (<DisplayTable userid={this.props.id} data={this.state.custom} type="custom"/>)
                }
            </div>
        );
    }
}


export default Words;