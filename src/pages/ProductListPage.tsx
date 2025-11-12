import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { ProductList } from "@/pages/ProductList";

const ProductListPage = () => {
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
        case "product-detail":
          navigate(
            productName
              ? `/products/detail/${encodeURIComponent(productName)}`
              : "/products/detail",
          );
          break;
        case "products":
          navigate("/products");
          break;
        case "product-list":
        default:
          navigate("/products/list");
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    },
    [navigate],
  );

  return <ProductList onNavigate={handleNavigate} />;
};

export default ProductListPage;

