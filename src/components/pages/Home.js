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

const StyledContainer = styled.div`
  background-color: lightgray;
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
export const Home = React.memo(props => {
  const firstLinks = [
    {
      header: "Content",
      content: "This is the content for the content.",
      url: ""
    },
    {
      header: "Angles",
      content: "Angles you say? We have thousands.",
      url: ""
    },
    {
      header: "Sausages",
      content: "We take our casings and innards seriously here",
      url: ""
    }
  ];

  const secondLinks = [
    {
      header: "Content",
      content: "This is the content for the content.",
      url: ""
    },
    {
      header: "Angles",
      content: "Angles you say? We have thousands.",
      url: ""
    },
    {
      header: "Sausages",
      content: "We take our casings and innards seriously here",
      url: ""
    }
  ];

  const images = [
    {
      imageUrl: "https://picsum.photos/id/238/600/400",
      title: "Test Title 1",
      description: "Here is a description of what's going on here. Fascinating."
    },
    {
      imageUrl: "https://picsum.photos/id/239/600/400",
      title: "Test Title 15",
      description: "Here is a description of what's going on here. Fascinating."
    },
    {
      imageUrl: "https://picsum.photos/id/240/600/400",
      title: "Test Title 19",
      description: "Here is a description of what's going on here. Fascinating."
    },
    {
      imageUrl: "https://picsum.photos/id/241/600/400",
      title: "Test Title 12",
      description: "Here is a description of what's going on here. Fascinating."
    },
    {
      imageUrl: "https://picsum.photos/id/242/600/400",
      title: "Test Title 2",
      description: "Here is a description of what's going on here. Fascinating."
    },
    {
      imageUrl: "https://picsum.photos/id/243/600/400",
      title: "Test Title 3",
      description: "Here is a description of what's going on here. Fascinating."
    }
  ];

  React.useEffect(() => {
    console.log("HOME HAS MOUNTED");
  }, []);

  console.log("HOME HAS RENDERED");
  return (
    <StyledContainer>
      <Header />
      <StyledBackgroundContainer>
        <HeroBackground imageUrl={HeroImage} fadeOnScroll />
      </StyledBackgroundContainer>
      <StyledContentContainer>
        <LinkList links={firstLinks} />
        <TestimonialCard />
        <StickyImageDisplay images={images} />
        <CountCard />
        <LinkList header={"How can we help?"} links={secondLinks} />
        <Footer />
      </StyledContentContainer>
    </StyledContainer>
  );
});
