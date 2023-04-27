import instance from "./instance"


export const getAlll = () => {
    const uri = "/products"
    return instance.get(uri)
}