import { IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import ComponentsMenu from "components/ComponentsMenu";
import WarningIcon from '@mui/icons-material/Warning';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AuthSelector } from "../store/slices/auth.slice";
// import { useAppDispatch } from "store/hooks";
// import { authThunks } from "store/slices/auth.slice";

export const Header = ({
  component,
}) => {
  const authData = useSelector(AuthSelector);
  console.log(authData);
  const [user, setUser] = useState(authData);

  useEffect(() => {
    console.log('HEADER');
  }, []);
  // const dispatch = useAppDispatch();

  return (
    <Box
      id='header'
      sx={{
        backgroundImage: `linear-gradient(to bottom,#f3f3f3,#e2e2e2)`,
        backgroundRepeat: 'repeat-x',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px 0 10px',
        width: '100vw',
        height: '48px',
        position: 'fixed',
        zIndex: 5000,
      }}
    >
      {/* <ComponentsMenu /> */}
      {component === 'Layout' ? (
        <>
          {/* <Paper
            sx={{
              width: '250px',
              height: '40px',
              color: '#356635',
              borderRadius: '0',
              borderLeft: '5px solid #8ac38b',
              boxShadow: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              backgroundColor: '#cde0c4',
            }}
          > */}
            {/* <WarningIcon sx={{ fontSize: '18px', marginRight: '2px' }} />
            <Typography fontSize='12px'>Test environment</Typography> */}
          {/* </Paper> */}
          <Box
            display='flex'
            gap='30px'
            alignItems='center'
          >
            {/* <Typography>version: 1.0.0</Typography> */}
            <IconButton
              size='small'
              onClick={() => console.log('click')}
              sx={{
                border: '1px solid #bfbfbf',
                backgroundColor: '#f2f2f2',
                borderRadius: '0',
                color: '#333'
              }}
            >
              {user.name ? <LogoutIcon /> : <LoginIcon />}
            </IconButton>
          </Box>
        </>
      ) : null}
    </Box>
  );
}

export default Header;
