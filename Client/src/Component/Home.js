import "../styles/home.css";
import { Link } from "react-router-dom";
import resto from '../images/resto.jpg'

export default function Home() {
  
  return (
    <>
      <div className="flex flex-col h-full justify-between">
        
        <div className="middle-elements">
          <img src={resto} alt = "resto" className="pic" ></img>
          <div className="main-text">
          <h3>Bienvenue chez Le Gourmet Elegance</h3>
            <h1>Fine Dining, at its Finest.</h1>
            <h2>
              Le Gourmet Elegance est un restaurant de haute cuisine où
              l'élégance rencontre la gastronomie.
            </h2>
            <h2>
              Chez Le Gourmet Elegance, chaque détail est soigneusement pensé
              pour offrir à nos clients une expérience mémorable.
            </h2><br></br>
            <div className="links">
              <button><Link to="/login">Se connecter</Link></button>
              <button><Link to="/signup">Creer un compte</Link></button>
              <button><Link to="/learnmore">En savoir plus</Link></button>
          </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
