import React from "react";
import styled from "styled-components";
import { Header } from "../text/Header";
import { Text } from "../text/Text";
import { Subheader } from "../text/Subheader";
import { breakpoints } from "../../styles.js/breakpoints";

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;
const StyledImage = styled.img`
  width: 100%;
`;
const StyledImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const StyledTextContainer = styled.div`
  width: 100%;
  color: white;
  text-align: center;
`;

const StyledHeader = styled.div`
  font-size: 52px;
  font-weight: bold;
  @media (max-width: ${breakpoints.medium}px) {
    font-size: 32px;
  }
`;

const StyledSubheader = styled.div`
  font-size: 22px;
  font-weight: normal;
  @media (max-width: ${breakpoints.medium}px) {
    font-size: 18px;
  }
`;
const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  padding: 8px;
  max-width: 1000px;
  margin-bottom: 20px;
`;
const StyledCountCard = styled.div`
  width: 24%;
  max-width: 200px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 14px;
  background-color: white;
  color: black;
  border-radius: 13px;
  text-align: left;
  @media (max-width: ${breakpoints.medium}px) {
    height: 100px;
  }
`;

const StyledCountUp = styled.div`
  font-size: 22px;
  font-weight: bold;
  @media (max-width: ${breakpoints.medium}px) {
    font-size: 16px;
  }
`;
export const CountCard = React.memo(props => {
  const initialCountValue = 12000;
  const [countValue, setCountValue] = React.useState(initialCountValue);
  const countRef = React.useRef(countValue);
  const setCountRef = count => {
    setCountValue(count);
    countRef.current = count;
  };
  const scrollHandler = () => {
    const currentScrollTop =
      window?.pageYOffset || document?.documentElement?.scrollTop;
    const additionalCount = parseInt(currentScrollTop / 3);
    setCountRef(initialCountValue + additionalCount);
  };
  React.useEffect(() => {
    document?.addEventListener("scroll", scrollHandler);
    return () => {
      document?.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <StyledContainer>
      <StyledImage src={"https://picsum.photos/id/244/1200/600"}></StyledImage>
      <StyledImageOverlay>
        <StyledTextContainer>
          <StyledHeader>
            <Header>We've been at this awhile</Header>
          </StyledHeader>

          <StyledSubheader>
            Hundreds of events under our belt, and the next will be our best one
            yet.
          </StyledSubheader>
        </StyledTextContainer>
        <StyledCardContainer>
          <StyledCountCard>
            <Subheader content={"200+"} />
            <Text content={"Events organized"} />
          </StyledCountCard>
          <StyledCountCard>
            <StyledCountUp>{countValue}</StyledCountUp>
            <Text content={"People entertained"} />
          </StyledCountCard>
          <StyledCountCard>
            <Subheader content={"10 yrs"} />
            <Text content={"Experience"} />
          </StyledCountCard>
          <StyledCountCard>
            <Subheader content={"Countless"} />
            <Text content={"Smiles"} />
          </StyledCountCard>
        </StyledCardContainer>
      </StyledImageOverlay>
    </StyledContainer>
  );
});
