import React from 'react';
import Card from '../../components/card/card';
import ski from '../../assets/images/ski.png'
import { NotesStyle } from './notes.style';

type Props = {};

const Notes: React.FC<Props> = () => {

  const dummyValues = [
    <Card
      image={ ski }
      theme={ 'test' }
      title={ 'test' }
      description={ 'test' }
      button={ 'faire latelier' }
      link={ '/notes/test' }
    />,
    <Card
      image={ ski }
      theme={ 'test' }
      title={ 'test' }
      description={ 'test' }
      button={ 'faire latelier' }
      link={ '/notes/test' }
      />,
      <Card
        image={ ski }
        theme={ 'test' }
        title={ 'test' }
        description={ 'test' }
        button={ 'faire latelier' }
        link={ '/notes/test' }
      />,
      <Card
        image={ ski }
        theme={ 'test' }
        title={ 'test' }
        description={ 'test' }
        button={ 'faire latelier' }
        link={ '/notes/test' }
      />
  ];

  return (
  <NotesStyle>
    <h1>
      NOTE SEMAINE XX
    </h1>
    <div>
      { dummyValues }
    </div>
  </NotesStyle>
  );
};

export default Notes;
