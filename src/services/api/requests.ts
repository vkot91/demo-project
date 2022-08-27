import { IPost, PostFormInputs } from 'types';
import { AxiosPromise } from 'axios';

import { POSTS, getPostById } from './endpoints';
import { axiosInstance } from './index';

export const getPostsRequest = async (): Promise<AxiosPromise<IPost[]>> =>
  await axiosInstance.get(POSTS);

export const deletePostRequest = async (id: number): Promise<AxiosPromise> =>
  await axiosInstance.delete(getPostById(id));

export const createPostRequest = async (options: PostFormInputs): Promise<AxiosPromise<IPost>> =>
  await axiosInstance.post(POSTS, options);

export const updatePostRequest = async (
  id: number,
  data: PostFormInputs
): Promise<AxiosPromise<IPost>> => await axiosInstance.patch(getPostById(id), data);
