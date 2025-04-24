import React from "react";
import StyledWrapper from "./WrapperStyles";

export interface WrapperProps {
  children: React.ReactNode;
  classNames?: string;
  justifyContent?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  classNames,
  justifyContent,
}) => {
  return (
    <StyledWrapper className={classNames} justifyContent={justifyContent}>
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
