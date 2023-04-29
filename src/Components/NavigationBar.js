import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { NavLinks } from "../Assets/data";
import useWindowSize from "../Utils/useWindowSize";

const NavigationBar = () => {
  const isLargeDevice = useWindowSize().isLargeDevice;
  return (
    <NavigationContainer className="navigation-container">
      <NavigationMapper isLargeDevice={isLargeDevice} />
    </NavigationContainer>
  );
};

const NavigationMapper = (props) => {
  return props.isLargeDevice ? CreateLinkButtons() : DropDown();
};

const DropDown = () => {
  return <NavigationTitle>{GetTitle()}</NavigationTitle>;
  // NavLinks.map((link) => {
  //   return link.Title;
};

const GetTitle = () => {
  const currentLocation = useLocation().pathname;
  for (let i = 0; i < NavLinks.length; i++) {
    if (NavLinks[i].Path === currentLocation) {
      return NavLinks[i].Title;
    }
  }
  return "N/A";
};

const CreateLinkButtons = () => {
  return NavLinks.map((link, index) => (
    <LinkButton key={`button-${index}-${link.Title}`}>
      {link.LinkType === "anchor" ? (
        <PathAnchor
          key={`anchor-${link.Title}`}
          className="nav-link anchor"
          href={link.Path}
          target="_blank"
          rel="noreferrer"
        >
          {link.Title}
        </PathAnchor>
      ) : (
        <PathLink
          key={`link-${index}-${link.Title}`}
          className="nav-link link"
          to={link.Path}
        >
          {link.Title}
        </PathLink>
      )}
    </LinkButton>
  ));
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  top: 0;
  left: 0;
  color: #ffffff;
`;

const NavigationTitle = styled.h2`
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 600;
  font-size: 3vmax;
  line-height: normal;
  border: none;
  color: #ffffff;
`;

const PathLink = styled(Link)`
  color: #ffffff;
  border: 3px solid red;
`;

const PathAnchor = styled.a`
  color: #ffffff;
  border: 3px solid red;
`;

export const LinkButton = styled.button`
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 600;
  line-height: normal;
  border: none;
  color: #ffffff;
  background-color: transparent;
  box-sizing: border-box;
  cursor: pointer;
  min-height: 1rem;
  min-width: 1rem;
  outline: none;
  padding: 48px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
  font-size: 2vmax;
  border: 3px solid red;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    transform: translatey(-1vh);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export default NavigationBar;
