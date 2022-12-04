import { styled } from '@mui/material';
import { color } from '../../style/color';

export const HomeUserStyled = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '60px',
  h1: {
    color: color.secondaryColor,
  }
});
