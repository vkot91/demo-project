import React, { memo, useState } from 'react';

import { IPost } from 'types';
import { useModal } from 'hooks/useModal';

import { EDIT, REMOVE, SHOW } from 'constants/index';

import { Button } from 'components/common/Button';
import { deletePost } from 'store/posts/action-creators';
import { useAppDispatch } from 'hooks/redux';
import PostForm from './Form';

const Post: React.FC<IPost> = memo(({ id, title, body, userId }: IPost) => {
  const [action, setAction] = useState<string>('');

  const dispatch = useAppDispatch();

  const { showModal, RenderModal, hideModal } = useModal();

  const openRemoveModal = () => {
    setAction(REMOVE);
    showModal();
  };

  const openEditModal = () => {
    setAction(EDIT);
    showModal();
  };

  const showPostContent = () => {
    setAction(SHOW);
    showModal();
  };

  const onRemovePost = () => {
    dispatch(deletePost(id));
  };

  return (
    <>
      <li className="post" onClick={showPostContent}>
        <div className="post__title" data-testid="post__title">
          {id}. {title}
        </div>
      </li>
      {action === SHOW && (
        <RenderModal>
          <>
            <div className="post__title">
              {id}. {title}
            </div>
            <div className="post__body">Content: {body}</div>
            <div className="post__userId">Created by (user_id): {userId}</div>
            <div className="post__buttons">
              <Button text="Edit" role="main" onClickFunc={openEditModal} />
              <Button text="Delete" role="delete" onClickFunc={openRemoveModal} />
            </div>
          </>
        </RenderModal>
      )}
      {action === REMOVE && (
        <RenderModal>
          <>
            <div className="post__back" onClick={showPostContent}>
              Go Back
            </div>
            <div className="modal__text">You really wand to delete post by id:{id}?</div>
            <div className="modal__buttons">
              <Button text="Confirm" role="delete" onClickFunc={onRemovePost} />
              <Button text="Cancel" role="main" onClickFunc={hideModal} />
            </div>
          </>
        </RenderModal>
      )}
      {action === EDIT && (
        <RenderModal>
          <>
            <div className="post__back" onClick={showPostContent}>
              Go Back
            </div>
            <PostForm defaultValues={{ id, title, body, userId }} helper={hideModal} type="EDIT" />
          </>
        </RenderModal>
      )}
    </>
  );
});

export default Post;
