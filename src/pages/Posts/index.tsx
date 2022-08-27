import { FC, useEffect } from 'react';

import Post from 'components/Post';
import { Spinner } from 'components/common/Spinner';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { getPosts } from 'store/posts/action-creators';
import { ApiStatus } from 'types';
import { Button } from 'components/common/Button';
import { useModal } from 'hooks/useModal';
import PostForm from 'components/Post/Form';

export const Posts: FC = () => {
  const { data, status } = useAppSelector((state) => state.postsReducer.posts);

  const { showModal, RenderModal, hideModal } = useModal();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (status === ApiStatus.REJECTED) {
    return <div>Error. Try again later</div>;
  }

  return (
    <div className="posts">
      {status === ApiStatus.PENDING && <Spinner />}
      <div className="posts__header">
        <div className="posts__title">Posts (Click on item to show content)</div>
        <Button text="Create post" role="main" onClickFunc={showModal} />
      </div>
      <ul className="posts__list">
        {data?.map((item) => (
          <Post key={item.id} {...item} />
        ))}
      </ul>

      <RenderModal>
        <PostForm helper={hideModal} type="CREATE" />
      </RenderModal>
    </div>
  );
};
