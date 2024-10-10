import { Category } from "./category"

export interface Product {
  readonly id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category | string;
  stock: number;
  likes: number;
  discount: number;
  discountedPrice: number;
}