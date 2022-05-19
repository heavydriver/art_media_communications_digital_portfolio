import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { modalState, modalValue } from "../../../atoms/modalAtom";
import {
  Background,
  Content,
  HeaderRow,
  ScrollDisabler,
  Img,
  CloseModalButton,
  BoxText,
} from "./ModalStyles";

function Modal() {
  const modalRef = useRef();

  const [open, setOpen] = useRecoilState(modalState);
  const [value, setValue] = useRecoilState(modalValue);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpen(false);
    }
  };

  if (!open) return null;
  return (
    <>
      <Background ref={modalRef} onClick={closeModal}>
        <Content>
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => setOpen(false)}
          />
          <Img src={`/images/${value + 1}.png`} />
        </Content>
      </Background>
      <ScrollDisabler />
    </>
  );
}

export default Modal;
