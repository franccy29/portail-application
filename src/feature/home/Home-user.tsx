import React from 'react';
import abc from '../../assets/images/abc.png'; 
import { HomeUserStyled } from './home-user.style';

type Props = {};

const HomeUser: React.FC<Props> = () => (
  <HomeUserStyled>
    <h1>
      Classe de Pierre-Karl
    </h1>
    <img
      src={ abc }
      alt={ 'theme de matiere' }
      width={ '300' }
      height={ '200' }
    />
  </HomeUserStyled>
);

export default HomeUser;