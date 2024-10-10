import { Request, Response } from "express";
import { handleError } from "../utils/handleError";
import { FunctionController, ReqQuery } from "../types";
import { createCategory } from "../services/category";
import { Category } from "../interfaces/category";
import category from "../models/category";
import { FilterQuery } from "mongoose";
import { getPaginatedList } from "../repositories";



export const create = async (req: Request, res: Response): FunctionController => {
  const body = req.body as Category;

  try {
    const objCategory = await createCategory(body);

    return res.status(201).json(objCategory);
  } catch (err) {
    return handleError(res, err);
  }
}

export const list = async (req: Request, res: Response): FunctionController => {
  try {
    const body = req.body as Category;
    const { page, limit } = req.query as ReqQuery;

    const query: FilterQuery<Category> = {
      name: body?.name
    };
    const paginatedList = await getPaginatedList({ model: category, query, page: +page, limit: +limit });

    return res.status(200).json(paginatedList);
  } catch (err) {
    return handleError(res, err);
  }
}

