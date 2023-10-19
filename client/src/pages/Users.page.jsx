import { Box, Button, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';

// import { UsersListSelector, UsersLoadingSelector, usersThunks } from 'store/slices/users.slice';
import { useAppDispatch } from '../store/hooks';
// import { useButtonStyles } from '../styles/button.styles';
// import { useCommonStyles } from '../styles/shared.styles';
// import { useTableStyles } from '../styles/table.styles';
// import { userThunks } from 'store/slices/user.slice';


const UsersPage = () => {
  // const { classes, cx } = useButtonStyles();
  // const { classes: sharedStyles, cx: cxShared, } = useCommonStyles();
  // const { classes: tableStyles, cx: cxTable, } = useTableStyles();
  const dispatch = useAppDispatch();
  // let fetchedUsers = useSelector(UsersListSelector);

  const [open, setOpen] = useState(false);

  // const [users, setUsers] = useState(fetchedUsers);
  const [users, setUsers] = useState([{name: 'test'}]);



  useEffect(() => {
      // dispatch(usersThunks.getList());
  }, []);

  // useEffect(() => {
  //   setUsers(fetchedUsers.filter(user => user.username.toLowerCase().includes(filter.toLowerCase())));
  // }, [filter, fetchedUsers]);

  // const openUserDialog = (username: string) => {
  //   setSelectedUsername(username);
  //   setOpen(true);
  // };

  const refreshUserList = () => {
    // dispatch(usersThunks.getList());
  };

  // const onEditClick = (user: User) => {
  //   openUserDialog(user.username);
  // };

  // const onCancelClick = () => {
  //   setOpen(false);
  //   setSelectedUsername('');
  //   setConfirmationModalOpen(false);
  // };

  // const deleteUser = async () => {
  //   const response = await dispatch(userThunks.deleteUser(selectedUsername));
  //   if (response) {
  //     onCancelClick();
  //     dispatch(usersThunks.getList());
  //   }
  // };

  const columnsDefinition = [
    {
      field: 'name',
      headerName: 'Username',
      flex: 10,
      disableColumnMenu: true,
      // headerClassName: cxTable(tableStyles.tableColumnHeader),
      // cellClassName: cxTable(tableStyles.tableColumnCell),
      sortingOrder: ['asc', 'desc']
    }
  ];

  return (
    <Box
      display='flex'
      flexDirection='column'
    >
      <Box
        display='flex'
        alignItems='center'
        // className={cxShared(sharedStyles.title)}
      >
        <PersonIcon sx={{
          fontSize: '40px',
        }} />
        <Typography variant='h4' fontWeight='light'>Users</Typography>
      </Box>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        sx={{
          backgroundColor: 'white',
          padding: '5px 10px',
          marginTop: '30px',
        }}
        // className={cxTable(tableStyles.tableHeader)}
      >
      </Box>
      <Box
        width='100%'
        // className={cxTable(tableStyles.table)}
      >
        <DataGrid
          disableSelectionOnClick
          autoHeight
          rows={users}
          columns={columnsDefinition}
          hideFooterSelectedRowCount
          // loading={usersLoading}
          getRowId={(row) => row.name}
          // getRowClassName={() => cxTable(tableStyles.tableRow)}
          // onPageSizeChange={setPagination}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          // pageSize={pagination}
          paginationMode='client'
        />
      </Box>
  


    </Box>
  );
};

export default UsersPage;
