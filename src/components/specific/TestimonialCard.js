import React from "react";
import styled from "styled-components";
import { Header } from "../text/Header";
import { ScrollText } from "../general/ScrollText";
import { TestimonialWidget } from "../general/TestimonialWidget";
import { breakpoints } from "../../styles.js/breakpoints";
const StyledContainer = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 13px;
  padding: 30px 8px 8px 8px;
  margin-top: 40px;
  transition: 0.3s;
  @media (max-width: ${breakpoints.medium}px) {
    width: 95%;
  }
`;

const StyledHeader = styled.div`
  font-size: 72px;
  font-weight: bold;
  margin-left: 12px;
`;

const StyledTextContainer = styled.div`
  margin-left: 12px;
  font-size: 32px;
  margin-bottom: 18px;
`;
export const TestimonialCard = React.memo(props => {
  const { jsonData } = props;
  return (
    <StyledContainer>
      <StyledHeader>Trusted by the Companies You Trust</StyledHeader>
      <StyledTextContainer>
        <ScrollText
          linesOfDescription={[
            "We've worked with hundreds of companies around the world,",
            "But here are a few partners and their unique stories."
          ]}
        />
      </StyledTextContainer>
      <TestimonialWidget jsonData={jsonData} />
    </StyledContainer>
  );
});
