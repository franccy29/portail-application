import React from "react";
import NotesMatiere from "./NotesMatiere";

type Props = {};

const matieres: { matiere: string; img: string }[] = [
  {
    matiere: "francais",
    img: "lien de limage",
  },
  {
    matiere: "anglais",
    img: "lien de limage",
  },
  {
    matiere: "maths",
    img: "lien de limage",
  },
];

const Notes: React.FC<Props> = () => {
  const matiereArray: JSX.Element[] = [];
  matieres.forEach((mat, index) =>
    matiereArray.push(
      <NotesMatiere
        key={index}
        navigator={() => false}
        matiereChoose={() => false}
        matiere={mat.matiere}
        img={mat.img}
      />
    )
  );

  return (
  <div>
    {matiereArray}
  </div>
  );
};

export default Notes;
