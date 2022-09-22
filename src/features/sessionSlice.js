import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../Components/common/common";
import axios from "axios";

const initialState = {
  userSession: {},
  registerStatus: "",
  registerError: "",
  deleteSessionStatus: "",
  message: "",
  loading: false,
  show: false,
  completed: false,
};

export const registerSession = createAsyncThunk(
  "user/session",
  async (values, { rejectWithValue }) => {
    try {
      let response = await axios.post(`${baseUrl}/session`, values);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const deleteSession = createAsyncThunk(
  "delete/session",
  async (values, { rejectWithValue }) => {
    try {
      let response = await axios.delete(`${baseUrl}/session/${values}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const sessionSlice = createSlice({
  name: "sessionRegistration",
  initialState,
  reducers: {
    resetState: (state) => {
      return initialState;
    },
  },
  extraReducers: {
    [registerSession.pending]: (state, { payload }) => {
      return { ...state, registerStatus: "pending", loading: true };
    },
    [registerSession.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        userSession: payload,
        registerStatus: "fulfilled",
        message: "user succesfully booked a session",
        loading: false,
        completed: true,
      };
    },
    [registerSession.rejected]: (state, { payload }) => {
      return {
        ...state,
        registerError: payload,
        registerStatus: "rejected",
        message: "rejected",
        completed: false,
      };
    },
    [deleteSession.pending]: (state, { payload }) => {
      return { ...state, deleteSessionStatus: "pending", loading: true };
    },
    [deleteSession.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        deleteSessionStatus: payload.message,
        loading: false,
        completed: true,
      };
    },
    [deleteSession.rejected]: (state, { payload }) => {
      return {
        ...state,
        deleteSessionStatus: "rejected",
        message: "rejected",
        completed: false,
      };
    },
  },
});

export const { resetState } = sessionSlice.actions;
export default sessionSlice.reducer;
