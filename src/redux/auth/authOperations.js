import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
};

export const register = createAsyncThunk('auth/register', async(credantials, thunkApi) => {
    try {
        const {data} = await axios.post('/users/signup', credantials);
        token.set(data.token);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk('auth/logIn', async(credantials, thunkApi) => {
    try {
        const {data} = await axios.post('/users/login', credantials);
        token.set(data.token);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const logOut = createAsyncThunk('auth/logOut', async(_, thunkApi) => {
    try {
        const {data} = await axios.post('/users/logout');
        token.unset();
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async(_, thunkApi) => {
    const state = thunkApi.getState();
    const prevToken = state.auth.token;
    if(!prevToken) {
        return thunkApi.rejectWithValue()
    };
    token.set(prevToken);
    try {
        const {data} = await axios.get('/users/current');
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})