import React, { useState } from 'react';

type Props = {
  choix: string[] | undefined;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const ChoixMultiple: React.FC<Props> = ({ choix, setValue }) => {
  const [selected, setSelected] = useState<number>(0);

  const handleChange = (num: number): void => {
    setValue(num);
    setSelected(num);
  };

  return (
    <div>
      <form>
        <div className='radio'>
          <label>
            <input
              type='radio'
              checked={selected === 1}
              onChange={() => handleChange(1)}
            />
            {choix && choix[0]}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input
              type='radio'
              checked={selected === 2}
              onChange={() => handleChange(2)}
            />
            {choix && choix[1]}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input
              type='radio'
              checked={selected === 3}
              onChange={() => handleChange(3)}
            />
            {choix && choix[2]}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input
              type='radio'
              checked={selected === 4}
              onChange={() => handleChange(4)}
            />
            {choix && choix[3]}
          </label>
        </div>
      </form>
    </div>
  );
};

export default ChoixMultiple;
