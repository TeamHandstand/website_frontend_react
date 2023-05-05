import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  transition: 0.1s;
  z-index: 100;
`;
const StyledHeader = styled.div`
  background-color: transparent;
  color: ${props => (props.maskOpacity > 0.2 ? "black" : "white")};
  display: flex;
  z-index: 100;
`;
const StyledLink = styled.div`
  z-index: 100;
`;
const StyledHeaderMask = styled.div`
  background-color: white;
  color: black;
  opacity: ${props => props.maskOpacity};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  z-index: 100;
`;

export const Header = React.memo(props => {
  const [scrollFromTop, setScrollFromTop] = React.useState(
    window?.pageYOffset || document?.documentElement?.scrollTop
  );
  const [maskOpacity, setMaskOpacity] = React.useState(0);

  const opacityRef = React.useRef(maskOpacity);
  const scrollRef = React.useRef(scrollFromTop);

  const setScrollRef = scroll => {
    scrollRef.current = scroll;
    setScrollFromTop(scroll);
  };

  const setOpacityRef = opacity => {
    opacityRef.current = opacity;
    setMaskOpacity(opacity);
  };
  const scrollListener = () => {
    const currentScrollTop =
      window?.pageYOffset || document?.documentElement?.scrollTop;
    const opacityPerPixel = 0.005;
    if (currentScrollTop > 100) {
      const newOpacity = Math.min(
        1,
        (scrollRef.current - 100) * opacityPerPixel
      );
      setOpacityRef(newOpacity);
    } else {
      setOpacityRef(0);
    }
    setScrollRef(currentScrollTop);
  };
  React.useEffect(() => {
    document.addEventListener("scroll", scrollListener);

    return () => {
      document.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <StyledContainer>
      <StyledHeader maskOpacity={maskOpacity}>
        <StyledLink>Company Events</StyledLink>
        <StyledLink>Public Games</StyledLink>
        <StyledLink>Play Now</StyledLink>
        <StyledLink>About Us</StyledLink>
      </StyledHeader>
      <StyledHeaderMask maskOpacity={maskOpacity}>
        <StyledLink>Company Events</StyledLink>
        <StyledLink>Public Games</StyledLink>
        <StyledLink>Play Now</StyledLink>
        <StyledLink>About Us</StyledLink>
      </StyledHeaderMask>
    </StyledContainer>
  );
});
