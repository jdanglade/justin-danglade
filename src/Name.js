import React from "react";
import styled from "styled-components";

const Name = () => {
  return (
    <NameContainer>
      <FirstName>Justin</FirstName>
      <LastName>Danglade</LastName>
    </NameContainer>
  );
};

const NameContainer = styled.div`
  display: flex;
  flex-direct: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #ffffff;
  line-height: normal;
  text-align: center;
  height: 100%;
  font-size: 1rem;
`;
const FirstName = styled.h1`
  font-weight: lighter;
`;
const LastName = styled.h1`
  font-weight: bold;
`;

export default Name;
