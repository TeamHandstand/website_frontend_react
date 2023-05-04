import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  font-size: 14px;
`;
export const Text = React.memo(props => {
  const { content } = props;
  return <StyledContainer>{content}</StyledContainer>;
});
