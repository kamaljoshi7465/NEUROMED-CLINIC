import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light', // 'dark' for dark mode
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    background: { default: '#f7f7fb', paper: '#ffffff' },
  },
  typography: {
    fontFamily: ['Roboto', 'system-ui', 'Arial', 'sans-serif'].join(','),
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { variant: 'contained' },
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 10 },
      },
    },
  },
});

// Make typography scale with viewport
theme = responsiveFontSizes(theme);

export default theme;
