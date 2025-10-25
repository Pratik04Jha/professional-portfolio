# Portfolio Website

A modern, fully responsive portfolio website built with Next.js and shadcn/ui components, showcasing my work, skills, and journey as a developer.

## Tech Stack

- **Framework**: Next.js
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Features

- Fully responsive design for all devices
- Professional and consistent UI using shadcn card components
- Fast page loads and optimized performance
- SEO-friendly structure
- Dark/Light mode support

## Pages

### Home (`/`)

The homepage serves as a comprehensive overview of my professional profile, featuring:

- **Profile Section**: Professional photo and brief tagline
- **Introduction**: Overview of who I am and what I do
- **Featured Blogs**: Curated selection of my best written content
- **Featured Projects**: Showcase of notable projects I've worked on
- **Languages**: Programming languages I work with
- **Tech Stack**: Technologies and tools I use regularly
- **Education**: Academic background and qualifications
- **Certificates**: Professional certifications and achievements
- **Hobbies**: Personal interests and activities outside of coding
- **Outro Section**: Closing statement and call-to-action

All sections are elegantly organized using shadcn card components for a clean, professional appearance.

### Blogs (`/blogs`)

A comprehensive collection of all my blog posts with powerful filtering and sorting capabilities:

- **Filter by Date**: Sort articles chronologically (newest/oldest)
- **Filter by First Letter**: Quickly find posts by title initial
- **Search Functionality**: Find specific topics or keywords
- **Category Tags**: Browse posts by topic or technology
- **Reading Time Estimates**: Know how long each post takes to read
- **Responsive Grid Layout**: Optimized viewing on all screen sizes

### Projects (`/projects`)

An extensive showcase of my development work, including:

- **Project Cards**: Visual previews with descriptions
- **Technology Tags**: Technologies used in each project
- **Live Demos**: Links to deployed applications
- **Source Code**: GitHub repository links
- **Filter Options**: Sort by technology, date, or project type
- **Detailed Views**: In-depth project breakdowns with screenshots

### Contact (`/contact`)

Get in touch with me through various channels:

- **Contact Form**: Direct message submission
- **Social Media Links**: Connect on professional networks
- **Email**: Professional contact information
- **Download Resume**: Quick access to my CV

## Installation & Setup

```bash
# Clone the repository
git clone "https://github.com/pratik04jha/portfolio"

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio/
├── public/               # Static assets
├── src/
    ├── app/
    │   └── favicon.ico       # Icon which appear in head
    │   └── globals.css       # CSS applied globaly
    │   └── page.jsx          # Homepage
    │   └── layout.jsx        # Layout page
    │   └── error.jsx         # Error page
    │   └── notfound.jsx      # Not found page
    |   └── (links)
    │       └── blogs/        # Blog pages
    │       └── projects/     # Projects pages
    │       └── contact/      # Contact page
    ├── _components/
    │   └── ui/               # shadcn/ui components
    |   └── cards/            # cards organised internally  
    │   └── ...               # Custom components
    └── _lib/                 # Utility functions
```

## Customization

You can customize the site by modifying:

- **Content**: Update data in the respective page components
- **Styling**: Adjust Tailwind classes or create custom CSS
- **Components**: Extend or modify shadcn/ui components
- **Theme**: Configure colors in `globals.css`

## Responsive Design

The portfolio is fully optimized for:

- Mobile devices (320px and up)
- Tablets (768px and up)
- Laptops (1024px and up)
- Desktops (1280px and up)

## Deployment

This portfolio can be deployed on various platforms:

```bash
# Build for production
npm run build

# Start production server
npm start
```

Recommended platforms:

- Vercel (optimized for Next.js)
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## License

This site is MIT licensed

## Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## Contact

- **Email**: [pratik04jha@gmail.com]
- **LinkedIn**: [https://linkedin.con/in/pratikthejha]
- **GitHub**: [https://github.com/pratik04jha]
- **Twitter**: [https://x.com/gravitonion]

---

Built with ❤️ using Next.js and shadcn/ui