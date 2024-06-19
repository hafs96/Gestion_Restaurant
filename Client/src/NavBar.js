import React from 'react';
import './styles/navbar.css';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
export default function NavBar() {
  return (
    <div>
      <nav className='nav'>
        <ul><h3 className='titre'>Le Gourmet Elegance</h3></ul>
        
        <ul className='nav-middle'>
            <CustomLink to='/Reservations'>Reservations</CustomLink>
            <CustomLink to='/tables'>Tables</CustomLink>
            <CustomLink to='/learnmore'>En savoir plus</CustomLink>
        </ul>
        <ul>
            <Link to='/'>Se deconnecter</Link>
        </ul>
          
      </nav>
    </div>
  )
}

function CustomLink({to, children, ...prop}){
    const ResolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: ResolvedPath.pathname, end: true});

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...prop}>
                {children}
            </Link>
        </li>
    )
}
