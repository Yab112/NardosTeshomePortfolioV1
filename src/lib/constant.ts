import cisco from "../../public/cisc.png";
import book from "../../public/b.png";
import afca from "../../public/afca.png";
import newslatter from "../../public/newslatter.png";
import imdfurnuture from "../../public/Imdfurniture.png"
import temaribet from "../../public/temaribet.png"
import coders from "../../public/coder.png";
import WeCare from "../../public/WeCare.png";
import Memo1 from "../../public/Memo1.png";
import healthcare from "../../public/healthcare.png";
import yekatit from "../../public/yekatit.png";
import booklate from "../../public/booklate.png";
  import impact from "../../public/impact.png";
  import checkout from "../../public/checkout.png";
import MOH from "../../public/MOH.png";
import fingerprinting from "../../public/fingerprinting.png";
import machine from "../../public/machine.png";
import m from "../../public/m.png";

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
    title: "Healthcare Solutions Website ",
    description: 
      `A clean and structured website design for a healthcare technology company, showcasing laboratory equipment and product details. The layout emphasizes clarity, trust, and usability with a modern medical-inspired color palette, streamlined navigation, and well-organized product pages for an intuitive browsing experience. `,
    tags: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
    imageUrl: machine,
    href: 'https://www.figma.com/design/Vfig3qCIWUibCSUuJlSlIP/Lean-Healthcare-Solutions--Copy-?node-id=0-1&t=lNrcPvomHhwmzYgq-1'
},  
{
  title: "MOH performance monitoring App",
  description: 
    `MOH performance monitoring App  designed for ministries of health.`,
  tags: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
  imageUrl: MOH,
  href: ''
},
{
  title: "Eyewear E-Commerce Website – UI Design",
  description: 
    `An e-commerce platform for eyewear designed with a modern, user-friendly interface. The layout highlights product discovery, try-on previews, and detailed product pages while maintaining a clean visual style with an orange accent palette. The design focuses on easy navigation, smooth browsing, and a shopping experience that balances style with functionality.`,
  tags: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
  imageUrl: m,
  href: 'https://www.figma.com/design/XgsK34YHQufBH9Gvpp07Qv/Untitled?node-id=0-1&t=f5jI9Au4yDRSLImj-1'
},

  {
    title: "Coders Social Media",
    description:
      `Coders social media is social mediaapp, 
      designed for coders to share code snippets and connect with other coders.`,
    tags: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
    imageUrl: coders,
    href: 'https://www.figma.com/design/qdTBmQ3fucZfJxxRUf9gMq/Coder-social-media?node-id=0-1&t=xPo5Rc720Xyg8smZ-1'
  },

  {
    title: "Dowell Newsletter",
    description: 
      "Dowell Newsletter is a web platform that allows users to view newsletters, manage subscriptions by unsubscribing.",
    tags: ["UI/UX Design", "Responsive Design", "User Flow", "Figma", "Next.js"],
    imageUrl: newslatter,
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
  imageUrl: Memo1,
  href: 'https://www.figma.com/design/507kSZ9SrEWxaHZ8l9zZ3F/Memo-tape-tour-and-travel?node-id=94-142&t=5pMTU6tvIy04vq6p-1'
},
{
  title: "healthcare platform",
  description: 
    `healthcare platform is a comprehensive solution designed to offer users seamless access to health services and information`,
  tags: ["UI/UX Design", "Health Platform", "Figma", "Prototyping", "Responsive Design"],
  imageUrl: healthcare,
  href: 'https://www.figma.com/design/507kSZ9SrEWxaHZ8l9zZ3F/Memo-tape-tour-and-travel?node-id=94-142&t=5pMTU6tvIy04vq6p'
},

{
  title: "yekatit 12",
  description: 
    `developed a comprehensive UI/UX design for Yekatit 12, focusing on enhancing user experience and accessibility for internal use only. `,
  tags: ["UI/UX Design", "Travel Platform", "Figma", "Prototyping", "Responsive Design"],
  imageUrl: yekatit,
  href: 'https://www.figma.com'
},
{
  title: "E-commerce Checkout Flow",
  description: 
    `A clean and intuitive checkout design that simplifies online payments. The flow includes secure payment details, order summary, and billing address entry, followed by a success confirmation screen with receipt download and order tracking options. Built with clarity and trust in mind, the design ensures a smooth and user-friendly purchasing experience.. `,
  tags: ["UI/UX Design", "Travel Platform", "Figma", "Prototyping", "Responsive Design"],
  imageUrl: checkout,
  href: 'https://www.figma.com/design/WWE4PR8UWXpiLYXezfJSsD/Untitled?node-id=0-1&t=rbwsfN51JrAV8OG9-1'
},


{
  title: "Booklate",
  description: 
    `Booklate design for a private client for PTGR.`,
  tags: ["UI/UX Design", "Comprehensive Platform", "Figma", "Prototyping", "Responsive Design"],
  imageUrl: booklate,
  href: 'https://www.figma.com/design/507kSZ9SrEWxaHZ8l9zZ3F/Memo-tape-tour-and-travel?node-id=94-142&t=5pMTU6tvIy04vq6p'
},
{
  title: "Impact logo design",
  description: 
    `designed an impactful logo for a client.`,
  tags: ["Logo Design", "Brand Identity", "Figma", "Adobe Illustrator"],
  imageUrl: impact,
  href: ''
}









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
    description: "I create intuitive and visually stunning user interfaces that enhance user engagement and drive conversions. From wireframes to high-fidelity prototypes, I design interfaces that are both beautiful and functional across all devices and platforms.",
    tag: "Visual Design & Prototyping",
    title: "User Interface Design",
    headerText: "Creating Beautiful and Intuitive Digital Interfaces."
  },
  {
    description: "I conduct comprehensive user research, create user personas, and design user journeys that ensure your product meets real user needs. Through usability testing and iterative design, I optimize the user experience for maximum satisfaction and engagement.",
    tag: "User Research & Testing",
    title: "User Experience Design",
    headerText: "Designing User-Centered Experiences That Drive Results."
  },
  {
    description: "I develop comprehensive design systems and style guides that ensure consistency across your brand. From component libraries to design tokens, I create scalable design solutions that maintain visual harmony and improve development efficiency.",
    tag: "Design Systems & Branding",
    title: "Design Systems & Brand Identity",
    headerText: "Building Cohesive and Scalable Design Solutions."
  }
] as const;

