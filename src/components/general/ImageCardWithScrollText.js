import React from "react";
import styled from "styled-components";
import { ScrollText } from "./ScrollText";
const StyledContainer = styled.div`
  position: relative;
  border-radius: 16px;
  width: 100%;
`;
const StyledImage = styled.img`
  width: 100%;
`;
const StyledTitle = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
`;
const StyledScrollText = styled.div``;

export const ImageCardWithScrollText = React.memo(props => {
  const { imageUrl, title, linesOfDescription } = props;
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledImage src={imageUrl} />
      <StyledScrollText>
        <ScrollText linesOfDescription={linesOfDescription} />
      </StyledScrollText>
    </StyledContainer>
  );
});
