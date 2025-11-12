import ProductDetailPage from "@/views/ProductDetailPage";

interface ProductDetailParams {
  productName: string;
}

interface ProductDetailRouteProps {
  params: Promise<ProductDetailParams>;
}

export default async function ProductDetailRoute({
  params,
}: ProductDetailRouteProps) {
  const { productName } = await params;

  return <ProductDetailPage productName={productName} />;
}

