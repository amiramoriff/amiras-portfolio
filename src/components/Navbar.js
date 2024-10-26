import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Navbar = () => {
    const theme = useTheme();
    return (
        <AppBar position="fixed" sx={{ backgroundColor: theme.palette.dark.main }}>
            <Toolbar>
                <Button variant="h6" component="div" href="#home" 
                sx={{ fontWeight: 'bold',flexGrow: 1, color: theme.palette.background.main,
                display: 'flex', alignItems: 'left', justifyContent: 'flex-start', '&:hover': {
                            color: theme.palette.secondary.main,
                        }  }}>
                    Amira Moriff
                    <FavoriteIcon sx={{ color: theme.palette.background.main, verticalAlign: 'middle',marginLeft: 1, '&:hover': {
                            color: theme.palette.secondary.main,
                        } }}/>
                </Button>
                <Button href="#home" sx={{ color: theme.palette.background.main  }}>
                    Home
                </Button>
                <Button  href="#about" sx={{ color: theme.palette.background.main  }}>
                    About
                </Button>
                <Button  href="#projects" sx={{ color: theme.palette.background.main  }}>
                    Projects
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;