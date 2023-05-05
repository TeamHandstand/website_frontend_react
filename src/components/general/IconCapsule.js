import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div``;
export const IconCapsule = React.memo(props => {
  const { icon, text } = props;
  return (
    <StyledContainer>
      {icon} {text}
    </StyledContainer>
  );
});
