import React from "react";
import styled from "styled-components";
import { Header } from "../text/Header";
import { LinkLine } from "./LinkLine";
const StyledContainer = styled.div`
  padding: 8px 10px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: grey;
`;
export const LinkList = React.memo(props => {
  const { header, links = [] } = props;
  return (
    <StyledContainer>
      {header && <Header content={header} />}
      {links.map((link, index) => {
        return (
          <div>
            <LinkLine
              header={link?.header}
              content={link?.content}
              url={link?.url}
              key={index}
            />
            {index !== links?.length - 1 && <Divider />}
          </div>
        );
      })}
    </StyledContainer>
  );
});
