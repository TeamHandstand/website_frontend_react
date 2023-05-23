import React from "react";
import styled from "styled-components";
import { ScrollText } from "./ScrollText";
import { Header } from "../text/Header";
import { Subheader } from "../text/Subheader";
import { breakpoints } from "../../styles.js/breakpoints";
const StyledContainer = styled.div`
  position: relative;
  border-radius: 13px;
  width: 100%;
  background-color: white;
  overflow: hidden;
  height: 90vh;
`;
const StyledImageContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 6px 0px 6px 0px;
  @media (min-width: ${breakpoints.extraLarge}px) {
    padding: 50px 0px 20px 0px;
  }
`;
//   background: linear-gradient(
//     to bottom,
//     rgba(255, 255, 255, 1) 0%,
//     rgba(255, 255, 255, 0) 12.5%,
//     rgba(255, 255, 255, 0) 68.9%,
//     rgba(255, 255, 255, 1) 100%
//   );
const StyledImage = styled.img`
  width: 100%;
`;
const StyledTitle = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 48px;
  font-weight: bold;
  width: 100%;
  z-index: 2;
`;
const StyledScrollText = styled.div`
  padding: 2px 8px;
`;

const StyledContainerMask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 12.5%,
    rgba(255, 255, 255, 0) 68.9%,
    rgba(255, 255, 255, 1) 100%
  );
  z-index: 2;
`;

export const ImageCardWithScrollText = React.memo(props => {
  const { imageUrl, title, linesOfDescription } = props;
  return (
    <StyledContainer>
      <StyledContainerMask />
      <StyledTitle>
        <Header>{title}</Header>
      </StyledTitle>
      <StyledImageContainer>
        <StyledImage src={imageUrl} />
      </StyledImageContainer>
      <StyledScrollText>
        <Subheader>
          <ScrollText linesOfDescription={linesOfDescription} />
        </Subheader>
      </StyledScrollText>
    </StyledContainer>
  );
});
