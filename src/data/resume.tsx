import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Conor Quinlan",
  initials: "DV",
  url: "https://conorquinlan.io",
  location: "Boulder, CO",
  locationLink: "https://www.google.com/maps/place/boulder",
  description:
    "Security Engineer Intern at Netskope. Building SaaS's in my free time. Producing music!",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. \
    In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley] \
    (https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). \
    I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "NextJS",
    "TypeScript",
    "Python",
    "NoSQL",
    "SQL",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "TailwindCSS",
    "FastAPI",
    "JavaScript",
    "Ansible",
    "Terraform",
    "Flask",
    "GitHub",
    "GitLab",
    "Linux",
    "AWS",
    "GCP",
    "Vercel",
    "Swift"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "conorquinlan@icloud.com",
    tel: "+1 206-450-3502",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cqdev-co",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/conorgquinlan/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/realconorcodes",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@realconorcodes",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Apollu",
      href: "https://apollu.io",
      badges: [],
      location: "Boulder, CO",
      title: "Founder Engineer",
      logoUrl: "/apollu.svg",
      start: "June 2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. \
        Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and \
        Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "PearAI",
      badges: [],
      href: "https://trypear.ai",
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/trypearai_logo.jpg",
      start: "June 2024",
      end: "Present",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Netskope",
      href: "https://www.netskope.com/",
      badges: [],
      location: "St Louis, MO",
      title: "Information Security Intern",
      logoUrl: "/netskope_logo.jpg",
      start: "January 2024",
      end: "Present",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    }
  ],
  education: [
    {
      school: "University of Denver",
      href: "https://www.du.edu/",
      degree: "Bachelor's Degree of Computer Science (BS)",
      logoUrl: "/university_of_denver_logo.jpg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Apollu",
      href: "https://apollu.io",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Maximizing revenue growth SaaS, allows smaller \
         businesses to find different revenue points.",
      technologies: [
        "NextJS",
        "TypeScript",
        "NoSQL",
        "Zed",
        "TailwindCSS",
        "Stripe",
        "Plaid",
        "FastAPI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://apollu.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/ chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "DU Hackathon",
      dates: "October 21, 2023",
      location: "Denver, Colorado",
      description:
        "Developed a University Social Media app that allows students to find events/clubs easier.",
      image: "/university_of_denver_logo.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/noah-fullerton/CLDGNJ_hackathon",
        },
      ],
    },
  ],
} as const;
