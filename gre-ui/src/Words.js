import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import DisplayTable from "./DisplayTable";
import "./App.css";

function Words(props) {
  let [learnt, setLearnt] = useState(1);
  let [all, setAll] = useState([]);
  let [custom, setCustom] = useState([]);
  const handleLog=()=>{
    window.location.reload(true);
  }
  useEffect(() => {
    console.log(props.id);
    axios.get("http://localhost:8080/words").then(response => {
      setAll(response.data);
    });
    let url = "http://localhost:8080/user/" + props.id;
    axios.get(url).then(response => {
      setCustom(response.data);
    });
    console.log("words mount mtd executed");
  }, []);

  const handleDelete = id => {
    const myFil = word => word.id !== id;
    const oldWords = custom;
    const newWords = oldWords.filter(myFil);
    setCustom(newWords);
  };

  const handleAdd = id => {
    const oldWords = custom;
    const newWords = oldWords.concat(all[id]);
    setCustom(newWords);
  };

  return (
    <div>
      <div>
        <Button
          style={{ margin: 15 }}
          onClick={() => {
            setLearnt(1);
          }}
          variant="contained"
          color="primary"
        >
          Show Words{" "}
        </Button>
        <Button
          style={{ margin: 15 }}
          onClick={() => {
            setLearnt(0);
          }}
          variant="contained"
          color="primary"
        >
          Learnt words{" "}
        </Button>
        <Button
          style={{ margin:15 }}
          onClick={()=>handleLog()}
          variant="contained"
          color="secondary"
        >
          Log out{" "}
        </Button>
      </div>
      {learnt ? (
        <DisplayTable
          userid={props.id}
          data={all}
          type="all"
          onAdd={id => handleAdd(id)}
        />
      ) : (
        <DisplayTable
          userid={props.id}
          data={custom}
          type="custom"
          onDelete={id => handleDelete(id)}
        />
      )}
    </div>
  );
}
export default Words;
