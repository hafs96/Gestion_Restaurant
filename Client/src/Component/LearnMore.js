import React from 'react';
import '../styles/learnmore.css';
import table from '../images/table.jpg'
import view from '../images/view.webp'
import food from '../images/food.jpg'
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className='desc'>
      <div className='title'><button className='retour'><Link to="/"> Retour</Link></button><h3>Bienvenue chez Le Gourmet Elegance</h3><br /></div>
      <div className="middle-elements">
        <img src={view} alt="view" ></img>
        <div className="main-text">
          <h2>  Le Gourmet Elegance est un restaurant de fine dining situé au cœur de la ville, réputé pour son ambiance raffinée et ses plats exquis. 
            Chaque plat est méticuleusement préparé par nos chefs talentueux pour offrir une expérience culinaire inoubliable.
          </h2><br></br>
        </div>
      </div>
      <div className="middle-elements">

        <div className="main-text">
          <h2>        
            Notre menu est soigneusement conçu pour capturer les saveurs et les textures uniques de chaque ingrédient. 
            Que ce soit pour une occasion spéciale ou simplement pour savourer une soirée gastronomique, Le Gourmet Elegance est l'endroit idéal.
          </h2>
        </div>
        <img src={food} alt="food" ></img>
      </div>
      <div className="middle-elements">
        <img src={table} alt="table" ></img>
        <div className="main-text">
          <h2>
            Notre équipe de serveurs professionnels est dédiée à offrir un service de première classe à chaque client. 
            Nous nous efforçons de créer une atmosphère accueillante et élégante pour garantir une expérience mémorable à chaque visite.
          </h2><br></br>
        </div>
      </div>
      
    </div>
  )
};

export default LearnMore;