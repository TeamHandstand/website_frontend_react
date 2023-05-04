import React from "react";
import styled from "styled-components";
import { ScrollTextLine } from "./ScrollTextLine";
const StyledContainer = styled.div``;
export const ScrollText = React.memo(props => {
  const { linesOfDescription } = props;
  return (
    <StyledContainer>
      {linesOfDescription.map(line => {
        return <ScrollTextLine line={line} />;
      })}
    </StyledContainer>
  );
});
