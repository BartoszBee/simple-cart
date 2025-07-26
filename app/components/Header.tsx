"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="w-full bg-white shadow p-4 mb-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold text-blue-700 hover:underline">SimpleCart</h1>
        </Link>
        <Link
          href="/cart"
          className="relative flex items-center text-blue-600 hover:text-blue-800 transition"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="ml-2 text-sm font-medium">({totalItems})</span>
        </Link>
      </div>
    </header>
  );
}
