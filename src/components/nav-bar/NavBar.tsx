import React from 'react';
import LinkButton from '../link-button/link-button';
import { NavBarStyled } from './NavBar.style';
import Quote from './quote/quote';

type Props = {};

const NavBar: React.FC<Props> = () => (
  <NavBarStyled>
    <Quote />
    <div className={ 'navbar-links' }>
      <LinkButton link={ '/acceuil' }>ACCUEIL</LinkButton>
      <LinkButton link={ '/notes' }>NOTES DE COURS</LinkButton>
      <LinkButton link={ '/ateliers' }>ATELIERS</LinkButton>
      <LinkButton link={ '/capsules' }>CAPSULES</LinkButton>
      <LinkButton link={ '/tests' }>TESTS</LinkButton>
      <LinkButton link={ '/ressources' }>RESSOURCES</LinkButton>
    </div>
  </NavBarStyled>
);

export default NavBar;
