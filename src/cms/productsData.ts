import { Product } from '../types';
import heroCampaignImg from '../assets/images/hero_soule_campaign_1791458810634.jpg';
import techSoleDetailImg from '../assets/images/tech_soule_sole_detail_1791458872558.jpg';
import productCloudrushImg from '../assets/images/product_soule_cloudrush_1791458827460.jpg';
import productAeroflyImg from '../assets/images/product_soule_aerofly_women_1791458843649.jpg';
import productStriderImg from '../assets/images/product_soule_strider_kids_1791458855619.jpg';

// Studio photorealistic footwear captures (logo-free, heavily inspired by On swiss silhouettes)
import cloudmonsterSideImg from '../assets/images/cloudmonster_side_studio_1791886308548.jpg';
import cloudtiltPerspImg from '../assets/images/cloudtilt_perspective_studio_1791886309892.jpg';
import cloudrunnerSoleImg from '../assets/images/cloudrunner_sole_studio_1791886310116.jpg';
import cloudsurferTopImg from '../assets/images/cloudsurfer_top_studio_1791886310719.jpg';
import cloudeclipseSideImg from '../assets/images/cloudeclipse_side_studio_1791886310993.jpg';

export const HERO_CAMPAIGN_IMG = heroCampaignImg;
export const TECH_SOLE_DETAIL_IMG = techSoleDetailImg;
export const CLOUDMONSTER_SIDE_IMG = cloudmonsterSideImg;
export const CLOUDTILT_PERSP_IMG = cloudtiltPerspImg;
export const CLOUDRUNNER_SOLE_IMG = cloudrunnerSoleImg;
export const CLOUDSURFER_TOP_IMG = cloudsurferTopImg;
export const CLOUDECLIPSE_SIDE_IMG = cloudeclipseSideImg;

