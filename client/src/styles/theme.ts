import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans",Arial,Helvetica,Sans-Serif',
    fontSize: 13,
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: '"Open Sans",Arial,Helvetica,Sans-Serif',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: '#3276b1',
          borderColor: '#2c699d',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#296191',
            borderColor: '#1f496d',
          }
        },
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          '&:active': {
            color: '#3276b1', 
          },
          '&:hover': {
            backgroundColor: '#fff'
          },
        }
      }
    }
  },
});

export default theme;
