import { styled } from '@mui/material';
import { color } from '../../style/color';

export const NavBarStyled = styled('div')({
  backgroundColor: color.primaryColor,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',

  '.navbar-links': {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
  },
});