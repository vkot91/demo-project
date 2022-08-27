import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const notify = (msg: string): void => {
  toast.success(msg, { position: toast.POSITION.TOP_CENTER });
};
