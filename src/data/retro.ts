import { Category, Product } from './types';

export const RETRO_CATEGORIES: Category[] = [
  { id: 'salon', name: 'Consoles de Salon', image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/NES-Console-Set.jpg', description: 'Du 8-bit à la génération 128-bit', color: 'hsl(300, 80%, 60%)' },
  { id: 'portable', name: 'Consoles Portables', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Game-Boy-FL.jpg', description: 'Le jeu nomade d\'époque', color: 'hsl(180, 80%, 40%)' },
  { id: 'micro', name: 'Micro-Ordinateurs', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Atari-1040STf-01.jpg', description: 'Atari ST, Amiga, C64', color: 'hsl(210, 60%, 50%)' },
  { id: 'upscaler', name: 'Upscalers & Écrans CRT', image: 'https://images.unsplash.com/photo-1628172909405-b778278dae84?q=80&w=2671&auto=format&fit=crop', description: 'OSSC, RetroTINK, PVM', color: 'hsl(350, 80%, 50%)' },
  { id: 'accessories', name: 'Manettes & Linkers', image: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=2619&auto=format&fit=crop', description: 'Everdrives et contrôleurs modernes', color: 'hsl(50, 90%, 50%)' },
];

export const BRAND_HISTORIES: Record<string, { title: string, content: string[] }> = {
  'Atari': {
    title: 'L\'Empire Atari',
    content: [
      'Fondée en 1972 par Nolan Bushnell, Atari est la marque pionnière absolue du jeu vidéo de salon.',
      'Surtout connue pour Pong (Arcade) et l\'indestructible Atari 2600, elle a défini ce qu\'était une "console de jeux" à la maison et a posé les jalons de toute l\'industrie.',
      'Malgré un âge d\'or phénoménal et la brillante ligne de ses micro-ordinateurs (Gamme ST), le fameux "Krach du jeu vidéo de 1983" (symbolisé par le jeu E.T. enfoui dans le désert) a durablement abimé la marque historique.',
      'Ses ultimes barouds d\'honneur technologiquement avancés tels que la console Lynx ou la redoutable Jaguar n\'ont pas suffi à endiguer la deferlante de la nouvelle génération japonaise.'
    ]
  },
  'Nintendo': {
    title: 'La Royauté du Rétro',
    content: [
      'Incroyable destin : à l\'origine, firme centenaire fabriquant de traditionnelles cartes à jouer japonaises (Hanafuda) depuis 1889, Nintendo sauva unilatéralement l\'industrie mondiale du jeu vidéo avec la NES en 1985.',
      'S\'ensuit une conquête totale grâce à des mascottes intemporelles conçues avec soin et amour (Mario, Zelda, Metroid) et à un règne sans partage sur le monde nomade avec la titanesque Game Boy.',
      'Unanimement plébiscitée pour sa philosophie "Gameplay First" privilégiant le pur fun de pilotage à la course aux armements graphiques, le "Big N" continue de fasciner.'
    ]
  },
  'Sega': {
    title: 'Les Rebelles de l\'Arcade',
    content: [
      'Sega (Service Games) était à l\'origine un constructeur américain délocalisé au Japon créant des JukeBox et Machines d\'attrape. La marque devint très vite le roi incontesté de l\'Arcade avec de somptueuses bornes qui claquaient les yeux (et avalaient les pièces) : OutRun, Space Harrier ou After Burner.',
      'Dans les folles années 90, SEGA a déclaré une impitoyable guerre marketing à son concurrent Nintendo via sa surpuissante Mega Drive, prônant l\'impertinence d\'un "Blast Processing" soutenu par un certain hérisson bleu atomique (Sonic).',
      'Après avoir accouché de fantastiques mais complexes machines (Saturn et Dreamcast), SEGA, financièrement acculé, fit la dure décision d\'arrêter de fabriquer des consoles pour se dédier au logiciel...'
    ]
  },
  'Sony': {
    title: 'La Révolution 3D',
    content: [
      'C\'est l\'histoire de la vengeance la plus marquante de la tech : Sony, à l\'origine simple fabricant du processeur sonore magique de la Super Nintendo, était censé concevoir un lecteur CD-ROM pour celle-ci. Nintendo cassa soudainement le contrat en coulisse.',
      'De cette cuisante trahison, Sony décida de commercialiser sa propre version du hardware dans son coin en 1994... sous le nom de PlayStation 1.',
      'Sa conception ultra-maline dédiée très intelligemment au décodage de la "vraie 3D" qui fascinait les studios à l\'époque balaya toute la concurrence. Son lacement et le grand public changèrent l\'univers du rétrogaming à jamais.'
    ]
  }
};

export const RETRO_PRODUCTS: Product[] = [
  // --- CONSOLES DE SALON ---
  {
    id: 'retro-salon-1', name: 'Atari 2600', category: 'salon', brand: 'Atari',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Atari-2600-Wood-4Sw-Set.jpg',
    price: 80, stock: 'in_stock', releaseDate: '1977',
    specs: { 'Génération': '2ème (8-bit)', 'CPU': 'MOS 6507 à 1.19 MHz', 'RAM': '128 Octets', 'Média': 'Cartouche' },
    summary: ['La pionnière', 'Finition bois iconique', 'Space Invaders, Pitfall'], buyLink: '#'
  },
  {
    id: 'retro-salon-2', name: 'Nintendo Entertainment System (NES)', category: 'salon', brand: 'Nintendo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/NES-Console-Set.jpg',
    price: 120, stock: 'in_stock', releaseDate: '1985 (USA)',
    specs: { 'Génération': '3ème (8-bit)', 'CPU': 'Ricoh 2A03', 'PPU': '54 couleurs (25 max)', 'Média': 'Cartouche 72-pin' },
    summary: ['La console qui a sauvé le jeu vidéo', 'Super Mario Bros', 'Design VHS rectangulaire'], buyLink: '#'
  },
  {
    id: 'retro-salon-3', name: 'Sega Master System', category: 'salon', brand: 'Sega',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Sega-Master-System-Set.jpg',
    price: 100, stock: 'low_stock', releaseDate: '1986',
    specs: { 'Génération': '3ème (8-bit)', 'CPU': 'Zilog Z80', 'Palette': '32 couleurs simultanées', 'Audio': 'PSG / FM' },
    summary: ['Palette de couleurs supérieure à la NES', 'Alex Kidd', 'Incroyable succès Européen et Brésilien'], buyLink: '#'
  },
  {
    id: 'retro-salon-4', name: 'Sega Mega Drive (Genesis)', category: 'salon', brand: 'Sega',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg',
    price: 130, stock: 'in_stock', releaseDate: '1988',
    specs: { 'Génération': '4ème (16-bit)', 'CPU Principal': 'Motorola 68000', 'Co-Processeur': 'Zilog Z80' },
    summary: ['Blast Processing', 'Son FM métallique', 'Sonic the Hedgehog'], buyLink: '#'
  },
  {
    id: 'retro-salon-5', name: 'Super Nintendo (SNES)', category: 'salon', brand: 'Nintendo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Super_Famicom_console.jpg',
    price: 150, stock: 'in_stock', releaseDate: '1990',
    specs: { 'Génération': '4ème (16-bit)', 'CPU': 'Ricoh 5A22', 'Audio': 'Sony SPC700', 'Puces': 'Super FX, SA-1' },
    summary: ['L\'âge d\'or du RPG (Chrono Trigger)', 'Mode 7 (Faust 3D)', 'Puce sonore Sony'], buyLink: '#'
  },
  {
    id: 'retro-salon-6', name: 'Sega Saturn', category: 'salon', brand: 'Sega',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Sega-Saturn-Console-Set-Mk1.jpg',
    price: 180, stock: 'low_stock', releaseDate: '1994',
    specs: { 'Génération': '5ème (32-bit)', 'CPU': 'Dual Hitachi SH-2', 'Support': 'CD-ROM' },
    summary: ['La reine absolue de l\'Arcade 2D', 'Architecture infernale Dual-CPU', 'Panzer Dragoon'], buyLink: '#'
  },
  {
    id: 'retro-salon-7', name: 'Sony PlayStation (PS1)', category: 'salon', brand: 'Sony',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/PSX-Console-wController.jpg',
    price: 70, stock: 'in_stock', releaseDate: '1994',
    specs: { 'Génération': '5ème (32-bit)', 'CPU': 'R3000A RISC à 33.8 MHz', 'Support': 'CD-ROM' },
    summary: ['L\'avènement de la 3D facile', 'Metal Gear Solid, Final Fantasy VII', 'Démocratisation du jeu vidéo énorme'], buyLink: '#'
  },
  {
    id: 'retro-salon-8', name: 'Nintendo 64', category: 'salon', brand: 'Nintendo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/N64-Console-Set.jpg',
    price: 140, stock: 'in_stock', releaseDate: '1996',
    specs: { 'Génération': '5ème (64-bit)', 'CPU': 'NEC VR4300', 'Co-Processeur': 'SGI Reality' },
    summary: ['Mario 64 et la gestion caméra 3D parfaite', '4 ports manettes d\'un coup', 'Un joypad totalement asymétrique'], buyLink: '#'
  },
  {
    id: 'retro-salon-9', name: 'Sega Dreamcast', category: 'salon', brand: 'Sega',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Dreamcast-Console-Set.jpg',
    price: 200, stock: 'low_stock', releaseDate: '1998',
    specs: { 'Génération': '6ème (128-bit)', 'CPU': 'Hitachi SH-4', 'Support': 'GD-ROM 1.2 Go' },
    summary: ['Premier modem 56k de série', 'Le paradis des conversions d\'Arcade (VGA Box)', 'Shenmue, Crazy Taxi'], buyLink: '#'
  },
  {
    id: 'retro-salon-10', name: 'Sony PlayStation 2', category: 'salon', brand: 'Sony',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/PS2-Versions.jpg',
    price: 80, stock: 'in_stock', releaseDate: '2000',
    specs: { 'Génération': '6ème (128-bit)', 'CPU': 'Emotion Engine à 294 MHz', 'Support': 'DVD-ROM' },
    summary: ['Console la plus vendue de l\'historie', 'Lecteur DVD le moins cher de son époque', 'Catalogue infiniment varié'], buyLink: '#'
  },
  {
    id: 'retro-salon-11', name: 'Nintendo GameCube', category: 'salon', brand: 'Nintendo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/GameCube-Console-Set.jpg',
    price: 160, stock: 'low_stock', releaseDate: '2001',
    specs: { 'Génération': '6ème (128-bit)', 'CPU': 'IBM Gekko', 'Support': 'Mini-DVD' },
    summary: ['Un design cubique avec anse solide', 'Manette unanimement plébiscitée', 'Zelda Wind Waker, Smash Bros Melee'], buyLink: '#'
  },
  {
    id: 'retro-salon-12', name: 'Atari 2600+', category: 'salon', brand: 'Atari',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Atari-2600-Wood-4Sw-Set.jpg',
    price: 119, stock: 'in_stock', releaseDate: 'Nov. 2023',
    specs: { 'Compatibilité': 'Cartouches 2600 & 7800', 'Sortie': 'HDMI (4:3 et 16:9)', 'Manette': 'Joystick CX40+ inclus' },
    summary: ['Le Revival officiel par Atari / Plaion', 'Lisez vos vieilles cartouches sur TV HD', 'Fournie avec une cartouche 10-en-1'], buyLink: 'https://www.bfmtv.com/tech/console-de-jeux/avis-aux-joueurs-nostalgiques-atari-fait-renaitre-sa-mythique-console-2600_AV-202308250240.html'
  },
  {
    id: 'retro-salon-atari-5200', name: 'Atari 5200 SuperSystem', category: 'salon', brand: 'Atari',
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=2619&auto=format&fit=crop',
    price: 200, stock: 'low_stock', releaseDate: '1982',
    specs: { 'Génération': '2ème (8-bit)', 'CPU': 'MOS 6502C à 1.79 MHz', 'Couleurs': '256 (16 simultanées)' },
    summary: ['Manettes massives à pavé numérique', 'Version consoloisée de l\'Atari 400', 'Très encombrante'], buyLink: '#'
  },
  {
    id: 'retro-salon-atari-7800', name: 'Atari 7800 ProSystem', category: 'salon', brand: 'Atari',
    image: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?q=80&w=2670&auto=format&fit=crop',
    price: 150, stock: 'low_stock', releaseDate: '1986',
    specs: { 'Génération': '3ème (8-bit)', 'CPU': 'SALLIE 6502 à 1.79 MHz', 'Rétrocompatibilité': 'Jeux 2600 natifs' },
    summary: ['Excellents portages d\'Arcade', 'Affichage de 100 sprites à l\'écran', 'Concurrente directe de la NES'], buyLink: '#'
  },
  {
    id: 'retro-salon-atari-jaguar', name: 'Atari Jaguar', category: 'salon', brand: 'Atari',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop',
    price: 350, stock: 'low_stock', releaseDate: '1993',
    specs: { 'Génération': '5ème (Marketée 64-bit)', 'CPU': 'Motorola 68000 + "Tom" & "Jerry"', 'Média': 'Cartouche' },
    summary: ['Do the Math ! (Première 64-bit)', 'Alien vs Predator mythique', 'Dernière console historique d\'Atari'], buyLink: '#'
  },

  // --- MICRO-ORDINATEURS ---
  {
    id: 'retro-micro-1', name: 'Atari ST (1040 STf)', category: 'micro', brand: 'Atari',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Atari-1040STf-01.jpg',
    price: 250, stock: 'low_stock', releaseDate: '1985',
    specs: { 'Type': 'Micro-ordinateur 16/32-bit', 'CPU': 'Motorola 68000 @ 8 MHz', 'RAM': '1 Mo (sur le 1040)', 'Sons': 'Yamaha YM2149F', 'Connectique': 'Ports MIDI In/Out natifs' },
    summary: ['L\'ordinateur fétiche des musiciens de l\'époque', 'Lecteur de disquettes 3.5" intégré', 'Rivalité légendaire contre l\'Amiga 500'], buyLink: 'https://www.wikiwand.com/fr/Atari_ST'
  },
  {
    id: 'retro-micro-atari-800', name: 'Atari 800', category: 'micro', brand: 'Atari',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
    price: 250, stock: 'low_stock', releaseDate: '1979',
    specs: { 'Type': 'Micro-ordinateur 8-bit', 'CPU': 'MOS 6502 à 1.79 MHz', 'Sons': 'Circuit POKEY' },
    summary: ['Précurseur de l\'informatique grand public', 'Ports de cartouches doubles protégés', 'Clavier machine-à-écrire hyper robuste'], buyLink: '#'
  },
  {
    id: 'retro-micro-atari-falcon', name: 'Atari Falcon 030', category: 'micro', brand: 'Atari',
    image: 'https://images.unsplash.com/photo-1628172909405-b778278dae84?q=80&w=2671&auto=format&fit=crop',
    price: 1200, stock: 'out_of_stock', releaseDate: '1992',
    specs: { 'Type': 'Micro 32-bit', 'CPU': 'Motorola 68030 à 16 MHz', 'DSP': 'Motorola 56001 (Audio Master)' },
    summary: ['Le chant du cygne des ordinateurs Atari', 'Une bête de montage musical et d\'enregistrement 16-bit', 'Aujourd\'hui extrêmement rare'], buyLink: '#'
  },

  // --- CONSOLES PORTABLES ---
  {
    id: 'retro-portable-1', name: 'Game Boy', category: 'portable', brand: 'Nintendo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Game-Boy-FL.jpg',
    price: 110, stock: 'in_stock', releaseDate: '1989',
    specs: { 'Écran': 'Matrice N&B (vert caca d\'oie)', 'Autonomie': '~15H' },
    summary: ['La définition du jeu sur piles', 'Tetris en pack (Le Génie)', 'Increvable machine'], buyLink: '#'
  },
  {
    id: 'retro-portable-2', name: 'Sega Game Gear', category: 'portable', brand: 'Sega',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Sega-Game-Gear-WB.jpg',
    price: 140, stock: 'low_stock', releaseDate: '1990',
    specs: { 'Écran': 'Couleur Rétroéclairé LCD', 'Autonomie': '~3H' },
    summary: ['La Master-System au bout des mains', 'Demande 6 piles LR6 en un éclair', 'Prend au dépourvu Nintendo sur la Lumière'], buyLink: '#'
  },
  {
    id: 'retro-portable-3', name: 'Game Boy Color (Mod IPSQ5)', category: 'portable', brand: 'Nintendo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Nintendo-Game-Boy-Color-FL.jpg',
    price: 220, stock: 'in_stock', releaseDate: 'Mod',
    specs: { 'Écran': 'Mod IPS TFT', 'Batterie': 'Batterie Li-po intégrée (USB-C)', 'Coque': 'Shell Custom' },
    summary: ['Pleine lumière pour l\'extérieur !', 'Rétro-Modding ultime pour Pokemon Silver', 'Recharge via USB-C moderne'], buyLink: '#'
  },
  {
    id: 'retro-portable-4', name: 'Game Boy Advance SP (AGS-101)', category: 'portable', brand: 'Nintendo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Nintendo-Game-Boy-Advance-SP-Front.jpg',
    price: 250, stock: 'out_of_stock', releaseDate: '2005',
    specs: { 'Écran': 'Rétroéclairé Modèle Intense', 'Design': 'Clapet pour protéger', 'Backward P.': 'Lit Gameboy Grise & Color' },
    summary: ['Format extra-compacte luxueux', 'Jouer sous la couette sans add-on ver de terre !', 'Dernière représentante vraie de la GameBoy'], buyLink: '#'
  },
  {
    id: 'retro-portable-5', name: 'Sony PlayStation Portable (PSP)', category: 'portable', brand: 'Sony',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/PlayStation_Portable.jpg',
    price: 90, stock: 'in_stock', releaseDate: '2004',
    specs: { 'Écran': 'TFT 4.3" 16:9', 'Support': 'UMD (Optical)' },
    summary: ['Presque une PS2 portable', 'Baladeur Vidéo et MP3 (Le futur à l\'époque)', 'La scène Custom Firmware florissante (Scène Hacks)'], buyLink: '#'
  },
  {
    id: 'retro-portable-atari-lynx', name: 'Atari Lynx', category: 'portable', brand: 'Atari',
    image: 'https://images.unsplash.com/photo-1533106560950-843e9ebdb26c?q=80&w=2669&auto=format&fit=crop',
    price: 200, stock: 'low_stock', releaseDate: '1989',
    specs: { 'Type': 'Portable 16-bit', 'CPU': 'Dual Custom CMOS (Mikey & Suzy)', 'Écran': 'Couleur Rétroéclairé LCD' },
    summary: ['Première portable couleur du marché !', 'Écran réversible pour jouer de la main gauche', 'Dévorait 6 piles AA en 4 heures'], buyLink: '#'
  },

  // --- UPSCALERS & ÉCRANS ---
  {
    id: 'retro-upscaler-1', name: 'RetroTINK-4K', category: 'upscaler', brand: 'RetroTINK',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Sony-BVM-D9H5U-Monitor-FL.jpg', // Used generic cool scaling image replacement (PVM box)
    price: 750, stock: 'out_of_stock', releaseDate: '2023',
    specs: { 'Entrées': 'Péritel, S-Video, Component, VGA, RGB', 'Sortie': 'HDMI 4K 60Hz', 'Features': 'CRT Masks, HDR, Lag Zéro' },
    summary: ['Transforme le signal composite et Peritel en vrai 4K net', 'Magie des filtres CRT denses simulés via FP', 'Coûte aussi cher qu\'un PC, mais donne un résultat Saint-Graal'], buyLink: '#'
  },
  {
    id: 'retro-upscaler-2', name: 'OSSC Pro', category: 'upscaler', brand: 'OSSC',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Sony-BVM-D9H5U-Monitor-FL.jpg', 
    price: 350, stock: 'in_stock', releaseDate: '2023',
    specs: { 'Architecture': 'FPGA pur silicium', 'Entrées': 'SCART RGB, Composante' },
    summary: ['Open source et mise à jour communautaire incessante', 'Le monstre de la multiplication de ligne', 'Extrêmement réactif'], buyLink: '#'
  },
  {
    id: 'retro-upscaler-3', name: 'Sony BVM-20F1E (Moniteur CRT)', category: 'upscaler', brand: 'Sony',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Sony-BVM-D9H5U-Monitor-FL.jpg',
    price: 1500, stock: 'low_stock', releaseDate: '1990s',
    specs: { 'Technologie': 'Trinitron HR (Broadcast Grade)', 'Format': '4:3', 'TVL': '900 Lignes' },
    summary: ['Scanlines incisives comme des couteaux de boucher', 'Pèse 30 Kilogrammes', 'Un tube dont sont amoureux tous les collectionneurs riches'], buyLink: '#'
  },

  // --- MANETTES & LINKERS ---
  {
    id: 'retro-acc-1', name: 'FXPAK PRO', category: 'accessories', brand: 'Krikzz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Super-Famicom-Controller.jpg',
    price: 225, stock: 'in_stock', releaseDate: '2019',
    specs: { 'Compatibilité': 'SNES (Toutes régions)', 'FPGA': 'Emulation complète des co-processeurs' },
    summary: ['Lire les jeux aux puces capricieuses Super FX', '100% de la romset Super Nintendo sur ta vraie console', 'Permets les musiques HQ par dessus les vieux spirtes'], buyLink: '#'
  },
  {
    id: 'retro-acc-2', name: 'Mega EverDrive PRO', category: 'accessories', brand: 'Krikzz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Super-Famicom-Controller.jpg', 
    price: 215, stock: 'in_stock', releaseDate: '2020',
    specs: { 'Compatibilité': 'Megadrive, MegaCD via FPGA', 'Ram': 'Save states à chaud' },
    summary: ['Permet de charger des ISO de MEGA-CD depuis la carte SD', 'Plus besoin de réparer ta Mega CD dont la courroie casse', 'Menu hyper fluides'], buyLink: '#'
  },
  {
    id: 'retro-acc-3', name: '8BitDo M30 (2.4ghz)', category: 'accessories', brand: '8BitDo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Super-Famicom-Controller.jpg', 
    price: 40, stock: 'in_stock', releaseDate: '2022',
    specs: { 'Design': 'Inspiration Saturn 6 boutons', 'Connexion': '2.4GHz Dongle Port Manette' },
    summary: ['Un vrai pad sans fil au feeling original parfait', 'Le graal absolu pour les versus fighting retro (Street Fighter)', 'Latence imperceptible'], buyLink: '#'
  }
];
