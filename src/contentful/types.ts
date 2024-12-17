import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProductCompanyFields {
  title: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  description?: EntryFieldTypes.Symbol;
  features: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  price: EntryFieldTypes.Symbol;
}

export interface IContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
      fileName: string;
      contentType?: string;
    };
  };
}

export type TypeProductCompanySkeleton = EntrySkeletonType<
  TypeProductCompanyFields,
  "productCompany"
>;
export type TypeProductCompany<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeProductCompanySkeleton, Modifiers, Locales>;
