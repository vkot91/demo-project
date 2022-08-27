import { ApiError } from 'types';

export const InternalError = {
  message: 'Internal server error',
  statusCode: 500,
  error: 'server error',
};

export const getExceptionPayload = (ex: any): ApiError => {
  if (typeof ex !== 'object' || !ex) {
    return InternalError;
  }
  const typedException = ex.data as ApiError;

  if (
    // eslint-disable-next-line no-prototype-builtins
    ex.hasOwnProperty('data') &&
    typeof typedException.message === 'string' &&
    typeof typedException.statusCode === 'number' &&
    typeof typedException.error === 'string'
  ) {
    return {
      ...typedException,
    };
  }

  return InternalError;
};
