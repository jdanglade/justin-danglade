import React from "react";
import styled from "styled-components";
import { ResumeData } from "../Assets/data";
import { LinkButton } from "../Components/NavigationBar";

const Resume = () => {
  return (
    <>
      <ResumeContainer className="resume-container resume container">
        <ResHeader className="resume-header resume" />
        <ResBody className="resume-body resume" resumeData={ResumeData} />
      </ResumeContainer>
    </>
  );
};

const ResHeader = () => {
  return (
    <>
      <ResumeHeaderContainer className="resume-header-container container">
        <Name className="resume-name" />
        <Contact className="resume-contact" />
      </ResumeHeaderContainer>
    </>
  );
};

const ResBody = () => {
  return (
    <ResBodyContainer className="resume-body-container container">
      <Intro className="resume-intro" />
      <Qualifications
        className="resume-qualifications"
        qualifications={ResumeData.Qualifications}
      />
      <Education
        className="resume-education"
        education={ResumeData.Education}
      />
      <Experience
        className="resume-experience"
        experience={ResumeData.Experience}
      />
      <EmploymentHistory
        className="resume-employmentHistory"
        employmentHistory={ResumeData.EmploymentHistory}
      />
    </ResBodyContainer>
  );
};

const Name = () => {
  return (
    <NameContainer className="name-container container">
      <FirstName className="first-name">{ResumeData.Contact.fName}</FirstName>
      <LastName className="last-name">{ResumeData.Contact.lName}</LastName>
    </NameContainer>
  );
};

const Contact = () => {
  return (
    <ContactContainer className="contact-container container">
      <Email className="contact-email contact">
        {ResumeData.Contact.email}
      </Email>
      <City className="contact-city contact">{ResumeData.Contact.city}</City>
      <PhoneNumber className="contact-phone-number contact">
        {ResumeData.Contact.phone}
      </PhoneNumber>
      <GitHubAccount className="contact-github-account contact">
        {ResumeData.Contact.githubAccount}
      </GitHubAccount>
    </ContactContainer>
  );
};

const Intro = () => {
  return (
    <IntroContainer className="introContainer container">
      <IntroText className="intro-text">{ResumeData.Intro.text}</IntroText>
    </IntroContainer>
  );
};

const Qualifications = () => {
  return (
    <QualificationsContainer className="qualificationsContainer container">
      <Subtitle className="qualificationsSubtitle resume-subtitle">
        Core Qualifications
      </Subtitle>
      <Qualities className="qualificationsQualities resume-qualities">
        {ResumeData.Qualifications.map((qualification, index) => (
          <Quality key={index} className="qualificationsQuality resume-quality">
            {qualification}
          </Quality>
        ))}
      </Qualities>
    </QualificationsContainer>
  );
};

const Education = () => {
  const degrees = ResumeData.Education.Degrees;
  const gradDates = ResumeData.Education.GradDates;
  const schools = ResumeData.Education.Schools;
  return (
    <EducationContainer className="education-container container">
      <Subtitle className="education-subtitle subtitle">Education</Subtitle>
      {degrees.map((degree, index) => (
        <div key={index} className={"degree-" + index}>
          <FacilityContainer
            key={index}
            className={"facility-container facility-" + index}
          >
            <Degree className={"degree-" + index}>{degree}</Degree>
            <School className={"school-" + index}>{schools[index]}</School>
          </FacilityContainer>
          <GraduationDate
            className={"graduation-date graduation-" + (index + 1)}
          >
            {gradDates[index]}
          </GraduationDate>
        </div>
      ))}
    </EducationContainer>
  );
};

const Experience = () => {
  const experienceLinks = ResumeData.Experience.ExperienceLinks;
  const experienceName = ResumeData.Experience.ExperienceNames;
  const linkDescriptions = ResumeData.Experience.ExperienceText;

  return (
    <ExperienceContainer className="experience-container container">
      <Subtitle className="experience-subtitle subtitle">Experience</Subtitle>
      {experienceLinks.map((experienceLink, index) => {
        return (
          <DescriptionContainer
            key={"experience-" + index}
            className="description-container container"
          >
            <ExperienceLinkContaier className="experience-link-container container">
              <ExperienceLink
                className="experience-link link"
                key={"experienceLinks-" + index}
                href={experienceLink}
                target="_blank"
                rel="noreferrer"
              >
                <LinkButton
                  key={`experience-link-${index}`}
                  className="experience-link-button"
                >
                  {experienceName[index]}
                </LinkButton>
              </ExperienceLink>

              <DescriptionParagraph className="experience-description">
                {linkDescriptions[index]}
              </DescriptionParagraph>
            </ExperienceLinkContaier>
          </DescriptionContainer>
        );
      })}
    </ExperienceContainer>
  );
};

