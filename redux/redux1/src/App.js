import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement, changelog} from './actions'
import './App.css';

function App() {
  const counter=useSelector( state=>state.counter );
  const isLogged=useSelector( state=>state.isLogged );
  const dipatch=useDispatch();

  return (
    <div className="App">
      <h2>Counter {counter}</h2>
      <button onClick={()=>dipatch(increment())}>+</button>
      <button onClick={()=>dipatch(decrement())}>-</button>
      {isLogged?<h3>rahul</h3>:<h3>sreetej</h3>}
      <button onClick={()=>dipatch(changelog())}>click</button>
    </div>
  );
}

export default App;




// create table assignedtasks(id INT AUTO_INCREMENT PRIMARY KEY,
//    l_id int not null,
//    t_id int not null,
//    duedate date not null,
//    submit_date date not null,
//    foreign key(l_id) references tasklist(id),
//    foreign key(t_id) references task(id)
//    )

