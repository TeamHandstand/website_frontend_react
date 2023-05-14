import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  background-color: white;
  border-radius: 500px;
  height: 40px;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 10px;
  color: black;
`;
const StyledImage = styled.img`
  margin-right: 5px;
`;

const StyledText = styled.div``;
export const IconCapsule = React.memo(props => {
  const { icon, text } = props;
  return (
    <StyledContainer>
      <StyledImage src={icon}></StyledImage> <StyledText>{text}</StyledText>
    </StyledContainer>
  );
});
