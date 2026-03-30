import { Category, Product } from './types';

export const MAC_CATEGORIES: Category[] = [
  { id: 'desktop', name: 'Mac de Bureau', image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=2667&auto=format&fit=crop', description: 'Mac mini, Studio, Pro et iMac', color: 'hsl(210, 30%, 50%)' },
  { id: 'laptop', name: 'MacBook', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2670&auto=format&fit=crop', description: 'L\'excellence portable', color: 'hsl(140, 30%, 50%)' },
  { id: 'display', name: 'Écrans Apple', image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=2670&auto=format&fit=crop', description: 'Studio Display & Pro Display XDR', color: 'hsl(280, 40%, 60%)' },
  { id: 'peripherals', name: 'Périphériques', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2667&auto=format&fit=crop', description: 'Claviers, Souris & Trackpads', color: 'hsl(40, 50%, 50%)' },
];

export const MAC_PRODUCTS: Product[] = [
  {
    id: 'mac-desktop-1', name: 'Mac Studio M3 Ultra', category: 'desktop',
    image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=400&auto=format&fit=crop',
    price: 4599, stock: 'in_stock', releaseDate: 'Q2 2025',
    specs: { 'Chip': 'M3 Ultra', 'CPU': '32 Cores', 'GPU': '80 Cores', 'RAM': '128 Go unifiée', 'Stockage': '2 To SSD' },
    summary: ['Puissance absolue', 'Silencieux', 'Idéal production 3D/Vidéo'], buyLink: '#'
  },
  {
    id: 'mac-laptop-1', name: 'MacBook Pro 16" M3 Max', category: 'laptop',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=400&auto=format&fit=crop',
    price: 3999, stock: 'in_stock', releaseDate: 'Q4 2024',
    specs: { 'Écran': '16.2" Liquid Retina XDR', 'Chip': 'M3 Max', 'RAM': '64 Go', 'Stockage': '1 To SSD' },
    summary: ['Station de travail portable', 'Écran magnifique', 'Autonomie record'], buyLink: '#'
  },
  {
    id: 'mac-display-1', name: 'Studio Display', category: 'display',
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=400&auto=format&fit=crop',
    price: 1749, stock: 'in_stock', releaseDate: 'Q1 2022',
    specs: { 'Taille': '27"', 'Résolution': '5K Retina', 'Luminosité': '600 nits', 'Caméra': '12 Mpx Ultra Wide' },
    summary: ['Clarté 5K', 'Design Aluminium', 'Webcam intégrée'], buyLink: '#'
  },
  {
    id: 'mac-peri-1', name: 'Magic Keyboard avec Touch ID', category: 'peripherals',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=400&auto=format&fit=crop',
    price: 159, stock: 'in_stock', releaseDate: 'Q3 2021',
    specs: { 'Connexion': 'Bluetooth', 'Sécurité': 'Touch ID intégré', 'Port': 'Lightning' },
    summary: ['Frappe précise', 'Touch ID très pratique', 'Excellente autonomie'], buyLink: '#'
  }
];
