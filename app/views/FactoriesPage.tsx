import type { CSSProperties } from "react";
import Component1920PxFactoriesOffices from "@/views/imports/1920PxFactoriesOffices";

const responsiveStyle = {
  "--design-height": 4700,
} as CSSProperties;

const FactoriesPage = () => (
  <div className="responsive-viewport" style={responsiveStyle}>
    <div className="responsive-canvas">
      <Component1920PxFactoriesOffices />
    </div>
  </div>
);

export default FactoriesPage;

