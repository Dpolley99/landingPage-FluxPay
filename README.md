# FluxPay Landing Page

A modern, responsive landing page for FluxPay built with React and TailwindCSS, converted from a Figma design.

## Features

- **Navbar** with navigation links and dropdown menu
- **Hero Section** with compelling headline and call-to-action buttons
- **What We Do** section showcasing three core features
- **How It Works** section with visual demonstration
- **Problem Section** with interactive tabs
- **CTA Section** with email signup form
- **Contact Section** with contact information
- **Footer** with newsletter signup and links

## Tech Stack

- React 18
- Vite
- TailwindCSS 3
- Google Fonts (Raleway, Archivo, Roboto)

## Getting Started

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

## Project Structure

```
├── public/
│   └── images/          # Image assets from Figma
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── WhatWeDo.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Problem.jsx
│   │   ├── CTA.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Design Details

The design matches the Figma specification with:
- Exact color palette (#F2F2F2, #0D0700, #01036A, #E5E5F0, etc.)
- Typography (Raleway for body, Archivo for headings, Roboto for specific sections)
- Spacing and layout matching the original design
- Responsive breakpoints

## Notes

- Images are referenced from `/images/` directory in the public folder
- All interactive elements (buttons, links) have hover states
- The design is optimized for desktop view (1440px width as per Figma)

