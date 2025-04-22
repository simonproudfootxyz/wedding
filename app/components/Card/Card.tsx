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

const CardText = styled.div`
  background-color: var(--yellow);
  padding: 35px 25px;
  font-family: "new-spirit", serif;
  font-size: 17px;
  line-height: 0.9;
  color: var(--black);
`;

const Card: React.FC<CardProps> = ({ imageSrc, altText }) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt={altText} />
      <CardText>
        <p>
          The internet, 2017. <br />
          <br />
          <strong>Simon,</strong> a self-proclaimed snack enthusiast. <br />
          <strong>Mhairi,</strong> fearless enough to cook spaghetti in a white
          shirt. <br />
          <br />
          It was kismet.
        </p>
      </CardText>
    </CardContainer>
  );
};

export default Card;
