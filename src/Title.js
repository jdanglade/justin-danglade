import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const getTitle = (path) => {
  switch (path) {
    case "/": {
      return "Home";
    }
    case "/justin-danglade": {
      return "Home";
    }
    case "/Res": {
      return "Resume";
    }

    case "/Photos": {
      return "Photography";
    }

    case "/GithubAccount": {
      return "Github";
    }
    default:
      return "Home";
  }
};

const Title = () => {
  return (
    <TextContainer>
      <TitleText className="Route_Title">
        {getTitle(useLocation().pathname)}
      </TitleText>
    </TextContainer>
  );
};

const TextContainer = styled.div`
  display: flex;
  background-color: transparent;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  color: #504a4e;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 20px;
  font-weight: 600;
`;

const TitleText = styled.h1``;

export default Title;
