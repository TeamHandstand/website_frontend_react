import React from "react";
import styled from "styled-components";
import { CustomLink } from "../general/CustomLink";
import { colors } from "../../styles.js/colors";
const StyledContainer = styled.button`
  padding: 8px;
  width: 160px;
  border-radius: 13px;
  background-color: ${props =>
    props.isRevealed ? colors.main : "transparent"};
  border: none;
  color: ${props => (props.isRevealed ? "black" : "white")};
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
  transition: 0.3s;
`;
export const HeaderQuoteButton = React.memo(props => {
  const { isRevealed, opacity } = props;

  const handleClick = () => {};
  return (
    <CustomLink to={""}>
      <StyledContainer
        opacity={opacity}
        isRevealed={isRevealed}
        onClick={handleClick}
      >
        Get a Quote
      </StyledContainer>
    </CustomLink>
  );
});
