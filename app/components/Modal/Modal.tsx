import React, { ReactNode, MouseEvent } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: var(--cream);
  padding: 1.5rem 2rem;
  min-width: 300px;
  max-width: 800px;
  color: var(--black);
  clip-path: var(--modal-clip);

  p,
  ul,
  li,
  h2 {
    color: var(--black);
  }
`;

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;
  return (
    <Overlay className="modal__overlay" onClick={onClose}>
      <ModalBox
        className="modal__box"
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {children}
        <button className="modal__close" onClick={onClose}>
          Close
        </button>
      </ModalBox>
    </Overlay>
  );
}
