import React from "react";
import styled from "styled-components";
const StyledContainer = styled.button`
  width: 100%;
  height: 44px;
  padding: 4px 6px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-weight: bold;
  opacity: 1;
  transition: 0.3s;
  border-radius: 6px;
  border: none;
  &:hover {
    background-color: ${props => props.hoverColor};
  }
  cursor: pointer;
`;
export const Button = React.memo(props => {
  const { color, fontColor, onClick = () => {}, hoverColor } = props;
  const handleClick = () => {
    onClick();
  };
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];
  return (
    <StyledContainer
      color={fontColor}
      backgroundColor={color}
      onClick={handleClick}
      hoverColor={hoverColor}
    >
      {children}
    </StyledContainer>
  );
});
