import React, { useState } from 'react';
import { NavBarStyled } from './NavBar.style';
import { Drawer } from '@mui/material';
import LinkButton from '../link-button/link-button';
import Quote from './quote/quote';
import { color } from '../../style/color';
import { Menu } from '@mui/icons-material';

type Props = {};

const NavBar: React.FC<Props> = () => {
  const [open, setOpen] = useState<boolean>(false);

  const close = () => {
    setOpen(false)
  };

  const backdropTrigger = (reason: string): void => {
    if (reason === 'backdropClick'){
      close();
    }
  };
  
  return (
  <NavBarStyled>
    <Menu onClick={ () => setOpen(true) } />
    <p>CLASSE 203</p>
    <Drawer
      open={ open }
      sx={ { '.MuiPaper-root' : { backgroundColor: color.detailColor, gap: '15px' } } }
      onClose={(ev, reason) => backdropTrigger(reason) }
    >
      <Quote />
      <LinkButton link={ '/home' } onClick={ () => close() }>ACCUEIL</LinkButton>
      <LinkButton link={ '/notes' } onClick={ () => close() }>NOTES ET CAPSULES</LinkButton>
      <LinkButton link={ '/ateliers' } onClick={ () => close() }>ATELIERS ET TESTS</LinkButton>
    </Drawer>
  </NavBarStyled>
)};

export default NavBar;
