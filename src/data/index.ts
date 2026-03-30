import { Universe, Category, Product } from './types';
import { PC_CATEGORIES, PC_PRODUCTS } from './pc';
import { MAC_CATEGORIES, MAC_PRODUCTS } from './mac';
import { RETRO_CATEGORIES, RETRO_PRODUCTS } from './retro';

export * from './types';

export function getUniverseData(universe: Universe): { categories: Category[], products: Product[] } {
  switch (universe) {
    case 'mac':
      return { categories: MAC_CATEGORIES, products: MAC_PRODUCTS };
    case 'retro':
      return { categories: RETRO_CATEGORIES, products: RETRO_PRODUCTS };
    case 'pc':
    default:
      return { categories: PC_CATEGORIES, products: PC_PRODUCTS };
  }
}
