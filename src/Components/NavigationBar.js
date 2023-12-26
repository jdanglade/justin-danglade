import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { NavigationLinks } from "../Assets/data";
import useWindowSize from "../Utils/useWindowSize";

/* 
    Returns a responsive navigation bar that condenses into a 
    drop-down menu based on screen width.
*/
const NavigationBar = () => {
  const isWideScreen = useWindowSize().isWideScreen;
  const [isExpanded, setIsExpanded] = useState(false);
  const currentLocation = useLocation().pathname;

  useEffect(() => {
    setIsExpanded(false);
  }, [isWideScreen]);

  const NavigationMapper = () => {
    return (
      <NavigationContainer className="navigation-container">
        {isWideScreen ? CreateLinkButtons() : DropDown()}
      </NavigationContainer>
    );
  };

  // Uncondensed link buttons
  const CreateLinkButtons = () => {
    return NavigationLinks.map((link, index) => (
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

  // Drop down menu
  const DropDown = () => {
    return isExpanded ? Drop() : GetPathButton();
  };

  const Drop = () => {
    return <DropDownContainer>{GetDropDownButtons()}</DropDownContainer>;
  };

  const GetDropDownButtons = () => {
    return NavigationLinks.map((link, index) => {
      return (
        <DropDownButton
          key={`button-${index}-${link.Title}`}
          onClick={() => setIsExpanded(false)}
        >
          {link.LinkType === "anchor" ? (
            <PathAnchor
              key={`anchor-${index}-${link.Title}`}
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
        </DropDownButton>
      );
    });
  };

  const GetPathButton = () => {
    let Title = {};
    for (let i = 0; i < NavigationLinks.length; i++) {
      if (NavigationLinks[i].Path === currentLocation) {
        Title = {
          Title: NavigationLinks[i].Title,
          index: i,
          Link: NavigationLinks[i],
        };
      }
    }

    return (
      <LinkButton onClick={() => setIsExpanded(true)}>
        <PathLink
          key={`link-${Title.index}-${Title.Title}`}
          className="nav-link link path-link"
          to={Title.Link.Path}
        >
          {Title.Title}
        </PathLink>
      </LinkButton>
    );
  };

  return NavigationMapper();
};

/* 
  Styled Components
*/
const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  top: 0;
  left: 0;
  padding: 2vmax;
  color: #ffffff;
`;

const PathLink = styled(Link)`
  color: #ffffff;
`;

const PathAnchor = styled.a`
  color: #ffffff;
  padding: 2vmax;
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DropDownButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  font-size: 2vmax;

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

export const LinkButton = styled.button`
  display: flex;
  flex-direction: row;
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
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  font-size: 2vmax;

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
