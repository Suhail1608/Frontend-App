import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: JSON.parse(localStorage.getItem('user')) || null,
  },
  reducers: {
    saveUser: (state, action) => {
      state.data = action.payload;
      localStorage.setItem('user',JSON.stringify(action.payload))
    },
    removeUser: (state,action)=>{
      state.data = action.payload;
      localStorage.clear()
    }
  }
});
export const handleLogin = async (token) =>{
    localStorage.setItem('auth',token)
}
export const { saveUser,removeUser } = authSlice.actions;
export default authSlice.reducer;
