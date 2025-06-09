import { ServiceTier, Testimonial, FAQItem, IndustryOptions, ChallengeOptions, AdditionalServiceItem } from './types';

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export const CLIENT_LOGOS = [
  "Nike",
  "Adidas",
  "W Hotels",
  "Freehand Hotels",
  "Bar Lab",
];

export const SERVICE_TIERS_DATA: ServiceTier[] = [
  // TIER 1: VISIBILITY ENGINE
  { 
    id: 'starter-presence', 
    tierGroup: "VISIBILITY ENGINE", 
    name: 'Starter Presence', 
    price: '$500/month', 
    setupFee: '$125', 
    description: "<strong class=\"text-[#1a1a1a]\">Struggling to post consistently? We ensure your business shows up professionally every week, building trust and attracting local customers without you lifting a finger.</strong>",
    features: [
      '15 custom social posts/month: Engaging content that speaks to homeowners.',
      'Optimized for Facebook, Instagram, TikTok: Where your customers are looking.',
      'Branded visuals & clear captions: Look polished and professional, effortlessly.',
      'Done-for-you content calendar: We handle the planning and posting.',
      'Fast setup: Send your logo & services, we do the rest.'
    ] 
  },
  { 
    id: 'daily-builder', 
    tierGroup: "VISIBILITY ENGINE", 
    name: 'Daily Builder', 
    price: '$1,000/month', 
    setupFee: '$250', 
    description: "<strong class=\"text-[#1a1a1a]\">Want to be the go-to pro in your area? Daily posts and smart content make your business highly visible, so you're top-of-mind when homeowners need your services.</strong>",
    features: [
      '30 social media posts/month: Daily presence to maximize visibility.',
      'Content for FB, IG, TikTok, Shorts: Dominate across key platforms.',
      'Strategy-driven topics: Educate customers, showcase work, drive calls.',
      '1 SEO blog post/month: Attract homeowners searching on Google.',
      'Builds authority & trust: Become the recognized expert locally.'
    ] 
  },
  { 
    id: 'full-presence-pro', 
    tierGroup: "VISIBILITY ENGINE", 
    name: 'Full Presence Pro', 
    price: '$2,000/month', 
    setupFee: '$500', 
    description: "<strong class=\"text-[#1a1a1a]\">Serious about growth? We make your business omnipresent. Consistent, high-quality content everywhere, every day, turning visibility into booked jobs.</strong>", 
    highlight: 'Book More Jobs', 
    features: [
      '45 pieces of content/month: Your business, constantly in front of customers.',
      'Smart content remixing: FB, IG, TikTok, Shorts, YouTube covered.',
      '2 SEO blog articles/month: Rank higher on Google for relevant searches.',
      'Content for newsletters & stories: Maximize reach from every asset.',
      'Full strategy & execution: We handle everything, you focus on jobs.'
    ] 
  },
  
  // TIER 2: LEAD ENGINE
  { 
    id: 'starter-lead-engine', 
    tierGroup: "LEAD ENGINE", 
    name: 'Starter Lead Engine', 
    price: '$4,000/month', 
    setupFee: '$1,000', 
    description: "Turn online visibility into actual leads. We combine social media buzz with targeted email marketing and a newsletter to capture interested homeowners and nurture them until they're ready to book.",
    features: [
      'Everything in Full Presence Pro', 
      'Newsletter design & setup: Stay top-of-mind with past and potential customers.', 
      'Lead magnet integration: Capture contact info from interested visitors.', 
      'Email marketing (1 automated flow): Nurture leads automatically.',
      'Stop relying on inconsistent referrals; build a predictable lead pipeline.'
    ] 
  },
  { 
    id: 'growth-lead-engine', 
    tierGroup: "LEAD ENGINE", 
    name: 'Growth Lead Engine', 
    price: '$4,500/month', 
    setupFee: '$1,000', 
    description: "Ready for a high-performance website that converts visitors into paying customers? We build a custom site, optimize it for Google, and fuel it with SEO content and smart email automation.",
    features: [
      'All Starter Lead Engine features', 
      'Custom website (up to 5 pages): Professional, fast, and built to convert.', 
      'On-page SEO for website: Get found by locals searching for your services.', 
      'SEO blog content (2 articles/month): Attract more organic traffic.', 
      'Advanced email automation: Turn more leads into booked jobs, automatically.'
    ] 
  },
  { 
    id: 'authority-lead-engine', 
    tierGroup: "LEAD ENGINE", 
    name: 'Authority Lead Engine', 
    price: '$5,000/month', 
    setupFee: '$1,250', 
    description: "Dominate your local market. We scale your lead generation with targeted Google & Facebook Ads, driving qualified local leads directly to you, consistently.",
    features: [
      'All Growth Lead Engine features', 
      'Google Ads campaign management: Get in front of homeowners actively searching.', 
      'Facebook/Instagram Ads: Reach local customers where they spend their time.', 
      'Stop wasting money on ineffective ads; get a positive ROI.',
      'Quarterly strategy review & optimization: We continuously improve results.'
    ] 
  },

  // TIER 3: GROWTH SUITE
  { 
    id: 'growth-builder', 
    tierGroup: "GROWTH SUITE", 
    name: 'Growth Builder', 
    price: '$6,000/month', 
    setupFee: '$1,500', 
    description: "Systematize your sales and follow-up. We implement CRM workflows and AI-powered automation to ensure no lead falls through the cracks, and build sales funnels that convert.",
    features: [
      'All Authority Lead Engine features', 
      'CRM automation workflows: Streamline lead management and follow-up.', 
      'AI chatbot for lead qualification: Qualify leads 24/7, even while you sleep.', 
      'Sales funnel development (1 funnel): Guide prospects smoothly to becoming customers.',
      'Get your time back and close more deals by systemizing your process.'
    ] 
  },
  { 
    id: 'full-ops-engine', 
    tierGroup: "GROWTH SUITE", 
    name: 'Full Ops Engine', 
    price: '$7,500/month', 
    setupFee: '$2,000', 
    description: "Scale your operations efficiently. Get a white-labeled CRM, tap into YouTube for growth, use BI dashboards to track KPIs, and get support for managing your team and systems.",
    features: [
      'All Growth Builder features', 
      'White-labeled CRM access: Your brand, our powerful system.', 
      'Team training & support: Empower your team to use new tools effectively.',
      'Custom API integrations (up to 2): Connect your existing tools seamlessly.', 
      'YouTube channel growth strategy: Tap into the 2nd largest search engine.', 
      'Business Intelligence dashboard: Track what matters for growth in real-time.'
    ] 
  },
  { 
    id: 'scalable-enterprise', 
    tierGroup: "GROWTH SUITE", 
    name: 'Scalable Enterprise', 
    price: '$9,500/month', 
    setupFee: '$2,500', 
    description: "The ultimate package for established businesses looking to dominate and scale. AI-driven customer service tools and top-tier strategic consulting to maximize efficiency and profitability.",
    features: [
      'All Full Ops Engine features', 
      'AI-powered customer service tools: Deliver exceptional service, reduce workload.', 
      'Advanced strategic consulting: High-level guidance for sustained growth.',
      'Optimize every part of your business for maximum scalability.'
    ] 
  },
  
  // TIER 4: CUSTOM SOLUTIONS
  { 
    id: 'systems-software', 
    tierGroup: "CUSTOM SOLUTIONS", 
    name: 'Custom Systems & Software', 
    price: 'Starting at $15,000', 
    description: "Have unique operational challenges or need a specific software solution? We build custom software, AI models, and automation systems tailored to your exact business needs.",
    features: [
      'Bespoke software development: Tools designed just for your business.', 
      'Advanced AI model integration: Leverage cutting-edge AI for unique advantages.', 
      'Full system architecture design: End-to-end solutions for complex problems.', 
      'Ongoing maintenance & support: We ensure your custom systems run smoothly.'
    ] 
  }, 
];

