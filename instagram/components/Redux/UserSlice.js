import {createSlice} from '@reduxjs/toolkit';
import productData from './productData';
import SearchData from './SearchData';
import ReelsData from './ReelsData';
import PostsData from './PostsData';

const initialState = {
  cart: [],
  product: productData,
  SearchData: SearchData,
  ReelsData: ReelsData,
  PostsData: PostsData,
};

export const UserSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {},
});

export default UserSlice.reducer;
