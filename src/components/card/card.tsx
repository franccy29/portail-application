import React from 'react';
import { Button } from '@mui/material';
import { buttonStyle, CardStyle } from './card.style';
import { Link } from 'react-router-dom';


type Props = {
  button: string;
  image?: any;
  theme: string;
  title: string;
  description: string;
  link: string;
};

const Card: React.FC<Props> = ({ button, image, theme, title, description, link }) => (
  <CardStyle className={ 'card-element' }>
    { image &&
      <img
        src={ image }
        alt={ 'theme de matiere' }
        width={ '300' }
        height={ '200' }
      />
    }
    <div className={ 'bottom-part' }>
      <span className={ 'theme' }>
        { theme }
      </span>
      <span className={ 'title' }>
        { title }
      </span>
      <span className={ 'description' }>
        { description }
      </span>
      <Button
        children={ <Link to={ link }>{button}</Link> }
        variant={ 'contained' }
        sx={ buttonStyle }
      />
    </div>
  </CardStyle>
);

export default Card;
