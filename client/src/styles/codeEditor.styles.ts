import { makeStyles } from 'tss-react/mui';

export const useCodeEditorStyles = makeStyles()((theme) => ({
  editor: {
    counterReset: 'line',
    width: '50%',
    height: 'fit-content',
    margin: '10px',
    border: `2px solid ${theme.palette.grey[100]}`,
    borderRadius: '2px',
    '& #codeArea': {
      outline: 'none',
      paddingLeft: '60px !important'
    },
    '&:focus-within': {  
      border: '2px solid #1976d2'

    },
    '& pre': {
      paddingLeft: '60px !important'
    },
    '& .editorLineNumber': {
      position: 'absolute',
      left: '0px',
      color: '#636363',
      backgroundColor: '#f5f5f5',
      textAlign: 'right',
      width: '40px',
      paddingRight: '12px',
      fontWeight: '300',
      height: '100%',
    }
  },
}))