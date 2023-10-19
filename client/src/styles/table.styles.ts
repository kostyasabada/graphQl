import { BorderBottom } from '@mui/icons-material';
import { makeStyles } from 'tss-react/mui';

export const useTableStyles = makeStyles()(() => ({
  tableHeader: {
    borderTop: '1px solid rgba(224, 224, 224, 1)',
    borderLeft: '1px solid rgba(224, 224, 224, 1)',
    borderRight: '1px solid rgba(224, 224, 224, 1)'
  },
  table: {
    backgroundColor: '#fff'
  },
  tableColumnHeader: {
    backgroundColor: '#F9F9F9',
    outline: 'none',
    '&:focus': {
      outline: 'none !important',
    },

    '&:focus-within': {
      outline: 'none !important',
    },
  },

  tableColumnCell: {
    '&:focus': {
      outline: 'none !important',
    },

    '&:focus-within': {
      outline: 'none !important',
    },
  },

  tableRow: {
    '&:nth-of-type(2n)': {
      backgroundColor: '#F9F9F9',
    },

    '&:hover': {
      backgroundColor: 'transparent !important',
      cursor: 'pointer'
    },

    '&:hover:nth-of-type(2n)': {
      backgroundColor: '#F9F9F9 !important',
    },
  },

  warningTableRow: {
    borderBottom: '2px solid orange',
    '&:last-of-type': {
      borderBottom: '1px solid orange',
    }
  },

  errorTableRow: {
    borderBottom: '2px solid red',
    '&:last-of-type': {
      borderBottom: '1px solid red',
    }
  }
}));
