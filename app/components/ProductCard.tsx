"use client";

import Image from "next/image";
import { Product } from "@/app/types/product";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/cartSlice";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <div className="relative w-full h-40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
        />
      </div>
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
}
