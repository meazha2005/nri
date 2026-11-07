export interface Property {
  id: string;
  title: string;
  tamilTitle?: string;
  location: string;
  city: 'Chennai' | 'Coimbatore' | 'Madurai & Trichy' | 'Hosur' | 'Nilgiris';
  type: 'Luxury Villa' | 'Gated Community Plot' | 'High-Yield Apartment' | 'Holiday Estate';
  priceINR: number; // in Rupees
  priceDisplay: string;
  size: string;
  bhk?: string;
  approvals: string[];
  reraId: string;
  features: string[];
  image: string;
  rentalYield: string;
  appreciationRate: string;
  readyToRegister: boolean;
  coordinates?: string;
  description: string;
}

export const PROPERTIES: Property[] = [
  {
    id: "prop-ecr-bayview",
    title: "The Bayview Sanctuary",
    tamilTitle: "பேவியூ சாங்க்சுவரி • கிழக்கு கடற்கரை சாலை",
    location: "ECR Coastal Corridor, Chennai",
    city: "Chennai",
    type: "Luxury Villa",
    priceINR: 38500000,
    priceDisplay: "₹3.85 Cr",
    size: "3,850 sq.ft (1.5 Grounds)",
    bhk: "4 BHK + Private Pool",
    approvals: ["CMDA Approved", "RERA Registered", "Clear 30-Yr Patta", "Coastal Zone NOC"],
    reraId: "TN/01/Building/0248/2024",
    features: [
      "400m from Sea Breeze Shoreline",
      "Private Heated Plunge Pool & Deck",
      "Remote PoA Registration Available",
      "Quarterly Drone Surveillance"
    ],
    image: "/hero-villa.jpg",
    rentalYield: "7.2% p.a.",
    appreciationRate: "14.5% CAGR",
    readyToRegister: true,
    description: "An exclusive beachfront contemporary enclave designed for discerning NRIs. Features smart biometric security, Italian marble flooring, lush coconut grove landscape, and complete remote rental management."
  },
  {
    id: "prop-cbe-mayflower",
    title: "Nilgiri Foothills Eco-Villas",
    tamilTitle: "நீலகிரி அடிவாரம் எக்கோ வில்லாக்கள்",
    location: "Saravanampatti - Avinashi Road Corridor, Coimbatore",
    city: "Coimbatore",
    type: "Luxury Villa",
    priceINR: 21500000,
    priceDisplay: "₹2.15 Cr",
    size: "2,900 sq.ft (6.5 Cents)",
    bhk: "3 & 4 BHK Duplex",
    approvals: ["DTCP Approved", "RERA Registered", "Zero Litigation Patta", "Panchayat NOC"],
    reraId: "TN/11/Building/0192/2024",
    features: [
      "Panoramic Western Ghats Hill Views",
      "12 Minutes to TIDEL Park Coimbatore",
      "100% Solar-Powered Gated Enclave",
      "Clubhouse with Ayurvedic Wellness Spa"
    ],
    image: "/coimbatore-villa.jpg",
    rentalYield: "6.4% p.a.",
    appreciationRate: "16.2% CAGR",
    readyToRegister: true,
    description: "Nestled at the breezy foothills of the Western Ghats with pure mountain groundwater. Engineered for peaceful retirement or high-yielding corporate rental tenancy."
  },
  {
    id: "prop-hosur-horizon",
    title: "Silicon Horizon Aero-Plots",
    tamilTitle: "சிலிகான் ஹாரிஸான் ஏரோ-பிளாட்டுகள்",
    location: "Bagalur - Hosur Tech Belt (Bengaluru Satellite)",
    city: "Hosur",
    type: "Gated Community Plot",
    priceINR: 5400000,
    priceDisplay: "₹54 Lakhs",
    size: "1,800 sq.ft (4.13 Cents)",
    approvals: ["HNTDA Approved", "RERA Registered", "Individual Patta Chitta", "Bank Loan 80%"],
    reraId: "TN/19/Layout/0315/2024",
    features: [
      "22 mins to Bengaluru Electronic City",
      "Adjoining Upcoming Hosur International Airport Hub",
      "Underground Cabling & 40ft Asphalt Roads",
      "Compound Fenced with GPS Survey Stones"
    ],
    image: "/hosur-plot.jpg",
    rentalYield: "N/A (Capital Asset)",
    appreciationRate: "21.8% CAGR",
    readyToRegister: true,
    description: "High-velocity wealth multiplier zone. Positioned in the prime expansion corridor of Tata Electronics and Ather Energy tech corridor with guaranteed title clarity."
  },
  {
    id: "prop-omr-pearl",
    title: "Marina Pearl Sky Residences",
    tamilTitle: "மெரினா பேர்ல் ஸ்கை ரெசிடன்சிஸ் • ஒ.எம்.ஆர்",
    location: "OMR IT Expressway, Sholinganallur, Chennai",
    city: "Chennai",
    type: "High-Yield Apartment",
    priceINR: 16800000,
    priceDisplay: "₹1.68 Cr",
    size: "2,150 sq.ft",
    bhk: "3 BHK Luxury High-Rise",
    approvals: ["CMDA Approved", "RERA Registered", "RERA Compliant Escrow", "Fire NOC"],
    reraId: "TN/01/Building/0589/2023",
    features: [
      "Walk to Chennai Metro Phase 2 Station",
      "Furnished & Tenant-Ready for IT Expats",
      "Pre-leased Option: ₹65,000/mo into NRO Account",
      "Olympic Lap Pool, Gym & Co-working Lounge"
    ],
    image: "/hero-villa.jpg",
    rentalYield: "6.8% p.a.",
    appreciationRate: "13.8% CAGR",
    readyToRegister: true,
    description: "Premium high-rise apartment in the beating heart of Chennai's Silicon Corridor. 100% turnkey tenancy management so you receive foreign repatriation effortlessly."
  },
  {
    id: "prop-madurai-vaigai",
    title: "Vaigai Heritage Grand Enclave",
    tamilTitle: "வைகை ஹெரிடேஜ் கிராண்ட் என்கிளேவ் • மதுரை",
    location: "Ring Road Bypass, Madurai",
    city: "Madurai & Trichy",
    type: "Gated Community Plot",
    priceINR: 4800000,
    priceDisplay: "₹48 Lakhs",
    size: "2,400 sq.ft (5.5 Cents)",
    approvals: ["DTCP Approved", "RERA Registered", "30-Yr Encumbrance Free", "Clear Patta"],
    reraId: "TN/20/Layout/0188/2024",
    features: [
      "10 mins to Madurai AIIMS & International Airport",
      "Heritage-themed Grand Arch & 24/7 Security",
      "Sweet Vaigai Aquifer Potable Water",
      "Perimeter Boundary Wall with Individual Gate"
    ],
    image: "/coimbatore-villa.jpg",
    rentalYield: "N/A (Capital Asset)",
    appreciationRate: "15.4% CAGR",
    readyToRegister: true,
    description: "Secure your ancestral grounding in the cultural capital of Tamil Nadu. High-liquidity villa plots located on the booming 4-lane Ring Road with rapid appreciation."
  },
  {
    id: "prop-trichy-srirangam",
    title: "Kaveri Riverfront Sanctuary",
    tamilTitle: "காவிரி ரிவர்ஃபிரண்ட் சாங்க்சுவரி • திருவரங்கம்",
    location: "Srirangam Bypass, Trichy",
    city: "Madurai & Trichy",
    type: "Luxury Villa",
    priceINR: 12500000,
    priceDisplay: "₹1.25 Cr",
    size: "2,200 sq.ft (4.8 Cents)",
    bhk: "3 BHK Traditional Villa",
    approvals: ["DTCP Approved", "RERA Registered", "Panchayat Sanctioned", "Heritage Zone NOC"],
    reraId: "TN/17/Building/0091/2024",
    features: [
      "Walkable Distance to Sri Ranganathaswamy Temple",
      "Traditional Thinnai & Courtyard Architecture with Modern Tech",
      "Lush Organic Fruit Orchard Plantation",
      "Caretaker & Concierge Service Included"
    ],
    image: "/hero-villa.jpg",
    rentalYield: "5.8% p.a.",
    appreciationRate: "12.9% CAGR",
    readyToRegister: true,
    description: "Designed for devotional peace and heritage reconnection. Modern luxury amenities wrapped in classical Dravidian courtyards, ideal for visiting NRIs and retirees."
  }
];

