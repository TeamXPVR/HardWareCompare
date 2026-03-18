export interface Product {
  id: string;
  name: string;
  category: string;
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

export const CATEGORIES: Category[] = [
  { id: 'cpu', name: 'Processeurs', image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2669&auto=format&fit=crop', description: 'Le cerveau de votre ordinateur', color: 'hsl(210, 100%, 50%)' },
  { id: 'gpu', name: 'Cartes Graphiques', image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=2670&auto=format&fit=crop', description: 'La puissance visuelle ultime', color: 'hsl(140, 100%, 40%)' },
  { id: 'mobo', name: 'Cartes Mères', image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=2670&auto=format&fit=crop', description: 'Le socle de votre configuration', color: 'hsl(280, 100%, 50%)' },
  { id: 'ram', name: 'Mémoire Vive', image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=2669&auto=format&fit=crop', description: 'Pour la fluidité et le multitâche', color: 'hsl(340, 100%, 50%)' },
  { id: 'storage', name: 'Stockage', image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=2670&auto=format&fit=crop', description: 'L\'espace pour vos jeux et données', color: 'hsl(40, 100%, 50%)' },
];

export const MOCK_PRODUCTS: Product[] = [
  // CPUs
  {
    id: 'cpu-1',
    name: 'Intel Core Ultra 9 285K',
    category: 'cpu',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=400&auto=format&fit=crop',
    price: 649,
    stock: 'in_stock',
    releaseDate: 'Q4 2024',
    specs: {
      'Cores': '24 (8P+16E)',
      'Threads': '24',
      'Base Clock': '3.2 GHz',
      'Boost Clock': '5.7 GHz',
      'TDP': '125W',
      'Socket': 'LGA 1851'
    },
    summary: ['Performances ultimes', 'Excellente efficacité énergétique', 'Nouveau socket'],
    buyLink: 'https://example.com/buy/cpu-1'
  },
  {
    id: 'cpu-2',
    name: 'AMD Ryzen 9 9950X',
    category: 'cpu',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=400&auto=format&fit=crop',
    price: 699,
    stock: 'low_stock',
    releaseDate: 'Q3 2024',
    specs: {
      'Cores': '16',
      'Threads': '32',
      'Base Clock': '4.3 GHz',
      'Boost Clock': '5.7 GHz',
      'TDP': '170W',
      'Socket': 'AM5'
    },
    summary: ['Roi du multithread', 'Architecture Zen 5', 'Future-proof AM5'],
    buyLink: 'https://example.com/buy/cpu-2'
  },
  {
    id: 'cpu-3',
    name: 'AMD Ryzen 7 7800X3D',
    category: 'cpu',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=400&auto=format&fit=crop',
    price: 399,
    stock: 'in_stock',
    releaseDate: 'Q1 2023',
    specs: {
      'Cores': '8',
      'Threads': '16',
      'Base Clock': '4.2 GHz',
      'Boost Clock': '5.0 GHz',
      'TDP': '120W',
      'Socket': 'AM5'
    },
    summary: ['Le meilleur pour le gaming', 'Technologie 3D V-Cache', 'Rapport qualité/prix imbattable'],
    buyLink: 'https://example.com/buy/cpu-3'
  },
  
  // GPUs
  {
    id: 'gpu-1',
    name: 'NVIDIA GeForce RTX 5090',
    category: 'gpu',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=400&auto=format&fit=crop',
    price: 1999,
    stock: 'out_of_stock',
    releaseDate: 'Q1 2025',
    specs: {
      'VRAM': '32 GB GDDR7',
      'Cuda Cores': '21760',
      'Base Clock': '2.4 GHz',
      'Boost Clock': '2.9 GHz',
      'TDP': '600W'
    },
    summary: ['Le monstre absolu', 'Gaming 4K 240Hz sans compromis', 'Architecture Blackwell'],
    buyLink: 'https://example.com/buy/gpu-1'
  },
  {
    id: 'gpu-2',
    name: 'AMD Radeon RX 8900 XTX',
    category: 'gpu',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=400&auto=format&fit=crop',
    price: 999,
    stock: 'in_stock',
    releaseDate: 'Q3 2025',
    specs: {
      'VRAM': '24 GB GDDR6',
      'Stream Processors': '6144',
      'Base Clock': '2.1 GHz',
      'Boost Clock': '2.8 GHz',
      'TDP': '350W'
    },
    summary: ['Excellent rasterization', 'Rapport prix/perf', 'Design RDNA 4'],
    buyLink: 'https://example.com/buy/gpu-2'
  },
  {
    id: 'gpu-3',
    name: 'NVIDIA GeForce RTX 4070 Super',
    category: 'gpu',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=400&auto=format&fit=crop',
    price: 599,
    stock: 'in_stock',
    releaseDate: 'Q1 2024',
    specs: {
      'VRAM': '12 GB GDDR6X',
      'Cuda Cores': '7168',
      'Base Clock': '1.9 GHz',
      'Boost Clock': '2.4 GHz',
      'TDP': '220W'
    },
    summary: ['Sweet spot 1440p', 'DLSS 3.5 & Frame Gen', 'Efficacité énergétique exceptionnelle'],
    buyLink: 'https://example.com/buy/gpu-3'
  },

  // Motherboards (mobo)
  {
    id: 'mobo-1',
    name: 'ASUS ROG Maximus Z890 Hero',
    category: 'mobo',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=400&auto=format&fit=crop',
    price: 699,
    stock: 'in_stock',
    releaseDate: 'Q4 2024',
    specs: {
      'Socket': 'LGA 1851',
      'Chipset': 'Z890',
      'Memory': 'DDR5 up to 8600 MT/s',
      'Form Factor': 'ATX',
      'PCIe': 'PCIe 5.0 x16'
    },
    summary: ['Connectivité premium', 'Overclocking poussé', 'Esthétique ROG incroyable'],
    buyLink: 'https://example.com/buy/mobo-1'
  },
  {
    id: 'mobo-2',
    name: 'MSI MAG X870E Tomahawk',
    category: 'mobo',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=400&auto=format&fit=crop',
    price: 299,
    stock: 'in_stock',
    releaseDate: 'Q3 2024',
    specs: {
      'Socket': 'AM5',
      'Chipset': 'X870E',
      'Memory': 'DDR5 up to 8000 MT/s',
      'Form Factor': 'ATX',
      'PCIe': 'PCIe 5.0 x16'
    },
    summary: ['Excellente robustesse', 'Rapport qualité/prix AM5', 'WiFi 7 intégré'],
    buyLink: 'https://example.com/buy/mobo-2'
  },
  {
    id: 'mobo-3',
    name: 'Gigabyte B650 AORUS ELITE AX',
    category: 'mobo',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=400&auto=format&fit=crop',
    price: 199,
    stock: 'low_stock',
    releaseDate: 'Q1 2023',
    specs: {
      'Socket': 'AM5',
      'Chipset': 'B650',
      'Memory': 'DDR5 up to 6400 MT/s',
      'Form Factor': 'ATX',
      'PCIe': 'PCIe 4.0 x16'
    },
    summary: ['Le choix mainstream de référence', 'VRM solides', 'Très bonne bios'],
    buyLink: 'https://example.com/buy/mobo-3'
  },

  // RAM
  {
    id: 'ram-1',
    name: 'Corsair Dominator Titanium RGB 64GB (2x32GB)',
    category: 'ram',
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=400&auto=format&fit=crop',
    price: 289,
    stock: 'in_stock',
    releaseDate: 'Q2 2024',
    specs: {
      'Capacity': '64 GB (2 x 32 GB)',
      'Speed': 'DDR5 6400 MT/s',
      'Latency': 'CL32',
      'Voltage': '1.40V'
    },
    summary: ['Pour les créateurs', 'Finition premium personnalisable', 'Performances extrêmes'],
    buyLink: 'https://example.com/buy/ram-1'
  },
  {
    id: 'ram-2',
    name: 'G.Skill Trident Z5 Neo RGB 32GB (2x16GB)',
    category: 'ram',
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=400&auto=format&fit=crop',
    price: 139,
    stock: 'in_stock',
    releaseDate: 'Q1 2023',
    specs: {
      'Capacity': '32 GB (2 x 16 GB)',
      'Speed': 'DDR5 6000 MT/s',
      'Latency': 'CL30',
      'Voltage': '1.35V'
    },
    summary: ['Optimisé pour AMD EXPO', 'Le sweet spot pour Ryzen', 'Beau design RGB'],
    buyLink: 'https://example.com/buy/ram-2'
  },
  {
    id: 'ram-3',
    name: 'Kingston FURY Beast 32GB (2x16GB)',
    category: 'ram',
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=400&auto=format&fit=crop',
    price: 109,
    stock: 'low_stock',
    releaseDate: 'Q3 2022',
    specs: {
      'Capacity': '32 GB (2 x 16 GB)',
      'Speed': 'DDR5 5600 MT/s',
      'Latency': 'CL40',
      'Voltage': '1.25V'
    },
    summary: ['Profil bas', 'Très fiable', 'Abordable'],
    buyLink: 'https://example.com/buy/ram-3'
  },

  // Storage
  {
    id: 'storage-1',
    name: 'Samsung 990 PRO 2TB',
    category: 'storage',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=400&auto=format&fit=crop',
    price: 169,
    stock: 'in_stock',
    releaseDate: 'Q4 2022',
    specs: {
      'Capacity': '2 TB',
      'Type': 'NVMe PCIe 4.0 x4',
      'Read Speed': '7450 MB/s',
      'Write Speed': '6900 MB/s'
    },
    summary: ['Vitesse stratosphérique', 'Meilleur de sa catégorie', 'Idéal OS & Jeux'],
    buyLink: 'https://example.com/buy/storage-1'
  },
  {
    id: 'storage-2',
    name: 'Crucial T705 2TB',
    category: 'storage',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=400&auto=format&fit=crop',
    price: 299,
    stock: 'in_stock',
    releaseDate: 'Q1 2024',
    specs: {
      'Capacity': '2 TB',
      'Type': 'NVMe PCIe 5.0 x4',
      'Read Speed': '14500 MB/s',
      'Write Speed': '12700 MB/s'
    },
    summary: ['La norme PCIe 5.0', 'Transferts instantanés', 'Nécessite bon refroidissement'],
    buyLink: 'https://example.com/buy/storage-2'
  },
  {
    id: 'storage-3',
    name: 'WD Black SN850X 1TB',
    category: 'storage',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=400&auto=format&fit=crop',
    price: 89,
    stock: 'low_stock',
    releaseDate: 'Q3 2022',
    specs: {
      'Capacity': '1 TB',
      'Type': 'NVMe PCIe 4.0 x4',
      'Read Speed': '7300 MB/s',
      'Write Speed': '6300 MB/s'
    },
    summary: ['Très performant', 'Optimisé pour le gaming', 'Excellent rapport qualité/prix'],
    buyLink: 'https://example.com/buy/storage-3'
  }
];
