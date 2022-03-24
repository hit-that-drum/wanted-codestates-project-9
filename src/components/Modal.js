import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: fit-content;
  border: none;
  border-radius: 5px;
  box-shadow: 24px;
  background-color: gray;

  .visible {
    opacity: 1;
  }

  .unvisible {
    opacity: 0;
  }
`

const Modal = () => {

  return (
    <OuterContainer>
      This is Modal
    </OuterContainer>
  );
};

export default Modal;