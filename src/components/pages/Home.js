import React from "react";
import styled from "styled-components";
import { Header } from "../specific/Header";
import { LinkList } from "../general/LinkList";
import { StickyImageDisplay } from "../general/StickyImageDisplay";

import { TestimonialCard } from "../specific/TestimonialCard";
import { CountCard } from "../specific/CountCard";
import { Footer } from "../specific/Footer";

import { HeroBackground } from "../general/HeroBackground";
import { colors } from "../../styles.js/colors";
import { breakpoints } from "../../styles.js/breakpoints";
import { MaxWidthContainer } from "../general/MaxWidthContainer";

const StyledContainer = styled.div`
  background-color: ${colors.lightGrey};
`;
const StyledContentContainer = styled.div`
  width: 100%;
  background-color: transparent;
  margin-top: 45vh;
  transform: translateY(0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
`;

const StyledStickyContainer = styled.div`
  width: 80%;
  margin-top: 40px;
  transition .3s;
  @media (max-width: ${breakpoints.medium}px) {
      width: 95%;
  }
`;

const StyledCountContainer = styled.div`
  width: 80%;
  margin: 40px 0px;
  border-radius: 13px;
  overflow: hidden;
  transition .3s;
  @media (max-width: ${breakpoints.medium}px) {
      width: 95%;
  }
`;

const StyledFooterContainer = styled.div`
  margin-top: 45px;
  width: 100%;
`;
export const Home = React.memo(props => {
  const [jsonData, setJsonData] = React.useState({
    testimonials: [],
    handstand_birth: {
      sticky_image: {},
      scrolly_images: []
    }
  });
  React.useEffect(() => {
    const fetchJsonData = async () => {
      const response = await fetch(
        "https://s3.us-west-1.amazonaws.com/assets.handstandwith.us/web/content_controls/website_controls.json"
      );
      const json = await response?.json();
      console.log("RESULTS FROM FETCH", json);
      if (!response.error && json) {
        setJsonData(json);
      }
    };
    fetchJsonData();
  }, []);
  const firstLinks = [
    {
      header: "Company Events",
      content:
        "Gamify your next team event with in-person, remote, or hybrid scavenger hunts.",
      url: ""
    },
    {
      header: "Public Games",
      content:
        "Play in The SF Hunt: a 12 hour, 100 riddle experience you shouldn’t miss.",
      url: ""
    },
    {
      header: "Play Now",
      content:
        "Explore local neighborhoods while showing friends a great time.",
      url: ""
    }
  ];

  const secondLinks = [
    {
      header: "Company Events",
      content:
        "Gamify your next team event with in-person, remote, or hybrid scavenger hunts.",
      url: ""
    },
    {
      header: "Public Games",
      content:
        "Play in The SF Hunt: a 12 hour, 100 riddle experience you shouldn’t miss.",
      url: ""
    },
    {
      header: "Play Now",
      content:
        "Explore local neighborhoods while showing friends a great time.",
      url: ""
    }
  ];

  return (
    <StyledContainer>
      <Header />
      <StyledBackgroundContainer>
        <HeroBackground
          imageUrl={
            "https://assets.handstandwith.us/web/videos/seattle-teaser-720p-new.mp4"
          }
          fadeOnScroll
        />
      </StyledBackgroundContainer>
      <StyledContentContainer>
        <MaxWidthContainer>
          <LinkList links={firstLinks} />
        </MaxWidthContainer>
        <MaxWidthContainer>
          <TestimonialCard jsonData={jsonData} />
        </MaxWidthContainer>
        <MaxWidthContainer>
          <StyledStickyContainer>
            <StickyImageDisplay jsonData={jsonData} />
          </StyledStickyContainer>
        </MaxWidthContainer>
        <MaxWidthContainer>
          <StyledCountContainer>
            <CountCard />
          </StyledCountContainer>
        </MaxWidthContainer>
        <MaxWidthContainer>
          <LinkList header={"How can we help?"} links={secondLinks} />
        </MaxWidthContainer>
        <StyledFooterContainer>
          <Footer />
        </StyledFooterContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
});
