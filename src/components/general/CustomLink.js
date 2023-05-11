import React from "react";
// import relevant LINK component here
// replace the return <div /> with <Link to={to}>{children}</Link>
import styled from "styled-components";
const StyledContainer = styled.div`
  cursor: pointer;
  opacity: 1;
  transition: 0.25s;
  &:hover {
    opacity: 0.8;
  }
`;
export const CustomLink = React.memo(props => {
  const { to } = props;
  const children = Array.isArray(props?.children)
    ? props.children
    : [props.children];
  return <StyledContainer>{children}</StyledContainer>;
});
