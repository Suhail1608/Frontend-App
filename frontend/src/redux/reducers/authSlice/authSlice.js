import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: JSON.parse(localStorage.getItem('user')) || null,
  },
  reducers: {
    saveUser: (state, action) => {
      state.data = action.payload;
    },
    removeUser: (state,action)=>{
      state.data = action.payload;
    }
  }
});
export const handleLogin = async () =>{
    localStorage.setItem('auth',"Bearer 56873893303010210201020121921983938981830192019201920190291938293778247")
}
export const { saveUser } = authSlice.actions;
export default authSlice.reducer;
