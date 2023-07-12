import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = ({ children }) => {
  return (
    <div style={{ display: "grid" }}>
      <StaticImage
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        alt="Facund Fortuny Mountain hiking"
        src={"../images/facundMountain.png"}
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default Hero;
