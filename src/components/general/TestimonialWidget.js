import React from "react";
import styled from "styled-components";
import { IconCapsule } from "./IconCapsule";
import { LogoSelector } from "./LogoSelector";
const StyledContainer = styled.div``;
const StyledImageContainer = styled.div``;
const StyledSelectionContainer = styled.div``;
const StyledImageTitle = styled.div``;
const StyledImage = styled.div``;
const StyledImageCaption = styled.div``;
const StyledImageSubheader = styled.div``;
export const TestimonialWidget = React.memo(props => {
  const testimonials = [
    {
      order: "1",
      name: "Google",
      left_bubble_text: "1,200 people",
      right_bubble_text: "In Person",
      headline_text:
        "Google trusts us to be the main event at their annual holiday party.",
      gradient_color: "#4285F4",
      logo_url: "somelogo.svg", // @Ben - different URLs for grayscale and white logos or no? svg vs png ?
      background_image_url: "somebackground.jpg"
    }
  ];

  const [selectedTestimonial, setSelectedTestimonial] = React.useState(
    testimonials[0]
  );
  const handleLogoClick = testimonial => {
    console.log("THIS LOGO WAS CLICKED", testimonial);
    setSelectedTestimonial(testimonial);
  };
  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledImageTitle></StyledImageTitle>
        <StyledImage></StyledImage>
        <StyledImageCaption>
          <StyledImageSubheader></StyledImageSubheader>
          <IconCapsule />
          <IconCapsule />
        </StyledImageCaption>
      </StyledImageContainer>
      <StyledSelectionContainer>
        <LogoSelector
          testimonials={testimonials}
          onLogoClick={handleLogoClick}
          selectedTestimonial={selectedTestimonial}
        />
      </StyledSelectionContainer>
    </StyledContainer>
  );
});
