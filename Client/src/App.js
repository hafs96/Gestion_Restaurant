import React from 'react';
import './App.css';
import ReservationForm from './Component/ResrvationForm';
import SignupForm from './Component/SignupForm';
import LoginForm from './Component/LoginForm';
import Home from './Component/Home';
import LearnMore from './Component/LearnMore';
import {  BrowserRouter as Router,Route, Routes }from 'react-router-dom';





function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/reservation" element={<ReservationForm />} />
          <Route path='/learnmore' element={<LearnMore />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
