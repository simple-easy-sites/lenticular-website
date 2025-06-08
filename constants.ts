
import { ServiceTier, Testimonial, FAQItem, IndustryOptions, ChallengeOptions } from './types'; // Removed AddOnService

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  // { href: '#results', label: 'Results' }, // Removed
  { href: '#contact', label: 'Contact' },
];

// HERO_PAIN_POINTS is no longer used in HeroSection.tsx
/*
export const HERO_PAIN_POINTS = [
  "Leads go to the loudest, not always the best",
  "DIY posts feel DIY—and clients can tell",
  "Algorithms reward momentum; silence costs visibility and money.",
];
*/

export const CLIENT_LOGOS = [
  "Nike",
  "Adidas",
  "W Hotels",
  "Freehand Hotels",
  "Bar Lab",
];

// STATS_SHOWCASE_ITEMS is no longer used in SocialProofBand.tsx
/*
export const STATS_SHOWCASE_ITEMS = [
  { value: "2,000+", label: "Posts That Convert" },
  { value: "150%", label: "Average Lead Increase" },
  { value: "48-Hour", label: "Turnaround" },
];
*/

export const SERVICE_TIERS_DATA: ServiceTier[] = [
  // TIER 1: VISIBILITY ENGINE
  { id: 'starter-presence', tierGroup: "VISIBILITY ENGINE", name: 'Starter Presence', price: '$500/month', description: '8 posts monthly. Professional presence, proven results.' },
  { id: 'daily-builder', tierGroup: "VISIBILITY ENGINE", name: 'Daily Builder', price: '$1,000/month', description: '20 posts + video content. Multi-platform momentum.' },
  { id: 'full-presence-pro', tierGroup: "VISIBILITY ENGINE", name: 'Full Presence Pro', price: '$2,000/month', description: '60+ monthly pieces. Complete social dominance.', highlight: 'Most Popular Choice' },
  
  // TIER 2: LEAD ENGINE
  { id: 'starter-lead-engine', tierGroup: "LEAD ENGINE", name: 'Starter Lead Engine', price: '$3,500/month', description: 'Social presence + Google Ads + CRM foundation' },
  { id: 'growth-lead-engine', tierGroup: "LEAD ENGINE", name: 'Growth Lead Engine', price: '$4,500/month', description: 'Custom website + SEO + advanced lead tracking' },
  { id: 'authority-lead-engine', tierGroup: "LEAD ENGINE", name: 'Authority Lead Engine', price: '$5,000/month', description: 'Complete digital ecosystem with quarterly optimization' },

  // TIER 3: GROWTH SUITE
  { id: 'growth-builder', tierGroup: "GROWTH SUITE", name: 'Growth Builder', price: '$6,000/month', description: 'CRM workflows + AI automation + sales funnels' },
  { id: 'full-ops-engine', tierGroup: "GROWTH SUITE", name: 'Full Ops Engine', price: '$7,500/month', description: 'White-labeled CRM + team management + integrations' },
  { id: 'scalable-enterprise', tierGroup: "GROWTH SUITE", name: 'Scalable Enterprise', price: '$9,500/month', description: 'YouTube monetization + AI customer service + BI dashboard' },
  
  // TIER 4: CUSTOM SOLUTIONS
  { id: 'systems-software', tierGroup: "CUSTOM SOLUTIONS", name: 'Systems & Software', price: 'Starting at $15,000', description: 'Custom software, automations, and integrations built to your specifications' },
];

// OPTIONAL_ADD_ONS_DATA removed

export const PROCESS_STEPS = [
  { id: 'discover', number: 1, title: 'DISCOVER', description: 'We audit your current presence and identify immediate opportunities for growth' },
  { id: 'design', number: 2, title: 'DESIGN', description: 'AI-assisted content creation, leveraging our proprietary AI tools and models, meets strategic storytelling and premium aesthetics' },
  { id: 'deliver', number: 3, title: 'DELIVER', description: 'Consistent execution, continuous optimization, measurable results that compound' },
];

export const PROBLEM_SOLUTIONS = [
  { id: 'traction', problem: "You're posting regularly but getting no traction", solution: "Our AI-powered content strategy, utilizing proprietary algorithms, ensures every post serves a purpose in your growth funnel" },
  { id: 'visuals', problem: "Your visuals don't match the quality of your business", solution: "Premium design that reflects your true value, not DIY templates that cheapen your brand" },
  { id: 'ranking', problem: "You're not ranking on Google or capturing leads effectively", solution: "Integrated SEO and CRM systems that turn visitors into customers automatically" },
  { id: 'tools', problem: "You're running your business on spreadsheets and scattered tools", solution: "Unified tech stack that grows with you, from startup to enterprise scale" },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { 
    id: 't1', 
    category: 'Hospitality', 
    quote: "Lenticular's AI-driven content strategy gave our boutique hotel chain a consistent and engaging voice across all platforms. We've seen a measurable uptick in direct bookings and brand visibility since partnering with them.", 
    author: "", 
    company: "Freehand Hotels" 
  },
  { 
    id: 't2', 
    category: 'Food & Beverage Consulting', 
    quote: "As hospitality concept creators, our brand image is paramount. Lenticular AI delivered exceptional, on-brand content that resonated with our target audience, driving significant interest in our consulting services and new venue launches.", 
    author: "", 
    company: "Bar Lab" 
  },
  { 
    id: 't3', 
    category: 'Fashion Retail', 
    quote: "Working with Lenticular AI was like having an entire creative and strategy team on demand. Their ability to quickly understand our vision and translate it into high-performing digital assets has been a game-changer for our Miami-based projects.", 
    author: "", 
    company: "UNKNWN Miami" 
  },
];

