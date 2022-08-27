import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiData, ApiStatus, IPost } from 'types';
import { createPost, deletePost, getPosts, updatePost } from './action-creators';

interface PostsState {
  posts: ApiData<IPost[]>;
}

const initialState: PostsState = {
  posts: {
    status: ApiStatus.IDLE,
  },
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reset(state) {
      state = initialState;

      return state;
    },
  },
  extraReducers: {
    [getPosts.pending.type]: (state) => {
      state.posts.status = ApiStatus.PENDING;
    },
    [getPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
      state.posts = {
        status: ApiStatus.FULFILLED,
        data: action.payload,
      };
    },
    [getPosts.rejected.type]: (state, action) => {
      state.posts.status = ApiStatus.REJECTED;
      state.posts.error = action.payload;
    },
    [createPost.pending.type]: (state) => {
      state.posts.status = ApiStatus.PENDING;
    },
    [createPost.fulfilled.type]: (state, action) => {
      state.posts.status = ApiStatus.FULFILLED;
      state.posts.data?.unshift(action.payload);
    },
    [createPost.rejected.type]: (state, action) => {
      state.posts.status = ApiStatus.REJECTED;
      state.posts.error = action.payload;
    },
    [deletePost.pending.type]: (state) => {
      state.posts.status = ApiStatus.PENDING;
    },
    [deletePost.rejected.type]: (state, action) => {
      state.posts.status = ApiStatus.REJECTED;
      state.posts.error = action.payload;
    },
    [deletePost.fulfilled.type]: (state, action) => {
      const items = state.posts?.data?.filter((item) => item.id !== action.payload);

      state.posts = {
        status: ApiStatus.FULFILLED,
        data: items,
      };
    },
    [updatePost.pending.type]: (state) => {
      state.posts.status = ApiStatus.PENDING;
    },
    [updatePost.rejected.type]: (state, action) => {
      state.posts.status = ApiStatus.REJECTED;
      state.posts.error = action.payload;
    },
    [updatePost.fulfilled.type]: (state, action) => {
      if (state.posts.data) {
        const items = [...state.posts.data];

        const index = items.findIndex((item) => item.id === action.payload.id);

        items[index] = action.payload;
        items.splice(index, 1);
        items.splice(0, 0, action.payload);
        state.posts = {
          status: ApiStatus.FULFILLED,
          data: items,
        };
      }
    },
  },
});

export default postsSlice.reducer;
