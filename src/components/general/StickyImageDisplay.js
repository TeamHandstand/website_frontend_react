import React from "react";
import styled from "styled-components";
import { ImageCardWithDescription } from "./ImageCardWithDescription";
import { ImageCardWithScrollText } from "./ImageCardWithScrollText";
import { breakpoints } from "../../styles.js/breakpoints";
const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  @media (max-width: ${breakpoints.medium}px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const StyledLeftColumn = styled.div`
  position: sticky;
  top: 70px;
  width: 48%;
  align-self: flex-start;
  @media (max-width: ${breakpoints.medium}px) {
    width: 100%;
    position: relative;
    top: 0px;
    margin-bottom: 30px;
  }
`;
const StyledRightColumn = styled.div`
  width: 48%;
  @media (max-width: ${breakpoints.medium}px) {
    width: 100%;
  }
`;

export const StickyImageDisplay = React.memo(props => {
  const { stickyImage, images = [] } = props;
  return (
    <StyledContainer>
      <StyledLeftColumn>
        <ImageCardWithScrollText
          title={"Born from fun"}
          imageUrl={"https://picsum.photos/id/237/600/500"}
          linesOfDescription={[
            "Our first event was a side project in 2014.",
            "We've since launched a national event",
            "series and reinvented team building events."
          ]}
        />
      </StyledLeftColumn>
      <StyledRightColumn>
        {images.map(image => {
          return (
            <ImageCardWithDescription
              title={image?.title}
              description={image?.description}
              imageUrl={image?.imageUrl}
              gradientColor={image?.gradientColor}
            />
          );
        })}
      </StyledRightColumn>
    </StyledContainer>
  );
});
