import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    data: [],
    error: ''
  },
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    }
  }
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } = exampleSlice.actions;
export default exampleSlice.reducer;
