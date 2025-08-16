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
    title: "Upcoming Events",
    items: [
      {
        id: "event1",
        title: "DevOps Workshop",
        date: "Sept 10, 2025",
        description: "Master CI/CD pipelines and automation tools.",
        image: "/images/dipesh.jpg",
      },
      {
        id: "event2",
        title: "Cloud Hackathon",
        date: "Oct 15, 2025",
        description: "Build real-world cloud-native projects.",
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
        role: "DevOps Expert",
        category: "Mentor",
        image: "/images/dipesh.jpg",
      },
      {
        id: "member7",
        name: "Dr. Sarah Lee",
        role: "DevOps Expert",
        category: "Mentor",
        image: "/images/hero.jpg",
      },
      {
        id: "member7",
        name: "Dr. Sarah Lee",
        role: "DevOps Expert",
        category: "Mentor",
        image: "/images/hero.jpg",
      },
      {
        id: "member7",
        name: "Dr. Sarah Lee",
        role: "DevOps Expert",
        category: "Mentor",
        image: "/images/hero.jpg",
      },
      {
        id: "member7",
        name: "Dr. Sarah Lee",
        role: "DevOps Expert",
        category: "Mentor",
        image: "/images/hero.jpg",
      },
      {
        id: "member2",
        name: "Dipesh Ghimire",
        role: "Community Lead",
        category: "Leader",
        image: "/images/dipesh.jpg",
      },
      {
        id: "member3",
        name: "Emma Chen",
        role: "Core Member",
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
