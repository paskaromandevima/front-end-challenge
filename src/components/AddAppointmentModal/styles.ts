import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 400,
    minHeight: 400,
    backgroundColor: '#fff',
    padding: 25,
    margin: '0 auto'
  },
});

export default useStyles;
