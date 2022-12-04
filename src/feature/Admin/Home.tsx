import React, { useState } from 'react';

type Props = {};

const Home: React.FC<Props> = () => {
  const weekFormUseEffect: number = 5;

  const [nomberOfWeek, setNumberOfWeek] = useState<number>(weekFormUseEffect);
  const [inputWeek, setInputWeek] = useState<number>(nomberOfWeek);

  const handleNumberOfWeek = (num: number): void => {
    setNumberOfWeek(num);
    console.log('set dans la db le nombre de week a : ', num);
    // faire quil set ca dans la db
  };

  const handleChange = (input: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    if (
      !isNaN(Number(input.target.value)) &&
      Number(input.target.value) <= 45
    ) {
      setInputWeek(Number(input.target.value));
    }
  };

  return (
    <div>
      <h1>
        WHATS UPPPPPPPPPPPPPPPPPPPPPPPP PIKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK!!!!!!
      </h1>
      <h2>Tu veux add quoi?</h2>
      <div>
        <p>Tu veux show combien de semaines?(45 et moin sont écrivable)</p>
        <input
          placeholder={String(nomberOfWeek)}
          onChange={handleChange}
          value={inputWeek}
        />
        <button onClick={() => handleNumberOfWeek(inputWeek)}>
          Set a ce nombre de semaine la
        </button>
      </div>
      {/* <p onClick={() => navigator('AjouterAtelier')}>Un Atelier?</p>
      <p onClick={() => navigator('AjouterNotes')}>Des notes de cours?</p>
      <h2>Tu modifier quoi?</h2>
      <p onClick={() => navigator('ModifierAtelier')}>Un Atelier?</p>
      <p onClick={() => navigator('ModifierNotes')}>Des notes de cours?</p> */}
    </div>
  );
};

export default Home;
