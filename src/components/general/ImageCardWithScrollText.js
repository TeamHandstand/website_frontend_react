import React from "react";
import styled from "styled-components";
import { ScrollText } from "./ScrollText";
import { Header } from "../text/Header";
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
`;
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
  font-size: 22px;
`;

const StyledTopImageMask = styled.div`
  position: absolute;
  background: linear-gradient(to top, transparent, white);
  width: 100%;
  height: 30px;
  top: 0;
  left: 0;
`;
const StyledBottomImageMask = styled.div`
  position: absolute;
  background: linear-gradient(to bottom, transparent, white);
  width: 100%;
  height: 30px;
  bottom: 0;
  left: 0;
`;

export const ImageCardWithScrollText = React.memo(props => {
  const { imageUrl, title, linesOfDescription } = props;
  return (
    <StyledContainer>
      <StyledTitle>
        <Header>{title}</Header>
      </StyledTitle>
      <StyledImageContainer>
        <StyledTopImageMask />
        <StyledImage src={imageUrl} />
        <StyledBottomImageMask />
      </StyledImageContainer>
      <StyledScrollText>
        <ScrollText linesOfDescription={linesOfDescription} />
      </StyledScrollText>
    </StyledContainer>
  );
});
