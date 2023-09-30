import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  wordpress,
  yonisilvestre,
  yardsale,
  landingyoni,
  calendary,
  lashroom,
  silvestresmarketing,
  justloan,
  expresscleanings,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About Me",
  },
  {
    id: "#work",
    title: "Portfolio",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "https://rxresu.me/yonisantiagosg/yoni-silvestre",
    title: "Resume", 

  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: reactjs,
  },
  {
    title: "WordPress Developer",
    icon: wordpress,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "WordPress Developer",
    company_name: "Serena Realty Hotels",
    icon: wordpress,
    iconBg: "#383E56",
    date: "2017 - 2018",
    points: [
      "Developing Serena Realty websites development including a Hotel booking system with a payment gateway using WordPress and woo-commerce, synchronized with multiple booking platforms: Airbnb API, Booking.com, Expedia, and iCalendar.",
      "Increasing +$50k revenue through the booking system in the first 4 months.",
      "Tech Stack: WordPress, PHP, Javascript, MySQL, CSS, HTML."
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "Estudio Digital",
    icon: wordpress,
    iconBg: "#E6DEDD",
    date: "2018 - 2019",
    points: [
      "Developing responsive websites for clients in different niches, using WordPress and Shopify. Optimizing websites, installing CDN and SSL certificates, installing required plugins, improving website loading speeds by 40%, and additional coding to fit final design and functionality requirements.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing e-commerce websites using WooCommerce, connected payment methods (ePayco, PayPal, Stripe), and internal SEO done with Yoast SEO, achieving 40% more revenue for the client throughout website sales.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Express Cleanings",
    icon: shopify,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Developed main web app using WordPress and Woocommerce",
      "Implementing automations using custom hooks, zapier, and hubspot",
      "Building custom pricing calculator order form to schedule new bookings and collect payments through stripe API.",
      "Technologies used: PHP, WordPress, MySQL, Javascript, HTML, CSS",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Silvestres Media Group",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Provided front-end website development and landing pages using React JS, WordPress, Hubspot, Elementor, Divi, Clickfunnels and Squarespace.",
      "Leading team members for ongoing web development project using agile methodology, trello and slack.",
      "Increasing 25% of website speeds by implementing improvements on current clients websites.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Yoni proved me wrong.",
    name: "Eli P.",
    designation: "Founder",
    company: "lashroombyeli.com",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Yoni does.",
    name: "Maria S.",
    designation: "CEO",
    company: "expresscleanings.com",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our loading speed increased by 50%. We can't thank them enough!",
    name: "Carlos S.",
    designation: "Founder",
    company: "Carzul",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects = [
  {
    name: "Yard Sale Ecommerce",
    description:
      "Front End Project, React JS ecommerce store, SPA, built from scratch.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: yardsale,
    source_code_link: "https://github.com/yonisantiago/react-ecommerce-shop",
    projectUrl: "https://6513105c843700007c5dbadb--teal-axolotl-97d6e5.netlify.app/",
  },
  {
    name: "Personal Portfolio",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
    ],
    image: yonisilvestre,
    source_code_link: "https://yonisilvestre.com/",
    projectUrl: "https://yonisilvestre.com/",
  },
  {
    name: "Calendary App",
    description:
      "Calendar App, Front End and Back End  made using ReactJs, moment, Big Calendar, Bootstrap, Mongoose, MongoDB, Redux, React Router.",
    tags: [
      {
        name: "ReacJs",
        color: "blue-text-gradient",
      },
      {
        name: "moment",
        color: "green-text-gradient",
      },
      {
        name: "Big Calendar",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
      {
        name: "React Router",
        color: "blue-text-gradient",
      },
      {
        name: "Mongoose",
        color: "green-text-gradient",
      },
    ],
    image: calendary,
    source_code_link: "https://github.com/yonisantiago/calendary-app-backend",
    projectUrl: "https://calendary-app-backend-production.up.railway.app/",
  },
  {
    name: "Portfolio - Async Landing Page",
    description:
      "Responsive landing page, made with HTML, CSS, JS, Tailwind CSS, RapidAPI to pull last youtube videos on channel.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: landingyoni,
    source_code_link: "https://github.com/yonisantiago/async-landing",
    projectUrl: "https://yonisantiago.github.io/async-landing/",
  },
];
// Wordpress Projects
const projectsWp = [
  {
    name: "Express Cleanings",
    description:
      "WordPress Site with a custom form to book an appointment and take payments.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "green-text-gradient",
      },
      {
        name: "WPforms",
        color: "pink-text-gradient",
      },
    ],
    image: expresscleanings,
    source_code_link: "https://github.com/yonisantiago/",
    projectUrl: "https://expresscleanings.com/",
  },
  {
    name: "LashRoom by Eli",
    description:
      "Landing page, thank you page optimized for a sales funnel, using WordPress and Divi Builder",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "divi",
        color: "pink-text-gradient",
      },
      {
        name: "zapier",
        color: "blue-text-gradient",
      },
    ],
    image: lashroom,
    source_code_link: "https://github.com/yonisantiago",
    projectUrl: "https://lashroombyeli.com/",
  },
  {
    name: "Silvestres Marketing",
    description:
      "Silvestres Marketing Website made using WordPress and Divi",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "divi",
        color: "pink-text-gradient",
      },
      {
        name: "hubspot",
        color: "blue-text-gradient",
      },
    ],
    image: silvestresmarketing,
    source_code_link: "https://github.com/yonisantiago/",
    projectUrl: "https://silvestresmarketing.com/",
  },
  {
    name: "Mortgage Broker",
    description:
      "Mortgage broker website.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Divi",
        color: "pink-text-gradient",
      },
    ],
    image: justloan,
    source_code_link: "https://github.com/yonisantiago/",
    projectUrl: "https://justloan-solutions.com",
  },
];


export { services, technologies, experiences, testimonials, projects, projectsWp };
