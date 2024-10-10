import { Schema, model } from 'mongoose';
import { maxlength, maxlengthImage, optionsModel, urlImageDefaultProfile, validateMaxLength, validateMaxLengthImage } from '../constants';
// import { findOneUserAdmin } from "../repositories/userAdmin";
import { Category } from "../interfaces/category";
import { ModelDefinition } from '../types';

type CategoryModelInterface = Omit<Category, "id">;

const definition: ModelDefinition<CategoryModelInterface> = {
  name: {
    type: String,
    required: [true, "El nombre del producto es obligatorio."],
    maxlength,
    validate: validateMaxLength
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
  active: {
    type: Boolean
  }
};

export const schema = new Schema<Category>(
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
export default model<Category>("Categories", schema);