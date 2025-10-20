export const projectDetails = [
  {
    imgSrc: "/projects_img/project.png",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random.",
    fullDescription: `
      ZeniusVerse is a comprehensive AI platform that brings together multiple AI capabilities 
      in one unified interface. Built with cutting-edge technologies, it offers users seamless 
      access to various AI models and tools.
      
      ## Key Features
      - Multi-model AI chat interface
      - Real-time response streaming
      - User authentication and session management
      - Persistent chat history
      - Modern, responsive UI
      
      ## Technical Highlights
      - Built with Next.js 14 for optimal performance
      - Integrated AI SDK for seamless model interaction
      - Supabase for authentication and data storage
      - Styled with Shadcn UI components
      
      ## Challenges & Solutions
      One of the main challenges was implementing real-time streaming responses while maintaining
      a smooth user experience. This was solved by utilizing the AI SDK's streaming capabilities
      and optimizing the rendering pipeline.
    `,
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui"],
    href: "https://artificial-intelligence-beta.vercel.app/",
    githubUrl: "https://github.com/yourusername/zeniusverse", // Optional
    liveUrl: "https://artificial-intelligence-beta.vercel.app/",
    slug: "zeniusverse",
    features: [
      "Multi-model AI chat",
      "Real-time streaming",
      "User authentication",
      "Chat history",
      "Responsive design"
    ],
    technologies: {
      frontend: ["Next.js", "React", "Tailwind CSS", "Shadcn UI"],
      backend: ["Supabase", "AI SDK"],
      deployment: ["Vercel"]
    },
    year: "2024",
    category: "Web Application"
  },
];