import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = '/api/v1/gteetings';

export const fetchGreeting = createAsyncThunk(
  "greeting/fetchGreeting",
  async() => {
    const response = await fetch(url);
    const data = await response.json();
    return data.greetings;
  }
);

const greetingSlice = createSlice({
  name: "greeting",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const { addGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;
