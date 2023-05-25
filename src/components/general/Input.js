import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
const StyledContainer = styled.input`
  height: 44px;
  width: 100%;
  padding: 4px 16px;
  margin: 0;
  border-radius: 13px;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const Input = React.memo(props => {
  const { onChange = () => {}, placeholder = "", value } = props;
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (
    <StyledContainer
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    ></StyledContainer>
  );
});
