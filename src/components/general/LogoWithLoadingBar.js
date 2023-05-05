import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div``;
const StyledLogo = styled.img``;
export const LogoWithLoadingBar = React.memo(props => {
  const { logo, isSelected, onLogoClick } = props;
  return (
    <StyledContainer onClick={onLogoClick}>
      <StyledLogo src={logo?.imageUrl} />
    </StyledContainer>
  );
});
