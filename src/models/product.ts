import {
  Model,
  DataTypes,
  InferAttributes,
  CreationOptional,
  InferCreationAttributes
} from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, Default } from '@sequelize/core/decorators-legacy';
import { Len, Max, Min } from '@sequelize/validator.js';
import { Product } from '../interfaces/product';
import { maxDiscount, maxPrice, maxStock, minDiscount, minLikes, minPrice, minStock, stringLargeLength, stringLength } from '../constants/constats';

class ProductModel extends Model<InferAttributes<ProductModel>, InferCreationAttributes<ProductModel>> implements Product {
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

  @Attribute(DataTypes.DECIMAL(15, 2))
  @Max(maxPrice)
  @Min(minPrice)
  declare price: number;

  @Attribute(DataTypes.INTEGER)
  @Max(maxStock)
  @Min(minStock)
  declare stock: number;

  @Attribute(DataTypes.INTEGER)
  @Min(minLikes)
  declare likes: number;

  @Attribute(DataTypes.INTEGER)
  @Max(maxDiscount)
  @Min(minDiscount)
  declare discount: number;

  @Attribute(DataTypes.DECIMAL(15, 2))
  @Max(maxPrice)
  @Min(minPrice)
  declare discountedPrice: number;

  @Attribute(DataTypes.BOOLEAN)
  @Default(true)
  declare active: boolean;

  @Attribute(DataTypes.INTEGER)
  declare category: number;
}

export default ProductModel;