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
  position: relative;
  padding: 1.5rem 3rem 3rem;
  width: 100%;
  max-width: 800px;
  color: var(--black);
  clip-path: var(--modal-clip);
  text-align: center;

  p,
  ul,
  li,
  h2,
  h3 {
    color: var(--black);
  }

  .modal__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border-radius: 50%;
    background: var(--grey);
    font-size: 0;
    padding: 5px 15px;

    .modal__close-symbol {
      font-size: 1.5rem;
    }
  }

  .modal__heading-container {
    padding: 5rem 3rem 3rem;
    max-width: 600px;
    margin: 0 auto 2rem;
  }

  .modal__heading {
    max-width: 225px;
    margin: 0 auto;
  }

  .modal__image {
    max-width: 100%;
    height: auto;
    animation: hover 5s ease-in-out infinite;
  }

  .modal__content {
    max-width: 450px;
    margin: 0 auto 1rem;
  }

  // confirm modal
  &.confirm-modal {
    .modal__heading-container {
      background: url("/Vector29.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }

  // decline modal
  &.decline-modal {
    .modal__heading-container {
      background: url("/Vector30.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    .modal__heading {
      max-width: none;
    }
  }
`;

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  classNames?: string;
}

export default function Modal({
  open,
  onClose,
  children,
  classNames,
}: ModalProps) {
  if (!open) return null;
  return (
    <Overlay className="modal__overlay" onClick={onClose}>
      <ModalBox
        className={`modal__box ${classNames}`}
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {children}
        <button className="modal__close" onClick={onClose}>
          Close
          <span className="modal__close-symbol">&times;</span>
        </button>
      </ModalBox>
    </Overlay>
  );
}
