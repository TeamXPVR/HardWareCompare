import { Category, Product } from './types';

export const RETRO_CATEGORIES: Category[] = [
  { id: 'salon', name: 'Consoles de Salon', image: 'https://images.unsplash.com/photo-1531525645387-7f14be1bfc75?q=80&w=2673&auto=format&fit=crop', description: 'Du 8-bit à la génération 128-bit', color: 'hsl(300, 80%, 60%)' },
  { id: 'portable', name: 'Consoles Portables', image: 'https://images.unsplash.com/photo-1629244038312-70fc0fe88019?q=80&w=2670&auto=format&fit=crop', description: 'Le jeu nomade d\'époque', color: 'hsl(180, 80%, 40%)' },
  { id: 'upscaler', name: 'Upscalers & Écrans', image: 'https://images.unsplash.com/photo-1585648834033-049d5cd51d8b?q=80&w=2670&auto=format&fit=crop', description: 'OSSC, RetroTINK, PVM', color: 'hsl(350, 80%, 50%)' },
  { id: 'accessories', name: 'Manettes & Linkers', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2670&auto=format&fit=crop', description: 'Everdrives et contrôleurs 8BitDo', color: 'hsl(50, 90%, 50%)' },
];

export const RETRO_PRODUCTS: Product[] = [
  {
    id: 'retro-salon-1', name: 'Super Nintendo (Super Famicom)', category: 'salon',
    image: 'https://images.unsplash.com/photo-1531525645387-7f14be1bfc75?q=80&w=400&auto=format&fit=crop',
    price: 150, stock: 'low_stock', releaseDate: '1990',
    specs: { 'Processeur': 'Ricoh 5A22 16-bit', 'RAM': '128 Ko', 'Résolution': '256x224', 'Support': 'Cartouche' },
    summary: ['Un âge d\'or du RPG', 'Son mythique SPC700', 'Modèle original'], buyLink: '#'
  },
  {
    id: 'retro-portable-1', name: 'Game Boy Color (Mod IPS)', category: 'portable',
    image: 'https://images.unsplash.com/photo-1629244038312-70fc0fe88019?q=80&w=400&auto=format&fit=crop',
    price: 220, stock: 'in_stock', releaseDate: '2025 (Mod)',
    specs: { 'Écran': 'Écran IPS Rétroéclairé', 'Batterie': 'Batterie Li-po intégrée', 'Coque': 'Transparente' },
    summary: ['Écran ultra lumineux', 'Parfait pour jouer aujourd\'hui', 'Lecture parfaite des jeux originaux'], buyLink: '#'
  },
  {
    id: 'retro-upscaler-1', name: 'RetroTINK-4K', category: 'upscaler',
    image: 'https://images.unsplash.com/photo-1585648834033-049d5cd51d8b?q=80&w=400&auto=format&fit=crop',
    price: 750, stock: 'out_of_stock', releaseDate: '2023',
    specs: { 'Entrées': 'Péritel, S-Video, Component, HDMI', 'Sortie': 'HDMI 4K 60Hz', 'Features': 'CRT Filters, HDR' },
    summary: ['Le meilleur upscaler existant', 'Filtres CRT incroyables', 'Idéal sur TV OLED'], buyLink: '#'
  },
  {
    id: 'retro-acc-1', name: 'FXPAK PRO (SD2SNES)', category: 'accessories',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=400&auto=format&fit=crop',
    price: 225, stock: 'in_stock', releaseDate: '2020',
    specs: { 'Compatibilité': 'SNES / Super Famicom', 'Support': 'Micro SD', 'Puces Spéciales': 'Super FX, SA-1 supportés' },
    summary: ['Joue à tout le catalogue SNES', 'Supporte les jeux MSU-1 (CD Audio)', 'Sauvegardes instantanées'], buyLink: '#'
  }
];
