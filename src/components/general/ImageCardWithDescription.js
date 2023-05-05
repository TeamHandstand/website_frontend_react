import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  width: 100%;
`;
const StyledTitle = styled.div``;
const StyledImage = styled.img`
  width: 100%;
`;
const StyledImageWithTitle = styled.div``;
const StyledDescription = styled.div``;
export const ImageCardWithDescription = React.memo(props => {
  const { imageUrl, title, description } = props;
  return (
    <StyledContainer>
      <StyledImageWithTitle>
        <StyledTitle>{title}</StyledTitle>
        <StyledImage src={imageUrl} />
      </StyledImageWithTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledContainer>
  );
});
