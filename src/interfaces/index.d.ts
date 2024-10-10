export interface PropsPaginatedList<T> {
  model: Model<T>;
  select?: (keyof T)[];
  query: FilterQuery<Model<T>>;
  populate?: string | string[];
  page: number;
  limit: number;
  orderBy?: keyof T;
};