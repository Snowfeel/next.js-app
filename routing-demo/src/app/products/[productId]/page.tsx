import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 1000);
  });

  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetail({ params }: Props) {
  return (
    <div>
      <h1>Product Detail {params.productId}</h1>
    </div>
  );
}
