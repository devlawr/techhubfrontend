import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../Components/common/common";
import axios from "axios";


const initialState = {
user:{},
registerStatus: "",
registerError: "",
userLoaded: false,
userId: "",
pending:'',
completed:false
};



export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      let response = await axios.post(`${baseUrl}/register`, values);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const DeleteData = createAsyncThunk("user/Delete", async (value, {rejectWithValue}) => {
  try {
    let response = await axios.delete(`${baseUrl}/delete/:${value}`);
    return response
  } catch (error) {
     return rejectWithValue(error.response.data);
  }
})



const regSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {

    resetState: (state) => {
      return initialState;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, { payload }) => {
      return { ...state, registerStatus: "pending" };
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      if (payload) {
        return {
          ...state,
          user: payload,
          registerStatus: "success",
          userLoaded: true,
          pending: false,
          completed: true,
        };
      } else return state;
    },
    [registerUser.rejected]: (state, { payload }) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: payload,
      };
    },


  },
});
export const {  resetState } = regSlice.actions;
export default regSlice.reducer;