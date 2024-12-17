import { IContentfulAsset } from "@/contentful/types";

export type Services = {
  fields: {
    description: string;
    title: string;
    price: number;
    features?: string[];
    image?: IContentfulAsset;
  };
};
