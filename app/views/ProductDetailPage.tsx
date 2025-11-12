"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

import { ProductDetail } from "@/views/ProductDetail";

interface ProductDetailPageProps {
  productName?: string;
}

const ProductDetailPage = ({ productName }: ProductDetailPageProps) => {
  const router = useRouter();

  const decodedProductName = useMemo(() => {
    if (!productName) {
      return undefined;
    }

    try {
      return decodeURIComponent(productName);
    } catch {
      return productName;
    }
  }, [productName]);

  const handleNavigate = useCallback(
    (page: string, nextProductName?: string) => {
      switch (page) {
        case "home":
          router.push("/");
          break;
        case "who-we-are":
          router.push("/about");
          break;
        case "factories":
          router.push("/factories");
          break;
        case "quality":
          router.push("/quality");
          break;
        case "product-list":
          router.push("/products/list");
          break;
        case "product-detail":
          router.push(
            (nextProductName ?? decodedProductName)
              ? `/products/detail/${encodeURIComponent(
                  nextProductName ?? decodedProductName!,
                )}`
              : "/products/detail",
          );
          break;
        case "products":
        default:
          router.push("/products");
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    },
    [decodedProductName, router],
  );

  return (
    <ProductDetail
      onNavigate={(page, nextProductName) => handleNavigate(page, nextProductName)}
      productName={decodedProductName}
    />
  );
};

export default ProductDetailPage;

