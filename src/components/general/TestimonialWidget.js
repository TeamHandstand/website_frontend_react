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
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
`;
const StyledSelectionContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const StyledImageTitle = styled.img`
  margin-left: 12px;
  margin-top: 12px;
  width: 220px;
  height: auto;
  filter: brightness(0) invert(1);
`;
const StyledImage = styled.img`
  width: 100%;
  opacity: 1;
  transition: opacity 1s;
`;
const StyledImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: ${props =>
    props.isHovered ? "translateY(-30%)" : "translateY(0)"};
  transition: 0.3s;
  color: white;
  z-index: 10;
  margin-left: 12px;
`;

const StyledCapsuleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  margin-top: 8px;
  margin-bottom: 8px;
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
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  max-width: 650px;
`;
const StyledImageMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.42 })} 0%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.42 })} 60.8%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.82 })} 75.7%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.82 })} 100%
  );
  transition: opacity 0.3s, transform 1s;
  color: white;
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
    ${props => hexToRgba({ hex: props.gradientColor, a: 0.6 })} 81%,
    ${props => hexToRgba({ hex: props.gradientColor, a: 1 })} 82.2%,
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

  const [isAnimated, setIsAnimated] = React.useState(false);

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
    // cycleThroughTestimonials(testimonial);
    // TODO: wait 20s or so before restarting interval
    const interval = setInterval(intervalFunction, animationTime);
    setIntervalRef(interval);
    setTestimonialRef(testimonial);
  };

  const cycleThroughTestimonials = targetTestimonial => {
    const from = jsonData?.testimonials.findIndex(
      t => t.name === selectedTestimonial.name
    );
    const to = jsonData?.testimonials.findIndex(
      t => t.name === targetTestimonial.name
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
    setIsAnimated(false);
    setIsAnimated(true);
    console.log("ADJUSTING THE REF?", imageRef.current);
    imageRef.current.style.opacity = 0;
    setTimeout(() => {
      imageRef.current.style.opacity = 1;
    }, 100);
  }, [selectedTestimonial]);

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

  return (
    <StyledContainer>
      <StyledImageContainer
        onMouseOver={handleImageMouseOver}
        onMouseOut={handleImageMouseOut}
      >
        <StyledImage
          src={selectedTestimonial?.background_image_url}
          ref={imageRef}
        ></StyledImage>
        <StyledImageMask
          gradientColor={selectedTestimonial?.gradient_color}
          isHovered={isHovered}
        >
          <StyledImageTitle
            src={selectedTestimonial?.logo_url}
          ></StyledImageTitle>
          <StyledImageCaption isHovered={isHovered}>
            <StyledImageSubheader>
              {selectedTestimonial?.headline_text}
            </StyledImageSubheader>
            <StyledCapsuleContainer>
              <IconCapsule
                icon={geoIcon}
                text={selectedTestimonial?.left_bubble_text}
              />
              <IconCapsule
                icon={peopleIcon}
                text={selectedTestimonial?.right_bubble_text}
              />
            </StyledCapsuleContainer>
            <StyledHiddenContainer isHovered={isHovered}>
              <StyledHiddenText>Request an event like this</StyledHiddenText>
              <LottieArrow isMousedOver={isHovered} isWhite />
            </StyledHiddenContainer>
          </StyledImageCaption>
          <StyledMaskMask
            isHovered={isHovered}
            gradientColor={selectedTestimonial?.gradient_color}
          ></StyledMaskMask>
        </StyledImageMask>
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
