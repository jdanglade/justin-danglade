import React from "react";
import styled from "styled-components";
import BusyMom from "./assets/BusyMom.webp";
import ChristmasLights from "./assets/ChristmasLights.webp";
import Drama from "./assets/Drama.webp";
import ElectricBoogie from "./assets/ElectricBoogie.webp";
import HandsomeGuy from "./assets/HandsomeGuy.webp";
import ISeeYou from "./assets/ISeeYou.webp";
import MiamiSundown from "./assets/MiamiSundown.webp";
import NotFinished from "./assets/NotFinished.webp";
import ParkTreeVignette from "./assets/ParkTreeVignette.webp";
import PickupTruck from "./assets/PickupTruck.webp";
import RedPalmTree from "./assets/RedPalmTree.webp";
import SleepyWaterChicken from "./assets/SleepyWaterChicken.webp";
import SpeedOfLight from "./assets/SpeedOfLight.webp";
import StillDay from "./assets/StillDay.webp";
import TakeOfTheCity from "./assets/TakeOfTheCity.webp";
import TriniCrescentBeach from "./assets/TriniCrescentBeach.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const photos = [
  [BusyMom, "Busy Mom"],
  [ChristmasLights, "Christmas Lights"],
  [Drama, "Drama"],
  [ElectricBoogie, "Electric Boogie"],
  [HandsomeGuy, "Handsome Guy"],
  [ISeeYou, "I See You"],
  [MiamiSundown, "Miami Sundown"],
  [NotFinished, "Not Finished"],
  [ParkTreeVignette, "Park Tree Vignette"],
  [PickupTruck, "Pickup Truck"],
  [RedPalmTree, "Red Palm"],
  [SleepyWaterChicken, "Sleepy Water Chicken"],
  [SpeedOfLight, "Speed Of Light"],
  [StillDay, "Still Day"],
  [TakeOfTheCity, "Take Of The City"],
  [TriniCrescentBeach, "TriniCrescentBeach"],
];

export default function Photos({ scrollPosition }) {
  return photos.map((photo) => (
    <LazyLoadImage
      className="Lazy_Pic"
      alt={photo[1]}
      effect="black-and-white"
      src={photo[0]}
    />
  ));
}
