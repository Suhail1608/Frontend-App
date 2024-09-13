import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: null,
  },
  reducers: {
    saveUser: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { saveUser } = authSlice.actions;
export default authSlice.reducer;
