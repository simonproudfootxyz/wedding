import React from "react";
import StyledWrapper from "./WrapperStyles";

interface WrapperProps {
  children: React.ReactNode;
  classNames?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, classNames }) => {
  return <StyledWrapper className={classNames}>{children}</StyledWrapper>;
};

export default Wrapper;
