import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { axiosInstance } from 'services/api';
import { getPostById } from 'services/api/endpoints';
import { createPostRequest, getPostsRequest, updatePostRequest } from 'services/api/requests';
import { PostFormInputs } from 'types';
import { getExceptionPayload } from 'utils/helpers/getExceptionPayload';

export const getPosts = createAsyncThunk('posts/get', async (_, { rejectWithValue }) => {
  try {
    const { data } = await getPostsRequest();

    return data;
  } catch (error) {
    return rejectWithValue(getExceptionPayload(error));
  }
});

export const createPost = createAsyncThunk(
  'posts/create',
  async ({ options }: { options: PostFormInputs }, { rejectWithValue }) => {
    try {
      const { data } = await createPostRequest(options);

      toast('Post was succesfully created', { type: 'success' });

      return data;
    } catch (error) {
      return rejectWithValue(getExceptionPayload(error));
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/delete',
  async (id: number, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(getPostById(id));
      toast('Post was succesfully deleted', { type: 'success' });

      return id;
    } catch (error) {
      return rejectWithValue(getExceptionPayload(error));
    }
  }
);

export const updatePost = createAsyncThunk(
  'posts/update',
  async ({ id, options }: { id: number; options: PostFormInputs }, { rejectWithValue }) => {
    try {
      const { data } = await updatePostRequest(id, options);

      toast('Post was succesfully updated', { type: 'success' });

      return data;
    } catch (error) {
      return rejectWithValue(getExceptionPayload(error));
    }
  }
);
