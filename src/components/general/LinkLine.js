import React from "react";
import styled from "styled-components";
import { Subheader } from "../text/Subheader";
import { Text } from "../text/Text";
import { LottieArrow } from "./LottieArrow";
import { CustomLink } from "./CustomLink";
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
`;
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
    <CustomLink to={url}>
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
    </CustomLink>
  );
});
