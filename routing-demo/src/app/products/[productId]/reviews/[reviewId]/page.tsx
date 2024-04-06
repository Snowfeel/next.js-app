import { notFound } from "next/navigation";

export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    return notFound();
  }
  return (
    <div>
      <h1> Product {params.productId}</h1>
      <h2>Review Detail {params.reviewId}</h2>
    </div>
  );
}
