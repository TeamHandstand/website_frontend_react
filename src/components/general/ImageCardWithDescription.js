import React from "react";
import styled from "styled-components";
import { hexToRgba } from "../../helpers/hexToRgba";
const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 13px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  top: 8px;
  left: 0;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background: linear-gradient(
    to bottom,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.55 })} 0%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0 })} 67%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0 })} 100%
  );
  z-index: 2;
`;
const StyledMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.55 })} 0%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0 })} 67%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0 })} 100%
  );
`;
const StyledImage = styled.img`
  width: 100%;
`;
const StyledDescription = styled.div`
  text-align: center;
  width: 75%;
`;
export const ImageCardWithDescription = React.memo(props => {
  const { imageUrl, title, description, gradientColor } = props;
  return (
    <StyledContainer>
      <StyledImageWithTitle>
        <StyledMask gradientColor={gradientColor}></StyledMask>
        <StyledTitle gradientColor={gradientColor}>{title}</StyledTitle>
        <StyledImage src={imageUrl} />
      </StyledImageWithTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledContainer>
  );
});
