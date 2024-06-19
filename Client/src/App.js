// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReservationForm from './Component/ResrvationForm';
import SignupForm from './Component/SignupForm';
import LoginForm from './Component/LoginForm';
import Home from './Component/Home';
import LearnMore from './Component/LearnMore';
import ReservationList from './Component/ListReservation';
import { ReservationProvider } from './contexts/ReservationContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
      <AuthProvider>
        <Router>
            <ReservationProvider>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/signup" element={<SignupForm />} />
                        <Route path="/reservation" element={<ReservationForm />} />
                        <Route path='/learnmore' element={<LearnMore />} />
                        <Route path='/Liste' element={<ReservationList />} />
                    </Routes>
                </div>
            </ReservationProvider>
        </Router>
        </AuthProvider>
    );
}

export default App;
