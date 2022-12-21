import React from 'react';
import { CardStyle } from './card.style';

type Props = {
  image?: any;
  theme: string;
  title: string;
  description: string;
  onClick: Function;
};

const Card: React.FC<Props> = ({ onClick, image, theme, title, description }) => (
  <CardStyle className={ 'card-element' } onClick={ () => onClick() }>
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
    </div>
  </CardStyle>
);

export default Card;
