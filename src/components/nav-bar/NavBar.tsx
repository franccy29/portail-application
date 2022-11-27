import React from "react";
import { Link } from "react-router-dom";
import { NavBarStyled } from "./NavBar.style";
import Quote from "./quote/quote";

type Props = {};

const NavBar: React.FC<Props> = () => (
  <NavBarStyled>
    <Quote />
    <div className={ 'navbar-links' }>
      <Link to={ 'Acceuil' }>ACCUEIL</Link> // gsd
      <Link to={ 'Notes' }>NOTES</Link>
      <Link to={ 'Ateliers' }>ATELIERS</Link>
      <Link to={ 'Tests' }>TESTS</Link>
    </div>
  </NavBarStyled>
);

export default NavBar;
