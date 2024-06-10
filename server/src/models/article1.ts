import { Schema, model } from "mongoose";

interface articleType {
  articleId: number;
  title: string;
  description: string;
  price: string;
  photos: string;
}

const ArticleSchema = new Schema<articleType>({
  articleId: {
    type: Number,
    unique:true,
  },

  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  photos: {
    type: String,
  },
});

const ModelArticle = model<articleType>("Article1", ArticleSchema);

export default ModelArticle;
