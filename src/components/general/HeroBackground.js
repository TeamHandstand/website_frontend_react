import React from "react";
import styled from "styled-components";
import { colors } from "../../styles.js/colors";
const StyledImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: ${props => props.opacity};
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${colors.lightGrey};
`;

const StyledTextContainer = styled.div`
  position: absolute;
  width: 75%;
  top: 100px;
  left: 50%;
  color: white;
  opacity: ${props => props.opacity};
  transform: translateX(-50%);
`;

const StyledHeader = styled.div`
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const StyledSubheader = styled.div`
  font-size: 30px;
  text-align: left;
`;

const StyledImage = styled.img``;

export const HeroBackground = React.memo(props => {
  const { imageUrl, videoUrl, fadeOnScroll } = props;

  const [opacity, setOpacity] = React.useState(1);
  const scrollHandler = () => {
    const currentScrollTop =
      window?.pageYOffset || document?.documentElement?.scrollTop;
    let opacity = 1;
    let lowerBound = 300;
    let upperBound = 700;
    console.log("CURRENT SCROLL TOP IS", currentScrollTop);
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
        <StyledImage src={imageUrl} />
      </StyledImageContainer>
      <StyledTextContainer opacity={opacity}>
        <StyledHeader>We craft experiences to make you smile</StyledHeader>
        <StyledSubheader>
          Large-scale events that bring people together and create strong
          memories.
        </StyledSubheader>
      </StyledTextContainer>
    </StyledContainer>
  );
});
