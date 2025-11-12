import type { CSSProperties } from "react";
import Component1920PxHome from "@/pages/imports/1920PxHome";

const responsiveStyle = {
  "--design-height": 7800,
} as CSSProperties;

const HomePage = () => (
  <div className="responsive-viewport" style={responsiveStyle}>
    <div className="responsive-canvas">
      <Component1920PxHome />
    </div>
  </div>
);

export default HomePage;

