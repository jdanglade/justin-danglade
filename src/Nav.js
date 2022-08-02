import React from "react";
import NavButton from "./NavButton";
import Title from "./Title";
import styled from "styled-components";

const navLinks = [
  createTuple("Home", "/justin-danglade"),
  createTuple("Resume", "/justin-danglade/Res"),
  createTuple("Photography", "/justin-danglade/Photos"),
  createTuple("Github", "/justin-danglade/GithubAccount"),
];

const Nav = () => {
  return (
    <>
      <NavContainer className="Nav_Container">
        <LinksContainer className="Nav_Links-Container">
          {navLinks.map((link) => (
            <NavButton className="Nav_Button" children={link[0]} to={link[1]} />
          ))}
        </LinksContainer>
        <TitleContainer className="Nav_Title-Container">
          <Title className="Nav_Title" />
        </TitleContainer>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 15%,
    rgba(178, 103, 94, 1) 100%
  );
`;

const LinksContainer = styled.div`
  display: flex;
  position: sticky;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0px 10px 0px 10px;
`;

const TitleContainer = styled.div`
  padding: 0px 10px 0px 10px;
  position: sticky;
`;

function createTuple(a, b) {
  return [a, b];
}

export default Nav;
