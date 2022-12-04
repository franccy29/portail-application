import React from 'react';

type Props = {
  id: number;
  matière: string;
  titre: string;
  onClick: (idChoosen: number) => void;
};

const AtelierUnique: React.FC<Props> = ({ id, matière, titre, onClick }) => {
  return (
    <div onClick={() => onClick(id)}>
      <p>le id: {id}</p>
      <h2>{titre}</h2>
      <p>une image based on la matiere: {matière}</p>
    </div>
  );
};

export default AtelierUnique;
