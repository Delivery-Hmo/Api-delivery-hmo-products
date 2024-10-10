import { Product } from "../interfaces/product";
import { create, updateTable } from "../repositories";
import { handleErrorFunction } from "../utils/handleError";
import { FilterQuery, UpdateQuery } from "mongoose";
import ModelProduct from "../models/product"



export const createProduct = async (product: Product) => {
  try {
    return await create(ModelProduct, product);
  } catch (error) {
    throw handleErrorFunction(error);
  }
}

export const updateProduct = async (Product: Product) => {
  try {
    const filter: FilterQuery<Product> = {
      id: Product.id
    }
    const update: UpdateQuery<Product> = {
      description: Product.description
    }

    return await updateTable(ModelProduct, filter, update);
  } catch (error) {
    throw handleErrorFunction(error);
  }
}

export const deleteProduct = async (Product: Product) => {
  try {
    const filter: FilterQuery<Product> = {
      id: Product.id
    }
    const update: UpdateQuery<Product> = {
      price: Product.price,
      description: Product.description
    }

    return await updateTable(ModelProduct, filter, update);
  } catch (error) {
    throw handleErrorFunction(error);
  }
}

