import React, { useState} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import axios from "axios";

function Register(props) {
  let [id, setId] = useState(-1);
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  const handleClick = event => {
    let apiBaseUrl = "http://localhost:8080/";
    let payload = {
      id,
      name,
      password
    };
    axios.post(apiBaseUrl + "user", payload).then(response => {
      if (response.data !== -1) {
        console.log(response);
        alert("added user");
      }
    });
    alert(`${name} registered`);
    window.location.reload(true);
  };
  return (
    <div>
      <MuiThemeProvider>
        <div>
          <AppBar title="Register" />
          <form>
            <TextField
              hintText="Enter your id"
              floatingLabelText="id"
              onChange={(event, newValue) => setId(newValue)}
            />
            <br />
            <TextField
              hintText="Enter your Name"
              floatingLabelText="Name"
              onChange={(event, newValue) => setName(newValue)}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => setPassword(newValue)}
            />
            <br />
            <RaisedButton
              label="register"
              primary={true}
              style={style}
              onClick={event => handleClick(event)}
            />
          </form>
          <br />
          <h6>Already Registed ? Login now</h6>
          <RaisedButton
            label="log in"
            primary={true}
            style={style}
            onClick={event => props.handle(event)}
          />
        </div>
      </MuiThemeProvider>
    </div>
  );
}
const style = {
  margin: 15
};

export default Register;
