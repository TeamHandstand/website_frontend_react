import React from "react";
import styled from "styled-components";
import { Header } from "../specific/Header";
import { LinkList } from "../general/LinkList";
import { StickyImageDisplay } from "../general/StickyImageDisplay";

import { TestimonialCard } from "../specific/TestimonialCard";
import { CountCard } from "../specific/CountCard";
import { Footer } from "../specific/Footer";

import HeroImage from "../../images/SampleBackground.png";
import { HeroBackground } from "../general/HeroBackground";
import { colors } from "../../styles.js/colors";
import { breakpoints } from "../../styles.js/breakpoints";

const StyledContainer = styled.div`
  background-color: ${colors.lightGrey};
`;
const StyledContentContainer = styled.div`
  width: 100%;
  background-color: transparent;
  margin-top: 600px;
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

export const Home = React.memo(props => {
  const firstLinks = [
    {
      header: "Company Events",
      content:
        "Gamify your next team event with in-person, remote, or hybrid scavenger hunts.",
      url: ""
    },
    {
      header: "Public Game",
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
      header: "Public Game",
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

  const images = [
    {
      imageUrl: "https://picsum.photos/id/238/600/400",
      title: "Test Title 1",
      description:
        "Here is a description of what's going on here. Fascinating.",
      gradientColor: "blue"
    },
    {
      imageUrl: "https://picsum.photos/id/239/600/400",
      title: "Test Title 15",
      description:
        "Here is a description of what's going on here. Fascinating.",
      gradientColor: "yellow"
    },
    {
      imageUrl: "https://picsum.photos/id/240/600/400",
      title: "Test Title 19",
      description:
        "Here is a description of what's going on here. Fascinating.",
      gradientColor: "red"
    },
    {
      imageUrl: "https://picsum.photos/id/241/600/400",
      title: "Test Title 12",
      description:
        "Here is a description of what's going on here. Fascinating.",
      gradientColor: "green"
    },
    {
      imageUrl: "https://picsum.photos/id/242/600/400",
      title: "Test Title 2",
      description:
        "Here is a description of what's going on here. Fascinating.",
      gradientColor: "blue"
    },
    {
      imageUrl: "https://picsum.photos/id/243/600/400",
      title: "Test Title 3",
      description:
        "Here is a description of what's going on here. Fascinating.",
      gradientColor: "yellow"
    }
  ];

  return (
    <StyledContainer>
      <Header />
      <StyledBackgroundContainer>
        <HeroBackground imageUrl={HeroImage} fadeOnScroll />
      </StyledBackgroundContainer>
      <StyledContentContainer>
        <LinkList links={firstLinks} />
        <TestimonialCard />
        <StyledStickyContainer>
          <StickyImageDisplay images={images} />
        </StyledStickyContainer>
        <StyledCountContainer>
          <CountCard />
        </StyledCountContainer>
        <LinkList header={"How can we help?"} links={secondLinks} />
        <Footer />
      </StyledContentContainer>
    </StyledContainer>
  );
});
