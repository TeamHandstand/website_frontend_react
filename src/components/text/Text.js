import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
const StyledContainer = styled.div`
  font-size: 14px;
  @media (max-width: ${breakpoints.medium}px) {
    font-size: 12px;
  }
`;
export const Text = React.memo(props => {
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];
  return <StyledContainer>{children}</StyledContainer>;
});
