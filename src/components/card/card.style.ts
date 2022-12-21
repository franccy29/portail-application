import { styled, SxProps } from '@mui/material';
import { color } from '../../style/color';

export const CardStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  '.bottom-part': {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px 10px',
    backgroundColor: color.detailColor,
    a: {
      color: 'white',
      textDecoration: 'none'
    },
    '.theme': {
      fontWeight: '900',
      fontSize: '13',
      color: color.secondaryColor
    },
    '.title': {
      fontWeight: '900',
      fontSize: '16',
      color: 'white'
    },
    '.description': {
      color: 'white'
    }
  }
});
