import React, { useState } from 'react';

import { Modal } from 'components/Modal';

export interface IModalHook {
  showModal: () => void;
  hideModal: () => void;
  RenderModal: ({ children }: { children: React.ReactChild }) => JSX.Element;
}

export const useModal = (): IModalHook => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => setIsVisible(true);

  const hideModal = () => setIsVisible(false);

  const RenderModal = ({ children }: { children: React.ReactChild }) => (
    <>{isVisible && <Modal closeModal={hideModal}>{children}</Modal>}</>
  );

  return {
    showModal,
    hideModal,
    RenderModal,
  };
};
