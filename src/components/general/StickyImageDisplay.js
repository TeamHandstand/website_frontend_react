import React from "react";
import styled from "styled-components";
import { ImageCardWithDescription } from "./ImageCardWithDescription";
import { ImageCardWithScrollText } from "./ImageCardWithScrollText";
const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
const StyledLeftColumn = styled.div`
  position: sticky;
  top: 8px;
  width: 50%;
  align-self: flex-start;
`;
const StyledRightColumn = styled.div`
  width: 50%;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
`;

export const StickyImageDisplay = React.memo(props => {
  const { stickyImage, images = [] } = props;
  return (
    <StyledContainer>
      <StyledLeftColumn>
        <ImageCardWithScrollText
          title={"What about this picture?"}
          imageUrl={"https://picsum.photos/id/237/600/500"}
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
