import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Display from './components/Display';
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";

import "./theme/styles/index.scss"

const App = () => {
  return (
    <Router>
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/display" element={<Display />} />
        </Routes>
        
    </Router>
  );
};

export default App;
