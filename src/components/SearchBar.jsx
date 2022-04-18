import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha} from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    onSearch(city);
    setCity('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <Search>
            <SearchIconWrapper>
              <IconButton aria-label="open drawer" color="inherit" type="sumbit" value='submit'>
                <SearchIcon />
              </IconButton>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Ciudad..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={e => setCity(e.target.value)}
              value={city}
              type='text'
            />
      </Search>
    </form>
  );
}
