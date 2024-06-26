import {createTheme, Theme, ThemeOptions} from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
  },
};

export const theme : Theme = createTheme(themeOptions);