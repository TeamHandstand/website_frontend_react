import React from "react";
import styled from "styled-components";
import { HeaderQuoteButton } from "./HeaderQuoteButton";
import { CustomLink } from "../general/CustomLink";
const StyledContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  transition: 0.1s;
  z-index: 100;
`;
const StyledHeader = styled.div`
  background-color: transparent;
  color: ${props => (props.maskOpacity > 0.2 ? "black" : "white")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  width: 100%;
  height: 100%;
  padding: 8px;
`;
const StyledLink = styled.div`
  z-index: 100;
  margin-left: 12px;
  cursor: pointer;
  transform: scale(1);
  &:hover {
    transform: scale(0.9);
  }
  transition: 0.2s;
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
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 75%;
`;

const StyledButtonContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
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
        <StyledLinkContainer>
          <StyledLink>Company Events</StyledLink>
          <StyledLink>Public Games</StyledLink>
          <StyledLink>Play Now</StyledLink>
          <StyledLink>About Us</StyledLink>
        </StyledLinkContainer>
        <StyledButtonContainer>
          <HeaderQuoteButton
            isRevealed={maskOpacity > 0.4}
            opacity={maskOpacity}
          />
        </StyledButtonContainer>
      </StyledHeader>
      <StyledHeaderMask maskOpacity={maskOpacity}>
        <StyledLinkContainer>
          <CustomLink to={""}>
            <StyledLink>Company Events</StyledLink>
          </CustomLink>
          <CustomLink to={""}>
            <StyledLink>Public Games</StyledLink>
          </CustomLink>
          <CustomLink to={""}>
            <StyledLink>Play Now</StyledLink>
          </CustomLink>
          <CustomLink to={""}>
            <StyledLink>About Us</StyledLink>
          </CustomLink>
        </StyledLinkContainer>
        <StyledButtonContainer>
          <HeaderQuoteButton
            isRevealed={maskOpacity > 0.4}
            opacity={maskOpacity}
          />
        </StyledButtonContainer>
      </StyledHeaderMask>
    </StyledContainer>
  );
});
