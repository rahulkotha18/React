import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Message from './components/Message'
import Parent from './components/Parent'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import ParentComponent from './components/ParentComponent'
import RefsDemo from './components/RefsDemo'
function App() {
  return (
    <div className="App">
       {/* <Greet name="rahul" hero="batman">
        <p>This is from brokyln</p>
        </Greet>
      <Greet name="scientist" hero="iron man">
        <button>Action</button>
        </Greet>
      <Greet name="jayesh" hero="spiderman"/>
      <Welcome name="marvels"/> 
      <Message/>
      <Parent/>
      <NameList/>
      <Stylesheet/> */}
      <RefsDemo/>
    </div>
  );
}

export default App;
