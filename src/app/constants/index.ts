import img1 from "../../../public/images/devopslogo.png";
import img2 from "../../../public/images/devfest.png";
import img3 from "../../../public/images/devcorps.png";
import img4 from "../../../public/images/image.png";
// import kshitiz from "../../../public/images/hero.jpg";

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
  image: string;
}

export interface ContactField {
  name: string;
  placeholder: string;
  type: string;
}

export const SITE_CONTENT = {
  hero: {
    title: "DevOps Pioneer Community",
    subtitle: "Innovate, Collaborate, Pioneer!",
    cta: "Join Us",
    backgroundImage: "/images/hero.jpg",
  },
  about: {
    title: "About Us",
    description:
      "DevOps Pioneer Community is a vibrant student-led group dedicated to mastering DevOps practices. We empower students to learn, share, and build innovative solutions, shaping the future of software development and operations.",
  },
  events: {
    title: " Events",
    items: [
      {
        id: "event1",
        title: "Docker Reimagined",
        date: "Sept 10, 2025",
        description: "Master Dockerization.",
        image: "/images/dipesh.jpg",
      },
      {
        id: "event2",
        title: "Cloud Hackathon",
        date: "Aug 25, 2025",
        description:
          "Build real-world impactful project for edcational sector, cloud-native projects.",
        image: "/images/dipesh.jpg",
      },
    ] as Event[],
  },
  team: {
    title: "Our Team",
    members: [
      {
        id: "member1",
        name: "Dipesh Shrestha",
        role: "DevCorps Head",
        category: "Mentor",
        image: "/images/dipeshsir.jpg",
      },
      {
        id: "member2",
        name: "Kshitiz Bhujel",
        role: "ING Mentor",
        category: "Mentor",
        image: "/images/kshitiz.jpg",
      },
      {
        id: "member3",
        name: "Yamoo Sir",
        role: "DevOps Expert",
        category: "Mentor",
        image: "/images/hero.jpg",
      },
      {
        id: "member4",
        name: "Dipesh Ghimire",
        role: "Community Lead",
        category: "Leader",
        image: "/images/dipesh.jpg",
      },
      {
        id: "member5",
        name: "Abhishekh Kunwar",
        role: "Core Member : Logistic",
        category: "Member",
        image: "/images/abhisek.jpg",
      },
      {
        id: "member6",
        name: "Upashna Acharya",
        role: "Core Member : Design",
        category: "Member",
        image: "/images/hero.jpg",
      },
      {
        id: "member7",
        name: "Krisala Reule : Design",
        role: "Core Member",
        category: "Member",
        image: "/images/hero.jpg",
      },
      {
        id: "member8",
        name: "Sarishma Ghimire",
        role: "Core Member : Design",
        category: "Member",
        image: "/images/sarishma.jpg",
      },
      {
        id: "member9",
        name: "Deepti Aryal",
        role: "Core Member : Design",
        category: "Member",
        image: "/images/hero.jpg",
      },
      {
        id: "member10",
        name: "Krishma Shrestha ",
        role: "Core Member : Documentation",
        category: "Member",
        image: "/images/hero.jpg",
      },
    ] as TeamMember[],
  },
  contact: {
    title: "Contact Us",
    fields: [
      { name: "name", placeholder: "Your Name", type: "text" },
      { name: "email", placeholder: "Your Email", type: "email" },
      { name: "message", placeholder: "Your Message", type: "textarea" },
    ] as ContactField[],
    submitText: "Send Message",
  },
};

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export const data = [
  {
    id: 1,
    title: "AI-Guided Personalization",
    description:
      "Smart recommendations for writers and budgets tailored to you.",
    image: img1,
    position: "left-0 top-[5%] pr-4 desktop:pr-0",
    align: "items-start text-left",
  },
  {
    id: 2,
    title: "Secure & Local Payments",
    description: "Pay confidently with eSewa, Khalti, or global methods.",
    image: img2,
    position: "left-[25%] bottom-[0%]",
    align: "items-center",
  },
  {
    id: 3,
    title: "Gamified Growth",
    description: "Earn badges, track progress, and climb the leaderboard.",
    image: img3,
    position: "left-[53%] top-[5%]",
    align: "items-center",
  },
  {
    id: 4,
    title: "Real-Time Collaboration",
    description:
      "Work with writers or clients seamlessly through live chat, comments, and version history.",
    image: img4,
    position: "right-0 bottom-[0%] pl-4 desktop:pl-0",
    align: "items-end ",
  },
];
