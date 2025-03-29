// import { useState } from 'react'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './componant/Home'
import { Navbar } from './componant/Navbar'
import { Single } from './componant/Single'
import './App.css'

function App() {

  const url = "http://www.omdbapi.com/?apikey=7f7c13dc&"
  return (
    <>
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/single/:id" element={<Single/>}></Route>
        </Routes>
      </Router>

      
    </>
  );
};

export default App
