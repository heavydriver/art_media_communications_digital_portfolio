import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { createGlobalStyle } from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 25, 40, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: #1f2d47;
  padding: 20px;
  border-radius: 20px;
  max-width: 95%;
  max-height: 95%;
  box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const HeaderRow = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 15px;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  color: #1f2d47;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;
