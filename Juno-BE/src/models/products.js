import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    original_price: {
      type: Number,
      min: 0,
      required: true,
    },
    short_description: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    images: [
      {
        base_url: {
          type: String,
          required: true,
        },

        large_url: String,
        medium_url: String,
        small_url: String,
        thumbnail_url: String,
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Product", productSchema);
