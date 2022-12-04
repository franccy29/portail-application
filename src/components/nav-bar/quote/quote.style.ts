import { styled } from '@mui/material';

export const QuoteStyled = styled('div')({
  color: 'white',
  display: 'flex',
  width: '20em',
  marginLeft: '3%',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  '.MuiSvgIcon-root': {
    display: 'flex',
    alignSelf: 'center',
    marginRight: '10px'
  }
});