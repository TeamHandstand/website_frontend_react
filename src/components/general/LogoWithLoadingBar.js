import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div``;
const StyledLogo = styled.img``;
export const LogoWithLoadingBar = React.memo(props => {
  const { testimonial, isSelected, onLogoClick } = props;
  return (
    <StyledContainer onClick={onLogoClick}>
      <StyledLogo src={testimonial?.logo_url} isSelected={isSelected} />
    </StyledContainer>
  );
});
