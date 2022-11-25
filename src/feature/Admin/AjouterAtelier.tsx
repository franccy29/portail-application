import React, { useState } from "react";
import FaireAtelier from "./FaireAtelier";

type Props = {
  navigator: React.Dispatch<React.SetStateAction<string>>;
};

const AjouterAtelier: React.FC<Props> = ({ navigator }) => {
  const [questionArray, setQuestionArray] = useState<{type: number, question: string, image?: string, reponse: string | number, choix: string[]}[]>([]);
  const [semaineChoisis, setSemaineChoisis] = useState<number>(0);
  const [titreAtelier, setTitreAtelier] = useState<string>("");
  const [erreurForm, setErreurForm] = useState<Boolean>(false);
  const [exercise, setExercise] = useState<{type: number, question: string, image?: string, reponse: string | number, choix: string[]}>({
    type: 1, question: "", image: "", reponse: 1, choix: ["", "", "", ""]
  });

  const handleSemaine = (input: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    if (Number(input.target.value) <= 45) {
      setSemaineChoisis(Number(input.target.value));
    }
  };


  const ajouterQuestions = () : void => {
    if (exercise.question !== "" && exercise.reponse !== 1 && ( exercise.reponse !== 1 ) ) {
      setQuestionArray([ ...questionArray, exercise ]);
      setExercise({type: 1, question: "", image: "", reponse: 1, choix: ["", "", "", ""]});
      setErreurForm(false);
    } else {
      setErreurForm(true);
    }
  };

  const saveAtelier = (): void => {
    const objectAEnvoyer: {} = {
      titre: titreAtelier,
      semaineChoisis: semaineChoisis,
      questions: questionArray
    };
    if (questionArray.length > 0) {
      console.log("envoye ca au backend: ", objectAEnvoyer);
      setQuestionArray([]);
      navigator("home");
    }
  };

  return (
    <div>
      <h1>ajoute un atelier ici</h1>
      <p onClick={() => navigator("home")}>retour au menu</p>
      <p>
        faire un formulaire qui demande la matiere, si cest un test ou atelier
        pi apres avoir infini de question ajoutable que tu choose entre text ou
        choix de reponse
      </p>

      <p>
        La semaien et le titre update pas dans lobjet...live je me dit de el
        faire en useState avec un set state qui prend le old object a chaque on
        change du input might work, pas sur, a voir!
      </p>
      <p>quel titre va avoir ton exercises?</p>
      <input
        placeholder={titreAtelier}
        onChange={(e) => setTitreAtelier(e.target.value)}
        value={titreAtelier}
      />
      <p>La question est pour quelle semaine?</p>
      <input
        placeholder={String(semaineChoisis)}
        onChange={handleSemaine}
        value={semaineChoisis}
      />
      <FaireAtelier
        id={questionArray.length}
        exercise={exercise}
        setExercise={setExercise}
      />
      {erreurForm && <p>les field sont pas correct pik voyon donc</p>}
      <button onClick={() => console.log("c po fait")}>bouton genre back mais po fait</button>
      <button onClick={ajouterQuestions}>lets go, une autrte activité</button>
      <button onClick={saveAtelier}>finito pipo, tout est fait</button>
    </div>
  );
};

export default AjouterAtelier;
