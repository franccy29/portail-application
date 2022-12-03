import { styled } from "@mui/material";

export const NavBarStyled = styled('div')({
  backgroundColor: '#00c0f6',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',

  '.navbar-links': {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
  },
});