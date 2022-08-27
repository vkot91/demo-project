import classNames from 'classnames';
import { FC } from 'react';

export interface Props {
  text: string;
  type?: 'submit' | 'reset' | 'button';
  role: string;
  onClickFunc?: () => void;
}

export const Button: FC<Props> = ({ text, type, role, onClickFunc }: Props) => {
  return (
    <button
      type={type}
      className={classNames('button', {
        main: role === 'main',
        delete: role === 'delete',
      })}
      onClick={onClickFunc}
    >
      {text}
    </button>
  );
};
