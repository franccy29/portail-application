import React from "react";

type Props = {
  navigator: React.Dispatch<React.SetStateAction<string>>;
};

const ModifierNotes: React.FC<Props> = ({ navigator }) => {
  return (
    <div>
      <h1>MODIF Notes</h1>
      <p onClick={() => navigator("home")}>retour au menu</p>
      <p>show tout les notes avec loption modifier</p>
    </div>
  );
};

export default ModifierNotes;