export const INDUSTRY_OPTIONS_ARRAY = Object.values(IndustryOptions);
export const CHALLENGE_OPTIONS_ARRAY = Object.values(ChallengeOptions);

export const TRUST_SIGNALS = [
  "No spam, ever",
  "48-hour delivery",
  "No strings attached",
];

// CREDIBILITY_ELEMENTS is an older version, REFINED_CREDIBILITY_ELEMENTS is used.
/*
export const CREDIBILITY_ELEMENTS = [
  "Decades of Combined Experience with Global Brands",
  "Former agency experience with global brands", 
  "AI-powered efficiency meets human creativity",
];
*/

export const REFINED_CREDIBILITY_ELEMENTS = [
  "Experience Honed on Global Campaigns",
  "Proprietary AI-Powered Efficiency",
  "Strategic Human-Centric Creativity",
];


export const FAQ_DATA: FAQItem[] = [
  { id: 'f1', question: "How is this different from other agencies?", answer: "Most agencies create content. We create growth systems. Our AI-powered approach, built on proprietary models, delivers enterprise-quality work at local business prices, with measurable results you can track." },
  { id: 'f2', question: "What if I don't like the content?", answer: "We iterate until it's perfect. Our process includes multiple revision rounds, and we don't consider a project complete until you're thrilled with the results." },
  { id: 'f3', question: "How quickly will I see results?", answer: "Content quality improves immediately. Lead generation typically shows results within 30-60 days. Full system optimization reaches peak performance at 90 days." },
  { id: 'f4', question: "Do you work with businesses outside home services?", answer: "Absolutely. While we specialize in home services, our systems work for any service-based business ready to scale their digital presence professionally." },
  { id: 'f5', question: "What's included in the $2,000/month package?", answer: "60+ pieces of monthly content, cross-platform posting, AI-enhanced design, performance reviews, and optional newsletter management. Everything you need for complete social dominance." },
];

export const YOUTUBE_GROWTH_FEATURES = [
    { 
        id: 'ytf1',
        title: 'AI-Driven Channel Blueprint', 
        description: 'We analyze your niche and competitors with our proprietary AI tools to design a high-impact channel strategy from day one.',
    },
    { 
        id: 'ytf2',
        title: 'Compelling Content Ecosystem', 
        description: 'From engaging Shorts that capture attention to in-depth videos that build authority, all optimized by our AI for peak performance.',
    },
    { 
        id: 'ytf3',
        title: 'Rapid Growth & Monetization', 
        description: 'Our strategic approach focuses on sustainable audience growth and accelerates your journey to YouTube monetization opportunities.',
    },
     { 
        id: 'ytf4',
        title: 'Search Dominance', 
        description: 'Did you know YouTube is the 2nd largest search engine? We leverage its power to ensure your business gets found and flourishes.',
    },
];

export const FEATURED_YOUTUBE_VIDEOS = [
  { id: 'r7fPyXhX8V4', title: 'Featured YouTube Video 1: Project Showcase' },
  { id: 'F3Jbdzc-t8k', title: 'New Featured Video 1' },
  { id: 'KFF2C90Ijcw', title: 'New Featured Video 2' },
  { id: 'inkH6MMLRCo', title: 'New Featured Video 3' },
];


export const FOOTER_LINKS = {
  contact: { email: 'lenticularproject@gmail.com', phone: '(818) 650-2459' }, // Updated phone number
  services: [
    { label: 'All Tiers', href: '#services'},
    { label: 'Custom Solutions', href: '#services'},
    { label: 'YouTube Growth', href: '#youtube-growth'}, 
    // { label: 'Add-Ons', href: '#optional-add-ons'} // Removed link
  ],
  company: [
    { label: 'About', href: '#social-proof'}, // Updated to point to the consolidated section
    { label: 'Process', href: '#process'},
    { label: 'Testimonials', href: '#results'}, // Changed "Case Studies" to "Testimonials"
    { label: 'Contact', href: '#contact'}
  ],
  legal: [
    { label: 'Privacy Policy', href: '#'},
    { label: 'Terms of Service', href: '#'}
  ],
  // Social links removed
  // social: [
  //   { label: 'LinkedIn', href: '#', icon: 'LI' }, 
  //   { label: 'Instagram', href: '#', icon: 'IG' },
  //   { label: 'Twitter', href: '#', icon: 'TW' },
  // ]
};
