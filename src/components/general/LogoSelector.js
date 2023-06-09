import React from "react";
import styled from "styled-components";
import { LogoWithLoadingBar } from "./LogoWithLoadingBar";
import { colors } from "../../styles/colors";
import { breakpoints } from "../../styles/breakpoints";
const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: ;
`;
const LogoContainer = styled.div`
  width: ${props => `${100 / props.numTestimonials}%`};
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDivider = styled.div`
  width: 2px;
  height: 85%;
  background-color: ${colors.lightGrey};
  @media (max-width: ${breakpoints.medium}px) {
    display: none;
  }
`;
export const LogoSelector = React.memo(props => {
  const {
    testimonials,
    onLogoClick,
    selectedTestimonial,
    animationTime,
    isPaused
  } = props;

  const handleLogoClick = testimonial => {
    onLogoClick(testimonial);
  };
  return (
    <StyledContainer>
      {testimonials.map((testimonial, index) => {
        return (
          <LogoContainer numTestimonials={testimonials?.length}>
            <LogoWithLoadingBar
              isSelected={testimonial?.name === selectedTestimonial?.name}
              testimonial={testimonial}
              onLogoClick={() => handleLogoClick(testimonial)}
              animationTime={animationTime}
              isPaused={isPaused}
            />
            {index !== testimonials?.length - 1 && <StyledDivider />}
          </LogoContainer>
        );
      })}
    </StyledContainer>
  );
});
