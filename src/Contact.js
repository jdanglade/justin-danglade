import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactContainer>
      <Email>JUST.DANGLADE@GMAIL.COM</Email>
      <City>MIAMI, FL</City>
      <PhoneNumber>305.934.6057</PhoneNumber>
      <GitHubAccount>GITHUB.COM/JDANGLADE</GitHubAccount>
    </ContactContainer>
  );
};

const ContactContainer = styled.div``;
const Email = styled.h1``;
const City = styled.h1``;
const PhoneNumber = styled.h1``;
const GitHubAccount = styled.h1``;

export default Contact;
