export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>Product Detail {params.productId}</h1>
    </div>
  );
}
