"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface EventInfoProps {
  heading?: string;
  date?: string;
  time?: string;
  location?: string;
  children?: ReactNode;
}

interface InfoItemProps {
  backgroundColor?: string;
}

export const EventInfoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  justify-content: space-between;
`;

export const Column = styled.div`
  flex: 1; /* Each column takes 50% width */
  padding: 16px;

  &:nth-of-type(1) {
    max-width: 550px;
  }
  &:nth-of-type(2) {
    max-width: 350px;
  }
`;

const Heading = styled.h3`
  font-size: 48px;
  padding-bottom: 40px;

  strong {
    font-weight: 900;
  }
`;

const Content = styled.div`
  .content-section {
    & + .content-section {
      margin-top: 60px;
    }
  }
`;

const InfoItem = styled.p<InfoItemProps>`
  font-family: "new-spirit", serif;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  font-size: 16px;
  display: inline-block;
  margin-right: 10px;
  padding: 10px;
  color: var(--black);

  &:nth-of-type(1) {
    clip-path: var(--standard-clip);
  }
  &:nth-of-type(2) {
    clip-path: var(--secondary-clip);
  }
`;

const Location = styled.div`
  padding: 25px;
  background: var(--transparent-white);
  margin-top: 30px;
`;

export const TimeStamps = styled.p`
  display: inline-block;
  background: var(--transparent-white);
  color: var(--yellow);
  padding: 10px;
`;

export const EventInfo: React.FC<EventInfoProps> = ({
  heading,
  date,
  time,
  location,
  children,
}) => {
  return (
    <EventInfoContainer>
      <Column>
        {heading && (
          <Heading
            dangerouslySetInnerHTML={{
              __html: heading,
            }}
          />
        )}

        <Content>{children}</Content>
      </Column>
      <Column>
        <div>
          <InfoItem backgroundColor="var(--pink)">{date}</InfoItem>
          <InfoItem backgroundColor="var(--yellow)">{time}</InfoItem>
        </div>
        <Location>
          <p dangerouslySetInnerHTML={{ __html: location || "" }}></p>
        </Location>
      </Column>
    </EventInfoContainer>
  );
};

export default EventInfo;
