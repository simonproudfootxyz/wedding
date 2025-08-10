import React from "react";
import StyledWrapper from "./WrapperStyles";

export interface WrapperProps {
  children?: React.ReactNode;
  classNames?: string;
  justifyContent?: string;
  alignItems?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  classNames,
  justifyContent,
  alignItems,
}) => {
  return (
    <StyledWrapper
      className={classNames}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
