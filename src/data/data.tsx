import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/building-construction-site-with-a-tower-crane-and-engineer-and-workers-paper-cut-style-vector.jpg';
import porfolioImage1 from '../images/portfolio/IMG-20251011-WA0028.jpg';
import porfolioImage2 from '../images/portfolio/IMG-20251011-WA0029.jpg';
import porfolioImage3 from '../images/portfolio/IMG-20251011-WA0030.jpg';
import porfolioImage4 from '../images/portfolio/IMG-20251011-WA0031.jpg';
import porfolioImage5 from '../images/portfolio/IMG-20251011-WA0032.jpg';
import porfolioImage6 from '../images/portfolio/IMG-20251011-WA0033.jpg';
import porfolioImage7 from '../images/portfolio/IMG-20251011-WA0034.jpg';
import porfolioImage8 from '../images/portfolio/IMG-20251011-WA0035.jpg';
import porfolioImage9 from '../images/portfolio/IMG-20251011-WA0036.jpg';
import porfolioImage10 from '../images/building-construction-site-with-a-tower-crane-and-engineer-and-workers-paper-cut-style-vector.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Egan Moshi.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm Egan Moshi, a <strong className="text-stone-100">Civil Engineer and Architectural Designer</strong> based in
        <strong className="text-stone-100"> Dodoma, Tanzania</strong>. I’m passionate about designing sustainable and
        functional structures that blend creativity with practical engineering solutions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I enjoy sketching architectural concepts, studying modern construction techniques, and
        exploring the evolving landscape of Tanzanian architecture.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a Civil Engineer and Architectural Designer from Dodoma, Tanzania. I hold a Bachelor of Civil
  Engineering (2024) from Mbeya University of Science and Technology. I have performed industrial practical
  training across Tanzania focusing on structural design, site inspection, road maintenance and bridge works.
  I enjoy applying practical engineering solutions to construction challenges and producing clear technical
  documentation and sketches for upcoming projects.`,
  aboutItems: [
    {label: 'Location', text: 'Dodoma, Tanzania', Icon: MapIcon},
    {label: 'Date of birth', text: '14 April 2000', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Tanzanian', Icon: FlagIcon},
    {label: 'Languages', text: 'English, Kiswahili', Icon: SparklesIcon},
    {label: 'Study', text: 'Mbeya University of Science and Technology (B.Eng, Civil)', Icon: AcademicCapIcon},
    {label: 'Availability', text: 'Open to opportunities', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Civil engineering',
    skills: [
      {name: 'Structural analysis & design', level: 8},
      {name: 'Road & bridge inspection', level: 7},
      {name: 'Construction management', level: 7},
      {name: 'Soil laboratory testing', level: 6},
      {name: 'Report writing', level: 8},
    ],
  },
  {
    name: 'Design & modelling tools',
    skills: [
      {name: 'Archicad + Lumion', level: 8},
      {name: 'SketchUp + Enscape', level: 7},
      {name: 'AutoCAD & Civil 3D', level: 7},
      {name: 'Prota-Structure, ETABS', level: 7},
      {name: 'MS Project', level: 6},
    ],
  },
  {
    name: 'General skills',
    skills: [
      {name: 'Microsoft Office (Word, Excel, PowerPoint)', level: 9},
      {name: 'Driving (Class A & D)', level: 7},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Box Culvert Construction (CN04)',
    description: 'World Bank SEAP project: box culvert construction and embankment raising — site works and monitoring.',
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'Bridge Inspection & Inventory',
    description: 'Regional bridge inventory and inspection surveys across Kilimanjaro.',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'Road Maintenance Works',
    description: 'Pothole identification, pre-marking and patching under periodic maintenance programs.',
    url: '#',
    image: porfolioImage3,
  },
  {
    title: 'Structural Detailing (Estate Care)',
    description: 'Structural design and drafting using Prota-Structure and AutoCAD for consultancy projects.',
    url: '#',
    image: porfolioImage4,
  },
  {
    title: 'Site Sketches & Layouts',
    description: 'Preparation of site sketches and preliminary layouts for upcoming projects.',
    url: '#',
    image: porfolioImage5,
  },
  {
    title: 'Culvert & Drainage Design',
    description: 'Design studies for box culverts and drainage solutions to mitigate water rise issues.',
    url: '#',
    image: porfolioImage6,
  },
  {
    title: 'Construction Supervision',
    description: 'Assisted in inspection and supervision of ongoing construction works ensuring compliance.',
    url: '#',
    image: porfolioImage7,
  },
  {
    title: 'Surveying & Mapping',
    description: 'Site visits, map study and preparation of project progress reports.',
    url: '#',
    image: porfolioImage8,
  },
  {
    title: 'Archicad & 3D Visuals',
    description: 'Architectural sketches and 3D visuals using Archicad, Lumion and SketchUp.',
    url: '#',
    image: porfolioImage9,
  },
  {
    title: 'Construction Concept Illustration',
    description: 'Illustrative concept for a construction site and workforce coordination.',
    url: '#',
    image: porfolioImage10,
  },
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020 - 2024',
    location: 'Mbeya University of Science and Technology, Mbeya',
    title: "Bachelor of Civil Engineering",
    content: (
      <p>
        Studied civil engineering fundamentals including structural design, geotechnical engineering, hydraulics,
        and construction management. Final-year projects and practical training focused on structural and road works.
      </p>
    ),
  },
  {
    date: '2018 - 2020',
    location: 'Kemebos Secondary School',
    title: 'Advanced Certificate of Secondary Education (ACSEE)',
    content: <p>Completed secondary education with emphasis on sciences and mathematics.</p>,
  },
  {
    date: '2014 - 2017',
    location: 'Saint Amedeus Secondary School',
    title: 'Ordinary Level Secondary Education (CSEE)',
    content: <p>Completed Ordinary Level with coursework in mathematics and sciences.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2024 - August 2025',
    location: 'TANROADS - Kilimanjaro Region',
    title: 'SEAP Trainee / SEAP Engineer',
    content: (
      <>
        <p>
          Participated in the World Bank SEAP project for construction of box culverts and embankment raising. Duties
          included progress reporting, bridge inventory, periodic road maintenance, preparation of sketches for
          upcoming projects and land valuation support.
        </p>
      </>
    ),
  },
  {
    date: 'October 2023 - November 2023',
    location: 'Estate Care Consultancy Limited',
    title: 'Field Trainee (Structural Design)',
    content: (
      <>
        <p>Participated in structural designing activities and practical training using Prota-Structure, AutoCAD and ETABS.</p>
      </>
    ),
  },
  {
    date: 'July 2022 - September 2022',
    location: 'TARURA - Kilimanjaro',
    title: 'Industrial Practical Training (Field)',
    content: (
      <>
        <p>
          Conducted site inspections, prepared sketches for upcoming projects, studied bridge and culvert maps and
          assisted with progress reporting for maintenance works across the Kilimanjaro region.
        </p>
      </>
    ),
  },
  {
    date: 'July 2021 - September 2021',
    location: 'CRJE (China Railway Jianchang Engineering Ltd) / Moshi Municipal Council',
    title: 'Industrial Practical Training (Field Student)',
    content: (
      <>
        <p>
          Assisted with inspection and supervision of ongoing works, studied architectural and structural layouts, and
          collaborated with senior engineers to ensure compliance with project standards.
        </p>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@am_acg__',
      href: 'https://www.instagram.com/am_acg__/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/egan-moshi-4aa004314/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/am_acg__/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
