import { Category } from "../interfaces/category";
import { create, findOne, updateTable } from "../repositories";
import ModelCategory from "../models/category"
import { handleErrorFunction } from "../utils/handleError";
import { FilterQuery, UpdateQuery } from "mongoose";

export const getCategory = async () => {
  try {
    let _query: FilterQuery<Category> = {
      active: true
    };
    return await findOne(ModelCategory, _query);
  } catch (error) {
    throw handleErrorFunction(error);
  }
}

export const createCategory = async (category: Category) => {
  try {
    return await create(ModelCategory, category);
  } catch (error) {
    throw handleErrorFunction(error);
  }
}

export const updateCategory = async (category: Category) => {
  try {
    const filter: FilterQuery<Category> = {
      id: category.id
    }
    const update: UpdateQuery<Category> = {
      description: category.description
    }

    return await updateTable(ModelCategory, filter, update);
  } catch (error) {
    throw handleErrorFunction(error);
  }
}

export const deleteCategory = async (category: Category) => {
  try {
    const filter: FilterQuery<Category> = {
      id: category.id
    }
    const update: UpdateQuery<Category> = {
      active: category.active
    }

    return await updateTable(ModelCategory, filter, update);
  } catch (error) {
    throw handleErrorFunction(error);
  }
}

