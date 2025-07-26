import productsReducer from "./productsSlice";
import { products } from "@/app/data/products";

describe("productsSlice", () => {
  it("should return initial state", () => {
    const initialState = productsReducer(undefined, { type: "unknown" });
    expect(initialState).toEqual(products);
  });
});
