# Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring beautiful UI/UX design with smooth animations and transitions.

## Features

- **About Section**: Personal introduction with social links
- **Projects Section**: Showcase of your work with project cards
- **Skills Section**: Interactive skill bars with progress indicators
- **Experiences Section**: Timeline view of work experience and education
- **Contact Section**: Contact form and information
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Beautiful transitions and hover effects
- **Modern UI**: Gradient backgrounds, glassmorphism effects, and more

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **About Section**: Edit `src/components/About.jsx`
   - Update name, title, and description
   - Add your social media links
   - Replace profile image placeholder

2. **Projects**: Edit `src/components/Projects.jsx`
   - Update the `projects` array with your actual projects
   - Add project images, descriptions, and links

3. **Skills**: Edit `src/components/Skills.jsx`
   - Modify the `skillCategories` array
   - Update skill names and proficiency levels

4. **Experiences**: Edit `src/components/Experiences.jsx`
   - Update the `experiences` and `education` arrays
   - Add your work history and education

5. **Contact**: Edit `src/components/Contact.jsx`
   - Update contact information
   - Connect the form to your backend/email service

### Styling

All CSS files are in their respective component folders. The main color scheme is defined in `src/index.css` using CSS variables:

- `--primary-color`: Main brand color
- `--secondary-color`: Secondary brand color
- `--accent-color`: Accent color for highlights

## Technologies Used

- React 18
- Vite
- React Router DOM
- React Icons
- Modern CSS (Grid, Flexbox, Animations)
- Responsive Design

## Deployment

### Deploy to Vercel

This portfolio is ready to deploy to Vercel. Follow the comprehensive guide:

📖 **[VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)** - Complete deployment instructions

### Quick Deploy Steps

1. Push your code to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables (if using FlowiseAI)
5. Deploy!

See `DEPLOYMENT_CHECKLIST.md` for a pre-deployment checklist.

## Additional Features

- **Interactive Projects**: Calculator, Task Manager, Fitness Tracker, and AI Chat Assistant
- **Floating Chat Widget**: Accessible chatbot from any page
- **FlowiseAI Integration**: Connect to FlowiseAI for AI-powered chat (see `FLOWISE_SETUP_GUIDE.md`)

## Documentation

- `VERCEL_DEPLOYMENT_GUIDE.md` - How to deploy to Vercel
- `FLOWISE_SETUP_GUIDE.md` - How to set up FlowiseAI
- `QUICK_START.md` - Quick FlowiseAI setup reference
- `DEPLOYMENT_CHECKLIST.md` - Pre-deployment checklist

## License

This project is open source and available for personal and commercial use.

