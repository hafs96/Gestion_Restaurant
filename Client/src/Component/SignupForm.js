import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        password: '',
        role: 'client'
    });

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
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message); // Ajoutez ceci pour vérifier l'erreur
            alert('Error during signup: ' + (error.response ? error.response.data.msg : error.message));        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
            <input type="text" name="prenom" placeholder="Prenom" value={formData.prenom} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="telephone" placeholder="Telephone" value={formData.telephone} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <select name="role" value={formData.role} onChange={handleChange}>
                <option value="client">Client</option>
                <option value="responsable">Responsable</option>
            </select>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;
