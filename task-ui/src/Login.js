import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import UserPage from './UserPage';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Paper } from '@material-ui/core';
class Login extends React.Component {
    constructor(props)
        {
            super(props);
            this.state={
                status:-1,
                id:-1,
                username:'',
                password:''
            }
        }
        handleClick(event)
        {
            this.setState({[event.target.name]:event.target.value})
        }

        handleSubmit()
        {
            var apiBaseUrl = "http://localhost:8080/";
            var payload={
              "username":this.state.username,
              "password":this.state.password
            }
            axios.post(apiBaseUrl+"auth",payload)
            .then(response=>{
                if(response.data!=-1)
                {console.log(response)
                this.setState({id:response.data})
                }
            })
        }

    render() {
        const style={
            padding:'5%',
            
        }
         var login=(<div style={style}>
             <Paper style={{marginBottom:10,marginTop:20,marginLeft:-30,marginRight:-30}}>
             <AccountCircleIcon/>
         <h2>Login</h2>
         <div style={style}>
         <TextField name ="username"
         helperText="rahul@gmail.com"
         variant="filled"
         required="true"
         label="username"
         onChange = {(event) => this.handleClick(event)}
         /><br/> <br/>
         <TextField name ="password"
         helperText="rk18@!"
         variant="filled"
         required="true"
         label="password"
         onChange = {(event) => this.handleClick(event)}
         /> <br/>
         <Button variant="contained" color="primary" onClick={()=>this.handleSubmit()}>
             submit  </Button>
             </div>
             </Paper>
     </div>)
        if(this.state.id==-1)
        {
            
            return(
                <div>
                    {login}
                </div>
            );       
        }
        else
        {
            return(
                <div>
                <UserPage id={this.state.id}/>
                </div>
            )
        }
    }
}

export default Login;
