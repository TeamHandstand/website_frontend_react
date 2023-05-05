import React from "react";
import styled from "styled-components";
import { LogoWithLoadingBar } from "./LogoWithLoadingBar";
const StyledContainer = styled.div``;
const LogoContainer = styled.div`
  width: ${props => `100/${props?.testimonials?.length}%`};
`;
export const LogoSelector = React.memo(props => {
  const { testimonials, onLogoClick, selectedTestimonial } = props;

  return (
    <StyledContainer>
      {testimonials.map(testimonial => {
        <LogoContainer>
          <LogoWithLoadingBar
            isSelected={testimonial?.name === selectedTestimonial?.name}
            logo={testimonial}
            onLogoClick={onLogoClick}
          />
        </LogoContainer>;
      })}
    </StyledContainer>
  );
});
