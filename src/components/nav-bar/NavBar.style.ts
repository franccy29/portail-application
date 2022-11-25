import { styled } from "@mui/material";

export const NavBarStyled = styled('div')({
  backgroundColor: '#00C9FF',
  display: 'flex',
  justifyContent: 'space-between',

  'navbar-links': {
    display: 'flex',
    gap: '5px',
    color: '#0051FF',
  },
});