import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  width: 100%;
`;
const StyledLogo = styled.img`
  width: 100%;
  height: auto;
  filter: ${props => (props.isSelected ? "none" : "grayscale(100)")};
`;
const StyledLoadingBarContainer = styled.div`
  width: 100%;
  position: relative;
  height: 3px;
`;
const StyledLoadingBar = styled.div`
  width: 100%;
  height: 100%;
  opacity: ${props => (props?.isSelected ? ".3" : "0")};
  background-color: ${props => props?.testimonial?.gradient_color};
`;
const StyledLoadingBarMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${props => props?.testimonial?.gradient_color};
  opacity: ${props => (props.isSelected ? 1 : 0)};
  width: ${props => props.width}px;
  transition: ${props => (props.isSelected ? props.animationTime / 1000 : 0)}s;
`;

export const LogoWithLoadingBar = React.memo(props => {
  const { testimonial, isSelected, onLogoClick, animationTime } = props;
  const containerRef = React.useRef();
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    if (isSelected) {
      const containerWidth = containerRef?.current?.offsetWidth;
      setWidth(containerWidth);
    } else {
      setWidth(0);
    }
  }, [isSelected]);
  return (
    <StyledContainer onClick={onLogoClick} ref={containerRef}>
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
        ></StyledLoadingBarMask>
      </StyledLoadingBarContainer>
      <StyledLogo src={testimonial?.logo_url} isSelected={isSelected} />
    </StyledContainer>
  );
});
