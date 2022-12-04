import { Input } from '@mui/material';
import React from 'react';
import { InputStyle, SearchBarStyled } from './serach-bar.style';
import { Search } from '@mui/icons-material';


type Props = {};

const SearchBar: React.FC<Props> = () => (
  <SearchBarStyled>
    <Input
      defaultValue={ 'Recherche...' }
      startAdornment={ <Search sx={{ color: '#8ae5ff', margin: '5px' }} /> }
      sx={ InputStyle }
    />
  </SearchBarStyled>
);

export default SearchBar;
  