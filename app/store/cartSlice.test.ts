import cartReducer, { addToCart, removeFromCart, clearCart } from "./cartSlice";
import { Product } from "@/app/types/product";

const mockProduct: Product = {
  id: 1,
  name: "Test Product",
  price: 10,
  image: "test.jpg",
};

describe("cartSlice", () => {
  it("should handle addToCart", () => {
    const state = cartReducer(undefined, addToCart(mockProduct));
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toMatchObject({ ...mockProduct, quantity: 1 });
  });

  it("should increment quantity if product already in cart", () => {
    const initialState = { items: [{ ...mockProduct, quantity: 1 }] };
    const state = cartReducer(initialState, addToCart(mockProduct));
    expect(state.items[0].quantity).toBe(2);
  });

  it("should handle removeFromCart", () => {
    const initialState = { items: [{ ...mockProduct, quantity: 2 }] };
    const state = cartReducer(initialState, removeFromCart(mockProduct.id));
    expect(state.items).toHaveLength(0);
  });

  it("should handle clearCart", () => {
    const initialState = { items: [{ ...mockProduct, quantity: 2 }] };
    const state = cartReducer(initialState, clearCart());
    expect(state.items).toEqual([]);
  });
});
