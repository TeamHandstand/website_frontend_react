import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "../../lottieFiles/arrow.json";
import whiteArrow from "../../lottieFiles/arrow-white.json";
const StyledContainer = styled.div`
  height: 28px;
  width: 28px;
`;
export const LottieArrow = React.memo(props => {
  const { isMousedOver, isWhite } = props;
  const lottieRef = React.useRef();

  React.useEffect(() => {
    if (isMousedOver) {
      lottieRef?.current?.goToAndPlay(0);
    }
  }, [isMousedOver]);

  const handleComplete = () => {
    lottieRef?.current?.goToAndStop(1000);
  };
  return (
    <StyledContainer>
      <Lottie
        lottieRef={lottieRef}
        animationData={isWhite ? whiteArrow : animationData}
        onComplete={handleComplete}
        loop={false}
      />
    </StyledContainer>
  );
});
