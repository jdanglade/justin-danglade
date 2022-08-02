import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavButton = ({ children, to }) => {
  return (
    <Link className="Nav_Link" to={to}>
      <NavLinkDiv className="Nav_Link-Div">
        <LinkButton className="Nav_Link-Button">{children}</LinkButton>
      </NavLinkDiv>
    </Link>
  );
};

const LinkButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin-top: 10px;
  margin-bottom: 10px;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    box-shadow: #3a3b3c 4px 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

const NavLinkDiv = styled.div`
  margin-right: 30px;
`;

export default NavButton;
