import React from "react";
import styled from "styled-components";
import { Header } from "../specific/Header";
import { LinkList } from "../general/LinkList";
import { StickyImageDisplay } from "../general/StickyImageDisplay";

import { TestimonialCard } from "../specific/TestimonialCard";
import { CountCard } from "../specific/CountCard";
import { Footer } from "../specific/Footer";

const StyledContainer = styled.div``;
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
  return (
    <StyledContainer>
      <Header />
      <LinkList links={firstLinks} />
      <TestimonialCard />
      <StickyImageDisplay />
      <CountCard />
      <LinkList header={"How can we help?"} links={secondLinks} />
      <Footer />
    </StyledContainer>
  );
});
