import { Response } from "express";

export { };

/* declare global {
  var user: Users | undefined;
}; */
export type GenericDocument<T> = (Document<T, {}, T> & Omit<T & {
  _id: Types.ObjectId;
}, never>);

export type NewModelFunction<T> = ((model: T) => T) | null;

export type FunctionController = FunctionController;

export type ReqQuery = Record<string, string>;

export type UndefinedInterface<T> = {
  [K in keyof T]?: T[K] | undefined;
};

export type ModelDefinition<T> = {
  [K in keyof T]-?: SchemaDefinitionProperty<T[K]>;
};