import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Header } from "../text/Header";
import { Subheader } from "../text/Subheader";
import { breakpoints } from "../../styles/breakpoints";
import { paddings } from "../../styles/paddings";
import { MaxWidthContainer } from "./MaxWidthContainer";

const StyledImageContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  opacity: ${props => props.opacity};
  transition: 0.2s;
  @media (min-width: ${breakpoints.hero}px) {
    width: 100%;
  }
`;
const StyledHazeContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.opacity};
  transition: 0.2s;
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0px ${paddings.y}px 0px;
`;

const StyledTextContainer = styled.div`
  position: absolute;
  width: 75%;
  top: 100px;
  left: 50%;
  color: white;
  opacity: ${props => props.opacity};
  transform: translateX(-50%);
  @media (min-width: ${breakpoints.xxLarge}px) {
    transform: translateX(0);
    left: auto;
    width: auto;
    padding-left: ${paddings.x}px;
  }
  @media (max-width: ${breakpoints.medium}px) {
    width: 100%;
    padding: 0px ${paddings.x}px;
  }
`;

const StyledHeader = styled.div`
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const StyledSubheader = styled.div`
  text-align: left;
`;

const StyledImage = styled.video`
  flex-shrink: 0;
  min-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
`;

const PositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const HeroBackground = React.memo(props => {
  const { imageUrl, videoUrl, fadeOnScroll } = props;

  const [opacity, setOpacity] = React.useState(1);
  const scrollHandler = () => {
    const currentScrollTop =
      window?.pageYOffset || document?.documentElement?.scrollTop;
    let opacity = 1;
    let lowerBound = 0;
    let upperBound = 400;
    if (currentScrollTop > lowerBound) {
      if (currentScrollTop > upperBound) {
        opacity = 0;
      } else {
        opacity = (upperBound - currentScrollTop) / (upperBound - lowerBound);
      }
    }
    setOpacity(opacity);
  };
  React.useEffect(() => {
    if (fadeOnScroll) {
      window.addEventListener("scroll", scrollHandler);
    }
    return () => {
      if (fadeOnScroll) {
        window.removeEventListener("scroll", scrollHandler);
      }
    };
  }, []);
  return (
    <StyledContainer>
      <StyledImageContainer opacity={opacity}>
        <StyledImage src={imageUrl} autoPlay muted loop />
      </StyledImageContainer>
      <StyledHazeContainer opacity={opacity}></StyledHazeContainer>
      <StyledTextContainer opacity={opacity}>
        <MaxWidthContainer>
          <PositionContainer>
            <StyledHeader>
              <Header>We craft experiences to make you smile</Header>
            </StyledHeader>
            <StyledSubheader>
              <Subheader>
                Large-scale events that bring people together and create strong
                memories.
              </Subheader>
            </StyledSubheader>
          </PositionContainer>
        </MaxWidthContainer>
      </StyledTextContainer>
    </StyledContainer>
  );
});
