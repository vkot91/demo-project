import { FC } from 'react';
import ReactDOM from 'react-dom';

import closeIcon from 'assets/images/close.svg';

export interface Props {
  children: React.ReactChild;
  closeModal: () => void;
}

export const Modal: FC<Props> = ({ children, closeModal }: Props) => {
  const domEl = document.getElementById('modal-root');

  if (!domEl) return null;

  return ReactDOM.createPortal(
    <div role="Modal" className="overlay">
      <div className="modal">
        <img
          src={closeIcon}
          alt="close"
          className="modal__close"
          role="modalClose"
          onClick={closeModal}
        />
        {children}
      </div>
    </div>,
    domEl
  );
};
