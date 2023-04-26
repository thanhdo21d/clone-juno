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
        base_url: joi.string().required().messages(errorMessages("Ảnh gốc")),
        large_url: joi.string().optional(),
        medium_url: joi.string().optional(),
        small_url: joi.string().optional(),
        thumbnail_url: joi.string().optional(),
      })
    ),
});

// export const signupSchema = joi.object({
//   name: joi.string().required(),
//   email: joi.string().email().required(),
//   password: joi.string().min(6).required(),
//   confirmPassword: joi.string().valid(joi.ref("password")).required(),
// });

// export const signinSchema = joi.object({
//   email: joi.string().email().required(),
//   password: joi.string().min(6).required(),
// });
