import React from "react";
import styled from "styled-components";
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
  background-color: lightgray;
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
      setOpacity(opacity);
    }
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
    </StyledContainer>
  );
});
