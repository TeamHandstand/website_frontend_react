import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  width: 100%;
`;
const StyledLogo = styled.img`
  width: 100%;
  height: auto;
  filter: ${props => (props.isSelected ? "none" : "grayscale(100)")};
`;
export const LogoWithLoadingBar = React.memo(props => {
  const { testimonial, isSelected, onLogoClick } = props;
  return (
    <StyledContainer onClick={onLogoClick}>
      <StyledLogo src={testimonial?.logo_url} isSelected={isSelected} />
    </StyledContainer>
  );
});
