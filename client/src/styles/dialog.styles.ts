import { makeStyles } from 'tss-react/mui';

export const useDialogStyles = makeStyles()((theme) => ({
  dialog: {
    height: '100vh',
    width: '100vw',
    zIndex: 10000
  },
  dialogContainer: {
    width: '300px !important',
    height: '300px',
  },
  differenceDialog: {
    height: 'fits-content',
    width: '100vw',
    zIndex: 10000
  },
  differenceDialogContainer: {
    width: '80%',
    maxWidth: '80%',
    minHeight: '60%'
  },
  differenceDialogActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: '8px', 
    backgroundColor: theme.palette.grey[100]
  },
  envDialogContainer: {
    height:'100%',
  },
  dialogForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%'
  },
  dialogFormLoading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    height: '100%'
  },
  dialogTitle: {
    backgroundColor: theme.palette.grey[100]
  },
  dialogActions: {
    backgroundColor: theme.palette.grey[100],
    padding: '0px'
  },
  dialogCompareTabs: {
    width: '50%',
    maxWidth: '50%',
  }
}));
