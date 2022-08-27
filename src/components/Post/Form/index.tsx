import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from 'utils/validation/editPost';

import { IPost, PostFormInputs } from 'types';

import { Input } from 'components/common/Input';
import { Button } from 'components/common/Button';
import { createPost, updatePost } from 'store/posts/action-creators';
import { useAppDispatch } from 'hooks/redux';
import { FC } from 'react';

export interface Props {
  defaultValues?: IPost;
  helper: () => void;
  type: 'EDIT' | 'CREATE';
}

const PostForm: FC<Props> = ({ defaultValues, helper, type }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (options: PostFormInputs) => {
    if (type === 'EDIT' && defaultValues) {
      dispatch(updatePost({ id: defaultValues.id, options }));
    }

    if (type === 'CREATE') {
      dispatch(createPost({ options }));
    }
    helper();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        error={errors.title?.message}
        label="Title"
        id="title"
        type="text"
        name="title"
        ref={register}
      />
      <Input
        error={errors.body?.message}
        label="Body"
        id="body"
        type="text"
        name="body"
        ref={register}
      />
      <Input
        error={errors.userId?.message}
        label="User ID"
        id="userId"
        type="text"
        name="userId"
        ref={register}
      />
      <Button text="Confirm" role="main" />
    </form>
  );
};

export default PostForm;
