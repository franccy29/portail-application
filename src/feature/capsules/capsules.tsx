import React from 'react';
import Card from '../../components/card/card';
import ski from '../../assets/images/ski.png';
import { CapsulesStyle } from './capsules.style';

type Props = {};

const Capsules: React.FC<Props> = () => {
  const dummyValues = [
    <Card
      image={ ski }
      theme={ 'test' }
      title={ 'test' }
      description={ 'test' }
      button={ 'faire latelier' }
      link={ '/test' }
    />,
    <Card
      image={ ski }
      theme={ 'test' }
      title={ 'test' }
      description={ 'test' }
      button={ 'faire latelier' }
      link={ '/test' }
      />,
      <Card
        image={ ski }
        theme={ 'test' }
        title={ 'test' }
        description={ 'test' }
        button={ 'faire latelier' }
        link={ '/test' }
      />,
      <Card
        image={ ski }
        theme={ 'test' }
        title={ 'test' }
        description={ 'test' }
        button={ 'faire latelier' }
        link={ '/test' }
      />
  ];
  return (
    <CapsulesStyle>
      <h1>
        SEMAINE XX
      </h1>
      <div>
        { dummyValues }
      </div>
    </CapsulesStyle>
)};

export default Capsules;