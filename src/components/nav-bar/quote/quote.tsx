import React from "react";
import { EmojiObjects } from '@mui/icons-material';
import { QuoteStyled } from "./quote.style";

type Props = {};

const Quote: React.FC<Props> = () => (
  <QuoteStyled>
    <EmojiObjects fontSize={ "large" } />
    <div>
      <span>"L'éducation est l'arme la plus puissante pour changer le monde."</span>
      <span>-Nelson Mandela</span>
    </div>
  </QuoteStyled>
);

export default Quote;
