import { useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProductDetail } from "@/pages/ProductDetail";

type RouteParams = {
  productName?: string;
};

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { productName } = useParams<RouteParams>();

  const decodedProductName = useMemo(
    () => (productName ? decodeURIComponent(productName) : undefined),
    [productName],
  );

  const handleNavigate = useCallback(
    (page: string, nextProductName?: string) => {
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
            (nextProductName ?? decodedProductName)
              ? `/products/detail/${encodeURIComponent(
                  nextProductName ?? decodedProductName!,
                )}`
              : "/products/detail",
          );
          break;
        case "products":
        default:
          navigate("/products");
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    },
    [decodedProductName, navigate],
  );

  return (
    <ProductDetail
      onNavigate={(page, nextProductName) => handleNavigate(page, nextProductName)}
      productName={decodedProductName}
    />
  );
};

export default ProductDetailPage;

