const fs = require('fs');

let content = fs.readFileSync('c:/Users/hirip/Desktop/ProjectsEassylife/arthajuris/app/components/PartnersSection.tsx', 'utf8');

const newTeamText = `const team = [
  {
    id: "mayura-maru",
    name: "Adv. Mayura Maru",
    role: "Founder",
    enrolment: "Enrolment No. MAH/2976/2002",
    highCourt: "High Court O.S. Reg. No. 15412",
    experience: "25+ Years",
    education: [
      "LLB — Kishanchand Chhellaram College, Mumbai University (2002)",
      "BSc — Wilson College, Mumbai University (1998)",
    ],
    expertise: [
      "Corporate & Commercial Law",
      "Real Estate & Property Law",
      "Civil & Family Law",
      "Banking & Finance",
    ],
    bio: "Advocate Mayura Navnit Maru is a senior legal practitioner based in Mumbai, with over 25 years of independent practice before the Bombay High Court and various courts/tribunals across Pan India. Enrolled with the Bar Council of Maharashtra & Goa in 2002, she is proficient in English, Hindi, Gujarati, and Marathi.",
    practiceHighlights: [
      "Landmark PIL (PIL No. 138 of 2012) – Mayura Maru v. State of Maharashtra before the Bombay High Court, challenging unauthorized constructions in Navi Mumbai and Trans-Thane Creek. The case led to strict judicial directions enforcing a 'zero-tolerance' policy against illegal development, compelling authorities like CIDCO, NMMC, and MIDC to act against thousands of unauthorized structures.",
      "Advocacy for investor protection, including representations to SEBI on unregulated online investment platforms.",
      "Bombay High Court, Debts Recovery Tribunal (DRT), Family Courts, District Courts in Mumbai and Raigad."
    ],
    initials: "MM",
    image: "/mayura.png",
    hasDedicatedPage: true,
    dedicatedPageUrl: "/founder",
  },
  {
    id: "uzma-khan",
    name: "Adv. Uzma Khan",
    role: "Senior Associate",
    enrolment: "Bar Council Registered Advocate",
    highCourt: "LL.M. Environmental Law — Mumbai University (2025)",
    experience: "4+ Years",
    education: [
      "LL.M. in Environmental Law — Mumbai University (2025)",
      "Bachelor of Education (B.Ed.) — Aligarh University (2023–2024)",
      "BLS LLB — Dr. D.Y. Patil College of Law, Navi Mumbai (2021)",
      "Diploma in Cyber Law — Dr. D.Y. Patil University (2017)",
    ],
    expertise: [
      "Real Estate & Property Law",
      "Title Search & Due Diligence",
      "Banking Legal Documentation",
      "Business Development & Client Management",
      "IGR & Property Registration",
      "Legal Compliance & Audits",
    ],
    bio: "Adv. Uzma Khan is the firm's Senior Associate, specialising in real estate law, banking documentation, and property due diligence. With extensive experience at Xpress Legal and AAN Legal & Associates, she has successfully led the preparation of retail title search reports, APF reports, and complex property due diligence for major financial institutions including Punjab National Bank, Bank of India, and CANFIN Homes. She is highly skilled in conducting advanced property due diligence, examining encumbrances, scrutinizing sale deeds, and managing mutation processes.",
    practiceHighlights: [
      "Led preparation of Retail Title Search Reports and APF Reports.",
      "Facilitated empanelment of major financial institutions for legal services.",
      "Extensive verification of 7/12 Extract, Property Card, and Village Form records.",
      "Conducted legal audits, IGR e-filing, and title chains analysis.",
      "Managed end-to-end client communication and business development for banking clients.",
    ],
    initials: "UK",
    image: "/uzma_v2.jpg",
    hasDedicatedPage: false,
  },
  {
    id: "pratap-temgire",
    name: "Adv. Pratap Temgire",
    role: "Associate",
    enrolment: "Bar Council of Maharashtra & Goa (2022)",
    highCourt: "Bar Council of India (2023) | CLAT PG AIR 242",
    experience: "3+ Years",
    education: [
      "LL.M. — Maharashtra National Law University (MNLU), 2025 (72.01%)",
      "BLS LLB — University of Mumbai, 2022 (63.75%)",
      "Certificate Course in IPR",
    ],
    expertise: [
      "Corporate & Commercial Law",
      "Banking & DRT (SARFAESI, RDB Act)",
      "Negotiable Instruments Act (Sec. 138)",
      "Civil & Criminal Litigation",
      "Legal Research & Drafting",
      "Intellectual Property Rights",
    ],
    bio: "Adv. Pratap Temgire is a dynamic Associate with a strong academic foundation from Maharashtra National Law University (MNLU). He has significant hands-on experience representing clients before the Bombay High Court, DRT, DRAT, and district courts. With core expertise in banking litigation, SARFAESI proceedings, Section 138 NI Act matters, and corporate law, Pratap has a meticulous approach to drafting applications, defending counterclaims, and presenting evidence. He is also a celebrated national moot court champion with a passion for precise legal research and advocacy.",
    practiceHighlights: [
      "Drafting and arguing SARFAESI and RDB Act applications before DRT and DRAT.",
      "Handling high-volume Section 138 NI Act cases on behalf of banks and financial institutions.",
      "Extensive appearances in Bombay City Civil Court and Metropolitan Magistrate Court.",
      "Defending counter claims and securitization applications before DRT.",
      "Secured AIR 242 in CLAT PG 2024 and won multiple national moot court competitions.",
    ],
    initials: "PT",
    image: "/pratap_v2.jpg",
    hasDedicatedPage: false,
  },
];`;

const start = content.indexOf('const team = [');
const end = content.indexOf('export default function PartnersSection()');

if (start !== -1 && end !== -1) {
  content = content.substring(0, start) + newTeamText + '\n\n' + content.substring(end);
  fs.writeFileSync('c:/Users/hirip/Desktop/ProjectsEassylife/arthajuris/app/components/PartnersSection.tsx', content, 'utf8');
  console.log('Successfully updated profiles in PartnersSection.tsx');
} else {
  console.error('Could not find team array in PartnersSection.tsx');
}
