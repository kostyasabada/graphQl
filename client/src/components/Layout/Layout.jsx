// import { ReactNode } from 'react';
// import { List, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
// import { Difference, GitHub, MoveDown, Settings, Group, Person } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
// import { useSelector } from 'react-redux';

import Header from '../Header';
// import { UserRoles } from 'enums/user.enums';
// import ListItemLink from './Links/ListItemLink';
// import BgImage from 'assets/images/main-bg.png'
// import { AuthSelector } from 'store/slices/auth.slice';

const menuWidth = 220;

// const navbarItems: NavBarItem[] = [
//   {
//     label: 'Compare',
//     icon: <Difference />,
//     route: '/compare',
//     roles: [UserRoles.USER],
//   },
//   {
//     label: 'Compare plugins',
//     icon: <Difference />,
//     route: '/plugins-compare',
//     roles: [UserRoles.USER],
//   },
//   {
//     label: 'Git',
//     icon: <GitHub />,
//     route: '/git',
//     roles: [UserRoles.USER],
//   },
//   {
//     label: 'Migration',
//     icon: <MoveDown />,
//     route: '/migration',
//     roles: [UserRoles.USER],
//   },
//   {
//     label: 'Users',
//     icon: <Group />,
//     route: '/users',
//     roles: [UserRoles.GLOBAL_ADMIN],
//   },
//   {
//     label: 'Admin panel',
//     icon: <Settings />,
//     route: '/admin-panel',
//     roles: [UserRoles.USER],
//   },
// ];

const useStyle = makeStyles()(() => ({
  item: {
    color: 'gray',
  },
}));

const Layout = ({ children }) => {
  const { classes, cx } = useStyle();
  // const authData = useSelector(AuthSelector);
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <Box id="body" height="100vh" width="100wv" display="flex">
      <Header component="Layout" />
      {/* <Box
        sx={{
          width: menuWidth,
          flexShrink: 0,
          boxSizing: 'border-box',
          background: 'linear-gradient(to right,#3a3633 93%,#2a2725 100%)',
        }}
      >

        <Box overflow='auto' paddingTop='70px'>
          <List>
            <Box
              component='div'
              className={cx(classes.item)}
              height='100%'
            >
              <ListItem>
                <Person />
                <ListItemText
                  primary={authData.authenticatedUser}
                  sx={{
                    marginLeft: '20px'
                  }}
                />
              </ListItem>
            </Box>
            {navbarItems.map((item) => {
              const isUserAllowed = item.roles.find((role) => role === authData.role);
              const selected = currentRoute === item.route;

              if (!isUserAllowed) {
                return null;
              }

              return (
                <ListItemLink
                  key={item.label}
                  to={item.route}
                  text={item.label}
                  icon={item.icon}
                  selected={selected}
                />
              )
            })}
          </List>
        </Box>
      </Box> */}
      <Box
        component='main'
        height='100%'
        width='100%'
        padding='72px 20px 24px 24px'
        sx={{
          // background: `url(${BgImage})`
        }}
      >
        {children}
      </Box> 
    </Box>
  );
};

export default Layout;
