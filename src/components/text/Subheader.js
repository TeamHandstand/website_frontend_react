import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
export const Subheader = React.memo(props => {
  const { content } = props;
  return <StyledContainer>{content}</StyledContainer>;
});
