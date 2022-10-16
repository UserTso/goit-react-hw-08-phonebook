import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedin: false,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,

    extraReducers: {

        [register.pending](state) {
            state.isLoading = true;
        },
        [register.fulfilled](state, {payload}) {
            console.log(payload)
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedin = true;
            state.isLoading = false;
            state.error = null;
          },
          [register.rejected](state, {payload}) {
            state.isLoading = false;
            state.error = payload;
    },


    [logIn.pending](state) {
        state.isLoading = true;
    },

    [logIn.fulfilled](state, {payload}) {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedin = true;
        state.isLoading = false;
        state.error = null;
      },

      [logIn.rejected](state, {payload}) {
        state.isLoading = false;
        state.error = payload;
},

[logOut.pending](state, {payload}) {
    state.isLoading = true;
},

[logOut.fulfilled](state, {payload}) {
    state.user = {name: null, email: null};
    state.token = null;
    state.isLoggedin = false;
    state.isLoading = false;
    state.error = null;
  },

  [logOut.rejected](state, {payload}) {
    state.isLoading = false;
    state.error = payload;
},

[fetchCurrentUser.pending](state, {payload}) {
  state.isLoading = true;
  state.isFetchingCurrentUser = false;
},

[fetchCurrentUser.fulfilled](state, {payload}) {
  state.user = payload;
  state.isLoggedin = true;
  state.isLoading = false;
  state.error = null;
  state.isFetchingCurrentUser = true;
},

[fetchCurrentUser.rejected](state, {payload}) {
  state.isLoading = false;
  state.error = payload;
  state.isFetchingCurrentUser = true;
},
    },
});


export const authReducer = authSlice.reducer;