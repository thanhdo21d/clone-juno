import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
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

        large_url: {
          type: String,
        },
        medium_url: {
          type: String,
        },
        small_url: {
          type: String,
        },
        thumbnail_url: {
          type: String,
        },
      },
    ],

    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
productSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productSchema);
