import React from "react";
import styled from "styled-components";
import { IconCapsule } from "./IconCapsule";
import { LogoSelector } from "./LogoSelector";
const StyledContainer = styled.div``;
const StyledImageContainer = styled.div``;
const StyledSelectionContainer = styled.div``;
const StyledImageTitle = styled.div``;
const StyledImage = styled.div``;
const StyledImageCaption = styled.div``;
const StyledImageSubheader = styled.div``;
export const TestimonialWidget = React.memo(props => {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledImageTitle></StyledImageTitle>
        <StyledImage></StyledImage>
        <StyledImageCaption>
          <StyledImageSubheader></StyledImageSubheader>
          <IconCapsule />
          <IconCapsule />
        </StyledImageCaption>
      </StyledImageContainer>
      <StyledSelectionContainer>
        <LogoSelector logos={[]} />
      </StyledSelectionContainer>
    </StyledContainer>
  );
});
