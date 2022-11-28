import { Input } from "@mui/material";
import React from "react";
import { SearchBarStyled } from "./serach-bar.style";


type Props = {};

const SearchBar: React.FC<Props> = () => (
  <SearchBarStyled>
    <Input />
  </SearchBarStyled>
);

export default SearchBar;
