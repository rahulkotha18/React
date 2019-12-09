import React from "react";
import { Table ,Button} from "reactstrap";
import axios from "axios";
//import { Button } from '@material-ui/core';
//import SaveIcon from '@material-ui/icons/Save';
//import DeleteIcon from '@material-ui/icons/Delete';
function DisplayTable(props) {
  const handleClick = id => {
    let apiBaseUrl = "http://localhost:8080/";
    let payload = {
      u_id: props.userid,
      w_id: id
    };
    if (props.type === "all") {
      axios.post(apiBaseUrl + "addWord", payload).then(response => {
        if (response.data !== -1) {
          console.log(response);
        }
      });
      props.onAdd(id - 1);
    } else {
      axios.post(apiBaseUrl + "delWord", payload).then(response => {
        if (response.data !== 1) {
          alert("error ocurred");
        }
      });
      props.onDelete(id);
    }
  };
  let ButtonColor = "info";
  let text = "add";
//  let icons=<SaveIcon />;
  if (props.type === "custom") {
    ButtonColor = "danger";
    text = "remove";
    //icons=<DeleteIcon />
  }
  return (
    <div>
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
          {props.data.map((abc, index) => (
            <tr key={abc.id}>
              <td>
                <li
                  className="list-group-item list-group-item-warning"
                  align="left"
                >
                  {abc.id}
                </li>
              </td>
              <td>
                <li
                  className="list-group-item list-group-item-info"
                  align="left"
                >
                  {abc.word}
                </li>
              </td>
              <td>
                <li
                  className="list-group-item list-group-item-success"
                  align="left"
                >
                  {abc.meaning}
                </li>
              </td>
              <td>
                <Button color={ButtonColor} onClick={() => handleClick(abc.id)}>
                  {text}
                </Button>
                {/* <Button
                variant="contained"
                color={ButtonColor}
                startIcon={icons}
                onClick={()=>handleClick(abc.id)}
                > */}
                {/* {text}
                </Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DisplayTable;
