"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface EventInfoProps {
  heading?: string;
  description?: string;
  children?: ReactNode;
}

export const EventInfoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    display: block;
  }
`;

export const Column = styled.div`
  flex: 1; /* Each column takes 50% width */
  padding: 16px;

  &:nth-of-type(1) {
    max-width: 550px;

    @media screen and (max-width: 780px) {
      max-width: none;
    }
  }
  &:nth-of-type(2) {
    max-width: 350px;

    @media screen and (max-width: 780px) {
      max-width: none;
    }
  }
`;

const Heading = styled.h3`
  font-size: 48px;
  padding-bottom: 40px;

  @media screen and (max-width: 780px) {
    font-size: 2rem;
  }

  strong {
    font-weight: 900;
  }

  .ceremony-highlight {
    display: inline-block;
    position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 5px;
      background: var(--yellow);
      animation: bg-color-cycle 3s ease-in-out infinite;
    }
  }
`;

const Content = styled.div`
  .content-section {
    & + .content-section {
      margin-top: 60px;
    }
  }
`;

export const TimeStamps = styled.span`
  display: inline-block;
  background: var(--transparent-white);
  color: var(--yellow);
  padding: 10px;
  margin-right: 1rem;
`;

export const EventInfo: React.FC<EventInfoProps> = ({
  heading,
  description,
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
        {description && <p>{description}</p>}
      </Column>
      <Column>
        <Content>{children}</Content>
      </Column>
    </EventInfoContainer>
  );
};

export default EventInfo;
