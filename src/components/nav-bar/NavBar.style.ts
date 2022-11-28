import { styled } from "@mui/material";

export const NavBarStyled = styled('div')({
  backgroundColor: '#189e5e',
  display: 'flex',
  justifyContent: 'space-between',

  'navbar-links': {
    display: 'flex',
    gap: '5px',
    color: '#0051FF',
  },
});