import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { ProductsOverview } from "@/pages/ProductsOverview";

const ProductsOverviewPage = () => {
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
        case "products":
        default:
          navigate("/products");
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    },
    [navigate],
  );

  return <ProductsOverview onNavigate={handleNavigate} />;
};

export default ProductsOverviewPage;

