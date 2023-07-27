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
import devOpsHandbook from '../images/books/devops-handbook.jpg';
import phoenixProject from '../images/books/phoenix-project.jpg';
import awsDeveloperImg from '../images/certification/aws-developer.png';
import awsDevOpsImg from '../images/certification/aws-devops.png';
import azureDeveloperImg from '../images/certification/azure-developer.png';
import azureDevOpsImg from '../images/certification/azure-devops.png';
import ckaImg from '../images/certification/cka.png';
import terraformImg from '../images/certification/terraform.png';
import heroImage from '../images/header-background.jpg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  CertificationItem,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
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
  Certifications: 'certifications',
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
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
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
        level: 9,
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
 * Certifications section
 */
export const certificationItems: CertificationItem[] = [
  {
    title: 'Certified Kubernetes Administrator',
    description: 'The Linux Foundation',
    url: 'https://www.credly.com/badges/4ba2204d-ba61-429a-af9e-7e1d4a8410ba',
    image: ckaImg,
  },
  {
    title: 'HashiCorp Certified: Terraform Associate',
    description: 'HashiCorp',
    url: 'https://www.credly.com/badges/289139fd-f9fb-4e1a-9e30-01180ffb5816',
    image: terraformImg,
  },
  {
    title: 'AWS Certified DevOps Engineer - Professional',
    description: 'Amazon Web Services Training and Certification',
    url: 'https://www.credly.com/badges/e9842bad-e6a0-4943-8d34-3fbf8faa6635',
    image: awsDevOpsImg,
  },
  {
    title: 'AWS Certified Developer - Associate',
    description: 'Amazon Web Services Training and Certification',
    url: 'https://www.credly.com/badges/2713fd32-69df-4c7b-87d5-d11d414158de',
    image: awsDeveloperImg,
  },
  {
    title: 'Microsoft Certified: Azure Developer Associate',
    description: 'Microsoft',
    url: 'https://www.credly.com/badges/9404719f-3a61-4658-b4a0-bc12b833642b',
    image: azureDeveloperImg,
  },
  {
    title: 'Microsoft Certified: DevOps Engineer Expert',
    description: 'Microsoft',
    url: 'https://learn.microsoft.com/en-us/users/aarondaberkow-1066/credentials/84ad6e9bf5bd9244',
    image: azureDevOpsImg,
  },
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
        Lead the development of a cloud native platform to support the State of Nebraska's benfits application process.
      </p>
    ),
  },
  {
    date: 'January 2020 - December 2022',
    location: 'Mutual of Omaha (Enterprise Business Platform)',
    title: 'Senior Cloud Architect',
    content: (
      <p>
        Architected transition of admin systems to custom enterprise CDK framework.
        Coordinated cross account migration of systems during departmental restructuring.
        Filled Solution Lead role with responsibilities including assigning task priority, system architecture, and mentoring of other developers.

      </p>
    ),
  },
  {
    date: 'August 2019 - January 2020',
    location: 'Mutual of Omaha (Distribution Channel Management)',
    title: 'Senior Cloud Architect',
    content: (
      <p>
        Created the infrastructure and deployment pipeline to support the transformation of disability insurance compensation events between vendors.
        Created CI/CD pipelines utilizing Jenkins with automated unit and integration tests.
      </p>
    ),
  },
  {
    date: 'April 2019 - August 2019',
    location: 'Optum (UnitedHealth Group)',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Utilized Kafka to join raw topics into a real time canonical data model to be used throughout the enterprise.
        Modeled complex healthcare platform data using the avro schema format, data joiners, and transformers.
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
      name: 'The DevOps Handbook',
      text: 'How to Create World-Class Agility, Reliability, & Security in Technology Organizations',
      image: devOpsHandbook,
    },
    {
      name: 'The Phoenix Project',
      text: 'A Novel about IT, DevOps, and Helping Your Business Win',
      image: phoenixProject,
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
