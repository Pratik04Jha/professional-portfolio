export const projectDetails = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "A comprehensive AI platform bringing together multiple AI models in one unified interface with real-time streaming responses and persistent chat history.",
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui"],
    href: "https://artificial-intelligence-beta.vercel.app/",
    slug: "artificial-intelligence",

    fullDescription: `
      ZeniusVerse is a comprehensive AI platform that brings together multiple AI capabilities 
      in one unified interface. Built with cutting-edge technologies, it offers users seamless 
      access to various AI models and tools.
      
      Key Features:
      - Multi-model AI chat interface
      - Real-time response streaming
      - User authentication and session management
      - Persistent chat history
      - Modern, responsive UI
      - Media generation
      
      Special Feature: The persona mode allows us to chat with different characters and create your own character there
      
      Technical Highlights:
      - Built with Next.js 15.5.1 for optimal performance
      - Integrated AI SDK for seamless model interaction
      - Supabase for authentication and data storage
      - Styled with Shadcn UI components
    `,
    githubUrl: "https://github.com/pratik04jha/artificial-intelligence",
    liveUrl: "https://artificial-intelligence-beta.vercel.app/",
    features: [
      "Multi-model AI chat",
      "Persona mode",
      "User authentication",
      "Chat history",
      "Media generation",
    ],
    technologies: {
      frontend: ["Next.js", "React", "Tailwind CSS", "Shadcn UI"],
      backend: ["Supabase", "AI SDK"],
      deployment: ["Vercel"],
    },
    year: "2024",
    category: "Web Application",
    featured: true,
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    title: "LudumVerse | Play addictive games online",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment integration, and advanced analytics dashboard for merchants.",
    fullDescription: `
      ShopFlow revolutionizes online retail with its feature-rich platform designed for both 
      merchants and customers. Built with scalability and performance in mind.
      
      ## Key Features
      - Real-time inventory tracking
      - Stripe payment integration
      - Advanced analytics dashboard
      - Product recommendation engine
      - Mobile-responsive design
      
      ## Technical Highlights
      - Next.js 14 with App Router
      - PostgreSQL database with Prisma ORM
      - Redis for caching and session management
      - AWS S3 for media storage
      
      ## Challenges & Solutions
      Implemented optimistic UI updates for cart operations to provide instant feedback while
      maintaining data consistency through server-side validation and rollback mechanisms.
    `,
    stack: ["nextjs", "postgresql", "prisma", "stripe"],
    href: "https://shopflow-demo.vercel.app/",
    githubUrl: "https://github.com/yourusername/shopflow",
    liveUrl: "https://shopflow-demo.vercel.app/",
    slug: "shopflow",
    features: [
      "Inventory management",
      "Payment processing",
      "Analytics dashboard",
      "Product recommendations",
      "Order tracking",
    ],
    technologies: {
      frontend: ["Next.js", "React", "Tailwind CSS", "Redux"],
      backend: ["PostgreSQL", "Prisma", "Stripe API", "Redis"],
      deployment: ["Vercel", "AWS S3"],
    },
    year: "2024",
    category: "E-commerce",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    title: "Automate social media posting with AI",
    description:
      "An intuitive project management tool featuring kanban boards, time tracking, team collaboration, and real-time updates for agile teams.",
    fullDescription: `
      TaskMaster Pro streamlines project workflows with powerful collaboration features and 
      real-time synchronization across teams.
      
      ## Key Features
      - Drag-and-drop kanban boards
      - Time tracking and reporting
      - Real-time collaboration
      - Sprint planning tools
      - Custom workflows
      
      ## Technical Highlights
      - Built with Next.js and React
      - WebSocket integration for real-time updates
      - MongoDB for flexible data storage
      - Chart.js for data visualization
      
      ## Challenges & Solutions
      Implemented conflict resolution for simultaneous edits using operational transformation
      algorithms, ensuring data consistency across all connected clients.
    `,
    stack: ["nextjs", "mongodb", "websocket", "chart-js"],
    href: "https://taskmaster-pro.vercel.app/",
    githubUrl: "https://github.com/yourusername/taskmaster",
    liveUrl: "https://taskmaster-pro.vercel.app/",
    slug: "taskmaster-pro",
    features: [
      "Kanban boards",
      "Time tracking",
      "Real-time sync",
      "Sprint planning",
      "Team collaboration",
    ],
    technologies: {
      frontend: ["Next.js", "React", "Tailwind CSS", "Chart.js"],
      backend: ["MongoDB", "WebSocket", "Node.js"],
      deployment: ["Vercel"],
    },
    year: "2024",
    category: "Productivity",
    featured: true,
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    title: "Readanore | Blogs website for the web",
    description:
      "A comprehensive fitness tracking app with AI-powered workout recommendations, nutrition planning, and progress visualization.",
    fullDescription: `
      FitLife combines fitness tracking with artificial intelligence to provide personalized 
      workout and nutrition plans tailored to individual goals.
      
      ## Key Features
      - AI workout recommendations
      - Nutrition tracking and meal planning
      - Progress visualization with charts
      - Social features for motivation
      - Integration with fitness wearables
      
      ## Technical Highlights
      - Built with Next.js and TypeScript
      - TensorFlow.js for AI recommendations
      - D3.js for data visualization
      - OAuth integration for wearable devices
      
      ## Challenges & Solutions
      Developed a custom recommendation algorithm that adapts to user preferences and 
      performance metrics, improving engagement by 40% through personalized suggestions.
    `,
    stack: ["nextjs", "typescript", "tensorflow", "d3"],
    href: "https://fitlife-tracker.vercel.app/",
    githubUrl: "https://github.com/yourusername/fitlife",
    liveUrl: "https://fitlife-tracker.vercel.app/",
    slug: "fitlife",
    features: [
      "AI recommendations",
      "Nutrition tracking",
      "Progress charts",
      "Social features",
      "Wearable integration",
    ],
    technologies: {
      frontend: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
      backend: ["Supabase", "TensorFlow.js", "OAuth"],
      deployment: ["Vercel"],
    },
    year: "2024",
    category: "Health & Fitness",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    title: "Commertia | Buy anything",
    description:
      "A no-code portfolio builder specifically designed for developers, featuring project showcases, blog integration, and custom domains.",
    fullDescription: `
      PortfolioCraft empowers developers to create stunning portfolios without writing code, 
      while maintaining full customization capabilities for those who want more control.
      
      ## Key Features
      - Drag-and-drop portfolio builder
      - GitHub integration for projects
      - Built-in blog with MDX support
      - Custom domain support
      - SEO optimization tools
      
      ## Technical Highlights
      - Built with Next.js and TypeScript
      - MDX for blog content
      - Cloudflare for CDN and DNS
      - GitHub API integration
      
      ## Challenges & Solutions
      Created a flexible theming system that allows users to customize every aspect of their 
      portfolio while maintaining responsive design principles across all templates.
    `,
    stack: ["nextjs", "typescript", "mdx", "cloudflare"],
    href: "https://portfoliocraft.io/",
    githubUrl: "https://github.com/yourusername/portfoliocraft",
    liveUrl: "https://portfoliocraft.io/",
    slug: "portfoliocraft",
    features: [
      "No-code builder",
      "GitHub integration",
      "Blog with MDX",
      "Custom domains",
      "SEO tools",
    ],
    technologies: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
      backend: ["Supabase", "GitHub API", "Cloudflare"],
      deployment: ["Vercel", "Cloudflare"],
    },
    year: "2024",
    category: "Developer Tools",
    featured: true,
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    title: "Stringly | Social media platform",
    description:
      "An engaging language learning platform using spaced repetition, interactive exercises, and AI-powered conversation practice.",
    fullDescription: `
      LinguaLeap makes language learning effective and enjoyable through scientifically-proven 
      methods and cutting-edge technology.
      
      ## Key Features
      - Spaced repetition algorithm
      - AI conversation partner
      - Interactive grammar exercises
      - Progress tracking and streaks
      - Community features
      
      ## Technical Highlights
      - Built with Next.js and React
      - OpenAI API for conversation practice
      - PostgreSQL for user data
      - Custom spaced repetition algorithm
      
      ## Challenges & Solutions
      Developed an adaptive difficulty system that adjusts lesson complexity based on user 
      performance, improving retention rates by 35% compared to traditional methods.
    `,
    stack: ["nextjs", "openai", "postgresql", "react"],
    href: "https://lingualeap.app/",
    githubUrl: "https://github.com/yourusername/lingualeap",
    liveUrl: "https://lingualeap.app/",
    slug: "lingualeap",
    features: [
      "Spaced repetition",
      "AI conversations",
      "Interactive exercises",
      "Progress tracking",
      "Community features",
    ],
    technologies: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["PostgreSQL", "OpenAI API", "Prisma"],
      deployment: ["Vercel"],
    },
    year: "2024",
    category: "Education",
  },
];
