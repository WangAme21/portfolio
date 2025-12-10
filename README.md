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
- React Icons
- Modern CSS (Grid, Flexbox, Animations)
- Responsive Design

## License

This project is open source and available for personal and commercial use.

