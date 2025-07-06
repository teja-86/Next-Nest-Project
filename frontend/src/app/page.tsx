import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getProducts } from "./products/products.api";
import { ProductCard } from "@/components/product-card";

export const dynamic = "force-dynamic";

async function HomePage() {
  const products = await getProducts();

  return (
    <div className="p-6 md:p-10 min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100">
      {/* Centered Heading */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-extrabold text-purple-800 drop-shadow-md">
          <span className="text-indigo-600">NestifyMart</span> App
        </h1>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mb-10">
        <Link
          href="/products/new"
          className={buttonVariants({
            className:
              "bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-xl text-base font-semibold shadow-md transition-all duration-200",
          })}
        >
          + Create Product
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
