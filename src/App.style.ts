import { styled } from '@mui/material';
import { color } from './style/color';

export const AppStyled = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '.feature': {
    height: '100%',
    padding: '30px 15%',
    backgroundColor: color.backgroundColor,
  }
});