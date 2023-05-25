import React from "react";
import styled from "styled-components";
import { Header } from "../text/Header";
import { ScrollText } from "../general/ScrollText";
import { TestimonialWidget } from "../general/TestimonialWidget";
import { breakpoints } from "../../styles/breakpoints";
import { Subheader } from "../text/Subheader";
import { paddings } from "../../styles/paddings";
const StyledContainer = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 13px;
  padding: ${paddings.y}px 8px 8px 8px;
  margin-top: 40px;
  transition: 0.3s;
  @media (max-width: ${breakpoints.medium}px) {
    width: 95%;
  }
  overflow: hidden;
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

const StyledText = styled.div`
  padding: 0px 16px;
`;
export const TestimonialCard = React.memo(props => {
  const { jsonData } = props;
  let linesOfDescription = [];
  const desktopLines = [
    "We've worked with hundreds of companies around the world.",
    "Here are a few partners and their unique stories."
  ];
  const mobileLines = [
    "We've worked with hundreds",
    "of companies around the world.",
    "Here are a few partners",
    "and their unique stories."
  ];
  React.useEffect(() => {
    if (window?.innerWidth <= breakpoints.medium) {
      linesOfDescription = mobileLines;
    } else {
      linesOfDescription = desktopLines;
    }
  }, []);
  return (
    <StyledContainer>
      <StyledText>
        <StyledHeader>
          <Header>Trusted by the Companies You Trust</Header>
        </StyledHeader>
        <StyledTextContainer>
          <Subheader>
            <ScrollText linesOfDescription={linesOfDescription} />
          </Subheader>
        </StyledTextContainer>
      </StyledText>
      <TestimonialWidget jsonData={jsonData} />
    </StyledContainer>
  );
});
