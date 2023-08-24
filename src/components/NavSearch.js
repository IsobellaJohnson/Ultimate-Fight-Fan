import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  transition: 'width 0.3s ease', // Add transition for smooth animation
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  cursor: 'pointer',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  transition: 'width 0.3s ease', // Add transition for smooth animation
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black !important',
  cursor: 'pointer', // Add cursor pointer to indicate clickability
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: 0, // Initially set width to 0 to hide the input
    fontFamily: `'Poppins', sans-serif`,
    color: 'black !important',
    curosr: 'pointer',
    transition: 'width 0.3s ease', // Add transition for smooth animation
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
    },
  },
}));

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleInput = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
    <Search>
      <SearchIconWrapper onClick={toggleInput} >
        <SearchIcon onClick={toggleInput} sx={{ cursor: 'pointer' }}/>
      </SearchIconWrapper>
      {isExpanded && (
        <StyledInputBase
          autoFocus // Automatically focus the input when it appears
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      )}
    </Search>
    </>
  );
}
