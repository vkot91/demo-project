import { AxiosError } from 'axios';

import { notify } from 'utils/toast';

export const errorBoundary = (error: AxiosError): void => {
  const errStatusCheck = error.response?.status;

  switch (errStatusCheck) {
    case 404:
      notify(error.message);
      break;

    case 409:
      notify(error.message);
      break;

    case 500:
      notify(error.message);
      break;

    default:
      break;
  }
};
