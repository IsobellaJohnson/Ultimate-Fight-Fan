import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Search from './NavSearch'
import './Navbar.css';
import {useNavigate} from 'react-router-dom';

const pages = ['Rankings', 'Athletes', 'Events'];

function Navbar() {
    const navigate = useNavigate(); // Get the navigate function

    // Handle button click and navigate to the corresponding page
    const handleButtonClick = (page) => {
      switch (page) {
        case 'Rankings':
          navigate('/rankings');
          break;
        case 'Athletes':
          navigate('/athletes');
          break;
        case 'Events':
          navigate('/events');
          break;
        default:
          // Handle default case or do nothing
          break;
      }
    };

  return (
    <AppBar className="nav-container" position="static" sx={{ width: '90%', backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar disableGutters>
        <Container maxWidth="lg" sx={{ display: 'flex'}}>
          {/* Navigation buttons (Rankings, Athletes, Events) on the left */}
          <Box className="btn-box">
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleButtonClick(page)}
                className="nav-btn"
                sx={{
                  color: 'black',
                  display: 'block',
                  fontFamily: `'Oswald', sans-serif`,
                  fontSize: '18px !important',
                  fontWeight: '600',
                  margin: '0 10px', // Add spacing between buttons
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Logo in the center */}
          <Box className="logo-box">
            <img className="logo" src='./uff-logo.png' alt="Logo" />
          </Box>

          {/* Login/Signup buttons on the right */}
          <Box className="btn-box">
            <Search/>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
