import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "None",
    role: "None",
    company: "None",
    description: `None.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  
  
];

export const PROJECTS = [
  {
    title: "Git Query — AI Knowledge Assistant",
    image: project1,
    description:
      "A Retrieval-Augmented Generation (RAG) based system that indexes GitHub repositories using vector embeddings and enables semantic search with an AI-powered chat interface for code-aware insights.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB Vector Search",
      "Google Gemini",
      "LangChain",
      "Tailwind CSS",
    ],
  },
  {
    title: "ChatVerse — Real-Time Chat Application",
    image: project2,
    description:
      "A horizontally scalable real-time chat application built using Socket.IO and Redis Pub/Sub, with Apache Kafka for durable message streaming and PostgreSQL for persistent storage.",
    technologies: [
      "Next.js",
      "Node.js",
      "Socket.IO",
      "Redis Pub/Sub",
      "Apache Kafka",
      "PostgreSQL",
      "Prisma ORM",
    ],
  },
  {
    title: "Digital Banking Application",
    image: project3,
    description:
      "A secure digital banking system implementing ACID-compliant transactions with PostgreSQL, featuring JWT-based authentication, Zod validation, and robust API security.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "Zod",
      "Bcrypt",
    ],
  },
];

export const CONTACT = {
  address: "Chandigarh University, Chandigarh",
  phoneNo: "+91 62995 97973",
  email: "aayushnandan623@gmail.com",
};

