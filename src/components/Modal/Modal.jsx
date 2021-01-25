import React from 'react';
import PropTypes from 'prop-types';

import {
  Overlay, ModalContent, ModalHeader, Close, ModalCard,
} from './styled';

// esse open é necessário?

function Modal({
  children, closeModal, open, title,
}) {
  const clickClose = () => {
    closeModal();
  };

  if (!open) return null;

  return (
    <Overlay>
      <ModalCard>
        <ModalHeader>
          {title}
          <Close onClick={clickClose}>&times;</Close>
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalCard>
    </Overlay>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

Modal.defaultProps = {
  children: '',
  title: 'Título',
};

export default Modal;
