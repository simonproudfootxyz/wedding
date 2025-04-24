"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface CalloutProps {
  backgroundImage?: string;
  backgroundColor?: string;
  leftColumnRatio?: number; // Default is 11/16
  children?: ReactNode;
}

const CalloutContainer = styled.div<CalloutProps>`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => {
    return backgroundColor || "transparent";
  }};
`;

const LeftColumn = styled.div<CalloutProps>`
  flex: ${({ leftColumnRatio }) => leftColumnRatio || 11} 16;
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
  background-size: cover;
  background-position: center;
`;

const RightColumn = styled.div<CalloutProps>`
  flex: ${({ leftColumnRatio }) => 16 - (leftColumnRatio || 11)} 16;
  padding: 40px 25px;

  h3 {
    padding-bottom: 100px;
    letter-spacing: -2px;
  }

  p {
    font-family: var(--new-spirit);
    font-size: 16px;
    letter-spacing: -1px;
    line-height: 1.25;
  }
`;

const Callout: React.FC<CalloutProps> = ({
  backgroundImage,
  backgroundColor,
  leftColumnRatio = 11,
  children,
}) => {
  return (
    <CalloutContainer backgroundColor={backgroundColor}>
      <LeftColumn
        backgroundImage={backgroundImage}
        leftColumnRatio={leftColumnRatio}
      />
      <RightColumn leftColumnRatio={leftColumnRatio}>{children}</RightColumn>
    </CalloutContainer>
  );
};

export default Callout;
