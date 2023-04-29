import joi from "joi";
export const productSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required().min(0),
  original_price: joi.number().required().min(0),
  short_description: joi.string().required(),
  description: joi.string().required(),
  images: joi
    .array()
    .min(1)
    .required()
    .items(joi.object({}))
    .items(
      joi.object({
        base_url: joi.string().required(),
        large_url: joi.string(),
        medium_url: joi.string().optional(),
        small_url: joi.string().optional(),
        thumbnail_url: joi.string().optional(),
      })
    ),
  categoryId: joi.string().required(),
});
