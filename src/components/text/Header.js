import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  font-size: 28px;
  font-weight: bold;
`;
export const Header = React.memo(props => {
  const { content } = props;
  return <StyledContainer>{content}</StyledContainer>;
});
