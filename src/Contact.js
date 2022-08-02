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

const ContactContainer = styled.div`
  display: flex;
  flex-direct: row;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #ffffff;
  line-height: normal;
  text-align: center;
  text-decoration: underline;
  height: 50%;
  font-size: 0.35rem;
`;
const Email = styled.h1``;
const City = styled.h1``;
const PhoneNumber = styled.h1``;
const GitHubAccount = styled.h1``;

export default Contact;
