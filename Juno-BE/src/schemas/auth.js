import joi from "joi";
export const signupSchema = joi.object({
  name: joi.string().required().messages({
    "string.empty": "Trường name không được để trống",
    "any.required": "Trường name là bắt buộc",
  }),
  email: joi.string().email().required().messages({
    "string.empty": "Trường email không được để trống",
    "any.required": "Trường email là bắt buộc",
    "string.email": "Trường email không hợp lệ",
  }),
  password: joi.string().min(6).required().messages({
    "string.empty": "Trường mật khẩu không được để trống",
    "any.required": "Trường mật khẩu là bắt buộc",
    "string.min": "Trường mật khẩu phải có ít nhất 6 ký tự",
  }),
  confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
    "string.empty": "Trường confirmPassword không được để trống",
    "any.required": "Trường confirmPassword là bắt buộc",
    "any.only": "confirmPassword không khớp",
  }),
});

export const signinSchema = joi.object({
  email: joi.string().email().required().messages({
    "string.empty": "Trường email không được để trống",
    "any.required": "Trường email là bắt buộc",
    "string.email": "Trường email không hợp lệ",
  }),
  password: joi.string().min(6).required().messages({
    "string.empty": "Trường mật khẩu không được để trống",
    "any.required": "Trường mật khẩu là bắt buộc",
    "string.min": "Trường mật khẩu phải có ít nhất 6 ký tự",
  }),
});
