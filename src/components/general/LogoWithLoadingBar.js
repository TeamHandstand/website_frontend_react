import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  position: relative;
  height: 76px;
  @media (max-width: ${breakpoints.medium}px) {
    height: auto;
  }
`;
const StyledLogo = styled.img`
  width: 100%;
  max-width: 130px;
  height: auto;
  max-height: 65px;
  filter: ${props => (props.isSelected ? "grayscale(0)" : "grayscale(100)")};
  transition: 2s;
  padding: 8px 12px;
  @media (max-width: ${breakpoints.medium}px) {
    display: none;
  }
`;
const StyledLoadingBarContainer = styled.div`
  width: 100%;
  position: relative;
  height: 2px;
`;
const StyledLoadingBar = styled.div`
  width: 100%;
  height: 100%;
  opacity: ${props => (props?.isSelected ? ".3" : "0")};
  background-color: ${props => props?.testimonial?.gradient_color};
  z-index: 2;
  transition: opacity 1s;
`;
const StyledLoadingBarMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${props => props?.testimonial?.gradient_color};
  opacity: ${props => (props.isSelected ? 1 : 0)};
  width: ${props => (props.isPaused ? "100%" : `${props.width}px`)};
  transition: width
      ${props =>
        props.isPaused ? 0 : props.isSelected ? props.animationTime / 1000 : 0}s
      linear,
    opacity 1s;
`;

const StyledPositionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const LogoWithLoadingBar = React.memo(props => {
  const {
    testimonial,
    isSelected,
    onLogoClick,
    animationTime,
    isPaused
  } = props;
  const containerRef = React.useRef();
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    if (isSelected) {
      const containerWidth = containerRef?.current?.offsetWidth;
      setWidth(containerWidth);
    } else {
      setWidth(0);
    }
  }, [isSelected, isPaused]);
  return (
    <StyledContainer onClick={onLogoClick} ref={containerRef}>
      <StyledPositionContainer>
        <StyledLoadingBarContainer>
          <StyledLoadingBar
            isSelected={isSelected}
            testimonial={testimonial}
          ></StyledLoadingBar>
          <StyledLoadingBarMask
            width={width}
            testimonial={testimonial}
            isSelected={isSelected}
            animationTime={animationTime}
            isPaused={isPaused}
          ></StyledLoadingBarMask>
        </StyledLoadingBarContainer>
      </StyledPositionContainer>
      <StyledLogo src={testimonial?.logo_url} isSelected={isSelected} />
    </StyledContainer>
  );
});
