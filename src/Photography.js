import React from "react";
import styled from "styled-components";
import Photos from "./Photos";

const Photography = () => {
  return (
    <PhotosContainer className="Photos_Container">
      <Photos />;
    </PhotosContainer>
  );
};

const PhotosContainer = styled.div``;

export default Photography;
