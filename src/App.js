
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }
   
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.background='#071145';
      showAlert("Dark mode as been enable","success");
    }
    else{
      setMode('light')
      document.body.style.background='white';
      showAlert("Light mode as been enable","success");
    }
  }
  return (
    <>
    
{/* <Navbar title="T/xt Utiles" aboutText="About us" /> */}

<Router>

<Navbar mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/> 
<div className="container">
<Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>}>
            
          </Route>
</Routes>
</div>
</Router>

  </>
  );
}

export default App;
