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

const NameContainer = styled.div``;
const FirstName = styled.h1``;
const LastName = styled.h1``;

export default Name;
