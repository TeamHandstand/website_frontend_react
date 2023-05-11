import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles.js/breakpoints";

const StyledContainer = styled.div`
  font-size: 22px;
  font-weight: bold;
  @media (max-width: ${breakpoints.medium}px) {
    font-size: 16px;
  }
`;
export const Subheader = React.memo(props => {
  const { content } = props;
  return <StyledContainer>{content}</StyledContainer>;
});
