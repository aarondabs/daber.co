import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CloudIcon,
  EnvelopeIcon,
  MapIcon,
  SparklesIcon,
  
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/cka.png';
import porfolioImage2 from '../images/portfolio/aws-devops.png';
import porfolioImage3 from '../images/portfolio/aws-developer.png';
import porfolioImage4 from '../images/portfolio/azure-developer.png';
import porfolioImage5 from '../images/portfolio/terraform.png';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.png';
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
  title: 'Aaron Daberkow',
  description: "Aaron Daberkow's personal website",
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

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Aaron Daberkow`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a passionate <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently focused on{' '}
        <strong className="text-stone-100">Platform Engineering</strong> and <strong className="text-stone-100">Cloud Architecture</strong>{' '}
        with a strong interest in everything <strong className="text-stone-100">DevOps</strong>. I'm currently self
        employed at <strong className="text-stone-100">Daberkow Development LLC</strong> and have been contracting with a wide variety of clients.
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
  description: `I've been developing front and back end applications for over 10 years, including work 
  for several Fortune 500 companies. Besides building scalable, performant, and secure cloud native 
  applications, I also have a passion for developing continuous integration and delivery pipelines 
  to facilitate the rapid and reliable deployment of features to customers.`,
  aboutItems: [
    {label: 'Location', text: 'Topeka, KS', Icon: MapIcon},
    {label: 'Employment', text: 'Daberkow Development LLC', Icon: BuildingOffice2Icon},
    {label: 'Degree', text: 'Computer Engineering (Minor: Mathmatics)', Icon: AcademicCapIcon},
    {label: 'Cloud Proficiency', text: 'AWS, Azure', Icon: CloudIcon},
    {label: 'Contact', text: 'aarondabs@gmail.com', Icon: EnvelopeIcon},
    {label: 'Interests', text: 'Woodworking, Landscaping', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Cloud Platforms',
    skills: [
      {
        name: 'AWS',
        level: 10,
      },
      {
        name: 'Azure',
        level: 8,
      },
      {
        name: 'GCP',
        level: 3,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Groovy',
        level: 8,
      },
      {
        name: 'Golang',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'Angular',
        level: 5,
      },
    ],
  },
  {
    name: 'Infrastructure as Code',
    skills: [
      {
        name: 'Terraform',
        level: 10,
      },
      {
        name: 'AWS CDK',
        level: 9,
      },
      {
        name: 'Azure ARM/Bicep',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Certified Kubernetes Administrator',
    description: 'The Linux Foundation',
    url: 'https://www.credly.com/badges/4ba2204d-ba61-429a-af9e-7e1d4a8410ba',
    image: porfolioImage1,
  },
  {
    title: 'AWS Certified DevOps Engineer - Professional',
    description: 'Amazon Web Services Training and Certification',
    url: 'https://www.credly.com/badges/e9842bad-e6a0-4943-8d34-3fbf8faa6635',
    image: porfolioImage2,
  },
  {
    title: 'AWS Certified Developer - Associate',
    description: 'Amazon Web Services Training and Certification',
    url: 'https://www.credly.com/badges/2713fd32-69df-4c7b-87d5-d11d414158de',
    image: porfolioImage3,
  },
  {
    title: 'Microsoft Certified: Azure Developer Associate',
    description: 'Microsoft',
    url: 'https://www.credly.com/badges/9404719f-3a61-4658-b4a0-bc12b833642b',
    image: porfolioImage4,
  },
  {
    title: 'HashiCorp Certified: Terraform Associate',
    description: 'HashiCorp',
    url: 'https://www.credly.com/badges/289139fd-f9fb-4e1a-9e30-01180ffb5816',
    image: porfolioImage5,
  },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2013',
    location: 'Omaha, NE',
    title: 'University of Nebraska',
    content: <p>Computer Engineering (BS), Mathematics (Minor)</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2023 - Present',
    location: 'State of Nebraska DHHS',
    title: 'Principle Platform Engineer',
    content: (
      <p>
        TODO
      </p>
    ),
  },
  {
    date: 'January 2020 - December 2022',
    location: 'Mutual of Omaha (Enterprise Business Platform)',
    title: 'Senior Cloud Architect',
    content: (
      <p>
        TODO
      </p>
    ),
  },
  {
    date: 'August 2019 - January 2020',
    location: 'Mutual of Omaha (Distribution Channel Management)',
    title: 'Senior Cloud Architect',
    content: (
      <p>
        TODO
      </p>
    ),
  },
  {
    date: 'April 2019 - August 2019',
    location: 'Optum (UnitedHealth Group)',
    title: 'Senior Software Engineer',
    content: (
      <p>
        TODO
      </p>
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
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
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
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
