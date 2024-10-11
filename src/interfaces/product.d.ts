import { Category } from "./category"

export interface Product {
  readonly id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category | number;
  stock: number;
  likes: number;
  discount: number;
  discountedPrice: number;
  active: boolean;
}