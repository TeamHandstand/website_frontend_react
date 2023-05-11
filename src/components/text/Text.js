import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles.js/breakpoints";
const StyledContainer = styled.div`
  font-size: 14px;
  @media (max-width: ${breakpoints.medium}px) {
    font-size: 12px;
  }
`;
export const Text = React.memo(props => {
  const { content } = props;
  return <StyledContainer>{content}</StyledContainer>;
});
