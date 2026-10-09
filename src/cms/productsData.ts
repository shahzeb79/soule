import { Product } from '../types';
import heroCampaignImg from '../assets/images/hero_soule_campaign_1791458810634.jpg';
import techSoleDetailImg from '../assets/images/tech_soule_sole_detail_1791458872558.jpg';
import productCloudrushImg from '../assets/images/product_soule_cloudrush_1791458827460.jpg';
import productAeroflyImg from '../assets/images/product_soule_aerofly_women_1791458843649.jpg';
import productStriderImg from '../assets/images/product_soule_strider_kids_1791458855619.jpg';

export const HERO_CAMPAIGN_IMG = heroCampaignImg;
export const TECH_SOLE_DETAIL_IMG = techSoleDetailImg;

export const PRODUCTS_DATA: Product[] = [
  // ==========================================
  // MEN'S COLLECTION (10 PRODUCTS)
  // ==========================================
  {
    id: 'men-soule-cloudrush-2',
    slug: 'soule-cloudrush-2',
    name: 'CloudRush 2',
    subCategory: 'Road Running',
    gender: 'men',
    activity: 'Road Running',
    cushioning: 'Max',
    priceCHF: 199.90,
    isNew: true,
    isBestSeller: true,
    badge: 'Flagship Edition',
    weight: '248 g / 8.7 oz',
    heelDrop: '7 mm',
    stability: 'Neutral Balanced',
    lacing: 'Speed Lacing System',
    description: 'The definitive daily running shoe, engineered in Zurich. Features dual-density SouleFoam™ hollow pods for an explosive push-off and pillow-soft touchdown on hard pavement.',
    features: [
      'Engineered double-layer breathable mesh for zero hot spots',
      'Dual-density SouleFoam™ hollow tubular cushioning elements',
      'Full-length SpeedBoard™ carbon-infused propulsion plate',
      'Hands-free rapid speed lacing with standard spares in box'
    ],
    technologies: [
      { name: 'SouleFoam™ Dual Core', description: 'Zero-gravity foam pods that collapse horizontally and vertically for multidirectional absorption.' },
      { name: 'SpeedBoard™ Plate', description: 'Converts kinetic downward energy from foot-strike into forward momentum.' }
    ],
    sustainability: { recycledContent: '44% Total Recycled Content', details: '100% recycled upper textile.' },
    rating: 4.9,
    reviewCount: 312,
    colorways: [
      {
        id: 'cr-white-slate',
        name: 'Chalk White / Slate Grey',
        primaryColorHex: '#E2E8F0',
        accentColorHex: '#1E293B',
        image: productCloudrushImg,
        angles: {
          side: productCloudrushImg,
          perspective: heroCampaignImg,
          top: productAeroflyImg,
          sole: techSoleDetailImg
        }
      },
      { id: 'cr-all-black', name: 'Monolith Phantom Black', primaryColorHex: '#1E293B', accentColorHex: '#0F172A', image: '' },
      { id: 'cr-alpine-ice', name: 'Alpine Ice / Glacier Cyan', primaryColorHex: '#E0F2FE', accentColorHex: '#0284C7', image: '' }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true, stockCount: 3 },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 10.5', us: 'US 10.5', eu: 'EU 44.5', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true },
      { size: 'US 12', us: 'US 12', eu: 'EU 46', inStock: true }
    ]
  },
  {
    id: 'men-aerostrider-pro',
    slug: 'aerostrider-pro',
    name: 'AeroStrider Pro',
    subCategory: 'Speed & Marathon',
    gender: 'men',
    activity: 'Speed & Racing',
    cushioning: 'Responsive',
    priceCHF: 229.90,
    isNew: true,
    isBestSeller: false,
    badge: 'Pro Marathon',
    weight: '198 g / 7.0 oz',
    heelDrop: '5 mm',
    stability: 'Agile Neutral',
    lacing: 'Ultralight Race Laces',
    description: 'Lightweight race-day weapon engineered for sub-3 hour marathoners. High-response PEBA foam paired with a spooned composite SpeedBoard.',
    features: ['Sub-200g ultralight construction', 'Ultra-thin translucent monomesh', 'High-traction micro-lug rubber'],
    technologies: [{ name: 'HyperPebax Core', description: 'Extremely resilient energy rebound matrix offering 88% kinetic energy return.' }],
    sustainability: { recycledContent: '35% Total Recycled Content', details: 'Minimally trimmed materials.' },
    rating: 4.8,
    reviewCount: 184,
    colorways: [
      { id: 'asp-flame-white', name: 'Flash White / Solar Coral', primaryColorHex: '#F8FAFC', accentColorHex: '#EA580C', image: '' },
      { id: 'asp-stealth', name: 'Carbon Matt / Neon Lime', primaryColorHex: '#334155', accentColorHex: '#84CC16', image: '' }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true }
    ]
  },
  {
    id: 'men-terrapeak-wp',
    slug: 'terrapeak-waterproof',
    name: 'TerraPeak Waterproof',
    subCategory: 'Alpine & Trail',
    gender: 'men',
    activity: 'Trail Running',
    cushioning: 'Max',
    priceCHF: 219.90,
    isNew: false,
    isBestSeller: true,
    badge: '100% Waterproof',
    weight: '310 g / 10.9 oz',
    heelDrop: '8 mm',
    stability: 'Support & Mud Traction',
    lacing: 'Reinforced Cord Lacing',
    description: 'Engineered for unpredictable Swiss mountain passes. 100% wind- and waterproof breathable membrane with multi-directional MissionGrip™ lugs.',
    features: ['Hydro-shield waterproof membrane', 'Aggressive chevron lugs', 'TPU rock-plate'],
    technologies: [{ name: 'HydroDry Membrane', description: 'Micro-porous shield blocking rain molecules while releasing perspiration vapors.' }],
    sustainability: { recycledContent: '38% Total Recycled Content', details: 'PFC-free water repellent finish.' },
    rating: 4.9,
    reviewCount: 420,
    colorways: [
      { id: 'tp-forest-slate', name: 'Pine Moss / Granite Slate', primaryColorHex: '#3F4E4F', accentColorHex: '#A27B5C', image: '' },
      { id: 'tp-mineral-black', name: 'Mineral Black / Rust Ochre', primaryColorHex: '#1E293B', accentColorHex: '#D97706', image: '' }
    ],
    sizes: [
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
      { size: 'US 10.5', us: 'US 10.5', eu: 'EU 44.5', inStock: true }
    ]
  },
  {
    id: 'men-horizon-minimalist',
    slug: 'horizon-minimalist',
    name: 'Horizon Minimalist',
    subCategory: 'All Day & Travel',
    gender: 'men',
    activity: 'All Day',
    cushioning: 'Responsive',
    priceCHF: 179.90,
    isNew: false,
    isBestSeller: true,
    badge: 'Commuter Favorite',
    weight: '230 g / 8.1 oz',
    heelDrop: '6 mm',
    stability: 'Neutral Comfort',
    lacing: 'Easy Slip-On Speed Lock',
    description: 'The all-day sneaker that looks refined in the office and delivers cloud cushioning on 20,000-step travel days.',
    features: ['Refined monochrome silhouette', 'Zero-Gravity foam pods', 'Slip-in heel pocket'],
    technologies: [{ name: 'Zero-G Foam', description: 'Ultralight daily compound that maintains shape through millions of steps.' }],
    sustainability: { recycledContent: '50% Total Recycled Content', details: 'Upper composed of 100% rPET.' },
    rating: 4.8,
    reviewCount: 512,
    colorways: [
      { id: 'hz-sand-bone', name: 'Bone White / Sand Taupe', primaryColorHex: '#E5E5E5', accentColorHex: '#78716C', image: '' },
      { id: 'hz-slate-monochrome', name: 'Deep Eclipse / Slate', primaryColorHex: '#334155', accentColorHex: '#0F172A', image: '' }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true }
    ]
  },
  {
    id: 'men-alpinepulse-high',
    slug: 'alpinepulse-high',
    name: 'AlpinePulse High',
    subCategory: 'Trekking & Fast-Hiking',
    gender: 'men',
    activity: 'Hiking & Trekking',
    cushioning: 'Plush',
    priceCHF: 249.90,
    isNew: true,
    isBestSeller: false,
    badge: 'Engineered Ankle Collar',
    weight: '360 g / 12.7 oz',
    heelDrop: '9 mm',
    stability: 'Maximum Stability',
    lacing: 'Metal Eyelet Lock System',
    description: 'A light-speed hiking boot that blends the speed of a running shoe with the ankle support and weather protection of an alpine boot.',
    features: ['High-cut molded collar', 'Dual-compound climbing outsole', 'Thermal reflective footbed'],
    technologies: [{ name: 'AnkleFlex Cage', description: 'Ergonomic anatomical cuff holding the heel firmly locked in.' }],
    sustainability: { recycledContent: '30% Total Recycled Content', details: 'Engineered with non-petroleum bio-plastics.' },
    rating: 4.7,
    reviewCount: 96,
    colorways: [
      { id: 'ap-glacier-stone', name: 'Glacier Stone / Burnt Amber', primaryColorHex: '#CBD5E1', accentColorHex: '#B45309', image: '' }
    ],
    sizes: [
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
      { size: 'US 10.5', us: 'US 10.5', eu: 'EU 44.5', inStock: true }
    ]
  },
  {
    id: 'men-cloudsurfer-tempo',
    slug: 'cloudsurfer-tempo',
    name: 'CloudSurfer Tempo',
    subCategory: 'Road & Intervals',
    gender: 'men',
    activity: 'Road Running',
    cushioning: 'Responsive',
    priceCHF: 209.90,
    isNew: true,
    isBestSeller: true,
    badge: 'Tempo Specialist',
    weight: '235 g / 8.2 oz',
    heelDrop: '6 mm',
    stability: 'Neutral Responsive',
    lacing: 'Dynamic Knit Lacing',
    description: 'Designed for fast intervals and threshold runs. Features Computer-Aided Engineering (FEA) pod shaping for seamless heel-to-toe rolling transitions.',
    features: ['FEA optimized collapsing pod geometry', 'Seamless circular engineered mesh upper', 'Zonal rubber reinforcement on high-wear forefoot'],
    technologies: [{ name: 'WavePhase Pods', description: 'Sequential collapse system that cushions sequentially like falling dominos.' }],
    sustainability: { recycledContent: '42% Total Recycled Content', details: 'Dope-dye coloring process reducing water consumption by 90%.' },
    rating: 4.9,
    reviewCount: 140,
    colorways: [
      { id: 'cst-slate-volt', name: 'Thunder Slate / Electric Volt', primaryColorHex: '#334155', accentColorHex: '#A3E635', image: '' },
      { id: 'cst-glacier-white', name: 'Glacier Pure / Ink Navy', primaryColorHex: '#F1F5F9', accentColorHex: '#1E3A8A', image: '' }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true }
    ]
  },
  {
    id: 'men-apex-carbon-elite',
    slug: 'apex-carbon-elite',
    name: 'Apex Carbon Elite',
    subCategory: 'Marathon Race Day',
    gender: 'men',
    activity: 'Speed & Racing',
    cushioning: 'Ultralight',
    priceCHF: 269.90,
    isNew: true,
    isBestSeller: false,
    badge: 'Carbon Blade',
    weight: '185 g / 6.5 oz',
    heelDrop: '4 mm',
    stability: 'Race Agility',
    lacing: 'Notched Speed Laces',
    description: 'The pinnacle of Swiss racing performance. Powered by a 100% full-length carbon fibre spooned plate encased in supercritical nitrogen-infused foam.',
    features: ['Full length curved carbon plate', 'Sub-190g race chassis', 'Paper-thin ripstop racing mono-mesh'],
    technologies: [{ name: 'NitroHelion™ Foam', description: 'Supercritical gas-infused compound producing 92% mechanical rebound.' }],
    sustainability: { recycledContent: '32% Total Recycled Content', details: 'Streamlined minimal pattern layout.' },
    rating: 5.0,
    reviewCount: 78,
    colorways: [
      { id: 'ace-white-crimson', name: 'Optic White / Crimson Rush', primaryColorHex: '#FFFFFF', accentColorHex: '#E11D48', image: '' },
      { id: 'ace-stealth-carbon', name: 'Phantom Carbon / Reflective Silver', primaryColorHex: '#0F172A', accentColorHex: '#94A3B8', image: '' }
    ],
    sizes: [
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true }
    ]
  },
  {
    id: 'men-terramax-boulder',
    slug: 'terramax-boulder',
    name: 'TerraMax Boulder',
    subCategory: 'Technical Mountain & Skyrunning',
    gender: 'men',
    activity: 'Trail Running',
    cushioning: 'Max',
    priceCHF: 239.90,
    isNew: false,
    isBestSeller: true,
    badge: 'Skyrunner Shield',
    weight: '325 g / 11.4 oz',
    heelDrop: '7 mm',
    stability: 'Maximum Traction & Shield',
    lacing: 'Kevlar Speed Quick-Lace',
    description: 'Built for extreme scree, jagged limestone ridges, and rugged mountain traverses. Features high-tensile Kevlar side paneling.',
    features: ['5mm multidirectional wet-rock climbing lugs', 'Integrated elastic debris gaiter collar', 'Full perimeter TPU rock fender'],
    technologies: [{ name: 'MissionGrip Pro', description: 'Dual rubber compounds combining sticky friction rubber with durable lug studs.' }],
    sustainability: { recycledContent: '36% Total Recycled Content', details: 'Recycled rubber compound in outsole lugs.' },
    rating: 4.8,
    reviewCount: 165,
    colorways: [
      { id: 'tmb-stone-ochre', name: 'Granite Stone / Alpine Ochre', primaryColorHex: '#475569', accentColorHex: '#D97706', image: '' }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true }
    ]
  },
  {
    id: 'men-zurich-voyager',
    slug: 'zurich-voyager',
    name: 'Zurich Voyager',
    subCategory: 'Executive Daily & Travel',
    gender: 'men',
    activity: 'All Day',
    cushioning: 'Plush',
    priceCHF: 189.90,
    isNew: true,
    isBestSeller: false,
    badge: 'Travel Essential',
    weight: '240 g / 8.4 oz',
    heelDrop: '6 mm',
    stability: 'Balanced Cloud Comfort',
    lacing: 'Concealed Elastic Lacing',
    description: 'The understated luxury sneaker engineered for long flights, urban walking tours, and boardroom presentations.',
    features: ['Ultra-fine tactile knit with matte vegan leather accents', 'Memory foam contoured arch footbed', 'Machine washable construction'],
    technologies: [{ name: 'CloudCushion Core', description: 'High-density molecular foam providing resilient all-day standing support.' }],
    sustainability: { recycledContent: '48% Total Recycled Content', details: '100% post-consumer recycled textile upper.' },
    rating: 4.9,
    reviewCount: 210,
    colorways: [
      { id: 'zv-charcoal-sand', name: 'Anthracite / Soft Sand', primaryColorHex: '#1E293B', accentColorHex: '#D6D3D1', image: '' },
      { id: 'zv-bone-cream', name: 'Pure Bone / Chalk Dune', primaryColorHex: '#F5F5F4', accentColorHex: '#78716C', image: '' }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true }
    ]
  },
  {
    id: 'men-peakmaster-glacier',
    slug: 'peakmaster-glacier',
    name: 'PeakMaster Glacier',
    subCategory: 'Alpine Expedition & Winter Trek',
    gender: 'men',
    activity: 'Hiking & Trekking',
    cushioning: 'Max',
    priceCHF: 279.90,
    isNew: false,
    isBestSeller: false,
    badge: 'Thermal Alpine',
    weight: '390 g / 13.7 oz',
    heelDrop: '9 mm',
    stability: 'Heavy Load Torsional Support',
    lacing: 'Two-Zone Lace Lock System',
    description: 'Designed for cold high-altitude mountain trekking. Insulated with lightweight thermal microfibers and sealed with a 100% waterproof barrier.',
    features: ['Sub-zero thermal lining rating to -15°C', 'Molded rubber crampon-compatible heel ledge', 'Vibram-infused ice-grip lug compound'],
    technologies: [{ name: 'ThermalShield™ Foil', description: 'Heat-reflective aluminum layer beneath footbed retaining body warmth.' }],
    sustainability: { recycledContent: '35% Total Recycled Content', details: 'Zero hazardous fluorocarbons (PFC-free).' },
    rating: 4.8,
    reviewCount: 84,
    colorways: [
      { id: 'pmg-slate-glacier', name: 'Glacier Slate / Frost Blue', primaryColorHex: '#334155', accentColorHex: '#38BDF8', image: '' }
    ],
    sizes: [
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
      { size: 'US 10.5', us: 'US 10.5', eu: 'EU 44.5', inStock: true },
      { size: 'US 11.5', us: 'US 11.5', eu: 'EU 45.5', inStock: true }
    ]
  },

  // ==========================================
  // WOMEN'S COLLECTION (10 PRODUCTS)
  // ==========================================
  {
    id: 'women-soule-aerofly-breeze',
    slug: 'soule-aerofly-breeze',
    name: 'AeroFly Breeze',
    subCategory: 'Road Running',
    gender: 'women',
    activity: 'Road Running',
    cushioning: 'Plush',
    priceCHF: 199.90,
    isNew: true,
    isBestSeller: true,
    badge: 'Iconic Women Runner',
    weight: '215 g / 7.6 oz',
    heelDrop: '7 mm',
    stability: 'Neutral Plush',
    lacing: 'Anatomical Speed Lacing',
    description: 'Designed specifically for the female foot morphology: narrower heel pocket, sculpted midfoot arch, and ultra-plush SouleFoam™ cushioning for effortless road miles.',
    features: [
      'Tailored anatomical female last engineered in Swiss biomechanics lab',
      'Ultra-breathable micro-perforated knit upper keeping feet cool',
      'Cloud pod arrays calibrated for smooth, frictionless heel transitions'
    ],
    technologies: [
      { name: 'SouleFoam™ CloudMatrix', description: 'Softer compression density tuned for lighter impacts and high bounce.' },
      { name: 'Women SpeedBoard™', description: 'Custom flex geometry providing snappy propulsion tailored for women.' }
    ],
    sustainability: { recycledContent: '48% Total Recycled Content', details: 'Spun from 100% recycled filament yarn.' },
    rating: 4.9,
    reviewCount: 388,
    colorways: [
      { id: 'af-lavender-chalk', name: 'Lavender Mist / Chalk White', primaryColorHex: '#E9D5FF', accentColorHex: '#7E22CE', image: productAeroflyImg },
      { id: 'af-rose-cloud', name: 'Blush Pearl / Quartz', primaryColorHex: '#FFE4E6', accentColorHex: '#E11D48', image: '' },
      { id: 'af-pure-platinum', name: 'Pure Platinum / Snow White', primaryColorHex: '#F1F5F9', accentColorHex: '#334155', image: '' }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 6.5', us: 'US 6.5', eu: 'EU 37', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38', inStock: true, stockCount: 4 },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 40', inStock: true }
    ]
  },
  {
    id: 'women-cloudpulse-nova',
    slug: 'cloudpulse-nova',
    name: 'CloudPulse Nova',
    subCategory: 'All Day & Active Living',
    gender: 'women',
    activity: 'All Day',
    cushioning: 'Max',
    priceCHF: 189.90,
    isNew: true,
    isBestSeller: true,
    badge: 'All-Day Cloud',
    weight: '220 g / 7.7 oz',
    heelDrop: '6 mm',
    stability: 'Balanced Comfort',
    lacing: 'Easy Elastic Stretch Laces',
    description: 'Supreme all-day luxury. Engineered with high-stack zero-gravity pods and a sock-like inner sleeve that cradles your foot.',
    features: ['Sock-like rib-knit collar', 'Max-cushion geometry', 'Molded heel counter'],
    technologies: [{ name: 'NovaFoam Core', description: 'Dual-density foam structure offering cloud-soft step-in.' }],
    sustainability: { recycledContent: '42% Total Recycled Content', details: 'Low-water solution dye processing.' },
    rating: 4.8,
    reviewCount: 260,
    colorways: [
      { id: 'cp-ivory-sand', name: 'Ivory Cream / Pale Dune', primaryColorHex: '#FEF3C7', accentColorHex: '#B45309', image: '' },
      { id: 'cp-mineral-grey', name: 'Mineral Dove / Frost White', primaryColorHex: '#E2E8F0', accentColorHex: '#475569', image: '' }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true }
    ]
  },
  {
    id: 'women-terraglide-trail',
    slug: 'terraglide-trail',
    name: 'TerraGlide Trail',
    subCategory: 'Mountain & Off-Road',
    gender: 'women',
    activity: 'Trail Running',
    cushioning: 'Responsive',
    priceCHF: 219.90,
    isNew: false,
    isBestSeller: false,
    badge: 'Trail Precision',
    weight: '265 g / 9.3 oz',
    heelDrop: '6 mm',
    stability: 'All-Terrain Stability',
    lacing: 'Stowable Trail Laces',
    description: 'Fly over rocky switchbacks and single-tracks. Features high-traction multi-angle lugs and a mud-shedding sole profile.',
    features: ['Multi-angle rubber lugs', 'Ballistic mesh with TPU hot-melts', 'Lace garage on tongue'],
    technologies: [{ name: 'AlpineTract Rubber', description: 'Specialized rubber compound providing 40% superior wet rock friction.' }],
    sustainability: { recycledContent: '36% Total Recycled Content', details: 'Built to endure 800+ kilometers.' },
    rating: 4.8,
    reviewCount: 145,
    colorways: [
      { id: 'tg-sage-olive', name: 'Sage Mist / Alpine Cedar', primaryColorHex: '#D1FAE5', accentColorHex: '#047857', image: '' }
    ],
    sizes: [
      { size: 'US 6.5', us: 'US 6.5', eu: 'EU 37', inStock: true },
      { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 39', inStock: true }
    ]
  },
  {
    id: 'women-temposprint-elite',
    slug: 'temposprint-elite',
    name: 'TempoSprint Elite',
    subCategory: 'Intervals & Speed',
    gender: 'women',
    activity: 'Speed & Racing',
    cushioning: 'Ultralight',
    priceCHF: 239.90,
    isNew: true,
    isBestSeller: false,
    badge: 'Carbon Tech',
    weight: '178 g / 6.2 oz',
    heelDrop: '4 mm',
    stability: 'Neutral Agile',
    lacing: 'Featherweight Laces',
    description: 'The fastest women competition shoe ever created by soule. Ultra-responsive energy return with integrated carbon speedboard.',
    features: ['Featherweight 178g footprint', 'Ultra-thin woven aerodynamic upper', 'Curved rocker roll'],
    technologies: [{ name: 'CarbonSpeed™ Blade', description: 'High-tensile carbon layer engineered to sling you forward.' }],
    sustainability: { recycledContent: '30% Total Recycled Content', details: '100% recyclable mono-material upper.' },
    rating: 4.9,
    reviewCount: 92,
    colorways: [
      { id: 'ts-flash-white', name: 'Aero White / Solar Citrus', primaryColorHex: '#F8FAFC', accentColorHex: '#EAB308', image: '' }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true }
    ]
  },
  {
    id: 'women-zenwalk-flow',
    slug: 'zenwalk-flow',
    name: 'ZenWalk Flow',
    subCategory: 'Studio, Yoga & Recovery',
    gender: 'women',
    activity: 'All Day',
    cushioning: 'Plush',
    priceCHF: 169.90,
    isNew: false,
    isBestSeller: true,
    badge: 'Post-Run Recovery',
    weight: '195 g / 6.8 oz',
    heelDrop: '5 mm',
    stability: 'Natural Flex',
    lacing: 'Slip-On Collar',
    description: 'Post-run recovery perfected. An ultra-soft knit body and deep relief grooves that allow your feet and toes to splay and recover naturally.',
    features: ['Deep ergonomic flex grooves', 'Zero-pressure instep design', 'Antimicrobial contoured footbed'],
    technologies: [{ name: 'FlowFlex Sole', description: 'Deeply articulated sole pods that move harmoniously with each metatarsal.' }],
    sustainability: { recycledContent: '55% Total Recycled Content', details: 'Highest recycled content in the soule line.' },
    rating: 4.8,
    reviewCount: 310,
    colorways: [
      { id: 'zw-oatmeal-clay', name: 'Warm Oatmeal / Terracotta', primaryColorHex: '#F5EBE0', accentColorHex: '#C57B57', image: '' }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true }
    ]
  },
  {
    id: 'women-cloudflow-marathon',
    slug: 'cloudflow-marathon',
    name: 'CloudFlow Marathon',
    subCategory: 'Road & Long Distance',
    gender: 'women',
    activity: 'Road Running',
    cushioning: 'Responsive',
    priceCHF: 219.90,
    isNew: true,
    isBestSeller: true,
    badge: 'Half & Full Marathon',
    weight: '208 g / 7.3 oz',
    heelDrop: '6 mm',
    stability: 'Neutral Precision',
    lacing: 'Engineered Asymmetric Lacing',
    description: 'The shoe of choice for half and full marathoners seeking responsiveness without sacrificing joint protection on miles 20+.',
    features: ['Curved Helion™ speedboard for continuous forward propulsion', 'Asymmetric tongue eliminates pressure over the top of the foot', 'Targeted zone ventilation over high-sweat forefoot'],
    technologies: [{ name: 'AeroCushion Dual', description: 'Dual-density foam sandwich softening impact while retaining spring.' }],
    sustainability: { recycledContent: '46% Total Recycled Content', details: 'Upper made from 100% recycled micro-filament polyester.' },
    rating: 4.9,
    reviewCount: 176,
    colorways: [
      { id: 'cfm-mint-ice', name: 'Mint Glacier / Polar Chalk', primaryColorHex: '#CCFBF1', accentColorHex: '#0F766E', image: '' },
      { id: 'cfm-orchid-black', name: 'Wild Orchid / Carbon', primaryColorHex: '#F3E8FF', accentColorHex: '#6B21A8', image: '' }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 6.5', us: 'US 6.5', eu: 'EU 37', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 40', inStock: true }
    ]
  },
  {
    id: 'women-stellar-glide-carbon',
    slug: 'stellar-glide-carbon',
    name: 'Stellar Glide Carbon',
    subCategory: '5k & 10k Racing',
    gender: 'women',
    activity: 'Speed & Racing',
    cushioning: 'Ultralight',
    priceCHF: 249.90,
    isNew: true,
    isBestSeller: false,
    badge: 'Race PR Weapon',
    weight: '172 g / 6.0 oz',
    heelDrop: '4 mm',
    stability: 'Agile Strike',
    lacing: 'Ultra-thin Competition Laces',
    description: 'Sub-175g rocket for personal record hunting on 5K and 10K road courses. Explosive stiffness through toe-off.',
    features: ['Full-width sculpted carbon rocker plate', 'Ultra-light translucent single-layer mesh', 'Micro-textured wet road traction compound'],
    technologies: [{ name: 'StellarBoard Carbon', description: 'Tuned specifically for women’s cadence and foot leverage mechanics.' }],
    sustainability: { recycledContent: '33% Total Recycled Content', details: 'Minimal adhesive use via ultrasonic welding.' },
    rating: 5.0,
    reviewCount: 65,
    colorways: [
      { id: 'sgc-solar-blush', name: 'Solar Coral / Pure White', primaryColorHex: '#FFF1F2', accentColorHex: '#F43F5E', image: '' }
    ],
    sizes: [
      { size: 'US 6.5', us: 'US 6.5', eu: 'EU 37', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true }
    ]
  },
  {
    id: 'women-alpinemist-waterproof',
    slug: 'alpinemist-waterproof',
    name: 'AlpineMist Waterproof',
    subCategory: 'Alpine Trail & Wet Weather',
    gender: 'women',
    activity: 'Trail Running',
    cushioning: 'Max',
    priceCHF: 229.90,
    isNew: false,
    isBestSeller: true,
    badge: '100% Waterproof',
    weight: '275 g / 9.7 oz',
    heelDrop: '7 mm',
    stability: 'All-Terrain Mud & Rock Support',
    lacing: 'Toggle Speed Trail Cinch',
    description: 'Keep your socks bone dry through alpine mud puddles, morning mountain dew, and sudden downpours.',
    features: ['100% wind- and waterproof breathable membrane', 'Deep 4.5mm MissionGrip chevron studs', 'Protective molded TPU toe cap'],
    technologies: [{ name: 'AquaShield Swiss Tech', description: 'Advanced microscopic vapor membrane blocking rain drops.' }],
    sustainability: { recycledContent: '40% Total Recycled Content', details: 'PFC-free high-performance DWR coating.' },
    rating: 4.9,
    reviewCount: 220,
    colorways: [
      { id: 'amw-mineral-plum', name: 'Mineral Mist / Deep Plum', primaryColorHex: '#F3E8FF', accentColorHex: '#581C87', image: '' },
      { id: 'amw-slate-teal', name: 'Slate Graphite / Alpine Teal', primaryColorHex: '#334155', accentColorHex: '#14B8A6', image: '' }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 40', inStock: true }
    ]
  },
  {
    id: 'women-lumiere-ease',
    slug: 'lumiere-ease',
    name: 'Lumière Ease',
    subCategory: 'All-Day Luxury & Slip-On',
    gender: 'women',
    activity: 'All Day',
    cushioning: 'Plush',
    priceCHF: 179.90,
    isNew: false,
    isBestSeller: true,
    badge: 'Cloud Slip-On',
    weight: '190 g / 6.7 oz',
    heelDrop: '5 mm',
    stability: 'Gentle Support',
    lacing: 'Hands-Free Stretch Collar',
    description: 'Effortless step-in elegance. Slip in without bending down, and walk on zero-gravity clouds from sunrise to late evening.',
    features: ['Hands-free spring-loaded heel counter', 'Ultra-fine breathable knit that hugs like a sock', 'Arch support contours reducing leg fatigue'],
    technologies: [{ name: 'EaseLock Pods', description: 'Specialized low-impact pods absorbing pavement shock.' }],
    sustainability: { recycledContent: '52% Total Recycled Content', details: 'Knit from ocean-collected recycled plastics.' },
    rating: 4.8,
    reviewCount: 340,
    colorways: [
      { id: 'le-pearl-nude', name: 'Pearl Sand / Rose Quartz', primaryColorHex: '#FDF2F8', accentColorHex: '#BE185D', image: '' },
      { id: 'le-monochrome-black', name: 'Onyx Black / Bone', primaryColorHex: '#18181B', accentColorHex: '#FAFAFA', image: '' }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true }
    ]
  },
  {
    id: 'women-summitstep-venture',
    slug: 'summitstep-venture',
    name: 'SummitStep Venture',
    subCategory: 'Fast-Hiking & Alpine Trails',
    gender: 'women',
    activity: 'Hiking & Trekking',
    cushioning: 'Plush',
    priceCHF: 259.90,
    isNew: true,
    isBestSeller: false,
    badge: 'Ankle Support Boot',
    weight: '330 g / 11.6 oz',
    heelDrop: '8 mm',
    stability: 'Full Torsional Stability',
    lacing: 'Metal Eyelet Lock System',
    description: 'Lightweight hiking boot designed for women seeking confident ankle stabilization without heavy clunky boot bulk.',
    features: ['Anatomical molded ankle collar prevents rolling on loose scree', 'Waterproof breathable interior bootie', 'Shock-absorbing dual density trail midsole'],
    technologies: [{ name: 'TrailFlex Chassis', description: 'Rigid composite internal shank protecting arches from jagged stones.' }],
    sustainability: { recycledContent: '35% Total Recycled Content', details: 'Environmentally certified suede & recycled ripstop.' },
    rating: 4.9,
    reviewCount: 110,
    colorways: [
      { id: 'ssv-stone-terracotta', name: 'Alpine Stone / Terracotta Ochre', primaryColorHex: '#CBD5E1', accentColorHex: '#C2410C', image: '' }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 40', inStock: true }
    ]
  },

  // ==========================================
  // KIDS' COLLECTION (10 PRODUCTS)
  // ==========================================
  {
    id: 'kids-soule-ministrider-speed',
    slug: 'soule-ministrider-speed',
    name: 'MiniStrider Speed',
    subCategory: 'Active Play & Running',
    gender: 'kids',
    activity: 'Road Running',
    cushioning: 'Max',
    priceCHF: 119.90,
    isNew: true,
    isBestSeller: true,
    badge: 'Kids Best-Seller',
    weight: '160 g / 5.6 oz',
    heelDrop: '4 mm',
    stability: 'Natural Development',
    lacing: 'Bungee Speed Laces + Strap',
    description: 'Engineered for growing feet. Soft SouleFoam™ pods protect young joints on concrete playgrounds, while flexible speed-lacing makes getting out the door effortless.',
    features: [
      'Bungee cord quick-cinch system with secure hook-and-loop closure',
      'Wide anatomical toe box allowing natural growing toe splay',
      'Reinforced abrasion-resistant rubber toe bumper prevents scuffs'
    ],
    technologies: [
      { name: 'GrowFlex Pods', description: 'Specifically graduated cushioning pods that bend naturally with growing bones.' },
      { name: 'TuffShield Toe', description: 'Reinforced protective front bumper tested against playground friction.' }
    ],
    sustainability: { recycledContent: '40% Total Recycled Content', details: 'Washable durable materials.' },
    rating: 4.9,
    reviewCount: 220,
    colorways: [
      { id: 'ms-cobalt-white', name: 'Electric Cobalt / Bone White', primaryColorHex: '#E2E8F0', accentColorHex: '#2563EB', image: productStriderImg },
      { id: 'ms-lava-black', name: 'Lava Orange / Phantom', primaryColorHex: '#1E293B', accentColorHex: '#F97316', image: '' },
      { id: 'ms-mint-spark', name: 'Mint Spark / Frost', primaryColorHex: '#CCFBF1', accentColorHex: '#0D9488', image: '' }
    ],
    sizes: [
      { size: 'US 1 (Kids)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Kids)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Kids)', us: 'US 3', eu: 'EU 35', inStock: true },
      { size: 'US 4 (Kids)', us: 'US 4', eu: 'EU 36', inStock: true },
      { size: 'US 5 (Kids)', us: 'US 5', eu: 'EU 37', inStock: true }
    ]
  },
  {
    id: 'kids-cloudcub-sprint',
    slug: 'cloudcub-sprint',
    name: 'CloudCub Sprint',
    subCategory: 'School & Daily Sport',
    gender: 'kids',
    activity: 'All Day',
    cushioning: 'Responsive',
    priceCHF: 109.90,
    isNew: false,
    isBestSeller: true,
    badge: 'Everyday School',
    weight: '155 g / 5.4 oz',
    heelDrop: '4 mm',
    stability: 'Neutral Stable',
    lacing: 'Easy Stretch Slip-On',
    description: 'The do-it-all schoolyard shoe. Incredibly lightweight, easy to clean, and equipped with zero-gravity pods that make recess sprint games feel weightless.',
    features: ['Step-in stretch tongue: kids can slip them on without parental help', 'Dual-zone non-marking traction pads', 'Extra padded collar'],
    technologies: [{ name: 'CubFoam', description: 'Lightweight shock-absorbing compound calibrated for kid body weights.' }],
    sustainability: { recycledContent: '35% Total Recycled Content', details: '100% vegan materials.' },
    rating: 4.8,
    reviewCount: 175,
    colorways: [
      { id: 'cc-slate-lemon', name: 'Slate Grey / Lemon Glow', primaryColorHex: '#E2E8F0', accentColorHex: '#EAB308', image: '' }
    ],
    sizes: [
      { size: 'US 1 (Kids)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Kids)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Kids)', us: 'US 3', eu: 'EU 35', inStock: true }
    ]
  },
  {
    id: 'kids-juniorterra-grip',
    slug: 'juniorterra-grip',
    name: 'JuniorTerra Grip',
    subCategory: 'Outdoor & Trail Exploration',
    gender: 'kids',
    activity: 'Trail Running',
    cushioning: 'Max',
    priceCHF: 129.90,
    isNew: true,
    isBestSeller: false,
    badge: 'Trail Ready',
    weight: '185 g / 6.5 oz',
    heelDrop: '5 mm',
    stability: 'High Traction',
    lacing: 'Speed Toggle Laces',
    description: 'Built for family hikes and muddy forest adventures. Features water-resistant mesh, high-friction multi-terrain lugs, and a protective mudguard ring.',
    features: ['Water-repellent finish', 'Rugged rubber compound', 'Toggle lock laces'],
    technologies: [{ name: 'JuniorGrip Compound', description: 'Rubber designed for maximum stickiness on slick logs and stones.' }],
    sustainability: { recycledContent: '38% Total Recycled Content', details: 'Water-based adhesives throughout assembly.' },
    rating: 4.9,
    reviewCount: 88,
    colorways: [
      { id: 'jt-moss-orange', name: 'Alpine Moss / Safety Orange', primaryColorHex: '#374151', accentColorHex: '#EA580C', image: '' }
    ],
    sizes: [
      { size: 'US 1.5 (Kids)', us: 'US 1.5', eu: 'EU 33', inStock: true },
      { size: 'US 2.5 (Kids)', us: 'US 2.5', eu: 'EU 34', inStock: true },
      { size: 'US 3.5 (Kids)', us: 'US 3.5', eu: 'EU 35.5', inStock: true }
    ]
  },
  {
    id: 'kids-aeropulse-spark',
    slug: 'aeropulse-spark',
    name: 'AeroPulse Spark',
    subCategory: 'Track & Junior Athletics',
    gender: 'kids',
    activity: 'Speed & Racing',
    cushioning: 'Responsive',
    priceCHF: 119.90,
    isNew: false,
    isBestSeller: false,
    badge: 'Junior Speed',
    weight: '148 g / 5.2 oz',
    heelDrop: '4 mm',
    stability: 'Agile Neutral',
    lacing: 'Dynamic Elastic Lock',
    description: 'Designed for young track athletes and playground speed demons. Delivers responsive propulsive rebound in a virtually weightless package.',
    features: ['Single-layer engineered mesh', 'Flexible internal speedboard', 'Reinforced heel counter'],
    technologies: [{ name: 'SparkBoard Flex', description: 'Flexible kinetic plate tailored for junior push-offs.' }],
    sustainability: { recycledContent: '45% Total Recycled Content', details: 'Spun using 100% recycled PET plastic bottles.' },
    rating: 4.8,
    reviewCount: 110,
    colorways: [
      { id: 'ap-flame-white', name: 'Snow / Blaze Red', primaryColorHex: '#FFFFFF', accentColorHex: '#DC2626', image: '' }
    ],
    sizes: [
      { size: 'US 1 (Kids)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Kids)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Kids)', us: 'US 3', eu: 'EU 35', inStock: true }
    ]
  },
  {
    id: 'kids-cloudrover-flex',
    slug: 'cloudrover-flex',
    name: 'CloudRover Flex',
    subCategory: 'All-Round & Everyday',
    gender: 'kids',
    activity: 'All Day',
    cushioning: 'Max',
    priceCHF: 99.90,
    isNew: false,
    isBestSeller: true,
    badge: 'Best Value',
    weight: '150 g / 5.3 oz',
    heelDrop: '4 mm',
    stability: 'Neutral Comfort',
    lacing: 'Easy Slip-On Collar',
    description: 'The everyday essential for young explorers. Ultra-soft step-in cushion, wash-friendly fabric, and flexible hollow pods made for nonstop running and jumping.',
    features: ['Hands-free elastic entry collar', 'Cushioned shock-absorbing pods', 'Odor-resistant breathable lining'],
    technologies: [{ name: 'RoverPods', description: 'Low-density zero-gravity foam pod matrix providing ultra-soft landings.' }],
    sustainability: { recycledContent: '42% Total Recycled Content', details: 'Non-toxic solvent-free cements.' },
    rating: 4.9,
    reviewCount: 195,
    colorways: [
      { id: 'cr-heather-grey', name: 'Heather Grey / Cloud White', primaryColorHex: '#CBD5E1', accentColorHex: '#0F172A', image: '' }
    ],
    sizes: [
      { size: 'US 1 (Kids)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Kids)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Kids)', us: 'US 3', eu: 'EU 35', inStock: true }
    ]
  },
  {
    id: 'kids-jumpstart-bounce',
    slug: 'jumpstart-bounce',
    name: 'JumpStart Bounce',
    subCategory: 'Gym & Court Sports',
    gender: 'kids',
    activity: 'Road Running',
    cushioning: 'Plush',
    priceCHF: 119.90,
    isNew: true,
    isBestSeller: true,
    badge: 'Maximum Bounce',
    weight: '162 g / 5.7 oz',
    heelDrop: '4 mm',
    stability: 'Lateral Court Support',
    lacing: 'Dual Strap Quick Velcro',
    description: 'High-cushion bounce shoes for active gym classes, basketball drills, and backyard trampoline jumping. Protects developing heels.',
    features: ['Ultra-thick heel crash pad for high leaps', 'Non-scuff gum rubber outsole for school gyms', 'Dual Velcro straps for 3-second fastening'],
    technologies: [{ name: 'BounceMax Pods', description: 'Oversized tubular cushioning cells absorbing vertical jump impacts.' }],
    sustainability: { recycledContent: '38% Total Recycled Content', details: 'Phthalate-free synthetic overlays.' },
    rating: 4.9,
    reviewCount: 135,
    colorways: [
      { id: 'jb-electric-lime', name: 'Neon Lime / Jet Black', primaryColorHex: '#1E293B', accentColorHex: '#84CC16', image: '' },
      { id: 'jb-magenta-sky', name: 'Vibrant Magenta / Sky Blue', primaryColorHex: '#FDF2F8', accentColorHex: '#EC4899', image: '' }
    ],
    sizes: [
      { size: 'US 1 (Kids)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Kids)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Kids)', us: 'US 3', eu: 'EU 35', inStock: true },
      { size: 'US 4 (Kids)', us: 'US 4', eu: 'EU 36', inStock: true }
    ]
  },
  {
    id: 'kids-velocity-dash',
    slug: 'velocity-dash',
    name: 'Velocity Dash',
    subCategory: 'Track & Field Junior',
    gender: 'kids',
    activity: 'Speed & Racing',
    cushioning: 'Ultralight',
    priceCHF: 124.90,
    isNew: true,
    isBestSeller: false,
    badge: 'Speed Sprint',
    weight: '142 g / 5.0 oz',
    heelDrop: '3 mm',
    stability: 'Sprint Flex',
    lacing: 'Elastic Stretch Speed Lace',
    description: 'The lightest junior shoe in the soule range. Designed for school sports days, 60m sprints, and relay competitions.',
    features: ['Ultra-lightweight 142g profile', 'Aerodynamic streamlined upper', 'Curved toe-spring assisting quick acceleration'],
    technologies: [{ name: 'JuniorSpeedBoard', description: 'Miniaturized spring plate giving energetic push off.' }],
    sustainability: { recycledContent: '42% Total Recycled Content', details: 'Zero heavy petroleum dyes.' },
    rating: 4.8,
    reviewCount: 76,
    colorways: [
      { id: 'vd-blaze-cyan', name: 'Solar Flame / Cyan Streak', primaryColorHex: '#FEF08A', accentColorHex: '#06B6D4', image: '' }
    ],
    sizes: [
      { size: 'US 2 (Kids)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Kids)', us: 'US 3', eu: 'EU 35', inStock: true },
      { size: 'US 4 (Kids)', us: 'US 4', eu: 'EU 36', inStock: true }
    ]
  },
  {
    id: 'kids-forestscout-trail',
    slug: 'forestscout-trail',
    name: 'ForestScout Trail',
    subCategory: 'Mud & Forest Hiking',
    gender: 'kids',
    activity: 'Trail Running',
    cushioning: 'Max',
    priceCHF: 129.90,
    isNew: false,
    isBestSeller: true,
    badge: 'Water-Resistant Mud Guard',
    weight: '178 g / 6.2 oz',
    heelDrop: '5 mm',
    stability: 'High Traction Trail Lugs',
    lacing: 'Cinch & Lock Cord',
    description: 'No puddle is too deep! Water-resistant coated upper with high-traction chevron rubber lugs that prevent slips on wet grass and mud.',
    features: ['Gusseted debris tongue stops pebbles and pine needles', 'Splash-proof hydrophobic outer coating', 'Abrasion resistant rubber toe bumper'],
    technologies: [{ name: 'ScoutGrip Outsole', description: 'Specially patterned 4mm lugs for maximum traction on muddy dirt slopes.' }],
    sustainability: { recycledContent: '40% Total Recycled Content', details: 'Recycled rubber scrap mix.' },
    rating: 4.9,
    reviewCount: 160,
    colorways: [
      { id: 'fst-pine-gold', name: 'Forest Pine / Gold Sunrise', primaryColorHex: '#3F4E4F', accentColorHex: '#EAB308', image: '' }
    ],
    sizes: [
      { size: 'US 1 (Kids)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Kids)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Kids)', us: 'US 3', eu: 'EU 35', inStock: true },
      { size: 'US 4 (Kids)', us: 'US 4', eu: 'EU 36', inStock: true }
    ]
  },
  {
    id: 'kids-dailyplay-cushion',
    slug: 'dailyplay-cushion',
    name: 'DailyPlay Cushion',
    subCategory: 'Everyday School & Weekend',
    gender: 'kids',
    activity: 'All Day',
    cushioning: 'Responsive',
    priceCHF: 105.90,
    isNew: false,
    isBestSeller: true,
    badge: 'Easy Everyday',
    weight: '152 g / 5.3 oz',
    heelDrop: '4 mm',
    stability: 'Natural Foot Support',
    lacing: 'Single Hook & Loop Strap',
    description: 'The morning routine lifesaver. One simple strap, machine washable, and built to withstand hundreds of hours of scooter rides and playground games.',
    features: ['One-pull wide Velcro strap', 'Reinforced rubber heel cup', 'Removable antibacterial insole'],
    technologies: [{ name: 'PlayFoam Density', description: 'Compound engineered to resist packing out over months of active play.' }],
    sustainability: { recycledContent: '45% Total Recycled Content', details: 'Upper made with recycled plastic fibers.' },
    rating: 4.8,
    reviewCount: 215,
    colorways: [
      { id: 'dpc-heather-navy', name: 'Heather Navy / Neon Red', primaryColorHex: '#1E3A8A', accentColorHex: '#EF4444', image: '' },
      { id: 'dpc-chalk-pink', name: 'Chalk Bone / Pastel Rose', primaryColorHex: '#FDF2F8', accentColorHex: '#F472B6', image: '' }
    ],
    sizes: [
      { size: 'US 1 (Kids)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Kids)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Kids)', us: 'US 3', eu: 'EU 35', inStock: true }
    ]
  },
  {
    id: 'kids-mountainexplorer-jr',
    slug: 'mountainexplorer-jr',
    name: 'MountainExplorer Jr',
    subCategory: 'Family Alpine Trekking',
    gender: 'kids',
    activity: 'Hiking & Trekking',
    cushioning: 'Plush',
    priceCHF: 135.90,
    isNew: true,
    isBestSeller: false,
    badge: 'Ankle Support',
    weight: '210 g / 7.4 oz',
    heelDrop: '6 mm',
    stability: 'Mid-Cut Ankle Support',
    lacing: 'Quick Cinch Speed Toggle',
    description: 'Junior hiking mid-boot designed to keep kids comfortable, confident, and blister-free on family alpine summit hikes.',
    features: ['Mid-cut padded collar protecting delicate ankles', 'Waterproof breathable interior membrane', 'High-grip rock lug outsole'],
    technologies: [{ name: 'JuniorTrek Shank', description: 'Flexible composite plate shielding feet from sharp gravel and roots.' }],
    sustainability: { recycledContent: '36% Total Recycled Content', details: 'Environmentally safe certified materials.' },
    rating: 4.9,
    reviewCount: 92,
    colorways: [
      { id: 'mej-slate-amber', name: 'Granite Slate / Alpine Amber', primaryColorHex: '#334155', accentColorHex: '#F59E0B', image: '' }
    ],
    sizes: [
      { size: 'US 1 (Kids)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Kids)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Kids)', us: 'US 3', eu: 'EU 35', inStock: true },
      { size: 'US 4 (Kids)', us: 'US 4', eu: 'EU 36', inStock: true }
    ]
  }
];
