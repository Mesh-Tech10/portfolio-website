# Professional Portfolio Website
# Overview
A modern, responsive portfolio website showcasing my skills, projects, and professional experience. Built with the latest web technologies and optimized for performance and SEO.
[Live Demo](https://portfolio-website-xi-gules.vercel.app)  

# Features
- Responsive Design: Mobile-first approach, works on all devices
- Modern UI/UX: Clean, professional design with smooth animations
- Fast Loading: Optimized images and code for quick load times
- SEO Optimized: Meta tags, structured data, and semantic HTML
- Contact Forms: Functional contact form with email integration
- Blog Section: Integrated blog for sharing insights and updates
- Project Showcase: Interactive project galleries with live demos
- Skills Visualization: Animated charts and progress bars
- Dark/Light Mode: Theme switching capability
- Analytics Integration: Google Analytics and performance tracking

# Technology Stack
- Frontend: HTML5, CSS3, JavaScript (ES6+)
- Framework: React.js with Next.js for SSR
- Styling: Tailwind CSS, Framer Motion for animations
- Backend: Node.js, Express.js (for contact forms and blog)
- Database: MongoDB (for blog posts and contact submissions)
- Deployment: Vercel, Netlify, or GitHub Pages
- CMS: Strapi or Contentful (for blog management)
- Email: EmailJS or Nodemailer for contact forms

# Project Structure
```
├── public/ # Static assets: images, icons, document files
├── src/
│ ├── components
│ ├── sections
│ ├── pages
│ ├── styles
│ ├── utils
│ ├── data
│ └── hooks
├── api/API routes 
├── .github
├── next.config.js 
├── tailwind.config.js 
├── package.json 
└── README.md
```

# Quick Start
1. Clone the repository
```bash
git clone https://github.com/username/portfolio-website.git
cd portfolio-website
```
2. Install dependencies
```bash
npm install
# or
yarn install
```
3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```
4. Start development server
```bash
npm run dev
# or
yarn dev
```
5. Open in browser
http://localhost:3000

# Environment Variables
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://portfolio.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_TRACKING_ID
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
EMAILJS_PUBLIC_KEY=your_emailjs_public_key
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_jwt_secret
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

# What I Learned
Building an end-to-end full-stack site with both frontend & backend components
Handling responsive layouts and animations in React
Creating content-driven pages (projects, blog) and dynamic routing
Integrating contact forms, email services, analytics, and environment configs
Deploying and managing a production-ready site
