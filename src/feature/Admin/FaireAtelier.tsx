import React from 'react';
import CreeChoixMultiple from './CreeChoixMultiple';

type Props = {
  id: number;
  exercise: {
    type: number;
    question: string;
    image?: string | undefined;
    reponse: string | number;
    choix: string[];
  };
  setExercise: React.Dispatch<React.SetStateAction<{
    type: number;
    question: string;
    image?: string | undefined;
    reponse: string | number;
    choix: string[];
}>>
};

const FaireAtelier: React.FC<Props> = (props) => {
  const {
    id,
    exercise,
    setExercise,
  } = props;

  const handleTypeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setExercise({ ...exercise, type: Number(e.target.value)})

  };

  const handleReponse = (e: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setExercise({ ...exercise, reponse: String(e.target.value)})
  };

  return (
    <div>
      <h1>Exercise #{id + 1}</h1>
      <div>
        <select value={exercise.type} onChange={handleTypeChange}>
          <option value={1}>texte</option>
          <option value={2}>Choix de reponse</option>
        </select>
      </div>
      <p>c'est quoi la question?</p>
      <input onChange={(e) => setExercise({ ...exercise, question: e.target.value})} value={exercise.question}></input>
      <p>tu met une image?(un lien live)</p>
      <input onChange={(e) => setExercise({ ...exercise, image: e.target.value})} value={exercise.image}></input>
      {exercise.type === 1 ? (
        <div>
          <p>cest quoi la reponse?</p>
          <input onChange={handleReponse} value={exercise.reponse}></input>
        </div>
      ) : (
        <CreeChoixMultiple exercise={exercise} setExercise={setExercise} />
      )}
    </div>
  );
};

export default FaireAtelier;
