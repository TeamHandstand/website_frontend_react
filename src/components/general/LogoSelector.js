import React from "react";
import styled from "styled-components";
import { LogoWithLoadingBar } from "./LogoWithLoadingBar";
import { colors } from "../../styles.js/colors";
const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: ;
`;
const LogoContainer = styled.div`
  width: ${props => `100/${props?.testimonials?.length}%`};
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDivider = styled.div`
  width: 2px;
  height: 85%;
  background-color: ${colors.lightGrey};
`;
export const LogoSelector = React.memo(props => {
  const {
    testimonials,
    onLogoClick,
    selectedTestimonial,
    animationTime
  } = props;

  const handleLogoClick = testimonial => {
    onLogoClick(testimonial);
  };
  return (
    <StyledContainer>
      {testimonials.map((testimonial, index) => {
        return (
          <LogoContainer>
            <LogoWithLoadingBar
              isSelected={testimonial?.name === selectedTestimonial?.name}
              testimonial={testimonial}
              onLogoClick={() => handleLogoClick(testimonial)}
              animationTime={animationTime}
            />
            {index !== testimonials?.length && <StyledDivider />}
          </LogoContainer>
        );
      })}
    </StyledContainer>
  );
});
