import { makeStyles } from 'tss-react/mui';

export const useButtonStyles = makeStyles()(() => ({
  success: {
    backgroundColor: '#739e73',
    borderColor: '#659265',
    borderRadius: '2px',
    padding: '6px 12px',
    '&:hover': {
      backgroundColor: '#5f895f',
      borderColor: '#4c6e4c'
    }
  },
  error: {
    backgroundColor: '#a90329',
    borderColor: '#900323',
    borderRadius: '2px',
    padding: '6px 12px',
    '&:hover': {
      backgroundColor: '#81021f',
      borderColor: '#540114'
    }
  }
}));