export const PROCESS_STEPS = [
  { id: 'discover', number: 1, title: 'DISCOVER', description: 'We pinpoint what’s holding back your growth and find the quickest wins to get you more jobs, fast.' },
  { id: 'design', number: 2, title: 'DESIGN', description: 'Using smart AI and proven strategies, we create professional content and systems that make homeowners choose YOU.' },
  { id: 'deliver', number: 3, title: 'DELIVER', description: 'We consistently execute the plan, track results, and optimize for more calls, more leads, and more growth, month after month.' },
];

export const PROBLEM_SOLUTIONS = [
  { 
    id: 'consistency', 
    problem: "No time to create and post content consistently?", 
    solution: "We handle all your content creation and posting, ensuring your business maintains a regular and professional online presence. Stay visible without adding to your workload." 
  },
  { 
    id: 'quality', 
    problem: "Struggling to make your online presence look professional?", 
    solution: "We design and create high-quality, branded content that reflects the professionalism of your services, helping you build trust and stand out." 
  },
  { 
    id: 'strategy', 
    problem: "Unsure what content will resonate or how to plan it?", 
    solution: "We develop a comprehensive content strategy tailored to your business, planning topics and formats that engage your audience and showcase your expertise effectively." 
  },
  { 
    id: 'reach', 
    problem: "Feel like your online efforts aren't reaching enough people?", 
    solution: "We implement strategies to expand your content's reach across relevant platforms, helping more potential customers discover your business and what you offer." 
  },
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
  "48-hour delivery (for free posts)",
  "No strings attached",
];

