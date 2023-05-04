import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "../../lottieFiles/arrow.json";
const StyledContainer = styled.div`
  height: 32px;
  width: 32px;
`;
export const LottieArrow = React.memo(props => {
  const { isMousedOver } = props;
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
        animationData={animationData}
        onComplete={handleComplete}
        loop={false}
      />
    </StyledContainer>
  );
});
