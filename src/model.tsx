export interface IProduct {
  _id: string;
  name: string;
  price: number;
  original_price: number;
  short_description: string;
  description: string;
  images: IImage[];
}
export interface IImage {
  base_url: string;

  large_url: string;
  medium_url: string;

  small_url: string;
  thumbnail_url: string;
}