export const REFINED_CREDIBILITY_ELEMENTS = [
  "Experience honed on global campaigns", 
  "Proprietary AI-powered efficiency",    
  "Strategic human-centric creativity",   
];


export const FAQ_DATA: FAQItem[] = [
  { id: 'f1', question: "How is this different from other marketing agencies?", answer: "Most agencies just make posts. We build growth *systems* for service businesses. Think of us as your outsourced expert marketing team that uses smart AI to get you more jobs, not just more likes. We focus on results that impact your bottom line, like more calls and booked appointments." },
  { id: 'f2', question: "What if I don't like the content you create?", answer: "Your satisfaction is key. We'll revise the content based on your feedback until it's right for your business. Our goal is to make you look great and get you results." },
  { id: 'f3', question: "How quickly will I see more leads or jobs?", answer: "You'll see professional, high-quality content almost immediately. For more leads and calls, it typically takes 30-60 days as we build your online presence. Serious growth and system optimization usually hit their stride around 90 days." },
  { id: 'f4', question: "Do you only work with home service businesses?", answer: "We specialize in home services because we understand your challenges. However, our systems can help any service-based business that wants to get more professional online and grow efficiently." },
  { id: 'f5', question: "What's included in the $2,000/month Full Presence Pro plan?", answer: "It's designed to make you highly visible: 45 pieces of content each month (posted for you), smart use across all key platforms (Facebook, Instagram, TikTok, YouTube Shorts), 2 blog articles optimized for Google search, and your entire monthly content strategy handled by us. It’s your all-in-one solution to dominate online." },
  { id: 'f6', question: "Why is YouTube important for my service business?", answer: "YouTube is the second biggest search engine. Homeowners go there to find solutions and 'how-to' videos. By creating helpful content, you attract customers, build trust, and can even earn money directly from YouTube. It's like modern word-of-mouth, supercharged."}
];

export const YOUTUBE_GROWTH_FEATURES = [
    { 
        id: 'ytf1',
        title: 'AI-Driven Channel Blueprint', 
        description: 'We use smart AI to analyze your local market and competitors, designing a YouTube strategy that gets you noticed by homeowners in your area.',
    },
    { 
        id: 'ytf2',
        title: 'Content That Books Jobs', 
        description: 'From quick tip videos (Shorts) that grab attention to detailed project showcases that build trust, all content is optimized to turn viewers into leads.',
    },
    { 
        id: 'ytf3',
        title: 'Grow Your Audience & Revenue', 
        description: 'Our approach focuses on getting you real subscribers (potential customers!) and helps you meet YouTube’s criteria to start earning money from your videos.',
    },
     { 
        id: 'ytf4',
        title: 'Dominate Local Search', 
        description: "Homeowners search YouTube for solutions daily. We make sure they find *your* business, not your competitors, positioning you as the local expert.",
    },
];

