import React from "react";
import styled from "styled-components";
import { Header } from "../text/Header";
import { LinkLine } from "./LinkLine";
const StyledContainer = styled.div`
  padding: 8px 10px;
`;
export const LinkList = React.memo(props => {
  const { header, links = [] } = props;
  return (
    <StyledContainer>
      {header && <Header content={header} />}
      {links.map((link, index) => {
        return (
          <LinkLine
            header={link?.header}
            content={link?.content}
            url={link?.url}
            key={index}
          />
        );
      })}
    </StyledContainer>
  );
});
