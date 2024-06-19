import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        password: '',
        role: 'client'
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
            console.log('Response:', response.data);
            alert('Signup successful!');
            navigate('/login');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message); // Ajoutez ceci pour vérifier l'erreur
            alert('Error during signup: ' + (error.response ? error.response.data.msg : error.message));        }
    };

    return (
        <div className="signup-container">
      <h2>Inscription</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="nom">Prenom</label>
          <input type="text" name="prenom" placeholder="Prenom" value={formData.prenom} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input  type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input  type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="tele">Telephone</label>
          <input  type="text" name="telephone" placeholder="Telephone" value={formData.telephone} onChange={handleChange} required/>
        </div>
        <button type="submit" className="btn">S'inscrire</button>
        <hr /> <br />
        <p className="cmp">Vous avez de compte ?<a href="/login"><strong> Se connecter</strong></a></p>
        </form>
        </div>
    );
};


export default SignupForm;
