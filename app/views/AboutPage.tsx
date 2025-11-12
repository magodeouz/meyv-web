import type { CSSProperties } from "react";
import Component1920PxAbout from "@/views/imports/1920PxAbout";

const responsiveStyle = {
  "--design-height": 8500,
} as CSSProperties;

const AboutPage = () => (
  <div className="responsive-viewport" style={responsiveStyle}>
    <div className="responsive-canvas">
      <Component1920PxAbout />
    </div>
  </div>
);

export default AboutPage;

