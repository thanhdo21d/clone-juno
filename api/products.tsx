import { IProduct } from "../src/model";
import instance from "./instance";

export const getAllll = () => {
  const uri = "/products";
  return instance.get(uri);
};
// export const getUser = () => {
//   const uri = "/users";
//   return instance.get(uri);
// };
export const getById = (id: string) => {
  const uri = "/products/" + id;
  return instance.get(uri);
};
export const update = (id: string, body: IProduct) => {
  const uri = "/products/" + id;
  return instance.put(uri, body);
};
export const remove = (id: string) => {
  const uri = "/products/" + id;
  return instance.delete(uri);
};
export const addItem = (body: IProduct) => {
  const uri = "/products/";
  return instance.post(uri, body);
};
