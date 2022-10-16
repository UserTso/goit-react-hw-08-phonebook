import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
            await axios.delete(`/contacts/${id}`);
            return id;
        } catch (error) {
           return thunkApi.rejectWithValue(error.message)
        }
          });