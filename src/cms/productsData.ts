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
  // MEN'S COLLECTION (5 PRODUCTS)
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
      { name: 'SpeedBoard™ Plate', description: 'Converts kinetic downward energy from foot-strike into forward momentum.' },
      { name: 'Bio-Aero Upper', description: 'Crafted from 100% recycled polyester yarn engineered for maximum airflow.' }
    ],
    sustainability: {
      recycledContent: '44% Total Recycled Content',
      details: '100% recycled upper textile. Zero toxic dyes in manufacturing.'
    },
    rating: 4.9,
    reviewCount: 312,
    colorways: [
      {
        id: 'cr-white-slate',
        name: 'Chalk White / Slate Grey',
        primaryColorHex: '#E2E8F0',
        accentColorHex: '#1E293B',
        image: productCloudrushImg
      },
      {
        id: 'cr-all-black',
        name: 'Monolith Phantom Black',
        primaryColorHex: '#1E293B',
        accentColorHex: '#0F172A',
        image: ''
      },
      {
        id: 'cr-alpine-ice',
        name: 'Alpine Ice / Glacier Cyan',
        primaryColorHex: '#E0F2FE',
        accentColorHex: '#0284C7',
        image: ''
      }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true, stockCount: 3 },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 10.5', us: 'US 10.5', eu: 'EU 44.5', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true },
      { size: 'US 11.5', us: 'US 11.5', eu: 'EU 45.5', inStock: false },
      { size: 'US 12', us: 'US 12', eu: 'EU 46', inStock: true, stockCount: 2 }
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
    description: 'Lightweight race-day weapon engineered for sub-3 hour marathoners. High-response PEBA foam paired with a spooned composite SpeedBoard for unrelenting propulsion.',
    features: [
      'Sub-200g ultralight construction for high-cadence strides',
      'Ultra-thin translucent monomesh upper with targeted lock-in zones',
      'High-traction micro-lug rubber compound for wet tarmac grip',
      'Curved rocker geometry accelerating transition through toe-off'
    ],
    technologies: [
      { name: 'HyperPebax Core', description: 'Extremely resilient energy rebound matrix offering 88% kinetic energy return.' },
      { name: 'Spooned Carbon Board', description: 'Specially curved flex profile to launch runners forward.' }
    ],
    sustainability: {
      recycledContent: '35% Total Recycled Content',
      details: 'Minimally trimmed materials reducing cutting waste by 60%.'
    },
    rating: 4.8,
    reviewCount: 184,
    colorways: [
      {
        id: 'asp-flame-white',
        name: 'Flash White / Solar Coral',
        primaryColorHex: '#F8FAFC',
        accentColorHex: '#EA580C',
        image: ''
      },
      {
        id: 'asp-stealth',
        name: 'Carbon Matt / Neon Lime',
        primaryColorHex: '#334155',
        accentColorHex: '#84CC16',
        image: ''
      }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 10.5', us: 'US 10.5', eu: 'EU 44.5', inStock: true },
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
    description: 'Engineered for unpredictable Swiss mountain passes. 100% wind- and waterproof breathable membrane with multi-directional MissionGrip™ lugs for maximum bite.',
    features: [
      'Hydro-shield waterproof membrane keeps feet bone dry',
      'Aggressive chevron lugs engineered for loose gravel and mud',
      'TPU rock-plate shields feet from sharp stone impacts',
      'Gusseted tongue stops dirt, pine needles and debris from entering'
    ],
    technologies: [
      { name: 'HydroDry Membrane', description: 'Micro-porous shield blocking rain molecules while releasing perspiration vapors.' },
      { name: 'TerraGrip Rubber', description: 'Formulated specifically for slick wet alpine rock.' }
    ],
    sustainability: {
      recycledContent: '38% Total Recycled Content',
      details: 'PFC-free water repellent finish protecting waterways.'
    },
    rating: 4.9,
    reviewCount: 420,
    colorways: [
      {
        id: 'tp-forest-slate',
        name: 'Pine Moss / Granite Slate',
        primaryColorHex: '#3F4E4F',
        accentColorHex: '#A27B5C',
        image: ''
      },
      {
        id: 'tp-mineral-black',
        name: 'Mineral Black / Rust Ochre',
        primaryColorHex: '#1E293B',
        accentColorHex: '#D97706',
        image: ''
      }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true },
      { size: 'US 12', us: 'US 12', eu: 'EU 46', inStock: true }
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
    description: 'The all-day sneaker that looks refined in the office and delivers cloud cushioning on 20,000-step travel days. Instant step-in comfort with speed laces.',
    features: [
      'Refined monochrome silhouette designed for versatile styling',
      'Zero-Gravity foam pods soften concrete impact all day long',
      'Antimicrobial mesh lining allows sockless wear',
      'Slip-in heel pocket for effortless hands-free on and off'
    ],
    technologies: [
      { name: 'Zero-G Foam', description: 'Ultralight daily compound that maintains shape through millions of steps.' }
    ],
    sustainability: {
      recycledContent: '50% Total Recycled Content',
      details: 'Upper composed of 100% rPET from post-consumer ocean plastic.'
    },
    rating: 4.8,
    reviewCount: 512,
    colorways: [
      {
        id: 'hz-sand-bone',
        name: 'Bone White / Sand Taupe',
        primaryColorHex: '#E5E5E5',
        accentColorHex: '#78716C',
        image: ''
      },
      {
        id: 'hz-slate-monochrome',
        name: 'Deep Eclipse / Slate',
        primaryColorHex: '#334155',
        accentColorHex: '#0F172A',
        image: ''
      }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 10.5', us: 'US 10.5', eu: 'EU 44.5', inStock: true },
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
    features: [
      'High-cut molded collar provides torsional ankle protection',
      'Dual-compound outsole with sticky climbing zone at the toe',
      'Abrasion-resistant ripstop Kevlar weave along mudguard',
      'Thermal reflective footbed for cold morning trail ascents'
    ],
    technologies: [
      { name: 'AnkleFlex Cage', description: 'Ergonomic anatomical cuff holding the heel firmly locked in.' },
      { name: 'MountainBoard Tech', description: 'Rigid composite shank protecting foot arches from jagged boulders.' }
    ],
    sustainability: {
      recycledContent: '30% Total Recycled Content',
      details: 'Engineered with non-petroleum bio-plastics in outer shell.'
    },
    rating: 4.7,
    reviewCount: 96,
    colorways: [
      {
        id: 'ap-glacier-stone',
        name: 'Glacier Stone / Burnt Amber',
        primaryColorHex: '#CBD5E1',
        accentColorHex: '#B45309',
        image: ''
      },
      {
        id: 'ap-onyx-graphite',
        name: 'Onyx / Steel Graphite',
        primaryColorHex: '#1E293B',
        accentColorHex: '#475569',
        image: ''
      }
    ],
    sizes: [
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true },
      { size: 'US 12', us: 'US 12', eu: 'EU 46', inStock: true }
    ]
  },

  // ==========================================
  // WOMEN'S COLLECTION (5 PRODUCTS)
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
      'Cloud pod arrays calibrated for smooth, frictionless heel transitions',
      'Reflective micro-accents for early dawn and twilight visibility'
    ],
    technologies: [
      { name: 'SouleFoam™ CloudMatrix', description: 'Softer compression density tuned for lighter impacts and high bounce.' },
      { name: 'Women SpeedBoard™', description: 'Custom flex geometry providing snappy propulsion tailored for women.' }
    ],
    sustainability: {
      recycledContent: '48% Total Recycled Content',
      details: 'Spun from 100% recycled high-tensile filament yarn.'
    },
    rating: 4.9,
    reviewCount: 388,
    colorways: [
      {
        id: 'af-lavender-chalk',
        name: 'Lavender Mist / Chalk White',
        primaryColorHex: '#E9D5FF',
        accentColorHex: '#7E22CE',
        image: productAeroflyImg
      },
      {
        id: 'af-rose-cloud',
        name: 'Blush Pearl / Quartz',
        primaryColorHex: '#FFE4E6',
        accentColorHex: '#E11D48',
        image: ''
      },
      {
        id: 'af-pure-platinum',
        name: 'Pure Platinum / Snow White',
        primaryColorHex: '#F1F5F9',
        accentColorHex: '#334155',
        image: ''
      }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 6.5', us: 'US 6.5', eu: 'EU 37', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38', inStock: true, stockCount: 4 },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 39', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 40', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 40.5', inStock: false },
      { size: 'US 10', us: 'US 10', eu: 'EU 41', inStock: true }
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
    description: 'Supreme all-day luxury. Engineered with high-stack zero-gravity pods and a sock-like inner sleeve that cradles your foot from morning coffee through evening walks.',
    features: [
      'Sock-like rib-knit collar wraps gently around the ankle',
      'Max-cushion geometry absorbs impact on hard tile and asphalt',
      'Molded heel counter locks the foot firmly without pressure points',
      'Ultra-lightweight design keeps legs feeling energetic all day'
    ],
    technologies: [
      { name: 'NovaFoam Core', description: 'Dual-density foam structure offering cloud-soft step-in and long-term durability.' }
    ],
    sustainability: {
      recycledContent: '42% Total Recycled Content',
      details: 'Upper made with low-water solution dye processing.'
    },
    rating: 4.8,
    reviewCount: 260,
    colorways: [
      {
        id: 'cp-ivory-sand',
        name: 'Ivory Cream / Pale Dune',
        primaryColorHex: '#FEF3C7',
        accentColorHex: '#B45309',
        image: ''
      },
      {
        id: 'cp-mineral-grey',
        name: 'Mineral Dove / Frost White',
        primaryColorHex: '#E2E8F0',
        accentColorHex: '#475569',
        image: ''
      }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 6.5', us: 'US 6.5', eu: 'EU 37', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 39', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 40', inStock: true }
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
    description: 'Fly over rocky switchbacks and single-tracks. Features high-traction multi-angle lugs, reinforced toe bumper, and a mud-shedding sole profile.',
    features: [
      'Engineered multi-angle rubber lugs for steep downhill control',
      'Lightweight ballistic mesh with TPU hot-melt reinforcements',
      'Lace garage on tongue prevents snags on trail roots and shrubs',
      'Flexible rock plate protects against sharp stone punctures'
    ],
    technologies: [
      { name: 'AlpineTract Rubber', description: 'Specialized rubber compound providing 40% superior wet rock friction.' }
    ],
    sustainability: {
      recycledContent: '36% Total Recycled Content',
      details: 'Durable materials crafted to endure 800+ kilometers of rugged terrain.'
    },
    rating: 4.8,
    reviewCount: 145,
    colorways: [
      {
        id: 'tg-sage-olive',
        name: 'Sage Mist / Alpine Cedar',
        primaryColorHex: '#D1FAE5',
        accentColorHex: '#047857',
        image: ''
      },
      {
        id: 'tg-slate-coral',
        name: 'Granite Slate / Sunset Coral',
        primaryColorHex: '#334155',
        accentColorHex: '#F97316',
        image: ''
      }
    ],
    sizes: [
      { size: 'US 6.5', us: 'US 6.5', eu: 'EU 37', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 39', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 40', inStock: true }
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
    description: 'The fastest women competition shoe ever created by soule. Ultra-responsive energy return with integrated carbon speedboard for personal record attempts.',
    features: [
      'Featherweight 178g footprint for explosive track and tempo work',
      'Ultra-thin woven aerodynamic upper with zero water absorption',
      'Snappy carbon plate tuned for feminine biomechanical energy return',
      'Curved rocker profile promotes effortless forward roll'
    ],
    technologies: [
      { name: 'CarbonSpeed™ Blade', description: 'High-tensile carbon layer engineered to sling you forward on every toe-off.' }
    ],
    sustainability: {
      recycledContent: '30% Total Recycled Content',
      details: '100% recyclable mono-material upper construction.'
    },
    rating: 4.9,
    reviewCount: 92,
    colorways: [
      {
        id: 'ts-flash-white',
        name: 'Aero White / Solar Citrus',
        primaryColorHex: '#F8FAFC',
        accentColorHex: '#EAB308',
        image: ''
      },
      {
        id: 'ts-cyan-volt',
        name: 'Electric Cyan / Midnight',
        primaryColorHex: '#CFFAFE',
        accentColorHex: '#0891B2',
        image: ''
      }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 6.5', us: 'US 6.5', eu: 'EU 37', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 39', inStock: true }
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
    features: [
      'Deep ergonomic flex grooves supporting natural foot mobilization',
      'Zero-pressure instep design for fatigue recovery after long runs',
      'Ultra-soft antimicrobial footbed with therapeutic arch contour',
      'Machine-washable delicate cycle construction'
    ],
    technologies: [
      { name: 'FlowFlex Sole', description: 'Deeply articulated sole pods that move harmoniously with each metatarsal.' }
    ],
    sustainability: {
      recycledContent: '55% Total Recycled Content',
      details: 'Highest recycled content in the soule line-up.'
    },
    rating: 4.8,
    reviewCount: 310,
    colorways: [
      {
        id: 'zw-oatmeal-clay',
        name: 'Warm Oatmeal / Terracotta',
        primaryColorHex: '#F5EBE0',
        accentColorHex: '#C57B57',
        image: ''
      },
      {
        id: 'zw-pale-lilac',
        name: 'Lilac Cloud / Mist',
        primaryColorHex: '#EDE9FE',
        accentColorHex: '#6D28D9',
        image: ''
      }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 6.5', us: 'US 6.5', eu: 'EU 37', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 39', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 40', inStock: true }
    ]
  },

  // ==========================================
  // KIDS' COLLECTION (5 PRODUCTS)
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
      'Reinforced abrasion-resistant rubber toe bumper prevents scuffs',
      'Non-marking outsole ideal for indoor school gym floors'
    ],
    technologies: [
      { name: 'GrowFlex Pods', description: 'Specifically graduated cushioning pods that bend naturally with growing bones.' },
      { name: 'TuffShield Toe', description: 'Reinforced protective front bumper tested against playground friction.' }
    ],
    sustainability: {
      recycledContent: '40% Total Recycled Content',
      details: 'Washable durable materials built to be handed down.'
    },
    rating: 4.9,
    reviewCount: 220,
    colorways: [
      {
        id: 'ms-cobalt-white',
        name: 'Electric Cobalt / Bone White',
        primaryColorHex: '#E2E8F0',
        accentColorHex: '#2563EB',
        image: productStriderImg
      },
      {
        id: 'ms-lava-black',
        name: 'Lava Orange / Phantom',
        primaryColorHex: '#1E293B',
        accentColorHex: '#F97316',
        image: ''
      },
      {
        id: 'ms-mint-spark',
        name: 'Mint Spark / Frost',
        primaryColorHex: '#CCFBF1',
        accentColorHex: '#0D9488',
        image: ''
      }
    ],
    sizes: [
      { size: 'US 1 (Kids)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Kids)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Kids)', us: 'US 3', eu: 'EU 35', inStock: true },
      { size: 'US 4 (Kids)', us: 'US 4', eu: 'EU 36', inStock: true, stockCount: 2 },
      { size: 'US 5 (Kids)', us: 'US 5', eu: 'EU 37', inStock: true },
      { size: 'US 6 (Kids)', us: 'US 6', eu: 'EU 38.5', inStock: true }
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
    features: [
      'Step-in stretch tongue: kids can slip them on without parental help',
      'Breathable engineered upper keeps little feet fresh and cool',
      'Dual-zone traction pads for wet asphalt and polished gym floors',
      'Extra padded collar prevents heel chafing during all-day wear'
    ],
    technologies: [
      { name: 'CubFoam', description: 'Lightweight shock-absorbing compound calibrated for kid body weights.' }
    ],
    sustainability: {
      recycledContent: '35% Total Recycled Content',
      details: '100% vegan materials, free of harmful PFC chemicals.'
    },
    rating: 4.8,
    reviewCount: 175,
    colorways: [
      {
        id: 'cc-slate-lemon',
        name: 'Slate Grey / Lemon Glow',
        primaryColorHex: '#E2E8F0',
        accentColorHex: '#EAB308',
        image: ''
      },
      {
        id: 'cc-navy-coral',
        name: 'Deep Navy / Sunset Coral',
        primaryColorHex: '#1E3A8A',
        accentColorHex: '#FB7185',
        image: ''
      }
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
    features: [
      'Water-repellent finish shields against puddles and morning dew',
      'Rugged rubber compound bites into gravel, grass and dirt paths',
      'Reflective 360-degree accents for high visibility outdoors',
      'Toggle lock laces ensure they never come untied on the trail'
    ],
    technologies: [
      { name: 'JuniorGrip Compound', description: 'Rubber designed for maximum stickiness on slick logs and stones.' }
    ],
    sustainability: {
      recycledContent: '38% Total Recycled Content',
      details: 'Water-based adhesives throughout assembly.'
    },
    rating: 4.9,
    reviewCount: 88,
    colorways: [
      {
        id: 'jt-moss-orange',
        name: 'Alpine Moss / Safety Orange',
        primaryColorHex: '#374151',
        accentColorHex: '#EA580C',
        image: ''
      },
      {
        id: 'jt-granite-blue',
        name: 'Granite / Glacier Blue',
        primaryColorHex: '#475569',
        accentColorHex: '#38BDF8',
        image: ''
      }
    ],
    sizes: [
      { size: 'US 1.5 (Kids)', us: 'US 1.5', eu: 'EU 33', inStock: true },
      { size: 'US 2 (Kids)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Kids)', us: 'US 3', eu: 'EU 35', inStock: true },
      { size: 'US 4 (Kids)', us: 'US 4', eu: 'EU 36', inStock: true },
      { size: 'US 5 (Kids)', us: 'US 5', eu: 'EU 37', inStock: true }
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
    features: [
      'Ultra-breathable single-layer engineered mesh upper',
      'Flexible internal speedboard encourages proper midfoot strike',
      'Sleek aerodynamic profile inspired by soule adult racing shoes',
      'Reinforced heel counter holds foot centered during sharp cuts'
    ],
    technologies: [
      { name: 'SparkBoard Flex', description: 'Flexible kinetic plate tailored for junior kinetic push-offs.' }
    ],
    sustainability: {
      recycledContent: '45% Total Recycled Content',
      details: 'Spun using 100% recycled PET plastic bottles.'
    },
    rating: 4.8,
    reviewCount: 110,
    colorways: [
      {
        id: 'ap-flame-white',
        name: 'Snow / Blaze Red',
        primaryColorHex: '#FFFFFF',
        accentColorHex: '#DC2626',
        image: ''
      },
      {
        id: 'ap-electric-purple',
        name: 'Violet Storm / Neon Volt',
        primaryColorHex: '#581C87',
        accentColorHex: '#A3E635',
        image: ''
      }
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
    features: [
      'Hands-free elastic entry collar with durable pull tabs front and back',
      'Cushioned pods absorb shock from high playground jumps',
      'Odor-resistant breathable antimicrobial lining',
      'Flexible forefoot allows unrestricted natural foot movement'
    ],
    technologies: [
      { name: 'RoverPods', description: 'Low-density zero-gravity foam pod matrix providing ultra-soft landings.' }
    ],
    sustainability: {
      recycledContent: '42% Total Recycled Content',
      details: 'Clean manufacturing with non-toxic solvent-free cements.'
    },
    rating: 4.9,
    reviewCount: 195,
    colorways: [
      {
        id: 'cr-heather-grey',
        name: 'Heather Grey / Cloud White',
        primaryColorHex: '#CBD5E1',
        accentColorHex: '#0F172A',
        image: ''
      },
      {
        id: 'cr-berry-pink',
        name: 'Berry Punch / Snow',
        primaryColorHex: '#F472B6',
        accentColorHex: '#831843',
        image: ''
      }
    ],
    sizes: [
      { size: 'US 1 (Kids)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Kids)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Kids)', us: 'US 3', eu: 'EU 35', inStock: true },
      { size: 'US 4 (Kids)', us: 'US 4', eu: 'EU 36', inStock: true },
      { size: 'US 5 (Kids)', us: 'US 5', eu: 'EU 37', inStock: true }
    ]
  }
];
