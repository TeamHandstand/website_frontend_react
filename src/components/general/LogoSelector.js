import React from "react";
import styled from "styled-components";
import { LogoWithLoadingBar } from "./LogoWithLoadingBar";
const StyledContainer = styled.div``;
const LogoContainer = styled.div`
  width: ${props => `100/${props?.logos?.length}%`};
`;
export const LogoSelector = React.memo(props => {
  const { logos, onLogoClick } = props;
  return (
    <StyledContainer>
      {logos.map(logo => {
        <LogoContainer>
          <LogoWithLoadingBar logo={logo} onLogoClick={onLogoClick} />
        </LogoContainer>;
      })}
    </StyledContainer>
  );
});
