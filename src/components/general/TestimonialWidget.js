import React from "react";
import styled from "styled-components";
import { IconCapsule } from "./IconCapsule";
import { LogoSelector } from "./LogoSelector";
import { hexToRgba } from "../../helpers/hexToRgba";
import geoIcon from "../../images/icons/case-study-icon-geo.svg";
import peopleIcon from "../../images/icons/case-study-icon-people.svg";
import { distanceBetweenIndices } from "../../helpers/distanceBetweenIndices";
import { LottieArrow } from "./LottieArrow";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;
const StyledSelectionContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const StyledImageTitle = styled.div`
  font-size: 40px;
  margin-left: 12px;
  margin-top: 12px;
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
`;
const StyledImageSubheader = styled.div``;
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
  transition: 0.3s;
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
  const initialAnimationTime = 8000;
  const testimonials = [
    {
      order: "1",
      name: "Google",
      left_bubble_text: "1,200 people",
      right_bubble_text: "In Person",
      headline_text:
        "Google trusts us to be the main event at their annual holiday party.",
      gradient_color: "#4285F4",
      logo_url:
        "https://s3.us-west-1.amazonaws.com/assets.handstandwith.us/web/logos/airbnb-color%402x.png",
      background_image_url: "https://picsum.photos/id/250/1200/600"
    },
    {
      order: "2",
      name: "Poodle",
      left_bubble_text: "1,200 people",
      right_bubble_text: "In Person",
      headline_text: "Poodle is as Poodle does.",
      gradient_color: "#FF1830",
      logo_url:
        "https://s3.us-west-1.amazonaws.com/assets.handstandwith.us/web/logos/google-color%402x.png",
      background_image_url: "https://picsum.photos/id/212/1200/600"
    },
    {
      order: "3",
      name: "Fernando",
      left_bubble_text: "1,200 people",
      right_bubble_text: "In Person",
      headline_text:
        "Not a corporate or public thing. Just Fernando. The man's a legend.",
      gradient_color: "#60E930",
      logo_url:
        "https://s3.us-west-1.amazonaws.com/assets.handstandwith.us/web/logos/linkedin-color%402x.png",
      background_image_url: "https://picsum.photos/id/288/1200/600"
    },
    {
      order: "4",
      name: "Superfly",
      left_bubble_text: "1,200 people",
      right_bubble_text: "In Person",
      headline_text:
        "Not a corporate or public thing. Just Fernando. The man's a legend.",
      gradient_color: "#780a4c",
      logo_url:
        "https://s3.us-west-1.amazonaws.com/assets.handstandwith.us/web/logos/bain-color%402x.png",
      background_image_url: "https://picsum.photos/id/311/1200/600"
    },
    {
      order: "5",
      name: "Jimothy",
      left_bubble_text: "1,200 people",
      right_bubble_text: "In Person",
      headline_text:
        "Not a corporate or public thing. Just Fernando. The man's a legend.",
      gradient_color: "#018075",
      logo_url:
        "https://s3.us-west-1.amazonaws.com/assets.handstandwith.us/web/logos/uber-logo-larger2%402x.png",
      background_image_url: "https://picsum.photos/id/382/1200/600"
    },
    {
      order: "6",
      name: "Inscrutable",
      left_bubble_text: "1,200 people",
      right_bubble_text: "In Person",
      headline_text:
        "Not a corporate or public thing. Just Fernando. The man's a legend.",
      gradient_color: "#ba9f04",
      logo_url:
        "https://s3.us-west-1.amazonaws.com/assets.handstandwith.us/web/logos/linkedin-color%402x.png",
      background_image_url: "https://picsum.photos/id/354/1200/600"
    },
    {
      order: "7",
      name: "Popeye",
      left_bubble_text: "1,200 people",
      right_bubble_text: "In Person",
      headline_text:
        "Not a corporate or public thing. Just Fernando. The man's a legend.",
      gradient_color: "#320163",
      logo_url:
        "https://s3.us-west-1.amazonaws.com/assets.handstandwith.us/web/logos/linkedin-color%402x.png",
      background_image_url: "https://picsum.photos/id/329/1200/600"
    }
  ];

  const [animationTime, setAnimationTime] = React.useState(
    initialAnimationTime
  );
  const [testimonialToStopOn, setTestimonialToStopOn] = React.useState({});

  const [selectedTestimonial, setSelectedTestimonial] = React.useState(
    testimonials[0]
  );
  const testimonialRef = React.useRef(selectedTestimonial);

  const [storedInterval, setStoredInterval] = React.useState(null);
  const intervalRef = React.useRef(storedInterval);

  const [isHovered, setIsHovered] = React.useState(false);

  const [isMousedOver, setIsMousedOver] = React.useState(false);

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
    const index = Number(testimonialRef.current.order) - 1;
    const nextTestimonial = testimonials[(index + 1) % testimonials.length];
    console.log(
      "index",
      index,
      "next testimonial",
      nextTestimonial,
      testimonials
    );
    setTestimonialRef(nextTestimonial);
  };
  React.useEffect(() => {
    const interval = setInterval(intervalFunction, animationTime);
    console.log("THE INTERVAL TO STORE", interval);
    setIntervalRef(interval);
    return () => {
      clearInterval(interval);
      setIntervalRef(null);
    };
  }, []);
  const handleLogoClick = testimonial => {
    if (testimonialToStopOn?.name) {
      return false;
    }
    console.log("THIS LOGO WAS CLICKED", testimonial, intervalRef.current);
    clearInterval(intervalRef.current);
    // cycleThroughTestimonials(testimonial);
    // TODO: wait 20s or so before restarting interval
    const interval = setInterval(intervalFunction, animationTime);
    setIntervalRef(interval);
    setTestimonialRef(testimonial);
  };

  const cycleThroughTestimonials = targetTestimonial => {
    const from = testimonials.findIndex(
      t => t.name === selectedTestimonial.name
    );
    const to = testimonials.findIndex(t => t.name === targetTestimonial.name);
    const distanceToNextTestimonial = distanceBetweenIndices({
      from,
      to,
      length: testimonials.length
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
    console.log("ADJUSTING THE REF?", imageRef.current);
    imageRef.current.style.opacity = 0;
    setTimeout(() => {
      imageRef.current.style.opacity = 1;
    }, 500);
  }, [selectedTestimonial]);

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
          <StyledImageTitle>{selectedTestimonial?.name}</StyledImageTitle>
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
              <LottieArrow isMousedOver={isHovered} />
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
          testimonials={testimonials}
          onLogoClick={handleLogoClick}
          selectedTestimonial={selectedTestimonial}
          animationTime={animationTime}
        />
      </StyledSelectionContainer>
    </StyledContainer>
  );
});