const EmploymentHistory = () => {
  const jobTitles = ResumeData.EmploymentHistory.JobTitles;
  const employers = ResumeData.EmploymentHistory.Employers;
  const jobDescriptions = ResumeData.EmploymentHistory.JobDescriptions;

  return (
    <EmploymentHistoryContainer className="employment-container container">
      <Subtitle className="employment-history-subtitle subtitle">
        Employment History
      </Subtitle>
      <JobContainer className="job-container container employment-history">
        {jobTitles.map((job, index) => {
          return (
            <EmployContainer key={index}>
              <JobTitle className="employment-history-job-title">
                {job}
              </JobTitle>
              <Employer className="employment-histoy-employer">
                {employers[index]}
              </Employer>
              <JobDescription className="employement-history-job-description">
                {jobDescriptions[index]}
              </JobDescription>
            </EmployContainer>
          );
        })}
      </JobContainer>
    </EmploymentHistoryContainer>
  );
};

const ResumeContainer = styled.div``;

const ResumeHeaderContainer = styled.div``;

const ResBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10vmin 0 10vmin;
  color: #dcd0cf;
`;

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
  padding: 1vh;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direct: row;
  justify-content: space-evenly;
  align-content: center;
  color: #ffffff;
  line-height: normal;
  text-align: center;
  text-decoration: underline;
  height: 50%;
  font-size: 0.75vmin;
  padding: 1vh 1vh;
`;

const FirstName = styled.h1`
  font-weight: lighter;
  font-size: 5.5vmin;
`;
const LastName = styled.h1`
  font-weight: bold;
  font-size: 5.5vmin;
`;

const Email = styled.h1``;
const City = styled.h1``;
const PhoneNumber = styled.h1``;
const GitHubAccount = styled.h1``;

const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 2.5vmin;
  color: #ffffff;
  text-decoration: none;
  text-align: left;
  margin: 3vh 0;
`;

//--------Intro

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  padding: 1vh 1vw;
`;

const IntroText = styled.p`
  font-size: 2.5vmin;
  text-align: left;
`;

//--------Qualification
const QualificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Qualities = styled.ul`
  text-align: left;
  color: #dcd0cf;
  padding: 0.5vh;
  margin-left: 0;
`;
const Quality = styled.li`
  padding: 1.5vh;
  margin: 0 3vw;
  font-size: 2.5vmin;
`;

//--------Education

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  color: #dcd0cf;
  padding: 0 0 0 0;
`;

const FacilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-text: center;
  color: #ffffff;
  padding: 0.5vh 0;
`;

const Degree = styled.h2`
  flex-basis: 50%;
  font-size: 2.5vmin;
  text-align: left;
  font-weight: lighter;
  padding: 0;
  margin: 0;
`;

const School = styled.h3`
  font-size: 2.5vmin;
  flex-basis: 50%;
  text-align: right;
  font-weight: lighter;
  padding: 0;
  margin: 0;
`;
const GraduationDate = styled.h3`
  font-size: 1.5vw;
  text-align: left;
  font-weight: lighter;
  padding: 0;
  margin: 0;
`;

//--------Experience

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #dcd0cf;
`;

const ExperienceLinkContaier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExperienceLink = styled.a``;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;

const DescriptionParagraph = styled.p`
  font-size: 2.5vmin;
`;

//--------Employment

const EmploymentHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #dcd0cf;
`;

const JobContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: justify;
  align-content: center;
`;

const EmployContainer = styled.div`
  padding: 1.5vh 0;
`;

const JobTitle = styled.h3`
  font-size: 2vmin;
  padding: 0;
  margin: 0;
  color: #ffffff;
`;

const Employer = styled.p`
  margin: 0;
  font-size: 2vmin;
  color: #dcd0cf;
`;

const JobDescription = styled.p`
  font-size: 2.5vmin;
`;

export default Resume;
