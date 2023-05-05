import React from "react";
import styled from "styled-components";
import { isInViewport } from "../../helpers/isInViewport";
const StyledContainer = styled.div`
  position: relative;
`;
const StyledText = styled.div`
  color: grey;
  background-color: white;
  z-index: 1;
`;
const StyledMask = styled.div`
  position: absolute;
  width: ${props => {
    return `${props.width}px`;
  }};
  height: 100%;
  background-color: transparent;
  color: black;
  top: 0;
  left: 0;
  transition: 0.1s;
  z-index: 2;
  overflow: hidden;
`;
export const ScrollTextLine = React.memo(props => {
  const { line } = props;
  const [isInView, setIsInView] = React.useState(false);
  const [lastScrollTop, setLastScrollTop] = React.useState(
    window?.pageYOffset || document?.documentElement?.scrollTop
  );
  const [width, setWidth] = React.useState(0);

  const scrollRef = React.useRef(lastScrollTop);
  const setScrollRef = scrollTop => {
    scrollRef.current = scrollTop;
    setLastScrollTop(scrollTop);
  };

  const widthRef = React.useRef(width);
  const setWidthRef = newWidth => {
    widthRef.current = newWidth;
    setWidth(newWidth);
  };

  const textRef = React.useRef();
  const scrollFunction = () => {
    const element = textRef.current;
    if (isInViewport(textRef.current)) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  };

  const scrollUpOrDownFunction = () => {
    const currentScrollTop =
      window?.pageYOffset || document?.documentElement?.scrollTop;
    if (currentScrollTop > scrollRef.current) {
      // scrolled down
      const newWidth = Math.min(
        Number(widthRef.current + 10),
        textRef?.current?.offsetWidth
      );
      setWidthRef(newWidth);
    }

    if (currentScrollTop < scrollRef.current) {
      //   scrolled up
      const newWidth = Math.max(0, Number(widthRef.current - 10));
      setWidthRef(newWidth);
    }
    setScrollRef(currentScrollTop);
  };

  React.useEffect(() => {
    document?.addEventListener("scroll", scrollFunction);

    return () => {
      document?.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  React.useEffect(() => {
    if (isInView) {
      addScrollListener();
    } else {
      //   removeScrollListener();
    }
  }, [isInView]);

  const addScrollListener = () => {
    document?.addEventListener("scroll", scrollUpOrDownFunction);
  };

  const removeScrollListener = () => {
    document?.removeEventListener("scroll", scrollUpOrDownFunction);
  };
  return (
    <StyledContainer>
      <StyledText ref={textRef}>{line}</StyledText>
      <StyledMask width={width}>{line}</StyledMask>
    </StyledContainer>
  );
});
