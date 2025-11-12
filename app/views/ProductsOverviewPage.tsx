"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { ProductsOverview } from "@/views/ProductsOverview";

 const ProductsOverviewPage = () => {
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
        case "product-list":
          router.push("/products/list");
          break;
        case "product-detail":
          router.push(
            productName
              ? `/products/detail/${encodeURIComponent(productName)}`
              : "/products/detail",
          );
          break;
        case "products":
        default:
          router.push("/products");
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    },
    [router],
  );

  return <ProductsOverview onNavigate={handleNavigate} />;
};

export default ProductsOverviewPage;

