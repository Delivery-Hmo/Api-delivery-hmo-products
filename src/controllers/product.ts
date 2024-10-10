import { Request, Response } from "express";
import { handleError } from "../utils/handleError";
import { FunctionController, ReqQuery } from "../types";
import { Product } from "../interfaces/product";
import { createProduct } from "../services/product";
import { getPaginatedList } from "../repositories";
import product from "../models/product";
import { FilterQuery } from "mongoose";



export const create = async (req: Request, res: Response): FunctionController => {
  const body = req.body as Product;

  try {
    const objProduct = await createProduct(body);

    return res.status(201).json(objProduct);
  } catch (err) {
    return handleError(res, err);
  }
}

export const list = async (req: Request, res: Response): FunctionController => {
  try {
    // const body = req.body as Product;
    const { page, limit } = req.query as ReqQuery;

    const query: FilterQuery<Product> = {
      // name: body?.name 
    };
    const paginatedList = await getPaginatedList({ model: product, query, page: +page, limit: +limit });

    return res.status(200).json(paginatedList);
  } catch (err) {
    return handleError(res, err);
  }
}

