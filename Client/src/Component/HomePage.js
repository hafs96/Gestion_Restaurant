import "../styles/homepage.css";
import resto from '../images/resto.jpg'

export default function Home() {
  
  return (
    <>
      <div className="flex flex-col h-full justify-between">
        <div className="elements">
        <p>Bienvenue chez <br />
            Le Gourmet Elegance </p>
          <img src={resto} alt = "resto" className="picture" ></img>
        </div>
      </div>
    </>
  );
}