export const FEATURED_YOUTUBE_VIDEOS = [
  { id: 'r7fPyXhX8V4', title: 'Featured YouTube Video 1: Project Showcase' },
  { id: 'F3Jbdzc-t8k', title: 'New Featured Video 1' },
  { id: 'KFF2C90Ijcw', title: 'New Featured Video 2' },
  { id: 'inkH6MMLRCo', title: 'New Featured Video 3' },
];


export const FOOTER_LINKS = {
  contact: { email: 'lenticularproject@gmail.com', phone: '(818) 650-2459' },
  services: [
    { label: 'All Service Plans', href: '#services'}, // Updated label
    { label: 'Custom Solutions', href: '#services'}, // Ensure this scrolls to service showcase or a relevant part
    { label: 'YouTube Growth', href: '#youtube-growth'}, 
  ],
  company: [
    { label: 'Why Us?', href: '#social-proof'}, // Updated label
    { label: 'Our Process', href: '#process'}, // Updated label
    { label: 'Client Results', href: '#results'}, // Updated label
    { label: 'Contact Us', href: '#contact'} // Updated label
  ],
  legal: [
    { label: 'Privacy Policy', href: '#'},
    { label: 'Terms of Service', href: '#'}
  ],
};

export const ONBOARDING_SUCCESS_CALENDLY_LINK = "https://calendly.com/lenticularproject/15min";

export const ONBOARDING_QUESTIONS_PLACEHOLDERS = {
  companyName: "Your Company Name LLC",
  contactName: "Full Name",
  title: "e.g., Owner, Operations Manager, President", 
  email: "you@company.com",
  phone: "(555) 123-4567", 
  website: "https://yourcompany.com (Optional)",
  goals: "e.g., Get more qualified leads, increase local visibility, spend less time on marketing, book 5-10 more jobs a month...",
  currentChallenges: "e.g., Inconsistent posting, not showing up on Google, wasting money on ads that don't work, too busy to handle marketing...",
  additionalInfo: "e.g., Specific types of jobs you prefer, areas you serve, unique selling points, current promotions... (Optional)",
};


export const ADDITIONAL_SERVICES_DATA: AdditionalServiceItem[] = [
  {
    id: 'lead-engine-setup',
    iconText: 'GROW',
    title: 'Lead Engine Systems',
    description: 'Turn your online presence into a predictable job pipeline. We build and manage systems to capture, nurture, and convert leads.',
    features: [
        "Targeted Google & Facebook Ads: Get in front of motivated local customers.",
        "SEO & Local Visibility Strategy: Dominate search results in your service area.",
        "Newsletter & Email Automation: Stay top-of-mind and nurture leads effectively.",
        "CRM Setup & Integration: Organize leads and track your sales process seamlessly."
    ]
  },
  {
    id: 'growth-suite',
    iconText: 'SCALE',
    title: 'Operational Growth Suite',
    description: 'Automate and streamline your business operations so you can handle more jobs without the chaos. We implement tools to save you time and improve customer experience.',
    features: [
        "CRM Automation: Automate follow-ups, scheduling, and client communication.",
        "AI-Powered Customer Interaction: Use AI for instant responses and lead qualification.",
        "Automated Booking Tools: Allow customers to book services online, 24/7.",
        "White-Labeled Dashboards: Track your key metrics with a professional client portal."
    ]
  },
  {
    id: 'custom-systems',
    iconText: 'BUILD',
    title: 'Custom Software & Automation',
    description: 'For established businesses with unique needs, we design and build proprietary software and AI-driven automation to solve your specific operational bottlenecks.',
    features: [
        "Bespoke Software Solutions: Tools built from scratch for your exact needs.",
        "AI Model Integration: Leverage custom AI to optimize pricing, scheduling, or logistics.",
        "Operations Automation: Streamline complex workflows that are unique to your business.",
        "Data Analytics & Reporting: Gain deep insights from your business data."
    ]
  },
];