export const CORRIDOR_STATS = [
  {
    city: "Chennai OMR & ECR",
    growth5Yr: "+84%",
    avgRentalYield: "6.5% - 7.5%",
    topDrivers: "Metro Phase 2, FinTech City, Global GCC Centers, ECR Coastal Luxury",
    highlight: "Preferred by US & Singapore Tech NRIs"
  },
  {
    city: "Coimbatore Avinashi Belt",
    growth5Yr: "+92%",
    avgRentalYield: "5.8% - 6.8%",
    topDrivers: "TIDEL Park II, Western Ring Road, Defense Corridor, Clean Climate",
    highlight: "Top Pick for Retirement & Vacation Villas"
  },
  {
    city: "Hosur & Krishnagiri",
    growth5Yr: "+128%",
    avgRentalYield: "7.0% - 8.2%",
    topDrivers: "Bengaluru Satellite Metro, Tata Electronics Mega Park, EV Industrial Hub",
    highlight: "Highest Capital Appreciation Multiplier"
  },
  {
    city: "Madurai & Trichy Corridors",
    growth5Yr: "+76%",
    avgRentalYield: "5.2% - 6.0%",
    topDrivers: "Madurai AIIMS, Smart City Infrastructure, Airport Expansion, Heritage Tourism",
    highlight: "Ancestral Homeland Pride & Secure Land Wealth"
  }
];
