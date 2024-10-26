// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            main: '#FFE6E8', //light pink
        },
        primary: {
            main: '#E78F8E', //medium pink
        },
        secondary: {
            main: '#ACD8AA', // light green
        },
        dark: {
            main: '#8E3B46', // dark pink
        },
        accent: {
            main: '#F2CCC3' //medium-light pink
        }
    },
});

export default theme;