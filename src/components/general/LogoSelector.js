import React from "react";
import styled from "styled-components";
import { LogoWithLoadingBar } from "./LogoWithLoadingBar";
const StyledContainer = styled.div`
  width: 100%;
  display: flex;
`;
const LogoContainer = styled.div`
  width: ${props => `100/${props?.testimonials?.length}%`};
  flex-grow: 1;
`;
export const LogoSelector = React.memo(props => {
  const { testimonials, onLogoClick, selectedTestimonial } = props;

  const handleLogoClick = testimonial => {
    onLogoClick(testimonial);
  };
  return (
    <StyledContainer>
      {testimonials.map(testimonial => {
        return (
          <LogoContainer>
            <LogoWithLoadingBar
              isSelected={testimonial?.name === selectedTestimonial?.name}
              testimonial={testimonial}
              onLogoClick={() => handleLogoClick(testimonial)}
            />
          </LogoContainer>
        );
      })}
    </StyledContainer>
  );
});
