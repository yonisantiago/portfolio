import Spline from '@splinetool/react-spline';
import React, { Suspense, useEffect, useState } from "react";


// export default function MiniRoom({isMobile}) {
//   return (
//     <Spline scene="https://prod.spline.design/g9gyG5ueuDclLgjP/scene.splinecode" />
//   );
//}

const MiniRoom = ({isMobile}) => {
  return(
    <Spline scene="https://prod.spline.design/g9gyG5ueuDclLgjP/scene.splinecode" />
  );
}

const MiniRoomCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return(
    <>
      {isMobile ? <></> : <MiniRoom/>}
    </>
  )
};

export default MiniRoomCanvas;
