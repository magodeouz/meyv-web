import { useCallback } from "react";
import type { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

import Component1920PxContact from "@/imports/1920PxContact";

const responsiveStyle = {
  "--design-height": 3000,
} as CSSProperties;

const ContactPage = () => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (page: string, productName?: string) => {
      switch (page) {
        case "home":
          navigate("/");
          break;
        case "who-we-are":
          navigate("/about");
          break;
        case "factories":
          navigate("/factories");
          break;
        case "quality":
          navigate("/quality");
          break;
        case "products":
          navigate("/products");
          break;
        case "product-list":
          navigate("/products/list");
          break;
        case "product-detail":
          navigate(
            productName
              ? `/products/detail/${encodeURIComponent(productName)}`
              : "/products/detail",
          );
          break;
        case "contact":
          navigate("/contact");
          break;
        default:
          navigate("/");
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    },
    [navigate],
  );

  return (
    <div className="responsive-viewport" style={responsiveStyle}>
      <div className="responsive-canvas">
        <Component1920PxContact onNavigate={handleNavigate} />
      </div>
    </div>
  );
};

export default ContactPage;


