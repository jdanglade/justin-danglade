import React from "react";
import { Devices } from "../Assets/data";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
    isLargeDevice: window.innerWidth >= parseInt(Devices.tablet),
  });

  function changeWindowSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isLargeDevice: window.innerWidth >= parseInt(Devices.tablet),
    });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}
