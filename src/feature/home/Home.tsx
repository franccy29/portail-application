import React from 'react';
import abc from '../../assets/abc.png';
import { HomeStyled } from './Home.style';

type Props = {};

const Home: React.FC<Props> = () => (
  <HomeStyled>
    <img src={ abc } alt={ 'alphabet' } height={ '517,6px' } width={ '781px' } />
    <p>SECTION DE NEWS</p>
  </HomeStyled>
);

export default Home;
