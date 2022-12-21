import React from 'react';
import Card from '../../components/card/card';

import ski from '../../assets/ski.png';
import { AteliersStyled } from './Ateliers.style';

type Props = {};

const dummyValues = [
  {
    theme: 'français',
    title: 'titre',
    description: 'desc',
    onClick: () => console.log('lets go'),
  },
  {
    theme: 'anglais',
    title: 'titre',
    description: 'desc',
    onClick: () => console.log('lets go'),
  },
  {
    theme: 'maths',
    title: 'titre',
    description: 'desc',
    onClick: () => console.log('lets go'),
  },
  {
    theme: 'géo',
    title: 'titre',
    description: 'desc',
    onClick: () => console.log('lets go'),
  },
];

/*
  TODO  

  voir si c'est possible de get de l'API theme title desc image pi ID que le id serait passer
  à card mais genre atelier/${id} pi card lui ferait un link sur son onClick 

  le styling est cassé, le background color fuck dans le bas idk why
*/

const Ateliers: React.FC<Props> = () => {
  const cardDisplay = dummyValues.map((elem, index) => <Card {...elem} image={ ski } key={ elem.title + index } />);
  return (
  <AteliersStyled>
    <h1>ATELIER</h1>
    { cardDisplay }
  </AteliersStyled>
  )
};

export default Ateliers;
