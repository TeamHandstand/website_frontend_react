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
      gradient_color: "#4285F4",
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
      gradient_color: "#4285F4",
      logo_url: "https://picsum.photos/id/277/200/70",
      background_image_url: "https://picsum.photos/id/288/1200/600"
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
        <StyledImage
          src={selectedTestimonial?.background_image_url}
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
        />
      </StyledSelectionContainer>
    </StyledContainer>
  );
});
