import * as Yup from 'yup';

export const schema = Yup.object().shape({
  title: Yup.string().required('Title is required!').min(10, 'Title should be more then 10 char!'),
  body: Yup.string().required('Body is required!').min(15, 'Body should be more then 15 char!'),
  userId: Yup.number().required('Number is required').typeError("That doesn't look like a number"),
});
