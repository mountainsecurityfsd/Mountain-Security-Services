import { WorkforceCategory } from '../types';

export const MSS_LOGO = "https://lh3.googleusercontent.com/aida/AEtjO1W6BRfs8s5FInPaZ6RCpq0B8VK5e5ENk2RvznohMWkOKtSvdEgPde64_8RLAmw9Kc-FuEAeyzYuAcLBNdjCT7--WUJaRzprH4ES-QGFQ_I9prvLqiU2KfrkQT-zJf6XXVG4R14HtyHJljoMfuINjLfWnwmd-Y9t_yKd9Vk4vOqsp2G1kFz98MlgKr_TPV06NwZ9sz14LoE-4PkSUzvZgTARZKiyqIB0BRtCKNZwmWDtO65qrg5eOaA2gdkhfQYOkdgG-PNcipxUMo0";

export const WORKFORCE_CATEGORIES: WorkforceCategory[] = [
  {
    id: 'security-guards',
    categoryNumber: '01',
    name: 'Security Guards',
    nameUrdu: 'سیکیورٹی گارڈز (مسلح و غیر مسلح)',
    badge: 'Armed / Unarmed',
    badgeUrdu: 'مسلح و غیر مسلح',
    description: 'Static vigilance, physical patrol, visitor ledger management, and asset security.',
    descriptionUrdu: 'جامع گارڈنگ، گیٹ پر چیکنگ، فیکٹری گشت اور اسلحہ بردار مستعد محافظین۔',
    fullOverview: 'Disciplined perimeter sentries, corporate lobby access control officers, and mobile patrolling units. Selected from vetted civilian trainees and retired armed forces personnel with certified weapons handling, threat de-escalation, and tactical vigilance protocols.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlQMRJ211tpKzAy-hMdYkoJ-q2ekKen-cm95n-snx2B_q_qEcXAzA_lzWcH7pqIdYwRXw8na7mbPpH4uBuSi4ix-P8aamoQo5H2HwJ4YbOEiuxDCz37gYU6XC8M89pGVqyUp_QFCc7fVzfG3p4E7e_wnNU2zm_TbpzyeyTKpeTIKG5YcVCx6mWomtyJ73iOjBLK39bgoFfpEtdA6C-rYBSpAuhEyvaFte3trGmDw6TsKlVGjRjHe1C9w',
    icon: 'Shield',
    division: 'Security',
    licensingSpec: 'Govt. Registered & Permitted (Punjab Home Dept)',
    vettingSpec: 'NADRA Biometric + Police Character Certificate',
    deploymentRounds: '8h / 12h Rotations (24/7 Available)',
    tags: ['Weapon Vetted', 'Emergency Drill', 'Access Control', 'CCTV Sync'],
    responsibilities: [
      'Visitor registration, bag inspection & vehicle trunk search protocols.',
      'CCTV perimeter synchronization & periodic physical checkpoint patrols.',
      'Armed deterrence for cash transit, bank branches, and industrial gates.',
      'Incident log documentation and central control room dispatch reporting.'
    ],
    idealEnvironments: [
      'Textile processing plants & spinning mills in Khurrianwala / Sheikhupura Rd.',
      'Corporate headquarters in Kohinoor City, Civil Lines, and Regency Plaza.',
      'Private VIP villas and residential societies along Canal Expressway.',
      'Healthcare centers, commercial bank hubs, and academic colleges.'
    ],
    verificationStandards: [
      'NADRA biometric verification & genuine CNIC authentication.',
      'Police character certificate from local Faisalabad SSP Office / home district.',
      'Strict medical clearance including vision check, drug screening & stamina test.',
      'Firearms safety refresher certification and security protocol drills.'
    ],
    faqs: [
      {
        question: 'Are your armed guards licensed by Punjab Home Department?',
        answer: 'Yes. All armed guards hold verified Punjab / Federal arms permits and operate strictly under authorized regulatory framework guidelines.'
      },
      {
        question: 'What happens in case of sudden guard absenteeism?',
        answer: 'Our 24/7 Faisalabad Dispatch HQ maintains reserve standby officers. A substitute guard is on-post within 60 minutes of any callout.'
      }
    ]
  },
  {
    id: 'drivers',
    categoryNumber: '02',
    name: 'Drivers & Chauffeurs',
    nameUrdu: 'ڈرائیورز (ایگزیکٹو و فیملی)',
    badge: 'LTV / HTV / VIP',
    badgeUrdu: 'ایل ٹی وی / ایچ ٹی وی',
    description: 'Executive vehicle drivers, family chauffeurs, commercial van & transport pilots.',
    descriptionUrdu: 'ماہر ایگزیکٹو ڈرائیورز، کمپنی ٹرانسپورٹ پائلٹ اور فیملی شوفرز۔',
    fullOverview: 'Punctual, route-literate, and professionally uniformed chauffeurs for company CEOs, expat delegates, institutional staff pick-and-drop vans, and private executive families. Comprehensive mechanical sympathy and highway navigation mastery.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt9OEq0toaue43zEsQ0_wzn1KVGqm6IW3PcCBf_95_THZHDUO3hlSW_U8psStEID9GHzpEge4JFihkTM4xgIyWInFZjd9ol6044dI_HeDH4XLBXMYvfefGNKM1eVxu922NWPs9MLnGXkbz3Rk0jFkISt3QT8WVJH0dhVl4m1fmehU74dVsVrGtntGPwpoJACbUVenuownph8DCJnN5eJ1gtyAlJAlUk7ACvjPsElrojbqIVt42505QLw',
    icon: 'Car',
    division: 'Logistics',
    licensingSpec: 'Valid LTV / HTV Driving License Verified',
    vettingSpec: 'Police Verification + Clean Traffic Record',
    deploymentRounds: 'Full-time / Split Shift / Inter-City',
    tags: ['Traffic Cleared', 'Route Expert', 'Highway Safe', 'Non-Smoker Option'],
    responsibilities: [
      'Daily corporate route management, inter-city business transit to Lahore & Islamabad.',
      'Vehicle fluid level checks, tyre pressure logs, and scheduled service tracking.',
      'School/family pick-and-drop with maximum security awareness and punctual arrivals.'
    ],
    idealEnvironments: [
      'Industrial directors and mill managing executives.',
      'Multinational audit teams and visiting foreign delegates.',
      'Private residential families requiring long-term trusted drivers.'
    ],
    verificationStandards: [
      'Police clearance certificate & local residential address verification.',
      'Comprehensive ophthalmology and drug-free laboratory panel checks.',
      'Practical road driving competency test on automatic & manual vehicles.'
    ],
    faqs: [
      {
        question: 'Are drivers vetted for intercity highway routes?',
        answer: 'Yes, all executive chauffeurs are tested on M-3, M-4 motorways and regional highways with defensive driving practices.'
      }
    ]
  },
  {
    id: 'cooks-chefs',
    categoryNumber: '03',
    name: 'Cooks & Chefs',
    nameUrdu: 'باورچی و شیف',
    badge: 'Mess / Domestic',
    badgeUrdu: 'میس و گھریلو',
    description: 'Pakistani, Continental cuisine cooks for corporate executive cafeterias & residences.',
    descriptionUrdu: 'پاکستانی و کانٹینینٹل کھانوں کے ماہر باورچی برائے دفتری کینٹین و گھر۔',
    fullOverview: 'Expert culinary professionals specializing in Pakistani, Continental, and Oriental cuisines. Rigorously vetted for personal hygiene, certified food-handler health tests, nutritional knowledge, and mass canteen operations.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr8P_9pVMcdZPxS4t5MPXqq2gbmZ0GQoSYVLqvuj1EquSt1Svnd4cSs6dS3dq15XOPgP4Ub8ql5qvbxiI3UFExJcH_dY4t_9Kx5pC6QGLdofiBT3r2OOacYvAFfbDpHUchQmBhORnQpj_YHWdGtsXrYrXGHkxKCKJwwe-Y2kg64JfA0abkVzdLvmCA8ZIhxzglV7RevdpLGf1JUIOjXWRpIVO4JbTbDScy-P-kk1Z0maqfUA09K_9wGw',
    icon: 'UtensilsCrossed',
    division: 'Workforce',
    licensingSpec: 'Culinary Trade Training / Certified Health Screening',
    vettingSpec: 'Hepatitis & Food-Handler Medical Clear',
    deploymentRounds: 'Full-Time / Live-in / Shift Canteen',
    tags: ['Hygiene Certified', 'Baking & BBQ', 'Canteen Scale', 'VIP Dining'],
    responsibilities: [
      'Preparation of fresh, hygienic meals for executive boards or corporate factory mess.',
      'Kitchen inventory auditing, grocery freshness verification, and cold storage safety.',
      'Strict adherence to sanitation protocols and clean cooking practices.'
    ],
    idealEnvironments: [
      'Industrial textile canteens and factory dining halls.',
      'Corporate guest houses and executive mess arrangements.',
      'Private residential villas and VIP estates.'
    ],
    verificationStandards: [
      'Medical laboratory hepatitis B/C and salmonella clear certification.',
      'Background character verification and residential record audits.',
      'Practical cooking audition evaluated by senior hospitality evaluators.'
    ]
  },
  {
    id: 'gardeners',
    categoryNumber: '04',
    name: 'Gardeners (Mali)',
    nameUrdu: 'مالی / باغبانی عملہ',
    badge: 'Horticulture',
    badgeUrdu: 'ہارٹیکلچر',
    description: 'Landscape maintenance, lawn grooming, plant nursery management for estates.',
    descriptionUrdu: 'لان کی کٹائی، موسمی پھول اور فیکٹری و رہائشی باغات کی نگہداشت۔',
    fullOverview: 'Passionate and experienced groundsmen capable of commercial lawn mowing, seasonal floral bed pruning, hedge shaping, automatic sprinkler oversight, and organic soil fertilization for corporate parks and villas.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPX3vJwzqjpMa_WETuFal_7E_AuqqdLR0XWm7D1cOHH98FcLsQGg1VZ2p6_95CXmUgQy8Olg71s-pQf_rhvuLwf4bQ546gMoWPmWDSYDLuBbIwB3UMj0gP6R3mc8f0JwUyDGaXNS3KfMgi-w9iWAyyjaDaoaU2JVqWDWuBeWDVhhrKEtv23I0AIU5xXOaK-jZWvrah3BcqimCgzc-2rjuoaLZO6GU_f160fBP9ufoVtMRj4ZJ0uQQEDg',
    icon: 'Trees',
    division: 'Workforce',
    licensingSpec: 'Horticulture & Landscaping Experienced',
    vettingSpec: 'Biometric NADRA + Address Verification',
    deploymentRounds: 'Daily Morning / Full-time Roster',
    tags: ['Lawn Specialist', 'Seasonal Flora', 'Irrigation Oversight', 'Pruning Pro'],
    responsibilities: [
      'Turf aeration, edging, mowing, weed elimination, and grass fertilizer scheduling.',
      'Plant disease diagnosis, pesticide application adhering to plant safety standards.',
      'Tree pruning and flowerbed ornamentation across facility perimeters.'
    ],
    idealEnvironments: [
      'Textile mill landscaped entrances and corporate front greens.',
      'Residential bungalows and farmhouse estates along Canal Road.',
      'Educational campuses and recreation grounds.'
    ],
    verificationStandards: [
      'NADRA biometric and local police clearance certificates.',
      'Proven background in formal gardening or estate nursery care.'
    ]
  },
  {
    id: 'office-boys',
    categoryNumber: '05',
    name: 'Office Boys & Support',
    nameUrdu: 'آفس بوائے و دفتری معاونت',
    badge: 'Corporate Help',
    badgeUrdu: 'دفتری مدد',
    description: 'Tea preparation, file transfers, mail dispatch, and everyday executive assistance.',
    descriptionUrdu: 'چائے و ضیافت، فائل ہینڈلنگ، ڈاک اور ایگزیکٹو معاونت۔',
    fullOverview: 'Attentive, trustworthy personnel ensuring seamless daily corporate floor operations. From executive meeting hospitality and tea service to document photocopying, internal file distribution, bank errands, and pantry upkeep.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGiz4JM52-K-ResPQ0Vdss8VtW1SaTV4vlyq7dFfocpKMP0MFg0R6sKse0Lxh7k3jCx-VG5TA1jZYluDW6cGrufZrgiYdPHOT0eRBfEkk1XBh9lAHnlv7buFBm6F9Mjjb8ki3H4r6xx4lsHe4SAEfhlN9-JqtivNBj6qI9i8LMszm6_pWOSiCuX3TXgmMGg4WxoWBDeCPopk8ZByQYpCRYbjcDMl_bqwJSharopMkmEP2dS1QdHseFtw',
    icon: 'Briefcase',
    division: 'Workforce',
    licensingSpec: 'Corporate Etiquette & Office Protocol Trained',
    vettingSpec: 'NADRA Biometric + Criminal Record Clear',
    deploymentRounds: 'Standard 8h-9h Business Hours',
    tags: ['Punctual', 'Etiquette Trained', 'Hospitality Ready', 'Trustworthy'],
    responsibilities: [
      'Executive boardroom refreshment service, tea/coffee making, and table clearing.',
      'Photocopying, confidential document delivery between internal departments.',
      'Pantry sanitization, office supply replenishment, and external mail errands.'
    ],
    idealEnvironments: [
      'Corporate textile head offices and export management houses.',
      'Chartered accountant firms, banks, and legal advisory chambers.',
      'IT software companies and tech incubators in Kohinoor City.'
    ],
    verificationStandards: [
      'Police clearance verification and residential address confirmation.',
      'Clean hygiene and grooming orientation before site dispatch.'
    ]
  },
  {
    id: 'receptionists',
    categoryNumber: '06',
    name: 'Receptionists & Front Desk',
    nameUrdu: 'ریسیپشنسٹ و فرنٹ ڈیسک',
    badge: 'Front Desk',
    badgeUrdu: 'فرنٹ ڈیسک',
    description: 'Guest greeting, PBX telephone exchange management, and appointments handling.',
    descriptionUrdu: 'شائستہ استقبال، فون ایکسچینج اور ملاقاتیوں کے ریکارڈ کا انتظام۔',
    fullOverview: 'Articulate, poised front desk coordinators responsible for ambassadorial greeting, visitor identity verification, digital badge issuing, EPABX switchboard call management, and meeting hall scheduling.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3tkyDv2wHIlQWNvZsz6UZAE1TAPKNNh0nOuq-DfwIYEqnquEUnFbKcvyjl-Smj-hn75kd-igw_ZdjZOtNq58MVX8tcfickDEDwKnyT69F-04hPC950pvVYeiRVw7GlmPdaF4xpynCkGrsmrA7GzqH5ijYzCZ0wOki5PdCnBQdwhdjhdoxaEOgbiamWG1HdygI3JPd6vsk73x0Unh_JJXwOU6HpZ_qFNqZX10EUIy-aOEg6ztTnZDKOg',
    icon: 'UserCheck',
    division: 'Workforce',
    licensingSpec: 'Bilingual Communication & Basic IT Literate',
    vettingSpec: 'Education Verified + Police Clearance',
    deploymentRounds: 'Shift Duty / Corporate Day Hours',
    tags: ['Bilingual', 'Computer Literate', 'Gatekeeper Screening', 'Poised'],
    responsibilities: [
      'Warm greeting of corporate visitors and verification against pre-cleared access lists.',
      'Switchboard call routing, caller screening, and urgent message logging.',
      'Management of executive appointment schedules and incoming dispatch parcels.'
    ],
    idealEnvironments: [
      'Textile mill administrative buildings and corporate reception lobbies.',
      'Private hospitals and diagnostic centers on Jaranwala Road.',
      'Commercial business towers in Civil Lines and Peoples Colony.'
    ],
    verificationStandards: [
      'Educational certificate verification and communication test benchmarks.',
      'NADRA biometric scan and character background checks.'
    ]
  },
  {
    id: 'cleaning-staff',
    categoryNumber: '07',
    name: 'Cleaning & Janitorial',
    nameUrdu: 'صفائی عملہ و جانٹرز',
    badge: 'Facility Care',
    badgeUrdu: 'فیسلٹی کیئر',
    description: 'Deep floor sanitization, washroom hygiene maintenance, and window cleaning.',
    descriptionUrdu: 'فرشوں کی مشینی دھلائی، باتھ روم صفائی اور جامع جراثیم کشی۔',
    fullOverview: 'Full-spectrum commercial sanitation teams trained on high-traffic floor scrubbers, chemical sanitization, restroom deep cleansing, and post-construction site clearing. Maintaining pristine corporate standards across plants and offices.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCByWik1blS6EaNgAePhznxXZRbTw3omXtfLzY9WBTh4YOPD8Jua8fbQ-V7djutW_vphaYlZgPwUEmZuRwK1kWulM5qMmR5Lr1I_cE6-o3fUEpXf8MO-EC8aD9u6GDXwky3wwZzN7IRCt1OxpIScJhCFO9_r0KeoarDX5jQRFXrKObr0ZkElKjdC0ZkjIksd7PKmVq432nylC7gXkDwjdZ8nvfimYyBKvuwYZhLdUTmz7xq4Y8n-shXGQ',
    icon: 'Sparkles',
    division: 'Workforce',
    licensingSpec: 'Chemical & Industrial Sanitation Equipment Trained',
    vettingSpec: 'Medical Physical Fitness + Police Verification',
    deploymentRounds: 'Day / Evening / Night Shifts',
    tags: ['Equipment Trained', 'Shift Rotational', 'Restroom Sanitation', 'Deep Scrubbing'],
    responsibilities: [
      'Floor buffing, vacuuming, and industrial automated scrubbing of lobby surfaces.',
      'Continuous disinfection cycles for washrooms, kitchens, and high-touch areas.',
      'Proper waste segregation and garbage disposal under industrial guidelines.'
    ],
    idealEnvironments: [
      'Industrial textile plants, garment export units, and spinning floors.',
      'Commercial shopping malls, retail chains, and corporate plazas.',
      'Academic universities, private colleges, and large event spaces.'
    ],
    verificationStandards: [
      'NADRA verification and medical screening for infectious diseases.',
      'Supervised trial run demonstrating machinery operations and safety PPE.'
    ]
  },
  {
    id: 'factory-workers',
    categoryNumber: '08',
    name: 'Factory Workers',
    nameUrdu: 'فیکٹری ورکرز',
    badge: 'Textile & Mfg',
    badgeUrdu: 'ٹیکسٹائل و مینوفیکچرنگ',
    description: 'Assembly line labor, weaving & finishing helpers for industrial clusters.',
    descriptionUrdu: 'اسمبلی لائن ورکرز، سلائی و بنائی معاونین برائے صنعتی یونٹس۔',
    fullOverview: 'Textile stitching, fabric inspection, packing operators, yarn handling, and assembly line operators trained for heavy shift demands across Faisalabad industrial estates and SEZs.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY1qG-kAOlSi-dtQ1aMteQs4a0D26dJjfltX003OojDeiUsq1Iv98h-RPBVyk4J0xqLkQ6RjeCw4-M3UG5AV6GtCMzSy2kMzxJkeT0jIHD6Hq-kB6ZLbhBhsJsst7fXUIYpBsrAzvm14OSm50btx646At6LEZdHXBW0ZzdwN-wzo4R3bcll7gKttBwaJ8wcF6bwAl_DNhYRTi0y-P-NRbjptXj9aBp__Mcz0VzC_od3P-jYrEcAwWMBA',
    icon: 'Factory',
    division: 'Industrial',
    licensingSpec: 'Industrial Safety & Machinery Compliance Briefed',
    vettingSpec: 'NADRA Biometric Verification Clear',
    deploymentRounds: 'A/B/C Rotational 8h Shifts',
    tags: ['Heavy Shift Ready', 'Safety Vetted', 'Textile Pro', 'Assembly Line'],
    responsibilities: [
      'Assisting on high-speed fabric folding, stitching, and finishing conveyor systems.',
      'Material movement between dye houses, weaving sections, and packing bays.',
      'Strict adherence to factory floor personal protective equipment (PPE) rules.'
    ],
    idealEnvironments: [
      'Value Addition City (VAC) Faisalabad.',
      'M-3 Industrial City, Sahianwala Special Economic Zone.',
      'Small Industrial Estate and Jhang Road industrial clusters.'
    ],
    verificationStandards: [
      'Biometric authentication against national databases.',
      'Drug screening panel and physical endurance assessment.'
    ]
  },
  {
    id: 'warehouse-workers',
    categoryNumber: '09',
    name: 'Warehouse Workers',
    nameUrdu: 'گودام ورکرز',
    badge: 'Supply Chain',
    badgeUrdu: 'سپلائی چین',
    description: 'Stock staging, cargo loading / unloading, pallet organization & inventory audits.',
    descriptionUrdu: 'سامان لوڈنگ و ان لوڈنگ، اسٹاک ہینڈلنگ اور بارکوڈ اسکیننگ۔',
    fullOverview: 'Hardworking logistics assistants trained in carton palletization, barcode scanning, dispatch staging, truck loading/unloading, and stock loss prevention protocols.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPX3vJwzqjpMa_WETuFal_7E_AuqqdLR0XWm7D1cOHH98FcLsQGg1VZ2p6_95CXmUgQy8Olg71s-pQf_rhvuLwf4bQ546gMoWPmWDSYDLuBbIwB3UMj0gP6R3mc8f0JwUyDGaXNS3KfMgi-w9iWAyyjaDaoaU2JVqWDWuBeWDVhhrKEtv23I0AIU5xXOaK-jZWvrah3BcqimCgzc-2rjuoaLZO6GU_f160fBP9ufoVtMRj4ZJ0uQQEDg',
    icon: 'Package',
    division: 'Industrial',
    licensingSpec: 'Logistics Safety & Heavy Lifting Certified',
    vettingSpec: 'NADRA Verification + Police Record Check',
    deploymentRounds: 'Rotational Shifts / Peak Surge Cover',
    tags: ['Physical Stamina', 'Barcode Scanning', 'Cargo Staging', 'Loss Prevention'],
    responsibilities: [
      'Receiving raw goods, scanning shipment waybills, and shelf placement.',
      'Safe manual and pallet-jack movement of heavy commercial cartons.',
      'Executing physical inventory counts and spotting cargo discrepancies.'
    ],
    idealEnvironments: [
      'Dry Port logistics facilities and bonded customs warehouses.',
      'FMCG distribution terminals along Sargodha Road.',
      'Textile export consolidation warehouses.'
    ],
    verificationStandards: [
      'Police clearance ensuring zero prior theft records.',
      'Medical musculoskeletal fitness for lifting and repetitive movement.'
    ]
  },
  {
    id: 'electricians',
    categoryNumber: '10',
    name: 'Electricians',
    nameUrdu: 'الیکٹریشن',
    badge: 'Technical',
    badgeUrdu: 'ٹیکنیکل',
    description: 'High & low voltage wiring, commercial breaker diagnosis, generator hookups.',
    descriptionUrdu: 'تھری فیز وائرنگ، سرکٹ بریکر مرمت اور جنریٹر فالٹ ڈائیگنوسس۔',
    fullOverview: 'Certified technical tradesmen skilled in three-phase commercial power distribution, distribution board (DB) wiring, UPS & diesel generator switchgear hookups, solar inverter wiring, and prompt short-circuit repair.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY1qG-kAOlSi-dtQ1aMteQs4a0D26dJjfltX003OojDeiUsq1Iv98h-RPBVyk4J0xqLkQ6RjeCw4-M3UG5AV6GtCMzSy2kMzxJkeT0jIHD6Hq-kB6ZLbhBhsJsst7fXUIYpBsrAzvm14OSm50btx646At6LEZdHXBW0ZzdwN-wzo4R3bcll7gKttBwaJ8wcF6bwAl_DNhYRTi0y-P-NRbjptXj9aBp__Mcz0VzC_od3P-jYrEcAwWMBA',
    icon: 'Zap',
    division: 'Industrial',
    licensingSpec: 'DAE / TEVTA Trade Diploma Verified',
    vettingSpec: 'Technical Skill Audited + Police Certificate',
    deploymentRounds: 'On-Call / Resident Facility Maintenance',
    tags: ['Diploma / TEVTA', 'Three Phase Pro', 'Solar Ready', 'Rapid Diagnosis'],
    responsibilities: [
      'Wiring inspection, power load calculation, and circuit overload prevention.',
      'Preventative motor testing and automated transfer switch (ATS) maintenance.',
      'Immediate intervention during plant electrical cutouts and power spikes.'
    ],
    idealEnvironments: [
      'Spinning and weaving production floors requiring 24/7 power stability.',
      'Corporate high-rise buildings and shopping arcades.',
      'Hospitals and cold storage plants dependent on zero power interruptions.'
    ],
    verificationStandards: [
      'Validation of technical certification (TEVTA / PBTE / Technical Board).',
      'Practical multimeter, insulation test, and schematic reading audit.'
    ]
  },
  {
    id: 'masons',
    categoryNumber: '11',
    name: 'Masons (Mistri)',
    nameUrdu: 'معمار / راج مستری',
    badge: 'Construction',
    badgeUrdu: 'تعمیراتی',
    description: 'Bricklaying, plastering, marble tiling, structural repairs & renovation works.',
    descriptionUrdu: 'اینٹوں کی چنائی، سیمنٹ پلستر، ماربل ٹائل اور فیکٹری مرمت۔',
    fullOverview: 'Master craftsmen specialized in civil structural maintenance, boundary wall construction, concrete slab patching, tile and marble installation, water seepage remediation, and structural renovations.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY1qG-kAOlSi-dtQ1aMteQs4a0D26dJjfltX003OojDeiUsq1Iv98h-RPBVyk4J0xqLkQ6RjeCw4-M3UG5AV6GtCMzSy2kMzxJkeT0jIHD6Hq-kB6ZLbhBhsJsst7fXUIYpBsrAzvm14OSm50btx646At6LEZdHXBW0ZzdwN-wzo4R3bcll7gKttBwaJ8wcF6bwAl_DNhYRTi0y-P-NRbjptXj9aBp__Mcz0VzC_od3P-jYrEcAwWMBA',
    icon: 'Hammer',
    division: 'Industrial',
    licensingSpec: 'Civil Construction & Masonry Proven Experience',
    vettingSpec: 'NADRA Biometrics + Background Reference Clear',
    deploymentRounds: 'Project Contract / Daily Master Labor',
    tags: ['Brick & Plaster', 'Tile Layouts', 'Waterproofing', 'Site Vetted'],
    responsibilities: [
      'Precision bricklaying according to civil drawings and plumb-line guidelines.',
      'High-quality cement plaster application with smooth crack-free finishing.',
      'Industrial floor tile alignment and chemical grout waterproofing.'
    ],
    idealEnvironments: [
      'Industrial plant construction additions and perimeter wall maintenance.',
      'Commercial plaza refurbishment and marble renovation.',
      'Residential housing developments and private villas.'
    ],
    verificationStandards: [
      'Site portfolio review and inspection of prior completed civil projects.',
      'Verification of identity through NADRA biometrics.'
    ]
  },
  {
    id: 'waiters',
    categoryNumber: '12',
    name: 'Waiters & Hospitality Staff',
    nameUrdu: 'ویٹرز و ضیافت عملہ',
    badge: 'Catering',
    badgeUrdu: 'کیٹرنگ و ضیافت',
    description: 'Executive table serving, corporate banquet staff, tea-service for meeting rooms.',
    descriptionUrdu: 'ایگزیکٹو ڈائننگ سروس، کانفرنس روم چائے اور بینکوئٹ سروس۔',
    fullOverview: 'Refined, groomed waitstaff delivering courteous corporate dining service, VIP meeting buffet coordination, tea/snack silver service, and professional banquet table etiquette for high-profile business gatherings.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr8P_9pVMcdZPxS4t5MPXqq2gbmZ0GQoSYVLqvuj1EquSt1Svnd4cSs6dS3dq15XOPgP4Ub8ql5qvbxiI3UFExJcH_dY4t_9Kx5pC6QGLdofiBT3r2OOacYvAFfbDpHUchQmBhORnQpj_YHWdGtsXrYrXGHkxKCKJwwe-Y2kg64JfA0abkVzdLvmCA8ZIhxzglV7RevdpLGf1JUIOjXWRpIVO4JbTbDScy-P-kk1Z0maqfUA09K_9wGw',
    icon: 'Coffee',
    division: 'Workforce',
    licensingSpec: 'Hospitality Etiquette & Banquet Protocols Trained',
    vettingSpec: 'Medical Hygiene Certified + Police Clearance',
    deploymentRounds: 'Event-Based / Permanent Executive Dining',
    tags: ['Event Groomed', 'Customer Courteous', 'Silver Service', 'Punctual'],
    responsibilities: [
      'Setting formal table cutlery, glassware, and boardroom catering layouts.',
      'Attentive table service adhering to hygiene and discreet protocol.',
      'Beverage and hot meal replenishment during extended executive summits.'
    ],
    idealEnvironments: [
      'Mill director executive dining lounges and corporate boardrooms.',
      'Chamber of Commerce banquets and corporate hospitality suites.',
      'Private estate dinners and executive guest accommodations.'
    ],
    verificationStandards: [
      'Medical screening for food handler cleanliness and hygiene.',
      'Evaluation on etiquette, deportment, and table serving decorum.'
    ]
  }
];
