import React from "react";
import styled from "styled-components";
import { Header } from "../text/Header";
import { Text } from "../text/Text";
import { Subheader } from "../text/Subheader";
import { breakpoints } from "../../styles.js/breakpoints";
import { isInViewport } from "../../helpers/isInViewport";
import { CountUpAnimation } from "../general/CountUpAnimation";
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

const StyledReadabilityOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 45%
  );
`;

const BoldText = styled.div`
  font-weight: bold;
`;
export const CountCard = React.memo(props => {
  const { info } = props;
  const [isInView, setIsInView] = React.useState(false);
  const countRef = React.useRef();

  const scrollHandler = () => {
    if (isInViewport(countRef?.current)) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  };
  React.useEffect(() => {
    document?.addEventListener("scroll", scrollHandler);
    return () => {
      document?.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const parseNumber = value => {
    if (isNaN(value)) return value;
    return value.toLocaleString();
  };

  const buildWrapper = box => {
    if (box.count_up_value) {
      return (
        <StyledCountCard>
          <StyledCountUp ref={countRef}>
            <CountUpAnimation isCounting={isInView}>
              {box.count_up_value}
            </CountUpAnimation>
            +
          </StyledCountUp>
          <Text>{box.subtitle} </Text>
        </StyledCountCard>
      );
    } else {
      return (
        <StyledCountCard>
          <BoldText>
            <Subheader>{parseNumber(box.title)}</Subheader>
          </BoldText>
          <Text>{box.subtitle}</Text>
        </StyledCountCard>
      );
    }
  };

  return (
    <StyledContainer>
      <StyledImage src={info?.image_url}></StyledImage>
      <StyledReadabilityOverlay />
      <StyledImageOverlay>
        <StyledTextContainer>
          <StyledHeader>
            <Header>{info?.title}</Header>
          </StyledHeader>

          <StyledSubheader>
            <Subheader>{info?.subtitle}</Subheader>
          </StyledSubheader>
        </StyledTextContainer>
        <StyledCardContainer ref={countRef}>
          {buildWrapper(info?.box_1)}
          {buildWrapper(info?.box_2)}
          {buildWrapper(info?.box_3)}
          {buildWrapper(info?.box_4)}
        </StyledCardContainer>
      </StyledImageOverlay>
    </StyledContainer>
  );
});
