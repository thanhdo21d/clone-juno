import Products from "../models/products";

export const getAll = async (req, res) => {
  try {
    const products = await Products.find();
    return res.status(201).json({
      message: "Danh sách sp",
      products,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
export const getId = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    return res.status(201).json({
      message: "Thông tin sp",
      product,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
export const create = async (req, res) => {
  try {
    const product = await Products.create(req.body);
    return res.status(201).json({
      message: "Thêm thành công",
      product,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
export const update = async (req, res) => {
  try {
    const product = await Products.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).json({
      message: "Sửa thành công",
      product,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const products = await Products.findOneAndDelete(req.params.id);
    return res.status(201).json({
      message: "Xóa thành công",
      products,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
