import React from "react";
import styled from "styled-components";
import { IconCapsule } from "./IconCapsule";
import { LogoSelector } from "./LogoSelector";
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
`;
const StyledSelectionContainer = styled.div`
  width: 100%;
`;
const StyledImageTitle = styled.div``;
const StyledImage = styled.img`
  width: 100%;
  opacity: 1;
  transition: opacity 1s;
`;
const StyledImageCaption = styled.div``;
const StyledImageSubheader = styled.div``;
const StyledImageMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
  color: white;
`;
export const TestimonialWidget = React.memo(props => {
  const animationTime = 8000;
  const testimonials = [
    {
      order: "1",
      name: "Google",
      left_bubble_text: "1,200 people",
      right_bubble_text: "In Person",
      headline_text:
        "Google trusts us to be the main event at their annual holiday party.",
      gradient_color: "#4285F4",
      logo_url: "https://picsum.photos/id/255/200/70",
      background_image_url: "https://picsum.photos/id/250/1200/600"
    },
    {
      order: "2",
      name: "Poodle",
      left_bubble_text: "1,200 people",
      right_bubble_text: "In Person",
      headline_text: "Poodle is as Poodle does.",
      gradient_color: "#FF1830",
      logo_url: "https://picsum.photos/id/211/200/70",
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
      logo_url: "https://picsum.photos/id/277/200/70",
      background_image_url: "https://picsum.photos/id/288/1200/600"
    }
  ];

  const [selectedTestimonial, setSelectedTestimonial] = React.useState(
    testimonials[0]
  );
  const testimonialRef = React.useRef(selectedTestimonial);

  const [storedInterval, setStoredInterval] = React.useState(null);
  const intervalRef = React.useRef(storedInterval);

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
    console.log("THIS LOGO WAS CLICKED", testimonial, intervalRef.current);
    clearInterval(intervalRef.current);
    const interval = setInterval(intervalFunction, animationTime);
    setIntervalRef(interval);
    setTestimonialRef(testimonial);
  };

  React.useEffect(() => {
    console.log("ADJUSTING THE REF?", imageRef.current);
    imageRef.current.style.opacity = 0;
    setTimeout(() => {
      imageRef.current.style.opacity = 1;
    }, 500);
  }, [selectedTestimonial]);

  console.log("WIDGET HAS RENDERD");

  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledImage
          src={selectedTestimonial?.background_image_url}
          ref={imageRef}
        ></StyledImage>
        <StyledImageMask>
          <StyledImageTitle>{selectedTestimonial?.name}</StyledImageTitle>
          <StyledImageCaption>
            <StyledImageSubheader>
              {selectedTestimonial?.headline_text}
            </StyledImageSubheader>
            <IconCapsule
              icon={""}
              content={selectedTestimonial?.left_bubble_text}
            />
            <IconCapsule
              icon={""}
              content={selectedTestimonial?.right_bubble_text}
            />
          </StyledImageCaption>
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
