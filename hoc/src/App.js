import React from 'react';
import './App.css';
import { userProvider } from './Components/userContext';
import ComponentC from './Components/ComponentC';

function App() {
  return (
    <div className="App">
     <userProvider value='rahul'>
       <ComponentC/>
     </userProvider>
    </div>
  );
}

export default App;
