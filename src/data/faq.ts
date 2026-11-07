export interface FAQItem {
  id: string;
  category: 'Legal' | 'Remote Buying & PoA' | 'Tax & Banking' | 'Safety & Management';
  question: string;
  tamilQuestion?: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Legal",
    question: "Can an NRI buy land, plots, and residential houses in Tamil Nadu?",
    tamilQuestion: "வெளிநாடு வாழ் தமிழர் தமிழ்நாட்டில் நிலம், பிளாட் அல்லது வீடு வாங்க முடியுமா?",
    answer: "Yes, absolutely! Under RBI and FEMA (Foreign Exchange Management Act) regulations, Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) can freely acquire any number of residential properties, residential plots (DTCP/CMDA approved), and commercial real estate in India. Note that agricultural land, plantation property, and farm houses are restricted by RBI unless acquired through inheritance."
  },
  {
    id: "faq-2",
    category: "Remote Buying & PoA",
    question: "How does remote property registration work if I cannot fly down to India?",
    tamilQuestion: "இந்தியா வராமல் தொலைதூரத்திலிருந்தே பதிவு (Remote Registration) செய்வது எப்படி?",
    answer: "You do not need to take leave or travel to India. We execute a Special Power of Attorney (PoA) in favour of your trusted relative or our vetted senior legal advocate. We draft the PoA, you get it attested at your local Indian Embassy / Consulate or apostilled by a notary public in your home country, and courier it to Tamil Nadu. Our team gets it adjudicated at the District Registrar office and completes registration at the Sub-Registrar Office in your name."
  },
  {
    id: "faq-3",
    category: "Tax & Banking",
    question: "Which bank accounts must I use, and how can I repatriate rental or sale proceeds?",
    tamilQuestion: "எந்த வங்கி கணக்கு பயன்படுத்த வேண்டும்? வருமானத்தை வெளிநாட்டுக்கு மாற்றுவது எப்படி?",
    answer: "All purchase payments must be made in Indian Rupees through normal banking channels via funds maintained in your NRE (Non-Resident External) or NRO (Non-Resident Ordinary) account, or via inward foreign remittance. Rental income is deposited into your NRO account and can be repatriated overseas up to $1,000,000 USD per financial year under RBI's Liberalised Remittance Scheme upon Form 15CA and 15CB certification by a Chartered Accountant. Our in-house CA team provides end-to-end filing support."
  },
  {
    id: "faq-4",
    category: "Legal",
    question: "What specific legal due diligence does Tamil NRI Real Estate conduct?",
    tamilQuestion: "எங்கள் சொத்தின் சட்டப்பூர்வ சரிபார்ப்புகள் என்னென்ன செய்யப்படுகின்றன?",
    answer: "Our Senior High Court Advocates conduct a rigorous 12-point title audit: 1) 30-year Encumbrance Certificate (Villangam) for nil prior mortgages, 2) Revenue Patta, Chitta, and Adangal in the seller's name, 3) Complete Parent Document link chain (Mother Deeds), 4) CMDA / DTCP / HNTDA layout and planning permission approvals, 5) RERA registration verification, 6) Family tree and legal heir clearance certificate, 7) Land acquisition & coastal regulation zone (CRZ) clearances, and 8) Physical survey and boundary verification."
  },
  {
    id: "faq-5",
    category: "Safety & Management",
    question: "How do you protect my vacant plot or villa from unauthorized encroachment while I am overseas?",
    tamilQuestion: "நான் வெளிநாட்டில் இருக்கும்போது என் காலி நிலம் அல்லது வீடு ஆக்கிரமிக்கப்படாமல் காப்பது எப்படி?",
    answer: "Every land asset we assist you with is physically demarcated with reinforced boundary stones, heavy-duty chain-link fencing or compound wall with an iron gate, and prominent bilingual ownership display boards. Furthermore, our field concierge team conducts quarterly scheduled inspections with geo-tagged high-resolution photos and 4K drone survey video footage delivered straight to your WhatsApp and private client portal."
  },
  {
    id: "faq-6",
    category: "Tax & Banking",
    question: "Can I get an NRI Home Loan in India, and what are the tax benefits?",
    tamilQuestion: "NRI வீட்டுக் கடன் பெற முடியுமா? வரி சலுகைகள் என்னென்ன?",
    answer: "Yes, leading Indian banks (SBI, HDFC, ICICI, Axis) provide up to 75-80% loan-to-value for NRIs with attractive interest rates. EMIs can be deducted directly from your NRE or NRO accounts. NRIs are also eligible for tax deductions on home loan interest under Section 24 and principal repayment under Section 80C against taxable Indian income."
  }
];
