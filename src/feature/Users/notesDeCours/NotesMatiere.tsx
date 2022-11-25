import React from "react";

type Props = {
  navigator: (nomDePage: string) => void;
  matiereChoose: (nomDePage: string) => void;
  matiere: string;
  img: string;
};

const NotesMatiere: React.FC<Props> = ({
  navigator,
  matiereChoose,
  matiere,
  img,
}) => {
  const handleClick = () => {
    matiereChoose(matiere);
    navigator("NotesList");
  };
  return (
    <div onClick={handleClick}>
      <h2>{matiere}</h2>
      <p>
        mettre img based on standar sur {matiere} ou sinon ce lien la {img}
      </p>
    </div>
  );
};

export default NotesMatiere;
