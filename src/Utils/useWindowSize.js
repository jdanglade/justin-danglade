import { useState, useEffect } from "react";
import { Devices } from "../Assets/data";

// mobileS: "320px",
// mobileM: "375px",
// mobileL: "425px",
// tablet: "768px",
// laptop: "1024px",
// laptopL: "1440px",
// desktop: "2560px",

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";

  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
    isWideScreen: window.innerWidth >= parseInt(Devices.tablet),
    isMobileS:
      window.innerWidth >= parseInt(Devices.mobileS) &&
      window.innerWidth < parseInt(Devices.mobileM),
    isMobileM:
      window.innerWidth >= parseInt(Devices.mobileM) &&
      window.innerWidth < parseInt(Devices.mobileL),
    isMobileL:
      window.innerWidth >= parseInt(Devices.mobileL) &&
      window.innerWidth < parseInt(Devices.tablet),
    isTablet:
      window.innerWidth >= parseInt(Devices.tablet) &&
      window.innerWidth < parseInt(Devices.laptop),
    isLaptop:
      window.innerWidth >= parseInt(Devices.laptop) &&
      window.innerWidth < parseInt(Devices.laptopL),
    isLaptopL:
      window.innerWidth >= parseInt(Devices.laptopL) &&
      window.innerWidth < parseInt(Devices.desktop),
    isDesktop: window.innerWidth >= parseInt(Devices.desktop),
  });

  function changeWindowSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isWideScreen: window.innerWidth >= parseInt(Devices.tablet),
      isMobileS:
        window.innerWidth >= parseInt(Devices.mobileS) &&
        window.innerWidth < parseInt(Devices.mobileM),
      isMobileM:
        window.innerWidth >= parseInt(Devices.mobileM) &&
        window.innerWidth < parseInt(Devices.mobileL),
      isMobileL:
        window.innerWidth >= parseInt(Devices.mobileL) &&
        window.innerWidth < parseInt(Devices.tablet),
      isTablet:
        window.innerWidth >= parseInt(Devices.tablet) &&
        window.innerWidth < parseInt(Devices.laptop),
      isLaptop:
        window.innerWidth >= parseInt(Devices.laptop) &&
        window.innerWidth < parseInt(Devices.laptopL),
      isLaptopL:
        window.innerWidth >= parseInt(Devices.laptopL) &&
        window.innerWidth < parseInt(Devices.desktop),
      isDesktop: window.innerWidth >= parseInt(Devices.desktop),
    });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}
