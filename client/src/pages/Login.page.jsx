import {
  Box,
  Card,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { LoadingButton } from '@mui/lab';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { authThunks } from '../store/slices/auth.slice';



const useStyle = makeStyles()(() => ({
  nameWord: {
    fontWeight: '400',
    letterSpacing: '-1px',
    fontSize: '24px',
  },
  oddWord: {
    color: '#00508A',
  },
  evenWord: {
    color: '#022764'
  }
}));

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { classes, cx } = useStyle();
  const navigate = useNavigate();

  return (
    <Box
      id='background'
      sx={{
        position: 'absolute',
        // backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      {/* <Header component='Login' /> */}
      <Box
        id='main'
        display='flex'
        flexDirection='column'
        alignItems='center'
        paddingTop='10vh'
      >
        <Box
          id='content-container'
          display='flex'
          minWidth='40%'
        >
         
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            onSubmit={async (values) => {
              console.log(values);
              const success = await dispatch(authThunks.login(values.username, values.password));
              if (success) {
                navigate('/users');
              }
            }}
          >
            {(props) => (
              <Form>
                <Card
                  sx={{
                    width: '350px',
                    height: '300px'
                  }}
                >
                  <Box
                    sx={theme => ({
                      display: 'flex',
                      gap: '5px',
                      alignItems: 'center',
                      height: '50px',
                      bgcolor: theme.palette.grey[100],
                      paddingLeft: '10px'
                    })}
                  >
                    <VpnKeyIcon />
                    <Typography>Sign in</Typography>
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      height: '200px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '20px',
                      padding: '0 15px 0 15px'
                    }}
                  >
                    <TextField
                      placeholder='username'
                      label='Username'
                      fullWidth
                      size='small'
                      value={props.values.username}
                      required
                      onChange={props.handleChange}
                      name='username'
                      InputProps={{
                        endAdornment: (
                          <>
                            <Divider orientation='vertical' flexItem />
                            <InputAdornment position='end'>
                              <PersonIcon />
                            </InputAdornment>
                          </>
                        )
                      }}
                    />
                    <TextField
                      placeholder='password'
                      label='Password'
                      value={props.values.password}
                      required
                      name='password'
                      fullWidth
                      onChange={props.handleChange}
                      type='password'
                      size='small'
                      InputProps={{
                        endAdornment: (
                          <>
                            <Divider orientation='vertical' flexItem />
                            <InputAdornment position='end'>
                              <LockIcon />
                            </InputAdornment>
                          </>
                        )
                      }}
                    />
                  </Box>
                  <Divider />
                  <Box
                    sx={theme => ({
                      display: 'flex',
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      height: '50px',
                      bgcolor: theme.palette.grey[100],
                      padding: '15px',
                      marginTop: '-10px'
                    })}
                  >
                    <LoadingButton
                      loading={props.isSubmitting}
                      type='submit'
                      size='small'
                      variant='contained'
                    >
                      Sign in
                    </LoadingButton>
                  </Box>
                </Card>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginPage;
