import { Category, Product } from './types';

export const MAC_CATEGORIES: Category[] = [
  { id: 'desktop', name: 'Mac de Bureau', image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=2667&auto=format&fit=crop', description: 'Mac mini, Studio, Pro et iMac', color: 'hsl(210, 30%, 50%)' },
  { id: 'laptop', name: 'MacBook', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2670&auto=format&fit=crop', description: 'L\'excellence portable', color: 'hsl(140, 30%, 50%)' },
  { id: 'display', name: 'Écrans Apple', image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=2670&auto=format&fit=crop', description: 'Studio Display & Pro Display XDR', color: 'hsl(280, 40%, 60%)' },
  { id: 'peripherals', name: 'Périphériques', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2667&auto=format&fit=crop', description: 'Claviers, Souris & Trackpads', color: 'hsl(40, 50%, 50%)' },
];

export const MAC_PRODUCTS: Product[] = [
  // --- DESKTOPS ---
  {
    id: 'mac-desktop-1', name: 'Mac mini M4 Pro', category: 'desktop',
    image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=400&auto=format&fit=crop',
    price: 1499, stock: 'in_stock', releaseDate: 'Début 2026',
    specs: { 'Chip': 'M4 Pro', 'CPU': '14 Cores', 'GPU': '20 Cores', 'RAM': '36 Go', 'Stockage': '1 To SSD' },
    summary: ['Format ultra compact', 'Parfait pour le dev et la photo', 'Thunderbolt 5'], buyLink: '#'
  },
  {
    id: 'mac-desktop-2', name: 'Mac Studio M3 Ultra', category: 'desktop',
    image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=400&auto=format&fit=crop',
    price: 4599, stock: 'in_stock', releaseDate: 'Q2 2025',
    specs: { 'Chip': 'M3 Ultra', 'CPU': '32 Cores', 'GPU': '80 Cores', 'RAM': '128 Go unifiée', 'Stockage': '2 To SSD' },
    summary: ['Puissance absolue', 'Silencieux sous charge massive', 'Idéal production 3D/Vidéo'], buyLink: '#'
  },
  {
    id: 'mac-desktop-3', name: 'iMac 24" M4', category: 'desktop',
    image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=400&auto=format&fit=crop',
    price: 1829, stock: 'in_stock', releaseDate: 'Fin 2025',
    specs: { 'Écran': '24" 4.5K Retina', 'Chip': 'M4', 'CPU': '10 Cores', 'RAM': '24 Go', 'Couleurs': '7 teintes vibrantes' },
    summary: ['Tout-en-un magnifique', 'Parfait pour la famille', 'Écran somptueux'], buyLink: '#'
  },

  // --- LAPTOPS ---
  {
    id: 'mac-laptop-1', name: 'MacBook Air 15" M3', category: 'laptop',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=400&auto=format&fit=crop',
    price: 1799, stock: 'in_stock', releaseDate: '2024',
    specs: { 'Écran': '15.3" Liquid Retina', 'Chip': 'M3', 'RAM': '24 Go', 'Poids': '1.51 kg', 'Autonomie': '18 Heures' },
    summary: ['Design fanless 100% silencieux', 'Très grand écran', 'Le meilleur ultraportable'], buyLink: '#'
  },
  {
    id: 'mac-laptop-2', name: 'MacBook Pro 14" M4 Pro', category: 'laptop',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=400&auto=format&fit=crop',
    price: 2499, stock: 'in_stock', releaseDate: 'Fin 2025',
    specs: { 'Écran': '14.2" Liquid Retina XDR', 'Chip': 'M4 Pro', 'CPU': '12 Cores', 'RAM': '36 Go', 'Ports': 'SDXC, HDMI, MagSafe 3' },
    summary: ['Machine de dev optimale', 'Écran 120Hz éblouissant', 'Connectique complète'], buyLink: '#'
  },
  {
    id: 'mac-laptop-3', name: 'MacBook Pro 16" M4 Max', category: 'laptop',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=400&auto=format&fit=crop',
    price: 4299, stock: 'low_stock', releaseDate: 'Fin 2025',
    specs: { 'Écran': '16.2" Mini-LED XDR', 'Chip': 'M4 Max', 'CPU': '16 Cores', 'GPU': '40 Cores', 'RAM': '64 Go unifiée' },
    summary: ['Station de travail de luxe', 'Autonomie record', 'Gros son de type spatial audio'], buyLink: '#'
  },

  // --- DISPLAYS ---
  {
    id: 'mac-display-1', name: 'Studio Display', category: 'display',
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=400&auto=format&fit=crop',
    price: 1749, stock: 'in_stock', releaseDate: '2022',
    specs: { 'Taille': '27"', 'Résolution': '5K Retina', 'Luminosité': '600 nits', 'Caméra': '12 Mpx Center Stage' },
    summary: ['Clarté 5K absolue', 'Design Aluminium haut de gamme', 'Haut-parleurs immersifs'], buyLink: '#'
  },
  {
    id: 'mac-display-2', name: 'Pro Display XDR', category: 'display',
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=400&auto=format&fit=crop',
    price: 5499, stock: 'low_stock', releaseDate: '2019',
    specs: { 'Taille': '32"', 'Résolution': '6K Retina', 'HDR': '1000 nits constants (1600 crête)', 'Contraste': '1,000,000:1' },
    summary: ['Couleurs de référence professionnelles', 'Luminosité HDR éclatante', 'Stand Vendu Séparément (!)'], buyLink: '#'
  },
  {
    id: 'mac-display-3', name: 'Smart Display (Rumeur 2026)', category: 'display',
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=400&auto=format&fit=crop',
    price: 1299, stock: 'out_of_stock', releaseDate: 'Fin 2026',
    specs: { 'Taille': '27"', 'Résolution': '5K', 'Smart OS': 'Puce A17 Bionic intégrée', 'Rafraîchissement': '120 Hz ProMotion' },
    summary: ['Hub HomeKit autonome', 'ProMotion 120Hz', 'Lancement imminent prévu'], buyLink: '#'
  },

  // --- PERIPHERALS ---
  {
    id: 'mac-peri-1', name: 'Magic Keyboard avec Touch ID et Pavé Numérique', category: 'peripherals',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=400&auto=format&fit=crop',
    price: 195, stock: 'in_stock', releaseDate: '2021',
    specs: { 'Connexion': 'Bluetooth', 'Sécurité': 'Touch ID (empreinte)', 'Mécanisme': 'Ciseaux', 'Autonomie': '~1 mois' },
    summary: ['Frappe courte et précise', 'Connexion Touch ID vitale pour le bureau', 'Finition noire ou blanche'], buyLink: '#'
  },
  {
    id: 'mac-peri-2', name: 'Magic Mouse (USB-C)', category: 'peripherals',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=400&auto=format&fit=crop',
    price: 109, stock: 'in_stock', releaseDate: 'Fin 2025',
    specs: { 'Surface': 'Multi-Touch (Gestes)', 'Tracking': 'Laser précis', 'Recharge': 'USB-C sur le dessous' },
    summary: ['Gestes tactiles Mac vitaux', 'Design minimaliste iconique', 'Port de charge toujours mal placé'], buyLink: '#'
  },
  {
    id: 'mac-peri-3', name: 'Magic Trackpad (USB-C)', category: 'peripherals',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=400&auto=format&fit=crop',
    price: 155, stock: 'in_stock', releaseDate: 'Fin 2025',
    specs: { 'Surface': 'Verre Multi-Touch Large', 'Capteurs': 'Force Touch (Sensible à la pression)', 'Recharge': 'USB-C' },
    summary: ['Le meilleur du trackpad MacBook sur bureau', 'Silencieux (retour haptique)', 'Parfait pour Final Cut Pro'], buyLink: '#'
  }
];
