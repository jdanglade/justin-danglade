import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HomepageData } from "../Assets/data";

const Homepage = () => {
  return (
    <HomepageContainer className="homepage-container">
      <Introduction />
      <EducationContainer className="homepage-schools">
        <DisplaySchools />
      </EducationContainer>
    </HomepageContainer>
  );
};

const Introduction = () => {
  const IntroductionData = HomepageData.Introduction;
  return (
    <>
      <IntroTitle className="homepage-intro-title">
        {IntroductionData.Title}
      </IntroTitle>
      <ProfilePicture
        className="lazy-pic"
        alt={IntroductionData.ProfilePic.alt}
        src={IntroductionData.ProfilePic.cdnLocation}
      />
      <IntroText className="">{IntroductionData.Text}</IntroText>
    </>
  );
};

const DisplaySchools = () => {
  const Schools = HomepageData.Schools;
  return (
    <SchoolsContainer className="homepage-school-container">
      {Schools.map((School, index) => {
        return (
          <div key={index}>
            <SchoolName className="homepage-school-name">
              {School.Name}
            </SchoolName>
            <SchoolDescription className="homepage-school-description">
              {School.Description}
            </SchoolDescription>
            <SchoolPicture
              className="lazy-pic"
              alt={School.Photo.alt}
              src={School.Photo.cdnLocation}
            />
          </div>
        );
      })}
    </SchoolsContainer>
  );
};

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;

const IntroTitle = styled.h1`
  font-weight: bold;
  font-size: 5vmax;
`;

const ProfilePicture = styled(LazyLoadImage)`
  width: 35vmax;
  height: auto;
  margin: 1vmin;
`;

const IntroText = styled.h2`
  font-weight: 400;
  font-size: 2vmax;
  margin: 3vmin;
  padding: 0 10vmin;
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10vmin;
`;

const SchoolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1vmin;
  margin: 0 0 5vmin 0;
`;

const SchoolName = styled.h1`
  font-weight: 200;
  font-size: 4vmax;
  margin: 1vmax;
`;

const SchoolPicture = styled(LazyLoadImage)`
  width: 45vmax;
  height: auto;
  margin: 4vmin;
`;

const SchoolDescription = styled.p`
  font-weight: 400;
  font-size: 2vmax;
  margin: 3vmin;
`;

export default Homepage;
