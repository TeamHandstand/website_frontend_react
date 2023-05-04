import React from "react";
import styled from "styled-components";
import { Subheader } from "../text/Subheader";
import { Text } from "../text/Text";
import { LottieArrow } from "./LottieArrow";
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextContainer = styled.div``;
export const LinkLine = React.memo(props => {
  const { header, content, url } = props;
  const [isMousedOver, setIsMousedOver] = React.useState(false);

  const handleMouseEnter = () => {
    setIsMousedOver(true);
  };

  const handleMouseLeave = () => {
    setIsMousedOver(false);
  };
  return (
    <StyledContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TextContainer>
        <Subheader content={header} />
        <Text content={content} />
      </TextContainer>
      <LottieArrow isMousedOver={isMousedOver} />
    </StyledContainer>
  );
});
