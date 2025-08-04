import React, { ReactNode } from "react";
import { StyledSection } from "./SectionStyles";

interface SectionProps {
  backgroundColor?: string;
  backgroundImage?: string;
  classNames?: string;
  children?: ReactNode;
  textColor?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  backgroundColor,
  backgroundImage,
  classNames,
  children,
  textColor,
  id,
}) => {
  return (
    <StyledSection
      className={classNames}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      textColor={textColor}
      id={id}
    >
      {children}
    </StyledSection>
  );
};

export default Section;
