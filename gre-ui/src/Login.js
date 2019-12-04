import React, { useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import axios from "axios";
import Words from "./Words";
import Register from "./Register";
function Login() {
  let [reg, setReg] = useState(1);
  let [id, setId] = useState(-1);
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");

  const handleClick = event => {
    let apiBaseUrl = "http://localhost:8080/";
    let payload = {
      id: -1,
      name: name,
      password: password
    };
    axios.post(apiBaseUrl + "auth", payload).then(response => {
      if (response.data !== -1) {
        console.log(response);
        setId(response.data);
      }
    });
  };

  const handleReg = event => {
    if (reg === 1) setReg(0);
    else setReg(1);
  };

  let login = (
    <div>
      <MuiThemeProvider>
        <div>
          <AppBar title="Login" onLeftIconButtonClick={() => alert("left")} />
          <div></div>
          <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
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
            label="log in"
            primary={true}
            style={style}
            onClick={event => handleClick(event)}
          />
          <br />
          <h6>Not Registed ? Register now</h6>
          <RaisedButton
            label="Register"
            primary={true}
            style={style}
            onClick={event => handleReg(event)}
          />
        </div>
      </MuiThemeProvider>
    </div>
  );
  if (id === -1) {
    if (reg === 0)
      return (
        <div>
          <Register handle={event => handleReg(event)} />
        </div>
      );
    else return <div>{login}</div>;
  } else {
    return (
      <div>
        <Words id={id} />
      </div>
    );
  }
}
const style = {
  margin: 15
};

export default Login;
