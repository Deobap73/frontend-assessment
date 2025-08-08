// /src/types.ts

export type Variant = {
  id: string;
  label: string;
  price: number; // cents or major units—here: major units
  inStock: boolean;
};

export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  variants: Variant[];
};
