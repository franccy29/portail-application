import React, { useState } from "react";

type Props = {
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
}>>;
};

let textArray: string[] = ["", "", "", ""];
const CreeChoixMultiple: React.FC<Props> = ({ exercise, setExercise }) => {
  const [checked, setChecked] = useState<number>(1);

  const handleChange = (num: number): void => {
    setChecked(num);
    setExercise({ ...exercise, reponse: num})
  };

  const setText = (leChoix: string, laValue: number): void => {
    textArray[laValue - 1] = leChoix;
    setExercise({ ...exercise, choix: textArray})

  };

  return (
    <div>
      <p>cest quoi les choix?(sellectionne la reponse)</p>
      <p>
        faire les choix avec des input qui radio dot pour choisir lequel est le
        bon
      </p>
      <div>
        <div>
          <input
            type="radio"
            onChange={() => handleChange(1)}
            checked={checked === 1}
          />
          <input onChange={(e) => setText(e.target.value, 1)}></input>
        </div>
        <div>
          <input
            type="radio"
            onChange={() => handleChange(2)}
            checked={checked === 2}
          />
          <input onChange={(e) => setText(e.target.value, 2)}></input>
        </div>
        <div>
          <input
            type="radio"
            onChange={() => handleChange(3)}
            checked={checked === 3}
          />
          <input onChange={(e) => setText(e.target.value, 3)}></input>
        </div>
        <div>
          <input
            type="radio"
            onChange={() => handleChange(4)}
            checked={checked === 4}
          />
          <input onChange={(e) => setText(e.target.value, 4)}></input>
        </div>
      </div>
    </div>
  );
};

export default CreeChoixMultiple;
