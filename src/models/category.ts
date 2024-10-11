import {
  Model,
  DataTypes,
  InferAttributes,
  CreationOptional,
  InferCreationAttributes
} from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, Default } from '@sequelize/core/decorators-legacy';
import { Len } from '@sequelize/validator.js';
import { Category } from '../interfaces/category';
import { stringLargeLength, stringLength } from '../constants/constats';

class CategoryModel extends Model<InferAttributes<CategoryModel>, InferCreationAttributes<CategoryModel>> implements Category {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @Len(stringLength)
  declare name: string;

  @Attribute(DataTypes.STRING)
  @Len(stringLargeLength)
  declare description: string;

  @Attribute(DataTypes.STRING)
  @Len(stringLength)
  declare image: string;

  @Attribute(DataTypes.BOOLEAN)
  @Default(true)
  declare active: boolean;
}

export default CategoryModel;