import { styled } from "@mui/material";

export const SearchBarStyled = styled('div')({
  backgroundColor: '#5a00b8',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '10%'
});

export const InputStyle = () => ({
  margin: '10px',
  border: '1px solid #00c0f6',
  '.MuiInputBase-input': {
    color: '#00c0f6',
  }
});
