"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import ProductCard from "@/app/components/ProductCard";

export default function HomePage() {
  const products = useSelector((state: RootState) => state.products);

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
