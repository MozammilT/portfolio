export const myProjects = [
  {
    id: 1,
    name: "Serenova",
    title: "Hotel Booking Platform",
    description:
      "Serenova is a full-stack hotel booking platform that allows users to search, filter, and book hotels seamlessly, while providing hotel managers with tools to manage listings and reservations.",
    subDescription: [
      "Built with React, Node.js, Express, and MongoDB, styled with Tailwind CSS for a modern and responsive interface.",
      "Implemented Clerk authentication for secure user sign-up, login, and session management.",
      "Integrated Stripe payments to enable safe and reliable online booking transactions.",
      "Created an admin dashboard for hotel owners to manage rooms, bookings, and customer data",
      "Used Cloudinary for optimized hotel image uploads and storage",
      "Added automated email notifications for welcome messages, booking confirmations, and cancellations",
    ],
    href: "https://serenova-gamma.vercel.app",
    logo: "",
    image: "/projects/serenova.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/logos/react.svg",
      },
      {
        id: 2,
        name: "NodeJS",
        path: "/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    name: "Nexora",
    title: "SaaS application",
    description:
      "Nexora transforms creative workflows through AI-driven content generation, advanced image editing capabilities, and seamless community collaboration—all in one unified platform",
    subDescription: [
      "Developed a full-stack SaaS application using React, Node.js, Express, and NeonDB, styled with Tailwind CSS.",
      "Integrated AI APIs for text-to-image generation with style options, AI-powered article/blog title generation, and resume reviews with ATS scoring.",
      "Implemented Clerk authentication and billing, enabling a two-tier subscription model (Free & Premium) with gated premium features.",
      "Designed an admin dashboard for users to track and manage all their creations.",
      "Created a community page where public creations are displayed with their prompts, along with a like system for engagement",
      "Connected additional APIs for image editing, including background removal and object removal",
    ],
    href: "https://nexora-saas-tau.vercel.app/",
    logo: "",
    image: "/projects/nexora.jpg",
    tags: [
      {
        id: 1,
        name: "Clerk",
        path: "/logos/clerk.jpeg",
      },
      {
        id: 2,
        name: "React",
        path: "/logos/react.svg",
      },
      {
        id: 3,
        name: "SQL",
        path: "/logos/postgres.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    name: "ThoughtNest",
    title: "Blogging platform",
    description:
      "ThoughtNest is a modern blog platform that empowers users to create, publish, and manage blogs with AI-assisted writing, rich text editing, and an intuitive admin dashboard.",
    subDescription: [
      "Built with Vite React on the frontend and Node.js with Express on the backend, connected to MongoDB for data storage.",
      "Implemented Google OAuth with Passport.js and session-based authentication for secure user access.",
      "Connected Google Gemini API to auto-generate blog content based on the provided title, enhancing productivity.",
      "Developed an admin dashboard where users can view total blogs, comments, and drafts, as well as approve/disapprove comments.",
      "Integrated Quill rich text editor to enable flexible writing styles and formatting for blog creation",
      "Added Cloudinary integration for blog thumbnails and image management",
    ],
    href: "https://thoughtnest-blog.vercel.app",
    logo: "",
    image: "/projects/thoughtnest.jpg",
    tags: [
      {
        id: 1,
        name: "Javascript",
        path: "/logos/javascript.svg",
      },
      {
        id: 2,
        name: "Express",
        path: "/logos/express.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "Passport",
        path: "/logos/passport.svg",
      },
    ],
  },
  {
    id: 4,
    name: "Cinefind",
    title: "Movie Browsing Webpage",
    description:
      "Cinefind is a movie search engine that helps users discover, explore, and favorite movies using data from the TMDB API.",
    subDescription: [
      "Developed with Vite React and styled using Tailwind CSS for a fast and responsive user experience.",
      "Integrated the TMDB API to provide real-time access to movie details, ratings, and trending films.",
      "Implemented a search functionality with pagination, enabling users to browse through movies efficiently.",
      "Created a favorites feature with a dedicated page where users can view their saved movies.",
      "Built a trending section to highlight currently popular films",
      "Added a movie detail page where users can view ratings, overviews, and full information by clicking on thumbnails",
    ],
    href: "https://github.com/MozammilT/cinefind",
    logo: "",
    image: "/projects/cinefind.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/logos/react.svg",
      },
      {
        id: 2,
        name: "Appwrite",
        path: "/logos/appwrite.svg",
      },
      {
        id: 3,
        name: "Tailwind",
        path: "/logos/tailwind.svg",
      },
      {
        id: 4,
        name: "Figma",
        path: "/logos/figma.svg",
      },
    ],
  },
  {
    id: 5,
    name: "PostreStore",
    title: "Store made with SQL",
    description:
      "Postgre-Store is a product catalog and inventory management system that allows users to browse, add to cart, and manage products efficiently.",
    subDescription: [
      "Built with Vite React on the frontend and Node.js with Express on the backend, connected to NeonDB (Postgres) for data persistence.",
      "Implemented Zustand for global state management, ensuring smooth cart and product interactions.",
      "Used Tailwind CSS along with MUI and DaisyUI for a responsive and modern component-based UI.",
      "Developed core features including product listing, cart management, product updates, and deletion.",
      "Integrated Arcjet for enhanced application security and reliability",
    ],
    href: "https://github.com/MozammilT/cinefind",
    logo: "",
    image: "/projects/postgre-store.jpg",
    tags: [
      {
        id: 1,
        name: "Javascript",
        path: "/logos/javascript.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        path: "/logos/tailwind.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/logos/react.svg",
      },
      {
        id: 4,
        name: "Arcjet",
        path: "/logos/arcjet.jpg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/MozammilT",
    icon: "/socials/github.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mozammil.ig",
    icon: "/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "AR Analyst",
    job: "Sunknowledge ltd.",
    date: "2023-2025",
    contents: [
      "Providing voice and chat-based support to US clients.",
      "Making outbound calls for payment collections and account resolutions.",
      "Delegating tasks and assisting team leads with day-to-day operations.",
      "Managing PFS (Patient Financial Services) emails and documentation.",
      "Maintained an average call resolution rate of 95%.",
    ],
  },
  {
    title: "Healthcare Support",
    job: "Capgemini",
    date: "2025-Present",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "Ensured data privacy for customers and partners through industry-compliant protocols.",
      "Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
