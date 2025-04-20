import React, { ReactNode } from "react";
import { StyledSection } from "./SectionStyles";

interface SectionProps {
  backgroundColor?: string;
  backgroundImage?: string;
  classNames?: string;
  children?: ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  backgroundColor,
  backgroundImage,
  classNames,
  children,
}) => {
  return (
    <StyledSection
      className={classNames}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
    >
      {children}
    </StyledSection>
  );
};

export default Section;
