import React from "react";
import styled from "styled-components";
import { Header } from "../text/Header";
import { ScrollText } from "../general/ScrollText";
import { TestimonialWidget } from "../general/TestimonialWidget";
const StyledContainer = styled.div``;
export const TestimonialCard = React.memo(props => {
  return (
    <StyledContainer>
      <Header content={"Trusted by the Companies You Trust"} />
      <ScrollText
        linesOfDescription={[
          "We've worked with hundreds of companies around the world,",
          "But here are a few partners and their unique stories."
        ]}
      />
      <TestimonialWidget />
    </StyledContainer>
  );
});
