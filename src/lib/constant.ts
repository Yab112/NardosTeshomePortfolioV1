import cisco from "../../public/cisc.png";
import book from "../../public/b.png";
import afca from "../../public/afca.png";
import news from "../../public/News.png";
import imdfurnuture from "../../public/Imdfurniture.png"
import temaribet from "../../public/temaribet.png"
import coders from "../../public/coder.png";
import WeCare from "../../public/WeCare.png";
import Memo from "../../public/Memo.png";

export const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Services",
    href: "#services",
  },

  {
    name: "Contact",
    href: "#contact",
  },
] as const;

export const projectsData = [

  {
    title: "ImdFurniture",
    description: 
      `ImdFurniture is a modern furniture e-commerce platform, designed to provide users with a seamless shopping experience. `,
    tags: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
    imageUrl: imdfurnuture,
    href: 'https://app.imd.com/'
},

  {
    title: "Coders Social Media",
    description:
      `Coders social media is social mediaapp, 
      designed for coders to share code snippets and connect with other coders.`,
    tags: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
    imageUrl: coders,
    href: 'https://app.coders.com/'
  },

  {
    title: "Dowell Newsletter",
    description: 
      "Dowell Newsletter is a web platform that allows users to view newsletters, manage subscriptions by unsubscribing.",
    tags: ["UI/UX Design", "Responsive Design", "User Flow", "Figma", "Next.js"],
    imageUrl: news,
    href: 'https://www.figma.com/design/I6MLqPElzXuvCIVtv0gdhh/DoWell-Newsletter?node-id=1-2&t=Orli5YSZWddJDcli-1'
},

{
  title: "TemariBet Admin Dashboard",
  description: 
    `TemariBet Admin Dashboard is an analysis platform designed to help schools and educators evaluate and act on feedback.`,
  tags: ["UI/UX Design", "Data Analysis", "Mantine UI", "TailwindCSS", "Next.js"],
  imageUrl: temaribet,
  href: 'https://www.figma.com/design/PxDsHuAN7SS7rhVxGnWcGO/report?node-id=0-1&t=Juxgq91vTXz9fTHH-1'
},

  {
    title: "WeCare",
    description: 
      `WeCare is a health assistance platform designed to provide users with personalized health management tools and resources. `,
    tags: ["UI/UX Design", "Health Assistance", "Figma", "Responsive Design", "Next.js"],
    imageUrl: WeCare,
    href: 'https://www.figma.com/design/DWxxjH7mQlGSynagLtKuQa/health-care?node-id=0-1&t=C1hRcbJ7Nhzkkr0U-1'
},


{
  title: "Memo-tape",
  description: 
    `Memo-tape is a tour and travel agency platform designed to offer users seamless booking experiences`,
  tags: ["UI/UX Design", "Travel Platform", "Figma", "Prototyping", "Responsive Design"],
  imageUrl: Memo,
  href: 'https://www.figma.com/design/507kSZ9SrEWxaHZ8l9zZ3F/Memo-tape-tour-and-travel?node-id=94-142&t=5pMTU6tvIy04vq6p-1'
},






] as const;

export const skillsData = [
  "User Research & Analysis",
"Wireframing and Prototyping (using tools like Figma, Sketch, or Adobe XD)",
"User Interface (UI) Design",
"User Experience (UX) Design",
"Information Architecture (IA)",
"Interaction Design (IxD)",
"Responsive and Mobile-First Design",
"Accessibility Standards (WCAG Compliance)",
"Usability Testing & User Feedback Integration",
"Design Systems and Style Guides"
] as const;


export const service = [
  {
    description: "I specialize in crafting user-centered web applications with expertise in HTML5, CSS3, JavaScript, TypeScript, React, and Next.js. My designs are focused on creating seamless and accessible user experiences, ensuring both functionality and aesthetic appeal.",
    tag: "Modern Web Technologies",
    title: "UI/UX Development",
    headerText: "Building Scalable and User-Friendly Interfaces with a Focus on Accessibility."
  },
  {
    description: "With proficiency in integrating and customizing headless CMS platforms like Strapi, I streamline content management processes for your applications. This enables dynamic and efficient workflows, making content updates smooth and effortless.",
    tag: "Streamlined Content Management",
    title: "Headless CMS Integration",
    headerText: "Simplifying Content Workflows for Better User Engagement."
  },
  {
    description: "As a UI/UX developer, I excel in conducting user research, wireframing, prototyping, and usability testing. My goal is to create intuitive interfaces that meet user needs while aligning with your business objectives.",
    tag: "User-Centered Design Practices",
    title: "User Experience Design",
    headerText: "Delivering Intuitive and Enjoyable Digital Experiences."
  },
  {
    description: "I design and develop responsive and visually appealing mobile applications. By focusing on user-centric design principles, I ensure that mobile apps provide an engaging and intuitive experience across all devices.",
    tag: "Mobile-First Design",
    title: "Mobile Application Design",
    headerText: "Creating Seamless and Engaging Mobile Experiences."
  }
] as const;

