import React from "react";
import styled from "styled-components";
import { ImageCardWithDescription } from "./ImageCardWithDescription";
import { ImageCardWithScrollText } from "./ImageCardWithScrollText";
const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
`;
const StyledLeftColumn = styled.div`
  position: sticky;
  top: 30px;
  width: 50%;
  align-self: flex-start;
`;
const StyledRightColumn = styled.div`
  width: 50%;
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
