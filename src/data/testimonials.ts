export interface Testimonial {
  id: string;
  name: string;
  tamilName?: string;
  initials: string;
  role: string;
  country: string;
  countryFlag: string;
  cityInTN: string;
  propertyName: string;
  quote: string;
  avatar?: string;
  verifiedNRI: boolean;
  yearPurchased: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. K. Senthil Nathan & Priya",
    tamilName: "டாக்டர் கே. செந்தில்நாதன் & பிரியா",
    initials: "SN",
    role: "Senior Consultant Cardiologist",
    country: "San Jose, California, USA",
    countryFlag: "🇺🇸",
    cityInTN: "Chennai (ECR)",
    propertyName: "Beachfront Villa at ECR",
    quote: "Living in the Bay Area, our biggest anxiety was document legitimacy and fraudulent sellers. TamilNRIProperty took total charge: high-court legal verification, weekly 4K drone walkthroughs, and arranged the Power of Attorney through the SF Indian Consulate without us taking a single day off from the hospital. The keys were delivered to my brother in Chennai within 45 days!",
    verifiedNRI: true,
    yearPurchased: "2024"
  },
  {
    id: "test-2",
    name: "Murugan Swaminathan",
    tamilName: "முருகன் சுவாமிநாதன்",
    initials: "MS",
    role: "VP of Enterprise Solutions",
    country: "Singapore",
    countryFlag: "🇸🇬",
    cityInTN: "Coimbatore",
    propertyName: "Nilgiri Foothills Eco-Villa",
    quote: "I wanted a calm, clean-air retirement home in Kovai for my parents and for my visits. TamilNRIProperty handled everything: from DTCP clearance to soil testing reports, bank account linkage via DBS NRO, and seamless registration. Their post-purchase property caretaker service gives me complete peace of mind in Singapore.",
    verifiedNRI: true,
    yearPurchased: "2024"
  },
  {
    id: "test-3",
    name: "Ramesh & Jayashree",
    tamilName: "ரமேஷ் & ஜெயஸ்ரீ",
    initials: "RJ",
    role: "Chief Financial Officer",
    country: "Dubai, UAE",
    countryFlag: "🇦🇪",
    cityInTN: "Hosur Tech Corridor",
    propertyName: "2 Gated Villa Plots",
    quote: "With the boom around the Hosur electronics corridor, we wanted land investment with strict legal security. TamilNRIProperty verified the 35-year parent document chain and completed registered boundary fencing with GPS markers. Their CA team also advised us on FEMA compliance and future repatriation rules. Simply unmatched professionalism for Gulf Tamils.",
    verifiedNRI: true,
    yearPurchased: "2023"
  },
  {
    id: "test-4",
    name: "Anandhi Ramanathan",
    tamilName: "ஆனந்தி ராமநாதன்",
    initials: "AR",
    role: "Lead Software Architect",
    country: "London, United Kingdom",
    countryFlag: "🇬🇧",
    cityInTN: "Madurai Bypass",
    propertyName: "Vaigai Heritage Grand Plot",
    quote: "Connecting back to my ancestral roots in Madurai was a long-cherished dream. Buying property 8,000 miles away sounded terrifying until I consulted their team. Transparent pricing, no hidden broker cuts, and a direct digital audit trail. Proud to own prime land in my homeland!",
    verifiedNRI: true,
    yearPurchased: "2024"
  }
];
