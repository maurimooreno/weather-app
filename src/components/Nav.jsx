import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'


const NavBarTypography = styled('span')(({theme}) => ({
  textDecorationLine: 'none',
  color: 'white'
}))

function Nav({onSearch}) {
  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
            <IconButton 
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <img id="logoHenry" src={Logo} width="30" height="30" alt="" />
            </IconButton>
            <Typography 
              variant="h6"
              noWrap
              component= {NavBarTypography}
              sx={{flexGrow: 1, display: 'flex', justifyContent: 'space-evenly'}}
            >
            <Link to={'/'}>
              <NavBarTypography>
                  Weather App
              </NavBarTypography>
            </Link>
            <Link to={'/about'}>
              <NavBarTypography>
                About
              </NavBarTypography>
            </Link>
            </Typography>
            <SearchBar onSearch={onSearch}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
