"use client";
import React from "react";
import styled from "styled-components";

interface CardProps {
  imageSrc: string;
  altText?: string;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--black);
  border-radius: 2px;
  overflow: hidden;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const Card: React.FC<CardProps> = ({ imageSrc, altText }) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt={altText} />
      <CardImage src={imageSrc} alt={altText} />
    </CardContainer>
  );
};

export default Card;
