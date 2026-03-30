export interface Product {
  id: string;
  name: string;
  category: string;
  brand?: string;
  image: string;
  price: number;
  stock: 'in_stock' | 'low_stock' | 'out_of_stock';
  releaseDate: string;
  specs: Record<string, string>;
  summary: string[];
  buyLink: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  color: string;
}

export type Universe = 'pc' | 'mac' | 'retro';
