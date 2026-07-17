export interface DreamCard {
  id: number;
  icon: string;
  title: string;
  quote: string;
  color: string;
  description: string;
  education: string;
  skills: string[];
  salary: string;
  roadmap: string[];
  eligibility: string;
  institutes: string[];
  futureScope: string;
  inspiration: string;
}

export const dreams: DreamCard[] = [
  {
    id: 1, icon: "⚓", title: "Navy Officer",
    quote: "Defend the seas, protect the nation.",
    color: "from-blue-600 to-cyan-500",
    description: "A Naval Officer serves in the Indian Navy, safeguarding the country's maritime borders, conducting operations at sea, and representing India's naval power globally.",
    education: "B.Tech / B.Sc + NDA or CDS Exam, Naval Academy training",
    skills: ["Leadership", "Navigation", "Combat Training", "Tactical Strategy", "Physical Fitness"],
    salary: "₹56,100 – ₹2,50,000/month",
    roadmap: ["Clear NDA/CDS Exam", "Join Naval Academy Ezhimala", "Midshipman Training", "Sub-Lieutenant posting", "Advance through ranks"],
    eligibility: "Age 16.5–19.5 (NDA), 12th PCM, Physical & Medical Fitness",
    institutes: ["National Defence Academy, Pune", "Indian Naval Academy, Ezhimala", "INA Cochin"],
    futureScope: "Serve India's vast coastline, participate in global naval exercises, rise to Admiral rank.",
    inspiration: "\"The sea is the same as it has been since before men ever went on it in boats.\" – Ernest Hemingway"
  },
  {
    id: 2, icon: "⚡", title: "Electronics Engineer",
    quote: "Circuit by circuit, I build the future.",
    color: "from-yellow-500 to-orange-500",
    description: "Electronics Engineers design, develop, and test electronic equipment and systems used in communication, defense, healthcare, and consumer electronics.",
    education: "B.Tech/B.E. in Electronics & Communication Engineering (4 years)",
    skills: ["Circuit Design", "Embedded Systems", "PCB Design", "VLSI", "Signal Processing"],
    salary: "₹4 LPA – ₹25 LPA",
    roadmap: ["B.Tech ECE", "GATE for M.Tech/PSU", "Core company placement", "Specialize in VLSI/IoT/RF", "Lead R&D teams"],
    eligibility: "12th PCM, JEE/State CET",
    institutes: ["IIT Bombay", "IIT Delhi", "NIT Trichy", "BITS Pilani", "IISc Bangalore"],
    futureScope: "Opportunities in ISRO, DRDO, Intel, Qualcomm, Samsung, and defence research.",
    inspiration: "\"Science is not only a disciple of reason but, also, one of romance and passion.\" – Stephen Hawking"
  },
  {
    id: 3, icon: "🚀", title: "ISRO Scientist",
    quote: "Touch the stars, serve the nation.",
    color: "from-indigo-600 to-purple-600",
    description: "ISRO Scientists design and develop India's space missions — from satellite launches to Mars orbiters — pushing the boundaries of human knowledge and national pride.",
    education: "B.Tech/M.Tech/PhD in ECE, Aerospace, CS, or Mechanical Engineering",
    skills: ["Spacecraft Design", "Orbital Mechanics", "Embedded Systems", "Propulsion", "Research"],
    salary: "₹56,000 – ₹2,20,000/month",
    roadmap: ["B.Tech in relevant field", "GATE score", "ISRO Centralised Recruitment Board exam", "Training at ISRO centres", "Contribute to missions"],
    eligibility: "B.Tech/M.Tech with 65%+, ISRO ICRB Exam",
    institutes: ["IIT Madras", "IIT Kharagpur", "IISc", "VSSC Thiruvananthapuram", "SAC Ahmedabad"],
    futureScope: "Gaganyaan, Chandrayaan, Aditya, and future interplanetary missions.",
    inspiration: "\"Space exploration is not a luxury. It is a necessity.\" – A.P.J. Abdul Kalam"
  },
  {
    id: 4, icon: "🛡️", title: "DRDO Scientist",
    quote: "Technology for national security.",
    color: "from-green-600 to-emerald-500",
    description: "DRDO Scientists research and develop advanced defence technologies including missiles, radar systems, electronic warfare, and armoured vehicles for the Indian Armed Forces.",
    education: "B.Tech/M.Tech/PhD in ECE, CS, Mechanical, or Chemical Engineering",
    skills: ["R&D", "Defence Systems", "Signal Intelligence", "Propulsion", "Cybersecurity"],
    salary: "₹56,000 – ₹2,50,000/month",
    roadmap: ["B.Tech/M.Tech", "GATE + DRDO CEPTAM exam", "Join as Scientist B", "Progress to Scientist G", "Lead national defence projects"],
    eligibility: "B.Tech with 60%+, DRDO SET/CEPTAM exam",
    institutes: ["IIT Delhi", "DIAT Pune", "IISc", "NIT Warangal", "IIIT Hyderabad"],
    futureScope: "Missile systems, AI warfare, drone technology, quantum cryptography.",
    inspiration: "\"Strength respects strength.\" – Kalam on defence self-reliance"
  },
  {
    id: 5, icon: "💻", title: "Web Developer",
    quote: "Code is poetry. The web is my canvas.",
    color: "from-cyan-500 to-blue-500",
    description: "Full Stack Web Developers create end-to-end digital experiences — from pixel-perfect frontends to scalable backend architectures powering millions of users.",
    education: "B.Tech CS/ECE or self-taught with portfolio",
    skills: ["React", "Node.js", "TypeScript", "Databases", "Cloud", "UI/UX"],
    salary: "₹4 LPA – ₹50 LPA+",
    roadmap: ["Learn HTML/CSS/JS", "React & Node.js", "Build projects & portfolio", "Open source contributions", "Join top product company"],
    eligibility: "Any graduate with strong programming skills",
    institutes: ["IIT Bombay", "BITS Pilani", "Self-learning via Coursera/freeCodeCamp"],
    futureScope: "SaaS products, Web3, AI-powered apps, startup founding.",
    inspiration: "\"Any application that can be written in JavaScript, will eventually be written in JavaScript.\" – Atwood's Law"
  },
  {
    id: 6, icon: "🔬", title: "VLSI Engineer",
    quote: "Designing the chips that power civilization.",
    color: "from-violet-600 to-fuchsia-500",
    description: "VLSI Engineers design, verify, and manufacture integrated circuits — the brains inside every smartphone, computer, and AI processor on the planet.",
    education: "B.Tech ECE + M.Tech VLSI Design",
    skills: ["Verilog/VHDL", "Cadence/Synopsys", "RTL Design", "Physical Design", "Verification"],
    salary: "₹6 LPA – ₹40 LPA+",
    roadmap: ["B.Tech ECE with strong circuit fundamentals", "M.Tech VLSI", "Internship at semiconductor company", "VLSI Design Engineer role", "Join Intel/Qualcomm/AMD"],
    eligibility: "B.Tech ECE/EE with GATE",
    institutes: ["IIT Madras", "IIT Bombay", "NIT Trichy", "CEDT Bangalore", "IISc"],
    futureScope: "AI chip design, 3nm/2nm process nodes, neuromorphic computing.",
    inspiration: "\"The complexity of software is an essential property, not an accidental one.\" – Fred Brooks"
  },
  {
    id: 7, icon: "👮", title: "IPS Officer",
    quote: "Justice, integrity, courage — always.",
    color: "from-slate-600 to-blue-700",
    description: "IPS Officers lead police forces across India, maintaining law and order, investigating crimes, and serving as the backbone of India's criminal justice system.",
    education: "Any graduate degree + UPSC Civil Services Examination",
    skills: ["Leadership", "Investigation", "Law Knowledge", "Crisis Management", "Communication"],
    salary: "₹56,100 – ₹2,25,000/month",
    roadmap: ["Graduate in any stream", "UPSC CSE Prelims", "UPSC CSE Mains", "Personality Test/Interview", "SVPNPA Hyderabad training"],
    eligibility: "Age 21–32, Any graduate, Indian citizen",
    institutes: ["Sardar Vallabhbhai Patel NPA, Hyderabad", "IIT/IIM for UPSC prep support"],
    futureScope: "DGP, Commissioner, CBI, RAW, Intelligence Bureau.",
    inspiration: "\"In a gentle way, you can shake the world.\" – Mahatma Gandhi"
  },
  {
    id: 8, icon: "🏛️", title: "IAS Officer",
    quote: "Shape policy. Transform lives.",
    color: "from-amber-600 to-yellow-500",
    description: "IAS Officers are the administrative backbone of India, implementing government policies, managing districts, and driving development at every level of governance.",
    education: "Any graduate degree + UPSC Civil Services Examination",
    skills: ["Policy Analysis", "Administration", "Economics", "Public Speaking", "Decision Making"],
    salary: "₹56,100 – ₹2,50,000/month + perks",
    roadmap: ["Graduate in any stream", "2-year UPSC preparation", "Clear Prelims, Mains, Interview", "LBSNAA Mussoorie training", "District/State/Central posting"],
    eligibility: "Age 21–32, Any graduate, Indian citizen",
    institutes: ["LBSNAA Mussoorie", "Vajiram & Ravi, Delhi (coaching)", "Vision IAS", "ForumIAS"],
    futureScope: "Cabinet Secretary, Chief Secretary, Ambassador, UN roles.",
    inspiration: "\"Be the change you wish to see in the world.\" – Mahatma Gandhi"
  },
  {
    id: 9, icon: "👗", title: "Fashion Designer",
    quote: "Style is a way to say who you are without speaking.",
    color: "from-pink-500 to-rose-500",
    description: "Fashion Designers create clothing and accessories that blend art, culture, and commerce — building brands, defining aesthetics, and influencing global trends.",
    education: "B.Des / B.FTech from NIFT, NID, or Pearl Academy",
    skills: ["Sketching", "Fabric Knowledge", "Pattern Making", "Adobe Illustrator", "Trend Forecasting"],
    salary: "₹3 LPA – ₹30 LPA+",
    roadmap: ["Clear NIFT/NID entrance exam", "4-year design degree", "Internship with fashion house", "Build collection portfolio", "Launch brand or join luxury label"],
    eligibility: "12th passed, creative aptitude",
    institutes: ["NIFT Delhi/Mumbai", "NID Ahmedabad", "Pearl Academy", "Symbiosis Institute of Design"],
    futureScope: "Sustainable fashion, digital couture, metaverse fashion, global brands.",
    inspiration: "\"Fashion is not something that exists in dresses only. Fashion is in the sky, in the street.\" – Coco Chanel"
  },
  {
    id: 10, icon: "💼", title: "Entrepreneur",
    quote: "Build what doesn't exist yet.",
    color: "from-orange-500 to-red-500",
    description: "Entrepreneurs identify problems, build solutions, create companies, and drive economic growth — shaping industries and inspiring future generations.",
    education: "Any field — B.Tech, MBA, or self-taught",
    skills: ["Vision", "Risk Management", "Product Thinking", "Finance", "Team Building", "Sales"],
    salary: "₹0 to unlimited",
    roadmap: ["Develop a unique idea", "Validate with market research", "Build MVP", "Raise funding or bootstrap", "Scale to profitability"],
    eligibility: "Anyone with a vision and resilience",
    institutes: ["IIM Ahmedabad", "IIT Bombay E-Cell", "NSRCEL IIM Bangalore", "T-Hub Hyderabad"],
    futureScope: "AI startups, deeptech, climate tech, fintech — unlimited possibilities.",
    inspiration: "\"The biggest risk is not taking any risk.\" – Mark Zuckerberg"
  },
  {
    id: 11, icon: "🖥️", title: "Software Manager",
    quote: "Lead teams that build the impossible.",
    color: "from-teal-500 to-cyan-600",
    description: "Software Engineering Managers lead technical teams, define product roadmaps, mentor engineers, and bridge the gap between technology and business strategy.",
    education: "B.Tech CS + 5–8 years experience + MBA (optional)",
    skills: ["Team Leadership", "Agile", "System Design", "Stakeholder Management", "Technical Depth"],
    salary: "₹20 LPA – ₹1 Cr+",
    roadmap: ["Strong SDE career", "Senior Engineer role", "Tech Lead", "Engineering Manager", "Director/VP of Engineering"],
    eligibility: "Strong technical background + people skills",
    institutes: ["IIT Bombay", "BITS Pilani", "IIM (for MBA)", "Top product companies"],
    futureScope: "CTO, VP Engineering, founding engineer at startups.",
    inspiration: "\"Management is about human beings.\" – Peter Drucker"
  },
  {
    id: 12, icon: "🏦", title: "Bank Manager",
    quote: "Empower communities through finance.",
    color: "from-emerald-600 to-green-500",
    description: "Bank Managers oversee branch operations, manage customer relationships, drive business growth, and ensure financial health of the institution they serve.",
    education: "B.Com/BBA/B.Tech + IBPS PO/SBI PO exam",
    skills: ["Financial Analysis", "Customer Relations", "Risk Assessment", "Compliance", "Leadership"],
    salary: "₹8 LPA – ₹25 LPA",
    roadmap: ["Graduate with finance/commerce", "Clear IBPS PO or SBI PO", "Probationary Officer", "Assistant Manager", "Branch Manager in 8–10 years"],
    eligibility: "Any graduate, age 20–30, IBPS/SBI exam",
    institutes: ["NIBM Pune", "IIBF Mumbai", "IIM (for senior banking roles)"],
    futureScope: "General Manager, Executive Director, RBI Grades.",
    inspiration: "\"Money is a tool. Used properly it makes something beautiful.\" – Brad Sugars"
  },
  {
    id: 13, icon: "🚆", title: "Railway Manager",
    quote: "Keep India moving, every single day.",
    color: "from-blue-700 to-indigo-600",
    description: "Indian Railway Officers manage one of the world's largest railway networks — overseeing operations, infrastructure, passenger safety, and modernization projects.",
    education: "B.Tech/B.Sc + UPSC IRMS Exam or RRB JE/SSE",
    skills: ["Operations Management", "Civil/Mechanical/ECE Engineering", "Safety Protocols", "Team Management"],
    salary: "₹44,900 – ₹2,25,000/month",
    roadmap: ["B.Tech Engineering", "Clear UPSC Engineering Services / IRMS", "Training at Railway Staff College Vadodara", "Assistant Divisional Engineer", "Divisional Railway Manager"],
    eligibility: "B.Tech in relevant field, age 21–30",
    institutes: ["Railway Staff College Vadodara", "NTA for RRB exams", "IIT for UPSC ESE prep"],
    futureScope: "General Manager, Railway Board Member, smart rail modernization.",
    inspiration: "\"Railways are the arteries of a nation's economy.\" – Indian Railways motto"
  },
  {
    id: 14, icon: "✈️", title: "Air Hostess / Cabin Crew",
    quote: "Soar above the clouds, deliver excellence.",
    color: "from-sky-500 to-blue-400",
    description: "Cabin Crew professionals ensure passenger safety, comfort, and exceptional in-flight service — representing airlines with grace, professionalism, and composure at altitude.",
    education: "12th pass / Graduate + Aviation hospitality training",
    skills: ["Communication", "First Aid", "Service Excellence", "Languages", "Emergency Procedures"],
    salary: "₹3 LPA – ₹15 LPA + allowances",
    roadmap: ["12th / Graduation", "Aviation hospitality diploma", "Airline selection process", "Ground training + simulator", "Commence flying"],
    eligibility: "Age 18–27, height 157cm+, 12th pass, fluent English",
    institutes: ["Frankfinn Institute", "IATA Training", "IndiGo Training Academy", "Air India Training"],
    futureScope: "Senior Cabin Crew, Purser, Ground Operations, Airline Management.",
    inspiration: "\"The engine is the heart of an airplane, but the pilot is its soul.\" – Walter Raleigh"
  },
  {
    id: 15, icon: "⚙️", title: "Electrical Engineer",
    quote: "Power the world with clean, smart energy.",
    color: "from-yellow-600 to-amber-500",
    description: "Electrical Engineers design power systems, renewable energy grids, industrial automation, and the electrical infrastructure that powers homes, cities, and factories.",
    education: "B.Tech/B.E. Electrical Engineering",
    skills: ["Power Systems", "Circuit Analysis", "Renewable Energy", "PLC Programming", "AutoCAD Electrical"],
    salary: "₹4 LPA – ₹20 LPA",
    roadmap: ["B.Tech Electrical", "GATE for M.Tech/PSU", "Join power sector or manufacturing", "Specialize in renewable energy", "Lead large infrastructure projects"],
    eligibility: "12th PCM, JEE/State CET",
    institutes: ["IIT Roorkee", "NIT Warangal", "IIT Kanpur", "MNIT Jaipur", "IISc"],
    futureScope: "Smart grids, solar energy, EV infrastructure, nuclear power.",
    inspiration: "\"Electricity is really just organized lightning.\" – George Carlin"
  },
  {
    id: 16, icon: "🏏", title: "Professional Cricketer",
    quote: "Every ball is a new opportunity.",
    color: "from-lime-500 to-green-600",
    description: "Professional Cricketers represent their state and country in domestic and international cricket — dedicating years of rigorous training, discipline, and passion to the game.",
    education: "No formal degree required — talent, training, and dedication",
    skills: ["Batting/Bowling/Fielding", "Game Strategy", "Physical Fitness", "Mental Toughness", "Teamwork"],
    salary: "₹10 LPA – ₹100 Cr+ (IPL/International)",
    roadmap: ["Join cricket academy young", "School/District level cricket", "State Under-16/Under-19", "Ranji Trophy / IPL trials", "India A / National Team"],
    eligibility: "Exceptional talent, BCCI age-group trials",
    institutes: ["NCA Bangalore (BCCI)", "MRF Pace Foundation", "State Cricket Academies"],
    futureScope: "IPL franchise, international cricket, commentary, cricket coaching.",
    inspiration: "\"Cricket is my religion and the stadium is my temple.\" – Sachin Tendulkar"
  },
  {
    id: 17, icon: "⚖️", title: "Lawyer",
    quote: "Justice delayed is justice denied — I will not allow it.",
    color: "from-stone-600 to-slate-600",
    description: "Lawyers represent clients in legal matters, advise on rights, draft legal documents, and uphold justice in courts across civil, criminal, corporate, and constitutional law.",
    education: "BA LLB / B.Com LLB / B.Tech LLB (5-year) or LLB (3-year after graduation)",
    skills: ["Legal Research", "Argumentation", "Drafting", "Critical Thinking", "Negotiation"],
    salary: "₹3 LPA – ₹1 Cr+ (Senior Advocate)",
    roadmap: ["5-year law degree (CLAT)", "Enroll with Bar Council", "Junior Advocate under senior", "Build specialization", "Independent practice or judiciary"],
    eligibility: "12th passed, CLAT exam for NLUs",
    institutes: ["NLSIU Bangalore", "NALSAR Hyderabad", "NLU Delhi", "NUJS Kolkata", "Symbiosis Law School"],
    futureScope: "Supreme Court advocate, corporate counsel, judge, legal tech entrepreneur.",
    inspiration: "\"The good lawyer is not the man who has an eye to every side and angle of contingency.\" – Woodrow Wilson"
  },
  {
    id: 18, icon: "🏛️", title: "Politician",
    quote: "Serve the people. Build the nation.",
    color: "from-red-600 to-orange-600",
    description: "Politicians represent citizens in legislative bodies, draft laws, set national policies, and work to create a just, prosperous, and equitable society.",
    education: "Any degree — law, economics, and public policy are most common",
    skills: ["Public Speaking", "Policy Making", "Networking", "Empathy", "Crisis Management"],
    salary: "₹1 Lakh – ₹2 Lakh/month (MP/MLA) + constituency funds",
    roadmap: ["Graduate with a strong social foundation", "Join student politics or NGO work", "Contest local body elections", "Win assembly seat", "National Parliament"],
    eligibility: "Age 25 (MLA), Age 30 (MP), Indian citizen",
    institutes: ["JNU Delhi", "DU Delhi", "Tata Institute of Social Sciences", "Harvard Kennedy School"],
    futureScope: "Chief Minister, Prime Minister, international diplomacy.",
    inspiration: "\"Jai Jawan, Jai Kisan, Jai Vigyan.\" – Lal Bahadur Shastri"
  },
  {
    id: 19, icon: "🎬", title: "Actor",
    quote: "Every role is a new life lived.",
    color: "from-purple-600 to-pink-600",
    description: "Actors bring stories to life through performance in film, television, theatre, and digital media — using emotion, physicality, and craft to move audiences worldwide.",
    education: "BFA Acting / Film school / NSD / Self-training",
    skills: ["Acting Techniques", "Voice Modulation", "Physical Expression", "Script Analysis", "Improvisation"],
    salary: "₹0 to ₹100 Cr+ per film",
    roadmap: ["Acting workshops and training", "Theatre/short films", "Casting calls and auditions", "Supporting roles", "Lead roles in mainstream cinema"],
    eligibility: "Passion, talent, perseverance — no age/degree barrier",
    institutes: ["National School of Drama Delhi", "Film and Television Institute Pune", "Kishore Namit Kapoor Acting Institute"],
    futureScope: "OTT platforms, international cinema, production house ownership.",
    inspiration: "\"Acting is not about being someone different. It's finding the similarity in what is apparently different.\" – Meryl Streep"
  },
  {
    id: 20, icon: "🎞️", title: "Video Editor",
    quote: "The edit is where the magic happens.",
    color: "from-fuchsia-600 to-violet-600",
    description: "Video Editors shape raw footage into compelling narratives for films, YouTube, advertisements, news, and social media — wielding the invisible hand that makes stories flow.",
    education: "B.Sc Mass Communication / B.FTech Film / self-taught with software skills",
    skills: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Color Grading", "Sound Design", "Storytelling"],
    salary: "₹3 LPA – ₹30 LPA+",
    roadmap: ["Learn editing software", "Build YouTube/short film portfolio", "Freelance projects", "Join production house or news channel", "Senior Editor / Creative Director"],
    eligibility: "Anyone with creative instinct and software skills",
    institutes: ["FTII Pune", "Whistling Woods International", "Arena Animation", "YouTube + Udemy (self-learn)"],
    futureScope: "OTT content creation, AI-assisted editing, VFX, documentary filmmaking.",
    inspiration: "\"Cinema is a mirror by which we often see ourselves.\" – Martin Scorsese"
  }
];
