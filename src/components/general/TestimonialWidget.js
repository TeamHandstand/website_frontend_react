import React from "react";
import styled from "styled-components";
import { IconCapsule } from "./IconCapsule";
import { LogoSelector } from "./LogoSelector";
import { hexToRgba } from "../../helpers/hexToRgba";
import geoIcon from "../../images/icons/case-study-icon-geo.svg";
import peopleIcon from "../../images/icons/case-study-icon-people.svg";
import { distanceBetweenIndices } from "../../helpers/distanceBetweenIndices";
import { LottieArrow } from "./LottieArrow";
import { Transition } from "react-transition-group";
import { breakpoints } from "../../styles.js/breakpoints";
import { Subheader } from "../text/Subheader";

const containerWidth = 1000;
const containerWidthMobile = 400;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`;
const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 13px;
`;
const StyledSelectionContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const StyledImageTitle = styled.img`
  margin-left: 30px;
  margin-top: 30px;
  width: auto;
  max-height: 65px;
  filter: brightness(0) invert(1);
`;
const StyledImage = styled.img`
  width: ${props => 100 / props.numTestimonials}%;
  opacity: 1;
  transition: opacity 1s;
`;
const StyledImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: ${props =>
    props.isHovered ? "translateY(-15%)" : "translateY(0)"};
  transition: 0.3s;
  color: white;
  z-index: 10;
  margin-left: 26px;
`;

const StyledCapsuleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (max-width: ${breakpoints.medium}px) {
    margin: 0;
  }
`;
const StyledHiddenContainer = styled.div`
  opacity: ${props => (props.isHovered ? "1" : "0")};
  display: flex;
  align-items: center;
  transition: 0.5s;
`;

const StyledHiddenText = styled.div`
  margin-left: 8px;
  font-size: 24px;
`;
const StyledImageSubheader = styled.div`
  font-weight: bold;
  margin-bottom: 16px;
  max-width: 650px;
  @media (max-width: ${breakpoints.medium}px) {
    display: none;
  }
`;

const StyledImageMaskContainer = styled.div`
  overflow: hidden;
  transition: transform 1s;
  transform: translateX(
    ${props =>
      -100 *
      ((parseInt(props.selectedTestimonial?.order) - 1) /
        props.numTestimonials)}%
  );
  display: flex;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: ${props => props.containerWidth * props.numTestimonials}px;
`;

const StyledImagesContainer = styled.div`
  overflow: hidden;
  transition: transform 1s, opacity 0.3s linear;
  transform: translateX(
    ${props =>
      -100 *
      ((parseInt(props.selectedTestimonial?.order) - 1) /
        props.numTestimonials)}%
  );
  display: flex;
  height: 100%;
  width: ${props => props.containerWidth * props.numTestimonials}px;
`;

const StyledImageMask = styled.div`
  width: ${props => 100 / props.numTestimonials}%;
  background: linear-gradient(
    to bottom,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.42 })} 0%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.42 })} 60.8%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.82 })} 75.7%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.82 })} 100%
  );
  transition: opacity 0.3s, transform 1s;
  color: white;
  position: relative;
`;

const StyledMaskMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.0 })} 0%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.2 })} 50%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.66 })} 81%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.8 })} 82.2%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 1 })} 100%
  );
  opacity: ${props => (props.isHovered ? 1 : 0)};
  transition: 0.3s;
