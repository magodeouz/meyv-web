"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { ProductList } from "@/views/ProductList";

const ProductListPage = () => {
  const router = useRouter();

  const handleNavigate = useCallback(
    (page: string, productName?: string) => {
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
        case "product-detail":
          router.push(
            productName
              ? `/products/detail/${encodeURIComponent(productName)}`
              : "/products/detail",
          );
          break;
        case "products":
          router.push("/products");
          break;
        case "product-list":
        default:
          router.push("/products/list");
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    },
    [router],
  );

  return <ProductList onNavigate={handleNavigate} />;
};

export default ProductListPage;

