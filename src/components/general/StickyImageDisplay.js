import React from "react";
import styled from "styled-components";
import { ImageCardWithDescription } from "./ImageCardWithDescription";
import { ImageCardWithScrollText } from "./ImageCardWithScrollText";
const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
const StyledLeftColumn = styled.div`
  width: 50%;
`;
const StyledRightColumn = styled.div`
  width: 50%;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StickyImageDisplay = React.memo(props => {
  const { stickyImage, images = [] } = props;
  return (
    <StyledContainer>
      <StyledLeftColumn>
        <ImageCardWithScrollText
          title={""}
          imageUrl={""}
          linesOfDescription={[
            "Hello there how are you?",
            "I'm well, thanks for asking my friend",
            "Very good, that will be all."
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
            />
          );
        })}
      </StyledRightColumn>
    </StyledContainer>
  );
});
