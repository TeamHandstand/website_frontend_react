import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const StyledContainer = styled.div`
  font-size: 24px;
  @media (max-width: ${breakpoints.medium}px) {
    font-size: 18px;
  }
`;
export const Subheader = React.memo(props => {
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];
  return <StyledContainer>{children}</StyledContainer>;
});
