"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/app/products/products.api";
import { useRouter } from "next/navigation";

export function ProductCard({ product }: any) {
  const router = useRouter();

  async function handleRemoveProduct(id: string) {
    await deleteProduct(id);
    router.refresh();
  }

  return (
    <Card
      className="hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer border border-purple-200"
      onClick={() => {
        router.push(`/products/${product.id}`);
      }}
    >
      <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 p-4">
        <CardTitle className="flex justify-between items-center text-lg text-purple-800 font-semibold">
          {product.name}
          <span className="text-sm font-bold text-purple-600">${product.price}</span>
        </CardTitle>
      </CardHeader>

      {/* Product Image */}
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-none"
        />
      )}

      <CardContent className="p-4 text-sm text-gray-700 min-h-[80px]">
        {product.description || "No description provided."}
      </CardContent>

      <CardFooter className="flex justify-between gap-2 p-4">
        <Button
          variant="outline"
          className="w-full text-purple-700 border-purple-300 hover:bg-purple-100"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/products/${product.id}/edit`);
          }}
        >
          ✏️ Edit
        </Button>
        <Button
          className="w-full bg-red-500 hover:bg-red-600 text-white"
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveProduct(product.id);
          }}
        >
          🗑️ Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
