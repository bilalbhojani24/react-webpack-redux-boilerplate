import React from 'react';

interface Modal {
  visible: boolean,
  children : any,
}

const Modal : React.FC<Modal> = ({ visible, ...props }) => (
  <div className={`modal ${visible ? 'is-visible' : ''}`} id="modal1" data-animation="slideInOutTop">
    {props.children}
  </div>
);

export default Modal;
