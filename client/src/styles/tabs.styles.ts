import { makeStyles } from 'tss-react/mui';

export const useTabsStyles = makeStyles()(() => ({
  compareTypes: {
    width: '50%',
    maxWidth: '50%',
  },
  artifactTypes: {
    width: '25%',
    maxWidth: '25%'
  },
  configTypes: {
    width: '33.3%',
    maxWidth: '33.3%',
  },
  configOptions: {
    margin: '10px',
    flexBasis: 'calc(50% - 20px)'
  },
  configOptionsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '32px',
  }
}));