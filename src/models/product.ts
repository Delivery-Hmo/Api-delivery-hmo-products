import { Schema, model } from 'mongoose';
import { maxlength, maxlengthImage, optionsModel, urlImageDefaultProfile, validateMaxLength, validateMaxLengthImage } from '../constants';
// import { findOneUserAdmin } from "../repositories/userAdmin";
import { Product } from "../interfaces/product";
import { ModelDefinition } from '../types';
// validateMaxLength variables const de la carpeta const 

type ProductModelInterface = Omit<Product, "id">;

const definition: ModelDefinition<ProductModelInterface> = {
  name: {
    type: String,
    required: [true, "El nombre de la empresa es obligatorio."],
    maxlength,
    validate: validateMaxLength
  },
  price: {
    type: Number,
    validate: {
      validator: (value: number) => value >= 0 && value <= 1000000,
      message: "El precio esta fuera de rango."
    }
  },
  description: {
    type: String,
    maxlength,
    validate: validateMaxLength
  },
  image: {
    type: String,
    maxlength: maxlengthImage,
    default: urlImageDefaultProfile,
    validate: validateMaxLengthImage
  },
  // Relacion de modelo categoria
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  stock: {
    type: Number,
    validate: {
      validator: (value: number) => value >= 0 && value <= 1000000,
      message: "El descuento esta fuera de rango."
    }
  },
  likes: {
    type: Number,
    validate: {
      validator: (value: number) => value >= 0 && value <= 1000000,
      message: "El descuento esta fuera de rango."
    }
  },
  discount: {
    type: Number,
    validate: {
      validator: (value: number) => value >= 0 && value <= 100,
      message: "El descuento esta fuera de rango."
    }
  },
  discountedPrice: {
    type: Number,
    validate: {
      validator: (value: number) => value >= 0 && value <= 1000000,
      message: "El descuento del precio esta fuera de rango."
    }
  }
};

export const schema = new Schema<Product>(
  definition,
  optionsModel
);

// schema.pre<UserAdmin>("save", async function (next) {
//   const { name, id } = this;

//   const otherModelSameName = await findOneUserAdmin({ name });

//   if (otherModelSameName && otherModelSameName?.id !== id) {
//     throw "Ya existe un administrador con el mismo nombre.";
//   }

//   next();
// });

export default model<Product>("Product", schema);