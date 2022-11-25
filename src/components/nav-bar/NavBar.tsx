import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const NavBar: React.FC<Props> = () => (
  <div>
    <div>
      <span>
        "L'éducation est l'arme la plus puissante pour changer le monde."
      </span>
      <span>-Nelson Mandela</span>
    </div>
    <Link to={ 'ACCUEIL' }>ACCUEIL</Link>
    <Link to={ 'NOTES' }>NOTES</Link>
    <Link to={ 'ATELIERS' }>ATELIERS</Link>
    <Link to={ 'TESTS' }>TESTS</Link>
  </div>
);

export default NavBar;
