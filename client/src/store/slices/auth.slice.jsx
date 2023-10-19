import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
// import { authService } from 'services/auth.service';

export const authState = {
  name: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    setAuthData: (state, { payload }) => {
      state.name = payload.name;
    },
  },
});

export const authActions = authSlice.actions;

const login = (name, password) => async (dispatch) => {
  try {
    // const { authUsername, role, jwtToken } = await authService.login(username, password);
    dispatch(authActions.setAuthData({
      name,
    }));

    return true;
  } catch (err) {
    // dispatch(authActions.setLoading(false));
    // dispatch(errorActions.setError({ message: err?.response?.data?.message || 'Server error', errorStatus: err.response.status }));
  } finally {
    // dispatch(authActions.setLoading(false));
  }
}

// const autoLogin = () => async (dispatch: Dispatch) => {
//   dispatch(authActions.setLoading(true));
//   try {
//     const { authorizedUser, role } = await authService.autoLogin();
//     dispatch(authActions.setAuthData({ authenticatedUser: authorizedUser, role }));
//   } catch (err: any) {
//     dispatch(errorActions.setError({ message: err?.response?.data?.message || 'Server error', errorStatus: err.response.status }));
//   } finally {
//     dispatch(authActions.setLoading(false));
//   }
// };

// const logout = () => async (dispatch: Dispatch) => {
//   dispatch(authActions.setLoading(true));

//   try {
//     authService.clearJwt();
//     dispatch(authActions.clearAuthData());
//   } catch (err: any) {
//     dispatch(errorActions.setError({ message: err.response.data.message, errorStatus: err.response.status }));
//   } finally {
//     dispatch(authActions.setLoading(false));
//   }
// };

export const authThunks = {
  login,
}

export const AuthSelector = (state) => state.auth;
// export const IsAuthDataLoading = (state: GlobalState) => state.auth.loading;
// export const IsAuthenticatedSelector = (state: GlobalState) => state.auth.isAuthenticated;

export default authSlice.reducer;
