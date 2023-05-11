import React from "react";
import styled from "styled-components";
import { CustomLink } from "../general/CustomLink";
import { colors } from "../../styles.js/colors";
import { Input } from "../general/Input";
import { Button } from "../general/Button";
import { breakpoints } from "../../styles.js/breakpoints";
const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.darkGrey};
  margin-top: 40px;
  padding: 40px 20px;
  @media (max-width: ${breakpoints.medium}px) {
    flex-direction: column;
  }
`;

const StyledInfoSection = styled.div`
  width: 35%;
  display: flex;
  @media (max-width: ${breakpoints.medium}px) {
    width: 100%:
  }
`;
const StyledLogo = styled.img``;
const StyledText = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledHeader = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 16px;
`;
const StyledSubheader = styled.div`
  line-height: 2;
`;

const StyledLinkSection = styled.div`
  width: 30%;
  display: flex;
  @media (max-width: ${breakpoints.medium}px) {
    width: 100%;
    justify-content: center;
    align-items: baseline;
    margin-top: 20px;
  }
`;

const StyledLinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: ${breakpoints.medium}px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const StyledLinkHeader = styled.div`
  font-weight: bold;
  margin-bottom: 14px;
`;
const StyledLink = styled.div`
  margin-bottom: 8px;
`;

const StyledInputSection = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.medium}px) {
    width: 100%;
  }
`;

const StyledInputHeader = styled.div`
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: bold;
`;
const StyledInputSubheader = styled.div`
  margin-bottom: 24px;
  font-size: 18px;
`;
const StyledInputButtonContainer = styled.div`
  display: flex;
`;
const StyledInputContainer = styled.div`
  width: 70%;
`;
const StyledButtonContainer = styled.div`
  width: 30%;
  transform: translateX(-20%);
`;
export const Footer = React.memo(props => {
  const [inputValue, setInputValue] = React.useState("");
  const handleInputChange = value => {
    setInputValue(value);
  };
  const handleButtonClick = () => {};
  return (
    <StyledContainer>
      <StyledInfoSection>
        <StyledLogo></StyledLogo>
        <StyledText>
          <StyledHeader>Our Mission</StyledHeader>
          <StyledSubheader>
            Together we create challenging and playful experiences to inspire
            people to push their limits and deepen their connections with one
            another.
          </StyledSubheader>
        </StyledText>
      </StyledInfoSection>
      <StyledLinkSection>
        <StyledLinkColumn>
          <StyledLinkHeader>COMPANY</StyledLinkHeader>
          <StyledLink>
            <CustomLink to={""}>Company Events</CustomLink>
          </StyledLink>
          <StyledLink>
            <CustomLink to={""}>Public Events</CustomLink>
          </StyledLink>
          <StyledLink>
            <CustomLink to={""}>Play Now</CustomLink>
          </StyledLink>
          <StyledLink>
            <CustomLink to={""}>Get a Quote</CustomLink>
          </StyledLink>
        </StyledLinkColumn>
        <StyledLinkColumn>
          <StyledLinkHeader>TEAM</StyledLinkHeader>
          <StyledLink>
            <CustomLink to={""}>Contact Us</CustomLink>
          </StyledLink>
          <StyledLink>
            <CustomLink to={""}>About Us</CustomLink>
          </StyledLink>
          <StyledLink>
            <CustomLink to={""}>Careers</CustomLink>
          </StyledLink>
        </StyledLinkColumn>
      </StyledLinkSection>
      <StyledInputSection>
        <StyledInputHeader>Want to stay in touch?</StyledInputHeader>
        <StyledInputSubheader>
          Your friends will think you're cooler, we promise.
        </StyledInputSubheader>
        <StyledInputButtonContainer>
          <StyledInputContainer>
            <Input
              onChange={handleInputChange}
              placeholder={"Your Email"}
              value={inputValue}
            />
          </StyledInputContainer>
          <StyledButtonContainer>
            <Button
              color={"green"}
              fontColor={"white"}
              onClick={handleButtonClick}
            >
              Submit
            </Button>
          </StyledButtonContainer>
        </StyledInputButtonContainer>
      </StyledInputSection>
    </StyledContainer>
  );
});
