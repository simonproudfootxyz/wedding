"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";
import Skeleton from "@/public/images/skeleton-ezgif.gif";
import Image from "next/image";

const EventScheduleContainer = styled.div`
  display: flex;
  width: 100%;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end; /* Align the h3 to the bottom */
  padding: 16px;
`;

const RightContainer = styled.div`
  flex: 0.33; /* 25% of the width */
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const StyledH3 = styled.h3`
  font-family: var(--pp-editorial);
  font-size: 64px;
  font-weight: 200;
  margin: 0;
  letter-spacing: -2px;
`;

interface EventScheduleProps {
  children?: ReactNode; // Optional content inside EventScheduleContainer
}

export const EventSchedule: React.FC<EventScheduleProps> = ({ children }) => {
  return (
    <EventScheduleContainer>
      {children ? (
        children
      ) : (
        <>
          <LeftContainer>
            <StyledH3>
              <span className="color--yellow">event schedule</span> <br />
              <span className="color--off-white">
                prepare to let the ghoul times roll
              </span>
            </StyledH3>
          </LeftContainer>
          <RightContainer>
            <Image
              src={Skeleton.src}
              alt="Creative Engagement Session in Toronto"
              width={1152} // Replace with the actual width of the image
              height={768} // Replace with the actual height of the image
              layout="responsive" // Ensures the image is responsive
              priority // Optional: Preloads the image for better performance
            />
          </RightContainer>
        </>
      )}
    </EventScheduleContainer>
  );
};
