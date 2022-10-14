import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://634837c30484786c6e9501e1.mockapi.io/api/test1/';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
try {
    const response = await axios.get("/contacts");
    return response.data;
} catch (error) {
   return thunkApi.rejectWithValue(error.message)
}
  });

  export const addContacts = createAsyncThunk("contacts/add", async (contact, thunkApi) => {
    try {
        const response = await axios.post("/contacts", contact);
        return response.data;
    } catch (error) {
       return thunkApi.rejectWithValue(error.message)
    }
      });

      export const deleteContacts = createAsyncThunk("contacts/delete", async (id, thunkApi) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (error) {
           return thunkApi.rejectWithValue(error.message)
        }
          });