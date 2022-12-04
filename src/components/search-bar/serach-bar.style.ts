import { styled } from '@mui/material';
import { color } from '../../style/color';

export const SearchBarStyled = styled('div')({
  backgroundColor: color.secondaryColor,
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '10%'
});

export const InputStyle = () => ({
  margin: '10px',
  border: `1px solid ${ color.primaryColor }`,
  '.MuiInputBase-input': {
    color: color.primaryColor,
  }
});
