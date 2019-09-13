import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios'
import Words from './Words';

class Login extends React.Component {
constructor(props){
  super(props);
  this.state={
  id:-1,
  name:'',
  password:'',
  }
 }

 handleClick(event){
    var apiBaseUrl = "http://localhost:8080/";
    var payload={
      "id":-1,
      "name":this.state.name,
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
    return (
      <div>
        {
        this.state.id==-1?
        (<div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
         </div>
        ):
        (
          <Words id={this.state.id}/>
        )
        }
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;