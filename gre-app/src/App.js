import React from 'react';
import './App.css';
import Words from './Components/words';
import PostForm from './Components/login';
import SignIn from './Components/SignIn'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostForm/>
      </header>
    </div>
  );
}

export default App;
