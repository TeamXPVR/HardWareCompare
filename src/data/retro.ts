import { Category, Product } from './types';

export const RETRO_CATEGORIES: Category[] = [
  { id: 'salon', name: 'Consoles de Salon', image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/AV_Famicom_console.jpg', description: 'Du 8-bit à la génération 128-bit', color: 'hsl(300, 80%, 60%)' },
  { id: 'portable', name: 'Consoles Portables', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Game-Boy-FL.jpg', description: 'Le jeu nomade d\'époque', color: 'hsl(180, 80%, 40%)' },
  { id: 'upscaler', name: 'Upscalers & Écrans', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Sony-BVM-D9H5U-Monitor-FL.jpg', description: 'OSSC, RetroTINK, PVM', color: 'hsl(350, 80%, 50%)' },
  { id: 'accessories', name: 'Manettes & Linkers', image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Super-Famicom-Controller.jpg', description: 'Everdrives et contrôleurs modernes', color: 'hsl(50, 90%, 50%)' },
];

export const RETRO_PRODUCTS: Product[] = [
  // --- CONSOLES DE SALON ---
  {
    id: 'retro-salon-1', name: 'Atari 2600', category: 'salon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Atari-2600-Wood-4Sw-Set.jpg',
    price: 80, stock: 'in_stock', releaseDate: '1977',
    specs: { 'Génération': '2ème (8-bit early)', 'CPU': 'MOS 6507 à 1.19 MHz', 'RAM': '128 Octets (Bytes)', 'Média': 'Cartouche ROM' },
    summary: ['La pionnière des cartouches interchangeables', 'Finition bois iconique', 'Space Invaders, Pitfall'], buyLink: '#'
  },
  {
    id: 'retro-salon-2', name: 'Nintendo Entertainment System (NES)', category: 'salon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/NES-Console-Set.jpg',
    price: 120, stock: 'in_stock', releaseDate: '1985 (USA/EU)',
    specs: { 'Génération': '3ème (8-bit)', 'CPU': 'Ricoh 2A03 (6502 custom)', 'PPU': '54 couleurs (25 simultanées)', 'Média': 'Cartouche 72-pin' },
    summary: ['La console qui a sauvé le jeu vidéo', 'Super Mario Bros, Zelda', 'Contrôleur en croix (D-Pad) révolutionnaire'], buyLink: '#'
  },
  {
    id: 'retro-salon-3', name: 'Sega Master System', category: 'salon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Sega-Master-System-Set.jpg',
    price: 100, stock: 'low_stock', releaseDate: '1986',
    specs: { 'Génération': '3ème (8-bit)', 'CPU': 'Zilog Z80 à 3.58 MHz', 'Palette': '64 couleurs (32 simultanées)', 'Audio': 'Yamaha YM2413 (Japon)' },
    summary: ['Palette de couleurs supérieure à la NES', 'Alex Kidd in Miracle World', 'Grand succès en Europe et Brésil'], buyLink: '#'
  },
  {
    id: 'retro-salon-4', name: 'Sega Mega Drive (Genesis)', category: 'salon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg',
    price: 130, stock: 'in_stock', releaseDate: '1988',
    specs: { 'Génération': '4ème (16-bit)', 'CPU Principal': 'Motorola 68000 (16/32-bit)', 'Co-Processeur': 'Zilog Z80', 'Audio': 'Yamaha YM2612 (FM)' },
    summary: ['Blast Processing', 'Son FM métallique culte (Streets of Rage)', 'Sonic the Hedgehog'], buyLink: '#'
  },
  {
    id: 'retro-salon-5', name: 'Super Nintendo (SNES / Super Famicom)', category: 'salon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Super_Famicom_console.jpg',
    price: 150, stock: 'in_stock', releaseDate: '1990',
    specs: { 'Génération': '4ème (16-bit)', 'CPU': 'Ricoh 5A22 16-bit à 3.58 MHz', 'Audio': 'Sony SPC700 (Samples)', 'Puces Spéciales': 'Super FX, SA-1' },
    summary: ['Un âge d\'or du RPG (Chrono Trigger, FFVI)', 'Mode 7 (Défilement 3D pseudo)', 'Puce sonore Sony incroyable'], buyLink: '#'
  },
  {
    id: 'retro-salon-6', name: 'Sega Saturn', category: 'salon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Sega-Saturn-Console-Set-Mk1.jpg',
    price: 180, stock: 'low_stock', releaseDate: '1994',
    specs: { 'Génération': '5ème (32-bit)', 'CPU': 'Dual Hitachi SH-2', 'VDP': 'VDP1 (Sprites/Polygones) & VDP2 (Fonds)', 'Support': 'CD-ROM' },
    summary: ['La reine absolue de la 2D arcade', 'Architecture très complexe (Dual CPU)', 'Panzer Dragoon, NiGHTS'], buyLink: '#'
  },
  {
    id: 'retro-salon-7', name: 'Sony PlayStation (PS1)', category: 'salon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/PSX-Console-wController.jpg',
    price: 70, stock: 'in_stock', releaseDate: '1994',
    specs: { 'Génération': '5ème (32-bit)', 'CPU': 'R3000A RISC à 33.8 MHz', 'RAM': '2 Mo Data / 1 Mo VRAM', 'Support': 'CD-ROM' },
    summary: ['L\'avènement de la 3D grand public', 'Metal Gear Solid, Final Fantasy VII', 'Définition de la manette moderne'], buyLink: '#'
  },
  {
    id: 'retro-salon-8', name: 'Nintendo 64', category: 'salon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/N64-Console-Set.jpg',
    price: 140, stock: 'in_stock', releaseDate: '1996',
    specs: { 'Génération': '5ème (64-bit)', 'CPU': 'NEC VR4300', 'Co-Processeur': 'SGI Reality Coprocessor', 'Support': 'Cartouche' },
    summary: ['Mario 64 : La révolution de la caméra 3D', 'Multijoueur 4 ports intégré', 'Filtre anti-aliasing (flou) typique'], buyLink: '#'
  },
  {
    id: 'retro-salon-9', name: 'Sega Dreamcast', category: 'salon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Dreamcast-Console-Set.jpg',
    price: 200, stock: 'low_stock', releaseDate: '1998',
    specs: { 'Génération': '6ème (128-bit)', 'CPU': 'Hitachi SH-4 à 200 MHz', 'GPU': 'PowerVR2', 'Support': 'GD-ROM 1.2 Go' },
    summary: ['Première console avec modem intégré en standard', 'Graphismes Arcade Parfaits (VGA 480p)', 'Shenmue, Crazy Taxi'], buyLink: '#'
  },
  {
    id: 'retro-salon-10', name: 'Sony PlayStation 2 (PS2)', category: 'salon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/PS2-Versions.jpg',
    price: 80, stock: 'in_stock', releaseDate: '2000',
    specs: { 'Génération': '6ème (128-bit)', 'CPU': 'Emotion Engine à 294 MHz', 'GPU': 'Graphics Synthesizer', 'Support': 'DVD-ROM' },
    summary: ['Console la plus vendue de tous les temps', 'Lecteur DVD intégré révolutionnaire', 'Catalogue monstrueux'], buyLink: '#'
  },
  {
    id: 'retro-salon-11', name: 'Nintendo GameCube', category: 'salon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/GameCube-Console-Set.jpg',
    price: 160, stock: 'low_stock', releaseDate: '2001',
    specs: { 'Génération': '6ème (128-bit)', 'CPU': 'IBM Gekko (PowerPC)', 'GPU': 'ATI Flipper', 'Support': 'Mini-DVD 1.5 Go' },
    summary: ['Design cubique compact avec poignée', 'Zelda Wind Waker, Smash Bros Melee', 'Manette asymétrique plébiscitée'], buyLink: '#'
  },

  // --- CONSOLES PORTABLES ---
  {
    id: 'retro-portable-1', name: 'Game Boy (Original DMG)', category: 'portable',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Game-Boy-FL.jpg',
    price: 110, stock: 'in_stock', releaseDate: '1989',
    specs: { 'Écran': 'Matrice passive N&B (nuances de vert)', 'CPU': 'Custom Sharp LR35902 à 4.19 MHz', 'Autonomie': '~15H (4x AA)' },
    summary: ['Tetris dans la poche', 'Indestructible', 'Écran illisible sans lumière du soleil'], buyLink: '#'
  },
  {
    id: 'retro-portable-2', name: 'Sega Game Gear', category: 'portable',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Sega-Game-Gear-WB.jpg',
    price: 140, stock: 'low_stock', releaseDate: '1990',
    specs: { 'Écran': 'Couleur Rétroéclairé', 'CPU': 'Zilog Z80', 'Architecture': 'Similaire à la Master System', 'Autonomie': '~3H (6x AA)' },
    summary: ['La couleur et le rétroéclairage bien avant Nintendo', 'Croqueuse de piles', 'Sonic sur portable'], buyLink: '#'
  },
  {
    id: 'retro-portable-3', name: 'Game Boy Color (Mod IPS / Q5)', category: 'portable',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Nintendo-Game-Boy-Color-FL.jpg',
    price: 220, stock: 'in_stock', releaseDate: 'Mod Moderne',
    specs: { 'Écran': 'IPS Rétroéclairé (Taille origine +25%)', 'Batterie': 'Batterie Li-po intégrée (USB-C)', 'Coque': 'Sur-Mesure' },
    summary: ['Luminosité parfaite et scanlines émulées', 'La meilleure manière de jouer à Pokémon Or', 'Rétro-ingénierie moderne'], buyLink: '#'
  },
  {
    id: 'retro-portable-4', name: 'Game Boy Advance SP (AGS-101)', category: 'portable',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Nintendo-Game-Boy-Advance-SP-Front.jpg',
    price: 250, stock: 'out_of_stock', releaseDate: '2005',
    specs: { 'Écran': 'Rétroéclairé (Trés Rare AGS-101)', 'CPU': 'ARM7TDMI 32-bit', 'Design': 'Clapet à clapet (Clamshell)' },
    summary: ['Câble link, format poche de chemise', 'Dernière génération AGS-101 (écran brillant)', 'Rétrocompatible Game Boy originale'], buyLink: '#'
  },
  {
    id: 'retro-portable-5', name: 'Sony PlayStation Portable (PSP 1000)', category: 'portable',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/PlayStation_Portable.jpg',
    price: 90, stock: 'in_stock', releaseDate: '2004',
    specs: { 'Écran': 'TFT 4.3" 16:9', 'Support': 'UMD (Universal Media Disc)', 'CPU': 'MIPS R4000 à 333 MHz', 'Stockage': 'Memory Stick PRO Duo' },
    summary: ['Station multimédia ultime des années 2000', 'Jeux qualité "Presque-PS2" dans la poche', 'Scène de piratage historique (Custom Firmwares)'], buyLink: '#'
  },

  // --- UPSCALERS & ÉCRANS ---
  {
    id: 'retro-upscaler-1', name: 'RetroTINK-4K', category: 'upscaler',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/HDMI_Extender_%281%29.jpg', // Placeholder for scaler processing box
    price: 750, stock: 'out_of_stock', releaseDate: '2023',
    specs: { 'Entrées': 'Péritel, S-Video, Component, VGA, RGB', 'Sortie': 'HDMI 4K 60Hz', 'Features': 'CRT Masks, HDR, Lag Zéro', 'FPGA': 'Altera Cyclone V' },
    summary: ['Transforme l\'analogique 240p en 4K immaculé', 'Magie des masques CRT HDR', 'Le Saint Graal absolu du Rétrogaming'], buyLink: '#'
  },
  {
    id: 'retro-upscaler-2', name: 'OSSC Pro (Open Source Scan Converter)', category: 'upscaler',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/HDMI_Extender_%281%29.jpg', // Placeholder 
    price: 350, stock: 'in_stock', releaseDate: '2023',
    specs: { 'Architecture': 'FPGA sans buffer (Zero Lag)', 'Line Multiplication': 'Jusqu\'à 1440p', 'Entrées': 'SCART, VGA, Component' },
    summary: ['Solution Open Source hyper performante', 'Multiplie le nombre de lignes (Line Doubler/Multiplier)', 'Parfait pour le RGB pur'], buyLink: '#'
  },
  {
    id: 'retro-upscaler-3', name: 'Sony BVM / PVM-20L4 (CRT Broadcast)', category: 'upscaler',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Sony-BVM-D9H5U-Monitor-FL.jpg',
    price: 900, stock: 'low_stock', releaseDate: '2000s',
    specs: { 'Technologie': 'Tube Cathodique (CRT) Trinitron', 'Lignes TV': '800 TVL', 'Entrées': 'RGB / Component (BNC)', 'Latence': '0 ms' },
    summary: ['Moniteur de contrôle de diffusion TV', 'Scanlines d\'une netteté aveuglante', 'Pesant, cher, mais l\'image parfaite originale'], buyLink: '#'
  },

  // --- MANETTES & LINKERS ---
  {
    id: 'retro-acc-1', name: 'FXPAK PRO (sd2snes)', category: 'accessories',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/AV_Famicom_console.jpg', // Placeholder
    price: 225, stock: 'in_stock', releaseDate: '2019',
    specs: { 'Compatibilité': 'Super Nintendo', 'Média': 'Carte MicroSD', 'FPGA': 'Émule les puces SA-1, Super FX, CX4', 'Audio': 'MSU-1 (Audio CD)' },
    summary: ['Joue à presque 100% du catalogue SNES', 'Supporte les musiques orchestrales ajoutées (MSU-1)', 'Sauvegardes automatiques (Save States)'], buyLink: '#'
  },
  {
    id: 'retro-acc-2', name: 'Mega EverDrive PRO', category: 'accessories',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg', // Placeholder
    price: 215, stock: 'in_stock', releaseDate: '2020',
    specs: { 'Compatibilité': 'Mega Drive / Genesis', 'Features': 'Sega CD support (Sans SEGA CD physiques!)', 'Ram': 'Sauvegardes illimitées' },
    summary: ['Lance les cartouches ET les ISOs CD', 'Audio CD haute qualité inclus', 'Indispensable pour de la Mega Drive'], buyLink: '#'
  },
  {
    id: 'retro-acc-3', name: '8BitDo M30 (Sega Style)', category: 'accessories',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Super-Famicom-Controller.jpg', // Placeholder
    price: 40, stock: 'in_stock', releaseDate: '2022',
    specs: { 'Boutons': '6 face buttons + 2 triggers', 'Connexion': '2.4Ghz sans fil (Dongle Megadrive)', 'Batterie': 'Rechargeable 480mAh' },
    summary: ['La meilleure manette Neo-Geo / Megadrive sans fil', 'Zéro latence perçue en 2.4G', 'Croix directionnelle pivotante exceptionnelle'], buyLink: '#'
  }
];
