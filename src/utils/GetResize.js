import React from "react";

function GetResize() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      let timeoutWidth = null;
      clearTimeout(timeoutWidth);
      timeoutWidth = setTimeout(() => setWidth(window.innerWidth), 500);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
}

export default GetResize;
