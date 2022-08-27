export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostFormInputs {
  title: string;
  body: string;
  userId: number;
}

export interface ApiError {
  message: string;
  statusCode: number;
  error: string;
}

export enum ApiStatus {
  IDLE,
  PENDING,
  REJECTED,
  FULFILLED,
}

export type ApiData<DataType> = {
  status: ApiStatus;
  error?: ApiError;
  data?: DataType;
};
