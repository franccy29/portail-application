import React, { useState } from "react";

type Props = {
  navigator: React.Dispatch<React.SetStateAction<string>>;
};

const AjouterNotes: React.FC<Props> = ({ navigator }) => {
  const [semaineChoisis, setSemaineChoisis] = useState<number>(0);
  const [titreNote, setTitreNote] = useState<string>("");
  const [matiere, setMatiere] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [typeAide, setTypeAide] = useState<string>("");
  const [aideLien, setAideLien] = useState<string>("");



  const handleSemaine = (input: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    if (Number(input.target.value) <= 45) {
      setSemaineChoisis(Number(input.target.value));
    }
  };

  const noteFini = (): void => {
    const finalNote: {} = {
      titre: titreNote,
      semaine: semaineChoisis,
      matiere: matiere,
      description: description,
      typeAide: typeAide,
      aideLien: aideLien
    };
    console.log("envoyer a la db: ", finalNote);
    navigator("home");
  };

  return (
    <div>
      <h1>ajoute des notes de cours</h1>
      <p onClick={() => navigator("home")}>retour au menu</p>
      <div>
      <p>quel titre va avoir tes notes de cours?</p>
      <input
        placeholder={titreNote}
        onChange={(e) => setTitreNote(e.target.value)}
        value={titreNote}
      />
      </div>
      <div>
      <p>La question est pour quelle semaine?</p>
      <input
        placeholder={String(semaineChoisis)}
        onChange={handleSemaine}
        value={semaineChoisis}
      />
      </div>
      <div>
      <p>pour quel matiere?</p>
      <select value={matiere} onChange={(e) => setMatiere(e.target.value)}>
        <option value={"Francais"}>Francais</option>
        <option value={"Anglais"}>Anglais</option>
        <option value={"Maths"}>Maths</option>
      </select>
      </div>
      <div>
      <p>met une description ou plus de texte, peut meme etre les ?</p>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      </div>
      <div>
      <p>video, pdf, rien?</p>
      <select value={typeAide} onChange={(e) => setTypeAide(e.target.value)}>
        <option value={"pdf"}>pdf</option>
        <option value={"video"}>video</option>
        <option value={"rien"}>rien</option>
      </select>
      </div>
      <div>
      <p>un lien vers un pdf ou video(laisse vide si rien)?</p>
      <input
        onChange={(e) => setAideLien(e.target.value)}
        value={aideLien}
      />
      </div>
      <div>
      <button onClick={noteFini}>La note est fini</button>
      </div>
    </div>
  );
};

export default AjouterNotes;
