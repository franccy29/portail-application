import React from "react";
import { NavLink, redirect } from "react-router-dom";
import { LinkButtonStyle } from "./link-button.style";


type Props = {
  children: string;
  link: string;
};

const LinkButton: React.FC<Props> = ({ children, link }) => (
  <LinkButtonStyle>
    <NavLink
      to={ link }
      style={({ isActive }) =>
        isActive ? { color: '#f9f7f6' } : { color: '#5819c0' }
      }
    >
      { children }
    </NavLink>
  </LinkButtonStyle>
);

export default LinkButton;
