import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import Login from "./pages/login";
import ForgotPassword from './pages/ForgotPassword';


//import React from 'react';
//import emailform from './emailform';
//import './App.css';



function App() {
  return (
    
      
        <BrowserRouter>
          <Routes> 
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            
          </Routes>
        </BrowserRouter>
      
    
  )
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Email Submission Form</h1>
        <EmailForm />
      </header>
    </div>
  );
}*/


export default App;
