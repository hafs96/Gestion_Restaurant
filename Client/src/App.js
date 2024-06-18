import React from 'react';
import './App.css';
import ReservationForm from './Component/ResrvationForm';
import SignupForm from './Component/SignupForm';
import LoginForm from './Component/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/reservation" element={<ReservationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
