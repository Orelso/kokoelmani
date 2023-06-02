import * as React from "react";
import { ResponsiveAppBar } from "./ResponsiveAppBar";

import Box from "@mui/material/Box";
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
export default function Layout({ children }: { children: JSX.Element }) {
  const [backgroundImage, setBackgroundImage] = React.useState("");

  const getBackgroundStyle = () => {
    if (backgroundImage) {
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
      };
    } else {
      return {};
    }
  };
  /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
  return (
    <>
      <ResponsiveAppBar
        setBackgroundImage={setBackgroundImage}
        backgroundImage={""}
      />
      {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <Box sx={{ ...getBackgroundStyle(), minHeight: "100vh" }}>{children}</Box>
    </>
  );
}
