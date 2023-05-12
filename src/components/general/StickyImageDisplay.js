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
  const { jsonData } = props;
  return (
    <StyledContainer>
      <StyledLeftColumn>
        <ImageCardWithScrollText
          title={jsonData?.handstand_birth?.sticky_image?.title}
          imageUrl={jsonData?.handstand_birth?.sticky_image?.image_url}
          linesOfDescription={[
            "Our first event was a side project in 2014.",
            "We've since launched a national event",
            "series and reinvented team building events."
          ]}
        />
      </StyledLeftColumn>
      <StyledRightColumn>
        {jsonData?.handstand_birth?.scrolly_images?.map(image => {
          return (
            <ImageCardWithDescription
              key={image?.title}
              title={image?.title}
              description={image?.subtitle}
              imageUrl={image?.image_url}
              gradientColor={image?.gradient_color}
            />
          );
        })}
      </StyledRightColumn>
    </StyledContainer>
  );
});
