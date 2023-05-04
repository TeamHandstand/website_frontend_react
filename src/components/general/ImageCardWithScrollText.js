import React from "react";
import styled from "styled-components";
import { ScrollText } from "./ScrollText";
const StyledContainer = styled.div``;
const StyledImage = styled.div``;
const StyledTitle = styled.div``;
const StyledScrollText = styled.div``;

export const ImageCardWithScrollText = React.memo(props => {
  const { imageSrc, title, linesOfDescription } = props;
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledImage src={imageSrc} />
      <StyledScrollText>
        <ScrollText linesOfDescription={linesOfDescription} />
      </StyledScrollText>
    </StyledContainer>
  );
});
