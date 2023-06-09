import React from "react";
import styled from "styled-components";
import { HeaderQuoteButton } from "./HeaderQuoteButton";
import { CustomLink } from "../general/CustomLink";
import logo from "../../images/logos/logo-handstand-header.svg";
import { breakpoints } from "../../styles/breakpoints";
import { MaxWidthContainer } from "../general/MaxWidthContainer";

// TODO: use a 1s transition of background-color and font color when scrolled past the threshold.

const StyledContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isScrolled ? "#ffffff" : "transparent")};
  transition: 0.6s linear;
`;
const StyledHeader = styled.div`
  background-color: transparent;
  color: ${props => (props.isScrolled ? "black" : "white")};
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
  @media (max-width: ${breakpoints.medium}px) {
    display: none;
  }
`;

const StyledButtonContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: ${breakpoints.medium}px) {
    width: auto;
  }
`;

const StyledLogo = styled.img`
  width: 120px;
  height: auto;
  margin-right: 20px;
  margin-left: 12px;
  filter: ${props => (props.isBlack ? "brightness(0) saturate(100%)" : "none")};
  transition: 0.6s linear;
`;

export const Header = React.memo(props => {
  const [scrollFromTop, setScrollFromTop] = React.useState(
    window?.pageYOffset || document?.documentElement?.scrollTop
  );
  const [maskOpacity, setMaskOpacity] = React.useState(0);

  const [isScrolled, setIsScrolled] = React.useState(window?.pageYOffset > 100);

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

    if (currentScrollTop > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    // const opacityPerPixel = 0.005;
    // if (currentScrollTop > 100) {
    //   const newOpacity = Math.min(
    //     1,
    //     (scrollRef.current - 100) * opacityPerPixel
    //   );
    //   setOpacityRef(newOpacity);
    // } else {
    //   setOpacityRef(0);
    // }
    // setScrollRef(currentScrollTop);
  };
  React.useEffect(() => {
    document.addEventListener("scroll", scrollListener);

    return () => {
      document.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <StyledContainer isScrolled={isScrolled}>
      <MaxWidthContainer>
        <StyledHeader maskOpacity={maskOpacity} isScrolled={isScrolled}>
          <CustomLink to={""}>
            <StyledLogo src={logo} isBlack={isScrolled} />
          </CustomLink>
          <StyledLinkContainer>
            <StyledLink>Company Events</StyledLink>
            <StyledLink>Public Games</StyledLink>
            <StyledLink>Play Now</StyledLink>
            <StyledLink>About Us</StyledLink>
          </StyledLinkContainer>
          <StyledButtonContainer>
            <HeaderQuoteButton isRevealed={isScrolled} opacity={maskOpacity} />
          </StyledButtonContainer>
        </StyledHeader>
      </MaxWidthContainer>
    </StyledContainer>
  );
});
