const MAIN_IMAGE = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80';

export const urlfile = {
  // Homepage
  header_logo: 'https://res.cloudinary.com/dklrbfhei/image/upload/v1764183615/photo_2025-08-06_16-06-45_j6pfxu.jpg',
  footer_logo: 'https://res.cloudinary.com/dklrbfhei/image/upload/v1764183615/photo_2025-08-06_16-06-45_j6pfxu.jpg',
  // Favicon: circular PNG (Cloudinary transform to r_max makes it appear rounded)
  favicon: 'https://res.cloudinary.com/dklrbfhei/image/upload/c_fill,r_max,w_64,h_64,f_png/v1764183615/photo_2025-08-06_16-06-45_j6pfxu.jpg',
  loadingGif: '',

  // -----------------------
  // App Pages (canonical URLs)
  // -----------------------
  // These are the logical URLs for the single-page sections (used for documentation
  // and future linking). Navigation in the app currently toggles sections by state,
  // but these canonical paths represent each section as its own page.
  // Page list (7): Home, Indicators, Source Codes, AI Generator, VPS, Python Bots, AI Bots
  pages: {
    // Page: Home — URL: '/' — Type: Landing page (header/hero + services)
    home: '/',
    // Page: Indicators — URL: '/indicators' — Type: Product listing (indicator products/gallery)
    indicators: '/indicators',
    // Page: Source Codes — URL: '/source-codes' — Type: Product listing (MQL4/Python source code products)
    sourceCodes: '/source-codes',
    // Page: AI Generator — URL: '/ai-generator' — Type: Tool page (AI generator hero + gallery)
    aiGenerator: '/ai-generator',
    // Page: VPS — URL: '/vps' — Type: Infrastructure page (VPS/RDP marketing + product cards)
    vps: '/vps',
    // Page: Python Bots — URL: '/python-bots' — Type: Product listing (python bot products/gallery)
    pythonBots: '/python-bots',
    // Page: AI Bots — URL: '/ai-bots' — Type: Product listing / bundles (ai bots thumbnails + header)
    aiBots: '/ai-bots',
  },

  // Homepage
  // main image for Homepage (edit this to change homepage main image)
  homepage_main: MAIN_IMAGE,
  unsplash2: MAIN_IMAGE,

  // main image for Indicators (edit this to change indicators main image)
  indicators_main: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&q=80',
  unsplash1: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&q=80',
  unsplash3: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  unsplash4: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
  unsplash5: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  unsplash6: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80',
  unsplash7: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80',
  unsplash8: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
  unsplash9: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  unsplash10: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',

  // main image for Source Codes (edit this to change source codes main image)
  source_codes_main: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  // Source Codes — Type 1 (MQL4)
  unsplash11: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',

  // main image for AI Generator (edit this to change AI Generator main image)
  ai_generator_main: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80',
  // AI Generator
  unsplash12: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80',

  // `unsplash11` and `unsplash5` are also used across AI bot galleries (see products data)

  // main image for VPS (edit this to change VPS main image)
  vps_main: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  // VPS
  unsplash13: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  unsplash14: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
  unsplash15: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',

  // Homepage alias
  hero_background: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',

  // -----------------------
  // Indicators (per-product keys)
  // -----------------------
  indicator_lite_1: 'https://res.cloudinary.com/dklrbfhei/image/upload/v1765611044/Screenshot_931_s6vmeu.png',
  indicator_lite_2: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
  indicator_lite_3: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',

  indicator_pro_1: 'https://res.cloudinary.com/dklrbfhei/image/upload/v1765610545/Screenshot_930_bbnb2y.png',
  indicator_pro_2: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  indicator_pro_3: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80',

  indicator_elite_1: 'https://res.cloudinary.com/dklrbfhei/image/upload/v1765610025/photo_2025-09-19_11-00-40_zhrt4k.jpg',
  indicator_elite_2: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
  indicator_elite_3: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',

  // main image for Python Bots page
  python_bots_main: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80',

  // -----------------------
  // MQL4 / Source code (per-product)
  // -----------------------
  mql4_falcon_mt4_1: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  mql4_falcon_mt4_2: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
  mql4_falcon_mt4_3: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',

  mql4_tbt_2019_1: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&q=80',
  mql4_tbt_2019_2: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  mql4_tbt_2019_3: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',

  mql4_tbt_2023_1: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
  mql4_tbt_2023_2: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  mql4_tbt_2023_3: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',

  mql4_guru_old_1: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80',
  mql4_guru_old_2: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
  mql4_guru_old_3: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',

  mql4_guru_new_1: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  mql4_guru_new_2: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  mql4_guru_new_3: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',

  mql4_tbt_v2_1: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80',
  mql4_tbt_v2_2: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  mql4_tbt_v2_3: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',

  mql4_tbt_scalper_1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  mql4_tbt_scalper_2: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  mql4_tbt_scalper_3: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',

  mql4_tbt_global_1: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80',
  mql4_tbt_global_2: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
  mql4_tbt_global_3: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',

  mql4_haxor_v2_1: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
  mql4_haxor_v2_2: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  mql4_haxor_v2_3: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',

  mql4_nexus_alpha_1: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  mql4_nexus_alpha_2: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&q=80',
  mql4_nexus_alpha_3: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',

  mql4_tbt_v3_1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  mql4_tbt_v3_2: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  mql4_tbt_v3_3: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',

  mql4_tbt_pro_1: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80',
  mql4_tbt_pro_2: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
  mql4_tbt_pro_3: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',

  mql4_dev_service_1: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
  mql4_dev_service_2: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  mql4_dev_service_3: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',

  // -----------------------
  // Python / Future / AI generator (per-product)
  // -----------------------
  python_source_1: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
  python_source_2: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80',
  python_source_3: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  python_source_4: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',

  signal_engine_1: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
  signal_engine_2: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  signal_engine_3: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80',
  signal_engine_4: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',

  ai_generator_1: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
  ai_generator_2: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  ai_generator_3: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  ai_generator_4: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&q=80',

  // -----------------------
  // VPS / RDP
  // -----------------------
  vps_1: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  vps_2: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
  vps_3: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',

  // -----------------------
  // Python Bots (plans)
  // -----------------------
  python_bots_1: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&q=80',
  python_bots_2: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
  python_bots_3: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  python_bots_4: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',

  // -----------------------
  // AI Bots bundle and individual
  // -----------------------
  ai_bots_bundle_1: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  ai_bots_bundle_2: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&q=80',
  ai_bots_bundle_3: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',

  // AI bots: only the images actually used by the AI Bots page are kept here.
  // `ai_bots_bundle_1..3` -> bundle header/gallery (3 images)
  // `ai_finorix_1` -> Finorix bot thumbnail (page uses bot.images[0])
  // `ai_aixchart_1` -> AIxChart bot thumbnail (page uses bot.images[0])
  ai_finorix_1: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  ai_aixchart_1: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&q=80',
};

export default urlfile;
