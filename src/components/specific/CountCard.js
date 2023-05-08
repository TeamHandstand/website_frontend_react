import React from "react";
import styled from "styled-components";
import { Header } from "../text/Header";
import { Text } from "../text/Text";
import { Subheader } from "../text/Subheader";

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;
const StyledImage = styled.img`
  width: 100%;
`;
const StyledImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const StyledTextContainer = styled.div`
  width: 100%;
  color: white;
`;
const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  text-align: center;
  margin-bottom: 10px;
`;
const StyledCountCard = styled.div`
  width: 20%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  background-color: white;
  color: black;
  border-radius: 13px;
`;
export const CountCard = React.memo(props => {
  return (
    <StyledContainer>
      <StyledImage src={"https://picsum.photos/id/244/1200/600"}></StyledImage>
      <StyledImageOverlay>
        <StyledTextContainer>
          <Header content={"We've been at this awhile"} />
          <Text
            content={
              "Hundreds of events under our belt, and the next will be our best one yet."
            }
          />
        </StyledTextContainer>
        <StyledCardContainer>
          <StyledCountCard>
            <Subheader content={"200+"} />
            <Text content={"Events organized"} />
          </StyledCountCard>
          <StyledCountCard>
            <Subheader content={"12000+"} />
            <Text content={"People entertained"} />
          </StyledCountCard>
          <StyledCountCard>
            <Subheader content={"10 yrs"} />
            <Text content={"Experience"} />
          </StyledCountCard>
          <StyledCountCard>
            <Subheader content={"Countless"} />
            <Text content={"Smiles"} />
          </StyledCountCard>
        </StyledCardContainer>
      </StyledImageOverlay>
    </StyledContainer>
  );
});
