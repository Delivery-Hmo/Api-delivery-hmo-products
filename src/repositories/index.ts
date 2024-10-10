import { FilterQuery, Model, UpdateQuery } from "mongoose";
import { PropsPaginatedList } from "../interfaces";

export const findOne = <T>(model: Model<T>, query: FilterQuery<T>) => model.findOne(query);

export const findAll = <T>(model: Model<T>) => model.find();

export const create = <T>(model: Model<T>, data: T) => model.create(data);

export const updateTable = <T>(model: Model<T>, filter: FilterQuery<T>, update: UpdateQuery<T>) => model.updateOne(filter, update, { new: true });

export const getPaginatedList = async <T extends {}>({ model, select, query, populate, page, limit, orderBy }: PropsPaginatedList<T>) => {
  try {
    const ref = model.find(query)
      .limit(limit)
      .skip((page - 1) * limit);

    if (select) ref.select(select as unknown as string[]);

    if (populate) ref.populate(populate);

    if (orderBy) ref.sort({ [orderBy as string]: "desc" });

    const totalPromise = model.countDocuments(query);

    const [list, total] = await Promise.all([ref, totalPromise]);

    return {
      list,
      total
    };
  } catch (error) {
    throw error;
  }
};