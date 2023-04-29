import React from "react";
import NavigationBar from "../Components/NavigationBar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PhotographyData } from "../Assets/data";

const Photos = () => {
  return (
    <>
      <NavigationBar />
      {PhotographyData.map((image, index) => (
        <LazyLoadImage
          key={index}
          className="photo lazy-pic"
          alt={image.name}
          src={image.cdnLocation}
        />
      ))}
    </>
  );
};

export default Photos;
