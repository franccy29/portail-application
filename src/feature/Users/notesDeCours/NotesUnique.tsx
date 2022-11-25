import React from "react";

type Props = {
  titre: string;
  lien: string;
};

const NotesUnique: React.FC<Props> = ({ titre, lien }) => {
  return (
    <div>
      <h2>Notes de cours</h2>
      <h2>{titre}</h2>
      <p>baser sur ce lien la {lien}</p>
    </div>
  );
};

export default NotesUnique;
