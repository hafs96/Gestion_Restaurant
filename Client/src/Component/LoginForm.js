import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signin.css';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const LoginForm = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', formData);
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
            alert('Login successful!');
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.userId);
            login(response);
            navigate('/reservation');
        } catch (error) {
            console.error(error);
            alert('Error during login.');
        }
    };

    return (
        <div className="signin-container">
            <h2>Se connecter </h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn">Se connecter</button>
        <hr /> <br />
        <p className="cmp">Vous n'avez pas de compte ?<a href="/signup"><strong> Creer un compte</strong></a></p>
        </form>
        </div>
    );
};

export default LoginForm;
