import React from "react";
import { TipsAndUpdates } from '@mui/icons-material';
import { QuoteStyled } from "./quote.style";

type Props = {};

const Quote: React.FC<Props> = () => (
  <QuoteStyled>
    <TipsAndUpdates />
    <div>
      <span>"L'éducation est l'arme la plus puissante pour changer le monde."</span>
      <span>-Nelson Mandela</span>
    </div>
  </QuoteStyled>
);

export default Quote;
