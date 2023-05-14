import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const MaxWidthContainer = React.memo(props => {
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];
  return <StyledContainer>{children}</StyledContainer>;
});
