import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductForm } from "./product-form";
import { getProduct } from "../products.api";

interface Props {
  params: {
    id: string;
  };
}

async function ProductsNewPage({ params }: Props) {
  const product = await getProduct(params.id);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 p-6">
      <Card className="w-full max-w-2xl shadow-2xl border-0 rounded-3xl bg-white/80 backdrop-blur-md">
        <CardHeader className="pb-3 border-b border-purple-300">
          <CardTitle className="text-3xl font-bold text-purple-800 text-center">
            {params.id ? "✏️ Edit Product" : "🛒 Create Product"}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-6">
          <ProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductsNewPage;
