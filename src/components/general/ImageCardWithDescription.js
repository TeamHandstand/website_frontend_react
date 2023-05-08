import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 13px;
  overflow: hidden;
  margin-bottom: 16px;
`;

const StyledImageWithTitle = styled.div`
  border-radius: 13px;
  overflow: hidden;
`;
const StyledTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background: linear-gradient(
    to bottom,
    ${props => props.gradientColor},
    transparent
  );
`;
const StyledImage = styled.img`
  width: 100%;
`;
const StyledDescription = styled.div`
  text-align: center;
`;
export const ImageCardWithDescription = React.memo(props => {
  const { imageUrl, title, description, gradientColor } = props;
  return (
    <StyledContainer>
      <StyledImageWithTitle>
        <StyledTitle gradientColor={gradientColor}>{title}</StyledTitle>
        <StyledImage src={imageUrl} />
      </StyledImageWithTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledContainer>
  );
});
