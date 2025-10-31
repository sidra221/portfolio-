import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: { main: '#D85D9F' }, // rosy pink
    secondary: { main: '#7C6EE6' }, // soft violet
    background: { default: '#FFF7FB', paper: '#FFFFFF' },
    text: { primary: '#2B2236', secondary: '#6A5B76' },
  },
  typography: {
    fontFamily: [
      'Cairo',
      'InterVariable',
      'system-ui',
      'Segoe UI',
      'Arial',
    ].join(','),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
})

export default theme


