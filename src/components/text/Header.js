import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  font-size: 70px;
  font-weight: bold;
`;
export const Header = React.memo(props => {
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];
  return <StyledContainer>{children}</StyledContainer>;
});
