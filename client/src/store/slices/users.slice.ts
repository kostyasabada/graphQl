// import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
// import { UsersState, GlobalState } from 'interfaces/state.interfaces';
// import { User } from 'interfaces/user.interfaces';
// import { userService } from 'services/user.service';
// import { errorActions } from './error.slice';

// const initialState: UsersState = {
//   loading: false,
//   list: []
// };

// const usersSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setLoading: (state, { payload }: PayloadAction<boolean>) => {
//       state.loading = payload;
//     },
//     clearUsersList: (state) => {
//       state.list = initialState.list;
//     },
//     setUsersList: (state, { payload }: PayloadAction<User[]>) => {
//       state.loading = false;
//       state.list = payload;
//     },
//   },
// });

// export const usersActions = usersSlice.actions;

// export const getList = () => async (dispatch: Dispatch) => {
//   dispatch(usersActions.setLoading(true));
//   dispatch(usersActions.clearUsersList());
//   try {
//     const response = await userService.getUsersList();
//     dispatch(usersActions.setUsersList(response));
//   } catch (err: any) {
//     dispatch(errorActions.setError({ message: err.response.data.message, errorStatus: err.response.status }));
//   } finally {
//     dispatch(usersActions.setLoading(false));
//   }
// };

// export const usersThunks = {
//   getList,
// };

// export const UsersListSelector = (state: GlobalState) => state.users.list;
// export const UsersLoadingSelector = (state: GlobalState) => state.users.loading;

// export default usersSlice.reducer;
