import React from 'react';
import { NavLink, redirect } from 'react-router-dom';
import { LinkButtonStyle } from './link-button.style';


type Props = {
  children: string;
  link: string;
  onClick: Function;
};

const LinkButton: React.FC<Props> = ({ children, link, onClick }) => (
  <LinkButtonStyle>
    <NavLink
      to={ link }
      style={({ isActive }) =>
        isActive ? { color: '#f9f7f6' } : { color: '#5819c0' }
      }
      onClick={ () => onClick() }
    >
      { children }
    </NavLink>
  </LinkButtonStyle>
);

export default LinkButton;
