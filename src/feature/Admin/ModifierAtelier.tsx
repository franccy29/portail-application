import React from 'react';

type Props = {
  navigator: React.Dispatch<React.SetStateAction<string>>;
};

const ModifierAtelier: React.FC<Props> = ({ navigator }) => {
  return (
    <div>
      <h1>MODIF ATELIER</h1>
      <p onClick={() => navigator('home')}>retour au menu</p>
      <p>
        show tout les ateliers qui apres peuvent ouvrir en paquet de questions
        qui sont modifiable ou deletable
      </p>
    </div>
  );
};

export default ModifierAtelier;
