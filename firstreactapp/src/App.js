import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero'
import Hello from './components/Hello'
import ErrorBoundary from './components/ErrorBoundary'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm';
import PutForm from './components/PutForm'
import DeleteForm from './components/DeleteForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
         
         {/* this is jayesh
         <ErrorBoundary>
         <Hello heroname="scientist"></Hello>
         </ErrorBoundary>
         <ErrorBoundary>
          <Hero heroname="jokerz"/>
          </ErrorBoundary>
          <ErrorBoundary>
          <Hero heroname="akhil"/>
          </ErrorBoundary> */}
          {/* <PostsList/> */}
          {/* <PostForm/> */}
          {/* <PutForm/> */}
          <DeleteForm/>
      </header>
    </div>
  );
}

export default App;