`;

export const TestimonialWidget = React.memo(props => {
  const { jsonData } = props;
  const initialAnimationTime = 8000;

  const [animationTime, setAnimationTime] = React.useState(
    initialAnimationTime
  );
  const [testimonialToStopOn, setTestimonialToStopOn] = React.useState({});

  const [selectedTestimonial, setSelectedTestimonial] = React.useState(
    jsonData?.testimonials[0]
  );
  const testimonialRef = React.useRef(selectedTestimonial);

  const [storedInterval, setStoredInterval] = React.useState(null);
  const intervalRef = React.useRef(storedInterval);

  const [isHovered, setIsHovered] = React.useState(false);

  const setIntervalRef = interval => {
    intervalRef.current = interval;
    setStoredInterval(interval);
  };
  const setTestimonialRef = testimonial => {
    testimonialRef.current = testimonial;
    setSelectedTestimonial(testimonial);
  };

  const imageRef = React.useRef();

  const intervalFunction = () => {
    const index = Number(testimonialRef?.current?.order) - 1;
    const nextTestimonial =
      jsonData?.testimonials[(index + 1) % jsonData?.testimonials?.length];
    setTestimonialRef(nextTestimonial);
  };

  const handleLogoClick = testimonial => {
    if (testimonialToStopOn?.name) {
      return false;
    }
    clearInterval(intervalRef.current);
    setTestimonialRef(testimonial);
    // cycleThroughTestimonials(testimonial);
    setTimeout(() => {
      clearInterval(intervalRef.current);
      const interval = setInterval(intervalFunction, animationTime);
      setIntervalRef(interval);
    }, 20000);
  };

  const cycleThroughTestimonials = targetTestimonial => {
    const from = jsonData?.testimonials.findIndex(
      t => t?.name === selectedTestimonial?.name
    );
    const to = jsonData?.testimonials.findIndex(
      t => t?.name === targetTestimonial?.name
    );
    const distanceToNextTestimonial = distanceBetweenIndices({
      from,
      to,
      length: jsonData?.testimonials.length
    });
    console.log("FROM TO DIST", from, to, distanceToNextTestimonial);
    if (distanceToNextTestimonial === 0) {
      return false;
    }
    setTestimonialToStopOn(targetTestimonial);
    const newAnimationTime = initialAnimationTime / distanceToNextTestimonial;
    setAnimationTime(newAnimationTime);
    const interval = setInterval(intervalFunction, newAnimationTime);
    setIntervalRef(interval);
  };

  React.useEffect(() => {
    imageRef.current.style.opacity = 0;
    setTimeout(() => {
      imageRef.current.style.opacity = 1;
    }, 300);
  }, [testimonialRef?.current]);

  React.useEffect(() => {
    setTestimonialRef(jsonData?.testimonials[0]);
    const interval = setInterval(intervalFunction, animationTime);
    setIntervalRef(interval);
    return () => {
      clearInterval(interval);
      setIntervalRef(null);
    };
  }, [jsonData]);

  const handleImageMouseOver = () => {
    setIsHovered(true);
  };

  const handleImageMouseOut = () => {
    setIsHovered(false);
  };

  const containerRef = React.useRef();
  return (
    <StyledContainer ref={containerRef}>
      <StyledImageContainer
        onMouseOver={handleImageMouseOver}
        onMouseOut={handleImageMouseOut}
      >
        <StyledImagesContainer
          numTestimonials={props?.jsonData?.testimonials?.length}
          selectedTestimonial={selectedTestimonial}
          containerWidth={containerRef?.current?.offsetWidth}
          ref={imageRef}
        >
          {props?.jsonData?.testimonials?.map((testimonial, index) => {
            return (
              <StyledImage
                src={testimonial?.background_image_url}
                numTestimonials={props?.jsonData?.testimonials?.length}
              ></StyledImage>
            );
          })}
        </StyledImagesContainer>
        <StyledImageMaskContainer
          numTestimonials={props?.jsonData?.testimonials?.length}
          selectedTestimonial={selectedTestimonial}
          containerWidth={containerRef?.current?.offsetWidth}
        >
          {props?.jsonData?.testimonials?.map((testimonial, index) => {
            return (
              <StyledImageMask
                gradientColor={testimonial?.gradient_color}
                isHovered={isHovered}
                testimonialIndex={index}
                numTestimonials={props?.jsonData?.testimonials?.length}
              >
                <StyledImageTitle
                  src={testimonial?.logo_url}
                ></StyledImageTitle>
                <StyledImageCaption isHovered={isHovered}>
                  <StyledImageSubheader>
                    <Subheader>{testimonial?.headline_text}</Subheader>
                  </StyledImageSubheader>
                  <StyledCapsuleContainer>
                    <IconCapsule
                      icon={peopleIcon}
                      text={testimonial?.left_bubble_text}
                    />
                    <IconCapsule
                      icon={geoIcon}
                      text={testimonial?.right_bubble_text}
                    />
                  </StyledCapsuleContainer>
                  <StyledHiddenContainer isHovered={isHovered}>
                    <StyledHiddenText>
                      Request an event like this
                    </StyledHiddenText>
                    <LottieArrow isMousedOver={isHovered} isWhite />
                  </StyledHiddenContainer>
                </StyledImageCaption>
                <StyledMaskMask
                  isHovered={isHovered}
                  gradientColor={testimonial?.gradient_color}
                ></StyledMaskMask>
              </StyledImageMask>
            );
          })}
        </StyledImageMaskContainer>
      </StyledImageContainer>
      <StyledSelectionContainer>
        <LogoSelector
          testimonials={jsonData?.testimonials}
          onLogoClick={handleLogoClick}
          selectedTestimonial={selectedTestimonial}
          animationTime={animationTime}
        />
      </StyledSelectionContainer>
    </StyledContainer>
  );
});