export const PRODUCTS_DATA: Product[] = [
  // ==========================================
  // MEN'S ON-INSPIRED COLLECTION (10 SHOES)
  // ==========================================
  {
    id: 'men-cloudmonster-max-2',
    slug: 'cloudmonster-max-2',
    name: 'CloudMonster Max 2',
    subCategory: 'Max Cushion Road',
    gender: 'men',
    activity: 'Road Running',
    cushioning: 'Max',
    priceCHF: 23900,
    isNew: true,
    isBestSeller: true,
    badge: 'Monster Cushion',
    weight: '275 g / 9.7 oz',
    heelDrop: '6 mm',
    stability: 'Neutral Balanced',
    lacing: 'Speed Lacing System',
    description: 'Heavily inspired by the iconic Cloudmonster silhouette. Engineered with massive hollow cloud pods throughout the thick curved rocker midsole, delivering explosive energy rebound and effortless forward propulsion on road miles.',
    features: [
      'Massive open-chamber tubular cloud pods for radical rebound',
      'Radical forward rocker profile for effortless roll-through',
      'Dual-density SouleFoam™ superfoam cushion bed',
      'Logo-free engineered breathable double-layer mesh upper'
    ],
    technologies: [
      { name: 'Monster CloudTec Pods', description: 'Oversized hollow tubular elements collapsing multidirectionally to absorb harsh pavement impact.' },
      { name: 'Full Rocker SpeedBoard', description: 'Curved composite propulsion plate converting vertical landings into explosive forward momentum.' }
    ],
    sustainability: { recycledContent: '45% Total Recycled Content', details: '100% recycled polyester upper textile.' },
    rating: 4.9,
    reviewCount: 382,
    colorways: [
      {
        id: 'cm2-chalk-slate',
        name: 'Chalk White / Slate Grey',
        primaryColorHex: '#E2E8F0',
        accentColorHex: '#334155',
        image: cloudmonsterSideImg,
        angles: {
          side: cloudmonsterSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      },
      {
        id: 'cm2-stealth-black',
        name: 'Monolith Phantom Black',
        primaryColorHex: '#1E293B',
        accentColorHex: '#0F172A',
        image: cloudtiltPerspImg,
        angles: {
          side: cloudtiltPerspImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      },
      {
        id: 'cm2-glacier-cyan',
        name: 'Glacier Blue / Frost White',
        primaryColorHex: '#E0F2FE',
        accentColorHex: '#0284C7',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true, stockCount: 4 },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 10.5', us: 'US 10.5', eu: 'EU 44.5', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true },
      { size: 'US 12', us: 'US 12', eu: 'EU 46', inStock: true }
    ]
  },
  {
    id: 'men-cloudtilt-phase-knit',
    slug: 'cloudtilt-phase-knit',
    name: 'CloudTilt Phase Knit',
    subCategory: 'Lifestyle & Urban Running',
    gender: 'men',
    activity: 'All Day',
    cushioning: 'Responsive',
    priceCHF: 21900,
    isNew: true,
    isBestSeller: true,
    badge: 'Phase Pod Tech',
    weight: '229 g / 8.1 oz',
    heelDrop: '7 mm',
    stability: 'Neutral Agile',
    lacing: 'Rapid Toggle Speed Lace',
    description: 'Inspired by the cutting-edge Cloudtilt design. Features computer-modeled CloudTec Phase hollow pods that collapse sequentially like dominos, paired with an ultra-sleek sock-like engineered knit upper and toggle speed laces.',
    features: [
      'Sequentially collapsing CloudTec Phase hollow pods',
      'Engineered sock-like seamless knit collar for instant step-in',
      'One-pull bungee toggle speed lacing system',
      'Logo-free minimalist modern aesthetic for versatile wear'
    ],
    technologies: [
      { name: 'CloudTec Phase Pods', description: 'Finite-element analysis computer modeling creating a continuous, buttery-smooth rolling transition.' },
      { name: 'UltraKnit Upper', description: 'Dope-dyed seamless knit using 90% less water than conventional footwear manufacturing.' }
    ],
    sustainability: { recycledContent: '50% Total Recycled Content', details: 'Zero-waste flat knitting technique.' },
    rating: 4.9,
    reviewCount: 295,
    colorways: [
      {
        id: 'ct-monolith-black',
        name: 'Monolith Triple Black',
        primaryColorHex: '#18181B',
        accentColorHex: '#27272A',
        image: cloudtiltPerspImg,
        angles: {
          side: cloudtiltPerspImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      },
      {
        id: 'ct-glacier-white',
        name: 'Glacier Pure White',
        primaryColorHex: '#F8FAFC',
        accentColorHex: '#CBD5E1',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      },
      {
        id: 'ct-sand-stone',
        name: 'Alpine Sand / Mineral Tan',
        primaryColorHex: '#E7E5E4',
        accentColorHex: '#78716C',
        image: cloudmonsterSideImg,
        angles: {
          side: cloudmonsterSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
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
    id: 'men-cloudrunner-stability-pro',
    slug: 'cloudrunner-stability-pro',
    name: 'CloudRunner Stability Pro',
    subCategory: 'Support & Road Miles',
    gender: 'men',
    activity: 'Road Running',
    cushioning: 'Plush',
    priceCHF: 20900,
    isNew: false,
    isBestSeller: true,
    badge: 'Support & Comfort',
    weight: '280 g / 9.9 oz',
    heelDrop: '9 mm',
    stability: 'Support Cradle',
    lacing: 'Reinforced Speed Lacing',
    description: 'Directly inspired by the Cloudrunner philosophy. Crafted for pure confidence on everyday training runs with a wide supportive cradle, plush foam collar, and hollow cloud pod perimeter that stabilizes every foot strike.',
    features: [
      'Cradle-shaped supportive base prevents excess inward roll',
      'Ultra-plush collar and padded tongue for blister-free comfort',
      'Dual-density hollow cloud pods for soft landing and firm toe-off',
      'Clean logo-free technical Swiss design'
    ],
    technologies: [
      { name: 'Support Cradle Midsole', description: 'Curved perimeter rim that gently centers the foot through gait transition without restrictive medial posts.' },
      { name: 'SpeedBoard Propulsion', description: 'Torsional plate providing midfoot rigidity and forward momentum.' }
    ],
    sustainability: { recycledContent: '35% Total Recycled Content', details: 'Post-consumer recycled mesh.' },
    rating: 4.8,
    reviewCount: 410,
    colorways: [
      {
        id: 'cr-navy-frost',
        name: 'Alpine Navy / Frost White',
        primaryColorHex: '#1E293B',
        accentColorHex: '#0284C7',
        image: productCloudrushImg,
        angles: {
          side: productCloudrushImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      },
      {
        id: 'cr-chalk-smoke',
        name: 'Chalk Smoke / Storm Grey',
        primaryColorHex: '#E2E8F0',
        accentColorHex: '#64748B',
        image: cloudmonsterSideImg,
        angles: {
          side: cloudmonsterSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
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
    id: 'men-cloudeclipse-double-phase',
    slug: 'cloudeclipse-double-phase',
    name: 'CloudEclipse Double-Phase',
    subCategory: 'Max Stack Marathon',
    gender: 'men',
    activity: 'Road Running',
    cushioning: 'Max',
    priceCHF: 25900,
    isNew: true,
    isBestSeller: true,
    badge: 'Max Stack Road',
    weight: '285 g / 10.0 oz',
    heelDrop: '6 mm',
    stability: 'Neutral Max Cushion',
    lacing: 'Speed Lacing System',
    description: 'Inspired by the Cloudeclipse maximum cushion runner. Incorporates a double layer of diagonal CloudTec Phase pods through thick superfoam for bottomless shock absorption over 42km marathons.',
    features: [
      'Double layer of diagonal hollow phase pods for deepest cushion',
      'Featherlight translucent woven upper for high breathability',
      'Built-in center SpeedBoard for smooth energy distribution',
      'High-traction rubber pads on forefoot and heel zones'
    ],
    technologies: [
      { name: 'Dual-Phase Superfoam', description: 'Two stacked matrices of hollow pods collapsing in sequence to absorb massive downhill and flat impacts.' }
    ],
    sustainability: { recycledContent: '42% Total Recycled Content', details: 'Spun from dope-dyed yarn saving 90% water.' },
    rating: 4.9,
    reviewCount: 168,
    colorways: [
      {
        id: 'ce-glacier-ice',
        name: 'Glacier Blue / Pure White',
        primaryColorHex: '#E0F2FE',
        accentColorHex: '#0284C7',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      },
      {
        id: 'ce-eclipse-black',
        name: 'Eclipse Black / Charcoal',
        primaryColorHex: '#0F172A',
        accentColorHex: '#334155',
        image: cloudtiltPerspImg,
        angles: {
          side: cloudtiltPerspImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 10.5', us: 'US 10.5', eu: 'EU 44.5', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true }
    ]
  },
  {
    id: 'men-cloudsurfer-phase-flow',
    slug: 'cloudsurfer-phase-flow',
    name: 'CloudSurfer Phase Flow',
    subCategory: 'Smooth Cadence Running',
    gender: 'men',
    activity: 'Road Running',
    cushioning: 'Responsive',
    priceCHF: 22500,
    isNew: false,
    isBestSeller: true,
    badge: 'Silky Smooth Ride',
    weight: '245 g / 8.6 oz',
    heelDrop: '10 mm',
    stability: 'Neutral Fluid',
    lacing: 'Adaptive Speed Laces',
    description: 'Inspired by the game-changing Cloudsurfer. Engineered without a stiff plate, relying on seamlessly aligned hollow pods that collapse forward in a domino effect for an effortlessly silky ride.',
    features: [
      'Computer-optimized plateless CloudTec Phase geometry',
      'Buttery-soft heel-to-toe rolling transition',
      'Featherlight engineered mesh upper with targeted vent ports',
      'Clean logo-free Swiss aesthetic'
    ],
    technologies: [
      { name: 'Plateless Phase Pods', description: 'Midsole hollow chambers designed through computer algorithmic simulation for natural rolling stride.' }
    ],
    sustainability: { recycledContent: '38% Total Recycled Content', details: 'Dope-dyed textile upper.' },
    rating: 4.8,
    reviewCount: 240,
    colorways: [
      {
        id: 'cs-sage-chalk',
        name: 'Alpine Sage / Chalk White',
        primaryColorHex: '#D1FAE5',
        accentColorHex: '#059669',
        image: cloudmonsterSideImg,
        angles: {
          side: cloudmonsterSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      },
      {
        id: 'cs-slate-blue',
        name: 'Slate Blue / Ice White',
        primaryColorHex: '#E2E8F0',
        accentColorHex: '#2563EB',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true }
    ]
  },
  {
    id: 'men-cloudboom-carbon-echo',
    slug: 'cloudboom-carbon-echo',
    name: 'CloudBoom Carbon Echo',
    subCategory: 'Carbon Marathon Racer',
    gender: 'men',
    activity: 'Speed & Racing',
    cushioning: 'Responsive',
    priceCHF: 27900,
    isNew: true,
    isBestSeller: false,
    badge: 'Carbon Propulsion',
    weight: '215 g / 7.5 oz',
    heelDrop: '8 mm',
    stability: 'Agile Race Platform',
    lacing: 'Ultra-thin Competition Lace',
    description: 'Inspired by elite marathon competition shoes like the Cloudboom Echo. Features a spoon-shaped 100% carbon-fiber SpeedBoard sandwiched between high-response PEBA foam and aerodynamic low-profile hollow pods.',
    features: [
      '100% full-length carbon-fiber spooned propulsion plate',
      'Dual-layer PEBA superfoam for 87% kinetic energy return',
      'Semi-translucent single-layer racing monomesh upper',
      'Strategically mapped wet-traction rubber pods'
    ],
    technologies: [
      { name: 'Carbon SpeedBoard', description: 'Ultra-stiff spoon geometry plate tuned for maximum propulsive snap at race pace.' },
      { name: 'PEBA Core Foam', description: 'Super-critical nitrogen-infused foam delivering extreme bounce without deadening over 42 kilometers.' }
    ],
    sustainability: { recycledContent: '30% Total Recycled Content', details: 'Ultralight performance materials.' },
    rating: 4.9,
    reviewCount: 112,
    colorways: [
      {
        id: 'cb-white-flame',
        name: 'Flash White / Solar Crimson',
        primaryColorHex: '#FFFFFF',
        accentColorHex: '#EF4444',
        image: productCloudrushImg,
        angles: {
          side: productCloudrushImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      },
      {
        id: 'cb-carbon-stealth',
        name: 'Carbon Matt / Cyber Lime',
        primaryColorHex: '#1E293B',
        accentColorHex: '#84CC16',
        image: cloudtiltPerspImg,
        angles: {
          side: cloudtiltPerspImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true }
    ]
  },
  {
    id: 'men-cloudventure-peak-trail',
    slug: 'cloudventure-peak-trail',
    name: 'CloudVenture Peak Trail',
    subCategory: 'Technical Mountain Trail',
    gender: 'men',
    activity: 'Trail Running',
    cushioning: 'Max',
    priceCHF: 24500,
    isNew: false,
    isBestSeller: true,
    badge: 'MissionGrip Traction',
    weight: '305 g / 10.7 oz',
    heelDrop: '7 mm',
    stability: 'Traction & Stone Guard',
    lacing: 'Cord Lock Quick Lacing',
    description: 'Inspired by the rugged Cloudventure mountain shoe. Features multi-angle rubber grip lugs bonded over hollow cloud pods for unbeatable traction on steep Alpine scree, loose granite, and slick mud.',
    features: [
      'Multi-directional rubber lugs over hollow pods for alpine grip',
      'Flexible forefoot rock-plate shielding against sharp gravel',
      'Ripstop lightweight upper with protective TPU toe bumper',
      'Clean logo-free Swiss engineering'
    ],
    technologies: [
      { name: 'MissionGrip Compound', description: 'Specially formulated sticky rubber compound engineered for Swiss limestone grip in both wet and dry conditions.' }
    ],
    sustainability: { recycledContent: '40% Total Recycled Content', details: 'PFC-free water repellent finish.' },
    rating: 4.8,
    reviewCount: 310,
    colorways: [
      {
        id: 'cv-moss-granite',
        name: 'Forest Moss / Granite Grey',
        primaryColorHex: '#3F4E4F',
        accentColorHex: '#A27B5C',
        image: cloudmonsterSideImg,
        angles: {
          side: cloudmonsterSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      },
      {
        id: 'cv-mineral-black',
        name: 'Mineral Black / Amber Ochre',
        primaryColorHex: '#1E293B',
        accentColorHex: '#F59E0B',
        image: cloudtiltPerspImg,
        angles: {
          side: cloudtiltPerspImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 10.5', us: 'US 10.5', eu: 'EU 44.5', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true }
    ]
  },
  {
    id: 'men-cloudultra-alpine-endurance',
    slug: 'cloudultra-alpine-endurance',
    name: 'CloudUltra Alpine Endurance',
    subCategory: 'Ultra Marathon Trail',
    gender: 'men',
    activity: 'Trail Running',
    cushioning: 'Max',
    priceCHF: 25900,
    isNew: true,
    isBestSeller: false,
    badge: '100K Ultra Trail',
    weight: '295 g / 10.4 oz',
    heelDrop: '8 mm',
    stability: 'Support & Mud Traction',
    lacing: 'Dual-Layer Quick Fit',
    description: 'Inspired by the ultra-distance Cloudultra. Features a double layer of hollow cloud pods for maximum endurance cushioning over 100km alpine trails, along with a forefoot expansion clamp for swelling feet.',
    features: [
      'Double layer of hollow pods for all-day ultra trail protection',
      'FlipRelease™ forefoot toggle for instant fit expansion on trail',
      'Two-layer sock-fit construction preventing trail debris entry',
      'Logo-free minimalist mountain design'
    ],
    technologies: [
      { name: 'Dual CloudTec Outsole', description: 'Double pod stack distributing pressure evenly across jagged mountain rocks.' }
    ],
    sustainability: { recycledContent: '45% Total Recycled Content', details: 'Recycled polyester sandwich mesh.' },
    rating: 4.9,
    reviewCount: 154,
    colorways: [
      {
        id: 'cu-alpine-ice',
        name: 'Alpine Ice / Glacier Cyan',
        primaryColorHex: '#E0F2FE',
        accentColorHex: '#0284C7',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      },
      {
        id: 'cu-shadow-slate',
        name: 'Shadow Slate / Lava Orange',
        primaryColorHex: '#334155',
        accentColorHex: '#EA580C',
        image: cloudmonsterSideImg,
        angles: {
          side: cloudmonsterSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true }
    ]
  },
  {
    id: 'men-cloudaway-nomad-travel',
    slug: 'cloudaway-nomad-travel',
    name: 'CloudAway Nomad Travel',
    subCategory: 'Travel & Explore',
    gender: 'men',
    activity: 'All Day',
    cushioning: 'Responsive',
    priceCHF: 18900,
    isNew: false,
    isBestSeller: true,
    badge: 'Packable Travel',
    weight: '260 g / 9.1 oz',
    heelDrop: '8 mm',
    stability: 'Flexible All-Day',
    lacing: 'Single-Pull Bungee Cord',
    description: 'Inspired by the packable Cloudaway travel shoe. Features an ultra-flexible slip-on moccasin ripstop canvas construction with zero-gravity cloud pods and 3D topographic terrain sole.',
    features: [
      'Packable collapsible heel for effortless luggage packing',
      'Ultra-durable ripstop canvas with recycled suede mudguard',
      'Single-pull bungee toggle for airport security ease',
      'Logo-free minimalist nomad aesthetic'
    ],
    technologies: [
      { name: '3D Terrain Tread', description: 'Engraved topographic outsole pattern with hollow cloud pods providing flexible walking grip on cobblestone and trails.' }
    ],
    sustainability: { recycledContent: '85% Recycled Polyester Upper', details: 'Sustainably sourced canvas.' },
    rating: 4.8,
    reviewCount: 220,
    colorways: [
      {
        id: 'ca-sand-chalk',
        name: 'Desert Sand / Chalk White',
        primaryColorHex: '#E7E5E4',
        accentColorHex: '#44403C',
        image: cloudmonsterSideImg,
        angles: {
          side: cloudmonsterSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      },
      {
        id: 'ca-ink-navy',
        name: 'Midnight Ink / Slate',
        primaryColorHex: '#0F172A',
        accentColorHex: '#475569',
        image: cloudtiltPerspImg,
        angles: {
          side: cloudtiltPerspImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true }
    ]
  },
  {
    id: 'men-cloudnova-urban-flux',
    slug: 'cloudnova-urban-flux',
    name: 'CloudNova Urban Flux',
    subCategory: 'Streetwear & Tech Running',
    gender: 'men',
    activity: 'All Day',
    cushioning: 'Plush',
    priceCHF: 21900,
    isNew: true,
    isBestSeller: true,
    badge: 'Urban Tech Sneaker',
    weight: '270 g / 9.5 oz',
    heelDrop: '7 mm',
    stability: 'Supportive Mid-Sole',
    lacing: 'Asymmetrical Flex Laces',
    description: 'Inspired by the modern Cloudnova sneaker. Fuses elite running shoe cloud pod technology with futuristic streetwear styling, inner step-in bootie, and architectural heel support.',
    features: [
      'Full inner step-in sock bootie for customized foot hold',
      'Connected hollow cloud pods tuned for concrete street impact',
      'Wide bespoke SpeedBoard for high-stability city walking',
      'Clean unbranded technical geometry'
    ],
    technologies: [
      { name: 'Connected Pod Midsole', description: 'Distributes impact across the entire foot bed while maintaining iconic hollow visual aesthetic.' }
    ],
    sustainability: { recycledContent: '40% Total Recycled Content', details: 'Zero virgin plastics used in upper.' },
    rating: 4.9,
    reviewCount: 345,
    colorways: [
      {
        id: 'cn-phantom-white',
        name: 'Phantom Black / Clean White',
        primaryColorHex: '#18181B',
        accentColorHex: '#F4F4F5',
        image: cloudtiltPerspImg,
        angles: {
          side: cloudtiltPerspImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      },
      {
        id: 'cn-glacier-slate',
        name: 'Glacier Blue / Mineral Grey',
        primaryColorHex: '#E0F2FE',
        accentColorHex: '#475569',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 8', us: 'US 8', eu: 'EU 41.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 42', inStock: true },
      { size: 'US 9', us: 'US 9', eu: 'EU 42.5', inStock: true },
      { size: 'US 9.5', us: 'US 9.5', eu: 'EU 43', inStock: true },
      { size: 'US 10', us: 'US 10', eu: 'EU 44', inStock: true },
      { size: 'US 11', us: 'US 11', eu: 'EU 45', inStock: true }
    ]
  },

  // ==========================================
  // WOMEN'S ON-INSPIRED COLLECTION (10 SHOES)
  // ==========================================
  {
    id: 'women-cloudmonster-nova-breeze',
    slug: 'cloudmonster-nova-breeze',
    name: 'CloudMonster Nova Breeze',
    subCategory: 'Max Cushion Road',
    gender: 'women',
    activity: 'Road Running',
    cushioning: 'Max',
    priceCHF: 23900,
    isNew: true,
    isBestSeller: true,
    badge: 'Monster Cushion',
    weight: '230 g / 8.1 oz',
    heelDrop: '6 mm',
    stability: 'Neutral Max Rebound',
    lacing: 'Speed Lacing System',
    description: "Inspired by the women's Cloudmonster. Featuring massive hollow cloud pods, aggressive forward rocker geometry, and a soft breathable mesh upper tailored for maximum long-run comfort and energy rebound.",
    features: [
      'Massive open-chamber tubular cloud pods for high energy return',
      'Radical forward rocker profile easing every stride',
      'Plush step-in sockliner tuned for female foot biomechanics',
      'Logo-free clean Swiss performance aesthetics'
    ],
    technologies: [
      { name: 'Monster CloudTec Pods', description: 'Massive open chambers delivering ultra-soft landings and explosive push-offs.' },
      { name: 'Curved SpeedBoard', description: 'Dynamic plate converting shock impact into forward drive.' }
    ],
    sustainability: { recycledContent: '45% Total Recycled Content', details: '100% recycled mesh.' },
    rating: 4.9,
    reviewCount: 360,
    colorways: [
      {
        id: 'wcm-chalk-rose',
        name: 'Chalk White / Alpine Rose',
        primaryColorHex: '#FDF2F8',
        accentColorHex: '#DB2777',
        image: productAeroflyImg,
        angles: {
          side: productAeroflyImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      },
      {
        id: 'wcm-glacier-mint',
        name: 'Glacier Mint / Frost Cyan',
        primaryColorHex: '#ECFDF5',
        accentColorHex: '#059669',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
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
    id: 'women-cloudtilt-softknit-ease',
    slug: 'cloudtilt-softknit-ease',
    name: 'CloudTilt SoftKnit Ease',
    subCategory: 'Lifestyle & Urban Running',
    gender: 'women',
    activity: 'All Day',
    cushioning: 'Responsive',
    priceCHF: 21900,
    isNew: true,
    isBestSeller: true,
    badge: 'Phase Pod Knit',
    weight: '198 g / 7.0 oz',
    heelDrop: '7 mm',
    stability: 'Neutral Agile',
    lacing: 'Rapid Toggle Speed Lace',
    description: 'Inspired by the Cloudtilt. Features sequentially collapsing CloudTec Phase hollow pods, a featherweight sock-like knit upper, and one-pull toggle speed lacing for all-day comfort without bulk.',
    features: [
      'Sequentially collapsing CloudTec Phase pods for ultra-smooth rolling',
      'Engineered sock-like knit upper hugging the foot without pressure',
      'Rapid bungee toggle speed laces for instant on-and-off',
      'Completely logo-free pure design'
    ],
    technologies: [
      { name: 'CloudTec Phase Pods', description: 'Finite-element analysis hollow pod sequencing for seamless rolling gait.' }
    ],
    sustainability: { recycledContent: '50% Total Recycled Content', details: 'Zero-waste seamless knit.' },
    rating: 4.9,
    reviewCount: 280,
    colorways: [
      {
        id: 'wct-pearl-lavender',
        name: 'Pearl Mist / Soft Lavender',
        primaryColorHex: '#F3E8FF',
        accentColorHex: '#9333EA',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      },
      {
        id: 'wct-monolith-black',
        name: 'Monolith Phantom Black',
        primaryColorHex: '#18181B',
        accentColorHex: '#27272A',
        image: cloudtiltPerspImg,
        angles: {
          side: cloudtiltPerspImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
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
    id: 'women-cloudrunner-comfort-glide',
    slug: 'cloudrunner-comfort-glide',
    name: 'CloudRunner Comfort Glide',
    subCategory: 'Support & Road Miles',
    gender: 'women',
    activity: 'Road Running',
    cushioning: 'Plush',
    priceCHF: 20900,
    isNew: false,
    isBestSeller: true,
    badge: 'Support & Stability',
    weight: '240 g / 8.5 oz',
    heelDrop: '9 mm',
    stability: 'Support Cradle',
    lacing: 'Reinforced Speed Lacing',
    description: 'Inspired by the Cloudrunner. Built for effortless daily miles with a wide supportive cradle, plush foam collar, and hollow cloud pod perimeter that delivers cushioned confidence.',
    features: [
      'Cradle-shaped supportive base for zero-stress stability',
      'Plush padded tongue and heel collar for step-in luxury',
      'Dual-density hollow pods for soft touchdown and lively push-off',
      'Logo-free minimalist Swiss geometry'
    ],
    technologies: [
      { name: 'Support Cradle', description: 'Curved foam sidewalls stabilizing the foot without stiff plastic bridges.' }
    ],
    sustainability: { recycledContent: '35% Total Recycled Content', details: 'Post-consumer recycled textile.' },
    rating: 4.8,
    reviewCount: 390,
    colorways: [
      {
        id: 'wcr-ice-lilac',
        name: 'Frost Ice / Soft Lilac',
        primaryColorHex: '#EDE9FE',
        accentColorHex: '#7C3AED',
        image: productAeroflyImg,
        angles: {
          side: productAeroflyImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      },
      {
        id: 'wcr-slate-chalk',
        name: 'Slate Smoke / Chalk White',
        primaryColorHex: '#F1F5F9',
        accentColorHex: '#475569',
        image: cloudmonsterSideImg,
        angles: {
          side: cloudmonsterSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
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
    id: 'women-cloudeclipse-pastel-frost',
    slug: 'cloudeclipse-pastel-frost',
    name: 'CloudEclipse Pastel Frost',
    subCategory: 'Max Stack Marathon',
    gender: 'women',
    activity: 'Road Running',
    cushioning: 'Max',
    priceCHF: 25900,
    isNew: true,
    isBestSeller: true,
    badge: 'Max Stack Road',
    weight: '240 g / 8.5 oz',
    heelDrop: '6 mm',
    stability: 'Neutral Max Stack',
    lacing: 'Speed Lacing System',
    description: 'Inspired by the Cloudeclipse. Features a double layer of diagonal hollow phase pods through a thick plush superfoam midsole, built for marathon distances and tender recovery runs.',
    features: [
      'Double stacked diagonal hollow phase pods for bottomless cushioning',
      'Ultralight translucent upper with targeted cooling mesh',
      'Center-embedded SpeedBoard for smooth energy transfer',
      'High-traction rubber pads on high-wear sole areas'
    ],
    technologies: [
      { name: 'Dual Phase Midsole', description: 'Two stacked matrices of hollow pods collapsing in sequence to absorb massive pavement shock.' }
    ],
    sustainability: { recycledContent: '42% Total Recycled Content', details: 'Dope-dyed yarn saving 90% water.' },
    rating: 4.9,
    reviewCount: 145,
    colorways: [
      {
        id: 'wce-glacier-frost',
        name: 'Glacier Blue / Frost White',
        primaryColorHex: '#E0F2FE',
        accentColorHex: '#0284C7',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      }
    ],
    sizes: [
      { size: 'US 6.5', us: 'US 6.5', eu: 'EU 37', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 39', inStock: true }
    ]
  },
  {
    id: 'women-cloudsurfer-glide-nova',
    slug: 'cloudsurfer-glide-nova',
    name: 'CloudSurfer Glide Nova',
    subCategory: 'Smooth Cadence Running',
    gender: 'women',
    activity: 'Road Running',
    cushioning: 'Responsive',
    priceCHF: 22500,
    isNew: false,
    isBestSeller: true,
    badge: 'Silky Smooth Ride',
    weight: '210 g / 7.4 oz',
    heelDrop: '10 mm',
    stability: 'Neutral Fluid',
    lacing: 'Adaptive Speed Laces',
    description: 'Inspired by the Cloudsurfer. Engineered without a rigid plate, relying on seamlessly aligned hollow pods that collapse forward in a domino effect for an effortlessly silky ride.',
    features: [
      'Plateless CloudTec Phase hollow pods for natural foot flex',
      'Targeted upper mesh with laser-perforated air channels',
      'Padded collar wrapping the Achilles gently',
      'Logo-free minimalist clean silhouette'
    ],
    technologies: [
      { name: 'Computer-Modeled Phase Pods', description: 'Sequentially collapsing hollow chambers tuned for seamless transition.' }
    ],
    sustainability: { recycledContent: '38% Total Recycled Content', details: 'Dope-dyed upper materials.' },
    rating: 4.8,
    reviewCount: 215,
    colorways: [
      {
        id: 'wcs-sage-chalk',
        name: 'Alpine Mint / Chalk White',
        primaryColorHex: '#D1FAE5',
        accentColorHex: '#059669',
        image: cloudmonsterSideImg,
        angles: {
          side: cloudmonsterSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 39', inStock: true }
    ]
  },
  {
    id: 'women-cloudboom-carbon-fly',
    slug: 'cloudboom-carbon-fly',
    name: 'CloudBoom Carbon Fly',
    subCategory: 'Carbon Marathon Racer',
    gender: 'women',
    activity: 'Speed & Racing',
    cushioning: 'Responsive',
    priceCHF: 27900,
    isNew: true,
    isBestSeller: false,
    badge: 'Carbon Propulsion',
    weight: '185 g / 6.5 oz',
    heelDrop: '8 mm',
    stability: 'Agile Race Platform',
    lacing: 'Ultra-thin Competition Lace',
    description: 'Inspired by elite marathon competition shoes like the Cloudboom Echo. Features a spoon-shaped 100% carbon-fiber SpeedBoard sandwiched between high-response PEBA foam and aerodynamic low-profile hollow pods.',
    features: [
      'Full-length carbon-fiber spooned propulsion plate',
      'High-response PEBA superfoam for exceptional bounce',
      'Semi-translucent single-layer racing monomesh upper',
      'Strategically mapped wet-traction rubber pods'
    ],
    technologies: [
      { name: 'Carbon SpeedBoard', description: 'Tuned carbon curvature converting landing forces into rapid toe-off kick.' }
    ],
    sustainability: { recycledContent: '30% Total Recycled Content', details: 'Ultralight performance materials.' },
    rating: 4.9,
    reviewCount: 98,
    colorways: [
      {
        id: 'wcb-coral-white',
        name: 'Solar Coral / Flash White',
        primaryColorHex: '#FFF1F2',
        accentColorHex: '#F43F5E',
        image: productAeroflyImg,
        angles: {
          side: productAeroflyImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true }
    ]
  },
  {
    id: 'women-cloudventure-waterproof-mist',
    slug: 'cloudventure-mist-waterproof',
    name: 'CloudVenture Mist Waterproof',
    subCategory: 'Waterproof Trail Running',
    gender: 'women',
    activity: 'Trail Running',
    cushioning: 'Max',
    priceCHF: 24500,
    isNew: false,
    isBestSeller: true,
    badge: '100% Waterproof',
    weight: '275 g / 9.7 oz',
    heelDrop: '7 mm',
    stability: 'Traction & Stone Guard',
    lacing: 'Cord Lock Quick Lacing',
    description: 'Inspired by the Cloudventure Waterproof. Engineered for unpredictable mountain passes with a 100% wind- and waterproof breathable membrane and multi-angle MissionGrip lugs over hollow cloud pods.',
    features: [
      '100% waterproof and windproof technical membrane',
      'Multi-directional rubber lugs over hollow pods for mud and rock grip',
      'Flexible forefoot rock-plate shielding against jagged gravel',
      'Completely logo-free clean alpine style'
    ],
    technologies: [
      { name: 'MissionGrip & Waterproof Membrane', description: 'Keeps feet bone-dry while gripping slick alpine wet trails.' }
    ],
    sustainability: { recycledContent: '40% Total Recycled Content', details: 'PFC-free membrane.' },
    rating: 4.8,
    reviewCount: 290,
    colorways: [
      {
        id: 'wcv-mist-slate',
        name: 'Alpine Mist / Slate Granite',
        primaryColorHex: '#E2E8F0',
        accentColorHex: '#475569',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 6.5', us: 'US 6.5', eu: 'EU 37', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true },
      { size: 'US 8.5', us: 'US 8.5', eu: 'EU 39', inStock: true }
    ]
  },
  {
    id: 'women-cloudtilt-lumina-float',
    slug: 'cloudtilt-lumina-float',
    name: 'CloudTilt Lumina Float',
    subCategory: 'Ultralight Urban Slip-On',
    gender: 'women',
    activity: 'All Day',
    cushioning: 'Responsive',
    priceCHF: 21500,
    isNew: true,
    isBestSeller: false,
    badge: 'Ultralight Float',
    weight: '190 g / 6.7 oz',
    heelDrop: '7 mm',
    stability: 'Neutral Agile',
    lacing: 'Single Pull Toggle Lace',
    description: 'Inspired by the Cloudtilt. Features sequentially collapsing CloudTec Phase hollow pods, a featherweight sock-like knit upper, and one-pull toggle speed lacing for all-day city walks.',
    features: [
      'CloudTec Phase sequentially collapsing pods',
      'Ultra-breathable open-weave stretch knit upper',
      'Bungee cord speed toggle lacing',
      'Logo-free minimalist modern aesthetic'
    ],
    technologies: [
      { name: 'Phase Pod Geometry', description: 'Zero-gravity foam pods tailored for effortless urban transition.' }
    ],
    sustainability: { recycledContent: '50% Total Recycled Content', details: 'Dope-dyed recycled yarn.' },
    rating: 4.8,
    reviewCount: 165,
    colorways: [
      {
        id: 'wctl-pearl-white',
        name: 'Pearl Chalk / Soft Clay',
        primaryColorHex: '#F8FAFC',
        accentColorHex: '#A8A29E',
        image: productAeroflyImg,
        angles: {
          side: productAeroflyImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true }
    ]
  },
  {
    id: 'women-cloudflow-feather-pace',
    slug: 'cloudflow-feather-pace',
    name: 'CloudFlow Feather Pace',
    subCategory: 'Tempo & Intervals',
    gender: 'women',
    activity: 'Speed & Racing',
    cushioning: 'Responsive',
    priceCHF: 21900,
    isNew: false,
    isBestSeller: true,
    badge: 'Fast Tempo',
    weight: '205 g / 7.2 oz',
    heelDrop: '8 mm',
    stability: 'Neutral Agile',
    lacing: 'Adaptive Speed Laces',
    description: 'Inspired by the Cloudflow. Engineered for high-cadence tempo runs and 10k races with 18 low-profile hollow cloud pods and an explosive composite propulsion plate.',
    features: [
      '18 direct-contact hollow cloud pods for lightning-fast turnover',
      'Lightweight engineered mesh upper engineered for high ventilation',
      'Embedded SpeedBoard propulsion plate',
      'Completely logo-free clean design'
    ],
    technologies: [
      { name: 'Low-Profile Cloud Elements', description: 'Lower stack height for direct road feel and explosive acceleration.' }
    ],
    sustainability: { recycledContent: '35% Total Recycled Content', details: 'Recycled upper textile.' },
    rating: 4.8,
    reviewCount: 275,
    colorways: [
      {
        id: 'wcf-ice-coral',
        name: 'Ice Mint / Coral Blast',
        primaryColorHex: '#E0F2FE',
        accentColorHex: '#FB7185',
        image: cloudmonsterSideImg,
        angles: {
          side: cloudmonsterSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 6.5', us: 'US 6.5', eu: 'EU 37', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true }
    ]
  },
  {
    id: 'women-cloudnova-pure-minimalist',
    slug: 'cloudnova-pure-minimalist',
    name: 'CloudNova Pure Minimalist',
    subCategory: 'Streetwear & Studio',
    gender: 'women',
    activity: 'All Day',
    cushioning: 'Plush',
    priceCHF: 22900,
    isNew: true,
    isBestSeller: true,
    badge: 'Studio & Street',
    weight: '235 g / 8.3 oz',
    heelDrop: '7 mm',
    stability: 'Supportive Mid-Sole',
    lacing: 'Asymmetrical Flex Laces',
    description: 'Inspired by the Cloudnova. Fuses performance hollow cloud pod cushioning with sleek streetwear lines, an inner step-in bootie, and architectural heel support for studio and city wear.',
    features: [
      'Full inner step-in sock bootie for customized foot hold',
      'Connected hollow cloud pods tuned for concrete street impact',
      'Wide bespoke SpeedBoard for high-stability city walking',
      'Clean unbranded technical geometry'
    ],
    technologies: [
      { name: 'Connected Pod Midsole', description: 'Distributes impact across the entire foot bed while maintaining iconic hollow visual aesthetic.' }
    ],
    sustainability: { recycledContent: '40% Total Recycled Content', details: 'Zero virgin plastics used in upper.' },
    rating: 4.9,
    reviewCount: 310,
    colorways: [
      {
        id: 'wcn-chalk-pure',
        name: 'Chalk White / Soft Oyster',
        primaryColorHex: '#F8FAFC',
        accentColorHex: '#CBD5E1',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      }
    ],
    sizes: [
      { size: 'US 6', us: 'US 6', eu: 'EU 36.5', inStock: true },
      { size: 'US 7', us: 'US 7', eu: 'EU 37.5', inStock: true },
      { size: 'US 7.5', us: 'US 7.5', eu: 'EU 38', inStock: true },
      { size: 'US 8', us: 'US 8', eu: 'EU 38.5', inStock: true }
    ]
  },

  // ==========================================
  // KIDS' ON-INSPIRED COLLECTION (10 SHOES)
  // ==========================================
  {
    id: 'kids-cloudmonster-jr-bounce',
    slug: 'cloudmonster-jr-bounce',
    name: 'CloudMonster Jr. Bounce',
    subCategory: 'Play & Running',
    gender: 'kids',
    activity: 'Road Running',
    cushioning: 'Max',
    priceCHF: 15900,
    isNew: true,
    isBestSeller: true,
    badge: 'Monster Bounce',
    weight: '175 g / 6.1 oz',
    heelDrop: '5 mm',
    stability: 'Kid Safe Stability',
    lacing: 'Easy Cinch Bungee Lace',
    description: 'Inspired by the Cloudmonster, scaled for junior athletes. Features extra-large hollow cloud pods and an energetic rocker shape to absorb active playground and track impacts.',
    features: [
      'Junior-tuned hollow cloud pods protecting growing joints',
      'Easy cinch bungee lacing with velcro collar strap',
      'Reinforced TPU toe guard preventing playground scuffs',
      'Logo-free clean Swiss design'
    ],
    technologies: [
      { name: 'Junior CloudTec Pods', description: 'Soft-density hollow pods tuned specifically for lighter youth body weights.' }
    ],
    sustainability: { recycledContent: '50% Total Recycled Content', details: 'Non-toxic eco-friendly materials.' },
    rating: 4.9,
    reviewCount: 180,
    colorways: [
      {
        id: 'kcm-chalk-flame',
        name: 'Chalk White / Solar Flame',
        primaryColorHex: '#F8FAFC',
        accentColorHex: '#EA580C',
        image: productStriderImg,
        angles: {
          side: productStriderImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      }
    ],
    sizes: [
      { size: 'US 11 (Kids)', us: 'US 11', eu: 'EU 28', inStock: true },
      { size: 'US 12 (Kids)', us: 'US 12', eu: 'EU 30', inStock: true },
      { size: 'US 13 (Kids)', us: 'US 13', eu: 'EU 31', inStock: true },
      { size: 'US 1 (Youth)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Youth)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Youth)', us: 'US 3', eu: 'EU 35', inStock: true }
    ]
  },
  {
    id: 'kids-cloudtilt-youth-speedknit',
    slug: 'cloudtilt-youth-speedknit',
    name: 'CloudTilt Youth SpeedKnit',
    subCategory: 'Easy Slip-On Play',
    gender: 'kids',
    activity: 'All Day',
    cushioning: 'Responsive',
    priceCHF: 14900,
    isNew: true,
    isBestSeller: true,
    badge: 'Phase Pod Knit',
    weight: '160 g / 5.6 oz',
    heelDrop: '6 mm',
    stability: 'Neutral Play Platform',
    lacing: 'Speed Toggle Elastic',
    description: 'Inspired by the Cloudtilt. Features collapsing CloudTec Phase hollow pods, a stretchy sock-like knit collar kids can slide into hands-free, and one-pull toggle speed laces.',
    features: [
      'Hands-free elastic stretch knit collar for rapid slip-on',
      'Collapsing Phase hollow pods for smooth walking roll',
      'Machine-washable durable knit construction',
      'Logo-free minimalist modern style'
    ],
    technologies: [
      { name: 'Phase Pods Junior', description: 'Computer-modeled pod collapse creating buttery-smooth steps.' }
    ],
    sustainability: { recycledContent: '55% Total Recycled Content', details: 'Zero-waste flat knitting.' },
    rating: 4.9,
    reviewCount: 140,
    colorways: [
      {
        id: 'kct-phantom-black',
        name: 'Phantom Black / Cyber Lime',
        primaryColorHex: '#18181B',
        accentColorHex: '#84CC16',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 12 (Kids)', us: 'US 12', eu: 'EU 30', inStock: true },
      { size: 'US 13 (Kids)', us: 'US 13', eu: 'EU 31', inStock: true },
      { size: 'US 1 (Youth)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Youth)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Youth)', us: 'US 3', eu: 'EU 35', inStock: true }
    ]
  },
  {
    id: 'kids-cloudrunner-mini-support',
    slug: 'cloudrunner-mini-support',
    name: 'CloudRunner Mini Support',
    subCategory: 'Supportive School & Sports',
    gender: 'kids',
    activity: 'Road Running',
    cushioning: 'Plush',
    priceCHF: 14500,
    isNew: false,
    isBestSeller: true,
    badge: 'Support & Stability',
    weight: '180 g / 6.3 oz',
    heelDrop: '7 mm',
    stability: 'Support Cradle',
    lacing: 'Elastic Speed Laces',
    description: 'Inspired by the Cloudrunner. Built to provide junior feet with structured comfort, wider base stability, and soft hollow cloud pods that cushion high-impact active school days.',
    features: [
      'Supportive foam cradle keeping heels upright and secure',
      'Padded collar and anti-odor breathable mesh',
      'Perimeter hollow cloud pods for steady landings',
      'Logo-free clean Swiss engineering'
    ],
    technologies: [
      { name: 'Junior Support Cradle', description: 'Prevents excess ankle wobble during sprint stops and lateral turns.' }
    ],
    sustainability: { recycledContent: '40% Total Recycled Content', details: 'Recycled upper mesh.' },
    rating: 4.8,
    reviewCount: 160,
    colorways: [
      {
        id: 'kcr-navy-ice',
        name: 'Alpine Navy / Ice Cyan',
        primaryColorHex: '#1E293B',
        accentColorHex: '#38BDF8',
        image: productStriderImg,
        angles: {
          side: productStriderImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      }
    ],
    sizes: [
      { size: 'US 12 (Kids)', us: 'US 12', eu: 'EU 30', inStock: true },
      { size: 'US 13 (Kids)', us: 'US 13', eu: 'EU 31', inStock: true },
      { size: 'US 1 (Youth)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Youth)', us: 'US 2', eu: 'EU 33.5', inStock: true }
    ]
  },
  {
    id: 'kids-cloudsurfer-jr-sprint',
    slug: 'kids-cloudsurfer-jr-sprint',
    name: 'CloudSurfer Jr. Sprint',
    subCategory: 'Track & Active Play',
    gender: 'kids',
    activity: 'Road Running',
    cushioning: 'Responsive',
    priceCHF: 15200,
    isNew: true,
    isBestSeller: false,
    badge: 'Smooth Glide',
    weight: '165 g / 5.8 oz',
    heelDrop: '6 mm',
    stability: 'Neutral Flexible',
    lacing: 'One-Touch Speed Cord',
    description: 'Inspired by the Cloudsurfer. Computer-engineered Phase pods collapse smoothly like dominos, providing young runners with a seamless stride and supreme comfort.',
    features: [
      'Phase hollow pods for fluid momentum',
      'Super-breathable dual-layer mesh',
      'One-touch elastic cord system',
      'Logo-free minimalist silhouette'
    ],
    technologies: [
      { name: 'Phase Pod Flex', description: 'Domino-like collapse designed for natural foot biomechanics.' }
    ],
    sustainability: { recycledContent: '45% Total Recycled Content', details: 'Eco-certified textiles.' },
    rating: 4.8,
    reviewCount: 95,
    colorways: [
      {
        id: 'kcs-mint-chalk',
        name: 'Alpine Mint / Chalk White',
        primaryColorHex: '#D1FAE5',
        accentColorHex: '#059669',
        image: cloudmonsterSideImg,
        angles: {
          side: cloudmonsterSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 1 (Youth)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Youth)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Youth)', us: 'US 3', eu: 'EU 35', inStock: true }
    ]
  },
  {
    id: 'kids-cloudcub-play-day',
    slug: 'kids-cloudcub-play-day',
    name: 'CloudCub Play Day',
    subCategory: 'Early Walkers & Play',
    gender: 'kids',
    activity: 'All Day',
    cushioning: 'Plush',
    priceCHF: 12900,
    isNew: false,
    isBestSeller: true,
    badge: 'First Steps',
    weight: '135 g / 4.7 oz',
    heelDrop: '4 mm',
    stability: 'Ultra-Wide Base',
    lacing: 'Hook & Loop Strap',
    description: 'Inspired by the classic Cloud silhouette for younger kids and early runners. Ultra-wide stable base, flexible hollow pods, and single hook-and-loop velcro strap.',
    features: [
      'Ultra-wide base assisting balance development',
      "Flexible rounded hollow pods that won't catch on carpet or turf",
      'Single hook-and-loop velcro strap for tiny hands',
      'Logo-free clean modern styling'
    ],
    technologies: [
      { name: 'FlexiPod Outsole', description: 'Extra bendable pods encouraging natural arch development.' }
    ],
    sustainability: { recycledContent: '50% Recycled Textile', details: 'BPA- and phthalate-free.' },
    rating: 4.9,
    reviewCount: 210,
    colorways: [
      {
        id: 'kcc-chalk-sky',
        name: 'Chalk White / Sky Cyan',
        primaryColorHex: '#F0F9FF',
        accentColorHex: '#0284C7',
        image: productStriderImg,
        angles: {
          side: productStriderImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      }
    ],
    sizes: [
      { size: 'US 8 (Toddler)', us: 'US 8', eu: 'EU 24', inStock: true },
      { size: 'US 9 (Toddler)', us: 'US 9', eu: 'EU 25.5', inStock: true },
      { size: 'US 10 (Toddler)', us: 'US 10', eu: 'EU 27', inStock: true }
    ]
  },
  {
    id: 'kids-cloudrover-allterrain-jr',
    slug: 'kids-cloudrover-allterrain-jr',
    name: 'CloudRover All-Terrain Jr.',
    subCategory: 'Trail & Outdoor Exploration',
    gender: 'kids',
    activity: 'Trail Running',
    cushioning: 'Max',
    priceCHF: 15900,
    isNew: true,
    isBestSeller: false,
    badge: 'Trail Grip',
    weight: '190 g / 6.7 oz',
    heelDrop: '6 mm',
    stability: 'Rugged Platform',
    lacing: 'Bungee Cord Toggle',
    description: 'Inspired by the Cloudventure for junior trail explorers. Features aggressive grip lugs over hollow cloud pods, reinforced mudguard, and quick-toggle cords for hiking and park trails.',
    features: [
      'All-terrain grip lugs over hollow pods for mud and gravel',
      'Reinforced TPU mudguard shielding feet against roots and wet grass',
      'Quick-cinch toggle cord laces',
      'Logo-free clean outdoor styling'
    ],
    technologies: [
      { name: 'Junior Terrain Compound', description: 'High-traction rubber that grips wet park paths and outdoor trails.' }
    ],
    sustainability: { recycledContent: '40% Recycled Materials', details: 'Water-resistant coated mesh.' },
    rating: 4.8,
    reviewCount: 88,
    colorways: [
      {
        id: 'kcr-moss-amber',
        name: 'Forest Moss / Alpine Amber',
        primaryColorHex: '#3F4E4F',
        accentColorHex: '#F59E0B',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 12 (Kids)', us: 'US 12', eu: 'EU 30', inStock: true },
      { size: 'US 13 (Kids)', us: 'US 13', eu: 'EU 31', inStock: true },
      { size: 'US 1 (Youth)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Youth)', us: 'US 2', eu: 'EU 33.5', inStock: true }
    ]
  },
  {
    id: 'kids-cloudnova-flex-junior',
    slug: 'kids-cloudnova-flex-junior',
    name: 'CloudNova Flex Junior',
    subCategory: 'Lifestyle & School',
    gender: 'kids',
    activity: 'All Day',
    cushioning: 'Plush',
    priceCHF: 13900,
    isNew: false,
    isBestSeller: true,
    badge: 'Everyday Sneaker',
    weight: '170 g / 6.0 oz',
    heelDrop: '6 mm',
    stability: 'Neutral Comfort',
    lacing: 'Elastic Slip-On Laces',
    description: 'Inspired by the Cloudnova. High-tech sneaker with connected hollow pods, plush step-in heel counter, and elastic slip-on laces designed for all-day school comfort.',
    features: [
      'Step-in inner sock collar for snug hold without pinching',
      'Connected cloud pods for all-day playground support',
      'Permanent elastic speed laces (no tying needed)',
      'Clean logo-free modern Swiss look'
    ],
    technologies: [
      { name: 'Connected Cloud Midsole', description: 'Evenly disperses schoolyard jumps and runs.' }
    ],
    sustainability: { recycledContent: '45% Recycled Content', details: 'Durable eco canvas.' },
    rating: 4.8,
    reviewCount: 150,
    colorways: [
      {
        id: 'kcn-chalk-black',
        name: 'Chalk White / Stealth Black',
        primaryColorHex: '#F8FAFC',
        accentColorHex: '#1E293B',
        image: productStriderImg,
        angles: {
          side: productStriderImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      }
    ],
    sizes: [
      { size: 'US 1 (Youth)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Youth)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Youth)', us: 'US 3', eu: 'EU 35', inStock: true }
    ]
  },
  {
    id: 'kids-cloudventure-scout-trail',
    slug: 'kids-cloudventure-scout-trail',
    name: 'CloudVenture Scout Trail',
    subCategory: 'Mountain & Camping',
    gender: 'kids',
    activity: 'Trail Running',
    cushioning: 'Max',
    priceCHF: 16500,
    isNew: true,
    isBestSeller: false,
    badge: 'Mountain Explorer',
    weight: '195 g / 6.9 oz',
    heelDrop: '7 mm',
    stability: 'Stone Guard & Grip',
    lacing: 'Reinforced Speed Toggle',
    description: 'Inspired by the Cloudventure. Engineered for family mountain trails, weekend camping, and outdoor exploration with multi-lug cloud pods and protective rock guards.',
    features: [
      'Mountain lug cloud pods providing surefooted grip on dirt and rocks',
      'Breathable reinforced ripstop upper resisting thorns and scratches',
      'Quick-toggle locking lacing system',
      'Logo-free minimalist outdoor design'
    ],
    technologies: [
      { name: 'StoneGuard Junior', description: 'Flexible shield under footbed preventing stone bruising.' }
    ],
    sustainability: { recycledContent: '40% Recycled Content', details: 'Durable recycled ripstop.' },
    rating: 4.9,
    reviewCount: 76,
    colorways: [
      {
        id: 'kcs-slate-amber',
        name: 'Granite Slate / Alpine Amber',
        primaryColorHex: '#334155',
        accentColorHex: '#F59E0B',
        image: cloudmonsterSideImg,
        angles: {
          side: cloudmonsterSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 1 (Youth)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Youth)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Youth)', us: 'US 3', eu: 'EU 35', inStock: true }
    ]
  },
  {
    id: 'kids-clouddash-light-speed',
    slug: 'kids-clouddash-light-speed',
    name: 'CloudDash Light Speed',
    subCategory: 'Fast Sprint & Court',
    gender: 'kids',
    activity: 'Speed & Racing',
    cushioning: 'Responsive',
    priceCHF: 13900,
    isNew: false,
    isBestSeller: true,
    badge: 'Light Speed',
    weight: '150 g / 5.3 oz',
    heelDrop: '5 mm',
    stability: 'Agile Lateral Hold',
    lacing: 'Bungee Cord Laces',
    description: 'Inspired by the Cloudflow for kids. Ultralight responsive shoe with low-profile hollow pods for fast gym sprints, court sports, and track events.',
    features: [
      'Ultralight construction keeping junior runners nimble',
      'Non-marking rubber pod soles approved for school gym floors',
      'Bungee cord slip-on with snug heel counter',
      'Completely logo-free clean design'
    ],
    technologies: [
      { name: 'SprintPod Midsole', description: 'Responsive hollow pod placement for explosive takeoffs.' }
    ],
    sustainability: { recycledContent: '35% Recycled Content', details: 'Zero hazardous dyes.' },
    rating: 4.8,
    reviewCount: 115,
    colorways: [
      {
        id: 'kcd-white-coral',
        name: 'Chalk White / Bright Coral',
        primaryColorHex: '#F8FAFC',
        accentColorHex: '#F43F5E',
        image: productStriderImg,
        angles: {
          side: productStriderImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: cloudrunnerSoleImg
        }
      }
    ],
    sizes: [
      { size: 'US 12 (Kids)', us: 'US 12', eu: 'EU 30', inStock: true },
      { size: 'US 13 (Kids)', us: 'US 13', eu: 'EU 31', inStock: true },
      { size: 'US 1 (Youth)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Youth)', us: 'US 2', eu: 'EU 33.5', inStock: true }
    ]
  },
  {
    id: 'kids-cloudstrider-play-cush',
    slug: 'kids-cloudstrider-play-cush',
    name: 'CloudStrider Play Cush',
    subCategory: 'All-Day High Cushion',
    gender: 'kids',
    activity: 'All Day',
    cushioning: 'Max',
    priceCHF: 14900,
    isNew: true,
    isBestSeller: true,
    badge: 'All-Day Cushion',
    weight: '180 g / 6.3 oz',
    heelDrop: '6 mm',
    stability: 'Kid Safe Stability',
    lacing: 'Elastic Cinch System',
    description: 'High-cushion kids shoe inspired by the Cloudstrider and Cloudmonster. Features thick hollow cloud pods, generous cushioning, and an elastic cinch system for all-day outdoor and school comfort.',
    features: [
      'Max hollow cloud pod cushioning protecting young knees and ankles',
      'Engineered mesh upper keeping feet cool through active days',
      'Reinforced heel cup and toe box for extra durability',
      'Logo-free minimalist modern Swiss aesthetic'
    ],
    technologies: [
      { name: 'Max Cush Junior Core', description: 'Dual-density foam chambers for impact absorption and stability.' }
    ],
    sustainability: { recycledContent: '45% Recycled Content', details: 'Eco-certified materials.' },
    rating: 4.9,
    reviewCount: 130,
    colorways: [
      {
        id: 'kcs-glacier-slate',
        name: 'Glacier Blue / Slate Grey',
        primaryColorHex: '#E0F2FE',
        accentColorHex: '#334155',
        image: cloudeclipseSideImg,
        angles: {
          side: cloudeclipseSideImg,
          perspective: cloudtiltPerspImg,
          top: cloudsurferTopImg,
          sole: techSoleDetailImg
        }
      }
    ],
    sizes: [
      { size: 'US 12 (Kids)', us: 'US 12', eu: 'EU 30', inStock: true },
      { size: 'US 13 (Kids)', us: 'US 13', eu: 'EU 31', inStock: true },
      { size: 'US 1 (Youth)', us: 'US 1', eu: 'EU 32', inStock: true },
      { size: 'US 2 (Youth)', us: 'US 2', eu: 'EU 33.5', inStock: true },
      { size: 'US 3 (Youth)', us: 'US 3', eu: 'EU 35', inStock: true }
    ]
  }
];
