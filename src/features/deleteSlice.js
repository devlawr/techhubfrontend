import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../Components/common/common";
import axios from "axios";

const initialState = {
  message: "",
  getDeletedStatus: "",
  deletedStatus: "",
  error: {},
};

export const DeleteData = createAsyncThunk(
  "user/Delete",
  async (value, { rejectWithValue }) => {
    try {
      let response = await axios.delete(`${baseUrl}/delete/${value}`);
      return response.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const deletSlice = createSlice({
  name: "deleteList",
  initialState,
  reducers: {},
  extraReducers: {
    [DeleteData.pending]: (state) => {
      return { ...state, getDeletedStatus: "pending" };
    },
    [DeleteData.fulfilled]: (state, { payload }) => {
      return { ...state, message: payload, getDeletedStatus: "fulfilled" };
    },
    [DeleteData.rejected]: (state) => {
      return { ...state, getDeletedStatus: "rejected" };
    },
  },
});

export default deletSlice.reducer;
