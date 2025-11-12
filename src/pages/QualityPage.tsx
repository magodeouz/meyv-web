import type { CSSProperties } from "react";
import Component1920PxQualityCertificates from "@/pages/imports/1920PxQualityCertificates";

const responsiveStyle = {
  "--design-height": 4800,
} as CSSProperties;

const QualityPage = () => (
  <div className="responsive-viewport" style={responsiveStyle}>
    <div className="responsive-canvas">
      <Component1920PxQualityCertificates />
    </div>
  </div>
);

export default QualityPage;

