import { styled } from '@mui/material';
import { color } from '../../style/color';

export const CapsulesStyle = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '50px',
  h1: {
    color: color.secondaryColor,
  },
  div: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '.card-element': {
      margin: '25px',
    }
  }
});
