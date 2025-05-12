# A&A Agro Farm Limited - Website

![A&A Agro Farm Website Banner](https://github.com/OsmanTolo/A-A-Agro-Farm-Ltd-Website/blob/main/src/assets/hero-background-image.webp)
_Replace the URL above with the raw GitHub URL to an image from your `src/assets/` folder. See instructions below._

## Overview

This repository contains the source code for the official website of A&A Agro Farm Limited, a family-owned farm based in Sierra Leone. The website is a single-page application (SPA) designed to showcase the farm's identity, products, community impact, and contact information in a professional and inviting manner.

The site is built to be responsive and adaptive, ensuring a good user experience across various devices (desktop, tablet, mobile).

## Table of Contents

- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Website Sections](#website-sections)
- [Key Features](#key-features)
- [Placeholder Content](#placeholder-content)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Live Demo

**(Optional: Add a link to the deployed website here if available)**
Example: `[View Live Site](https://aaagrofarmltd.netlify.app/)`

## Tech Stack

- **Frontend Library:** [React](https://reactjs.org/) (v18+)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v3+)
    - Includes `@tailwindcss/aspect-ratio` plugin.
- **Programming Language:** JavaScript (ES6+)
- **Package Manager:** npm (or Yarn)
- **Version Control:** Git
- **Font Provider:** Google Fonts (Inter for body, Montserrat for headings)
- **Linting:** ESLint (configured with Vite plugin)
- **Code Formatting:** (Consider adding Prettier if you set it up)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version, e.g., v18.x or v20.x, is recommended) - includes npm.
- Git for version control.
- (Optional) [Yarn](https://yarnpkg.com/) if you prefer it over npm.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/](https://github.com/)<YOUR-USERNAME>/<REPO-NAME>.git
    cd <REPO-NAME>
    ```

    _(Replace `<YOUR-USERNAME>/<REPO-NAME>` with the actual path to your repository. If you've just created the project locally and haven't pushed it to GitHub yet, you can skip this step and proceed from your existing project directory.)_

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using Yarn:
    ```bash
    yarn install
    ```
    This will install all the necessary packages defined in `package.json`.

## Available Scripts

In the project directory, you can run the following `npm` (or `yarn`) scripts:

- **`npm run dev`**
  Runs the app in development mode using Vite's development server. Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in your browser. The page will reload via Hot Module Replacement (HMR) if you make edits. You will also see any lint errors in the console.

- **`npm run build`**
  Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified, and the filenames include hashes for cache busting.

- **`npm run lint`**
  Lints the project files for code quality and style issues using ESLint. (Ensure your `package.json` has this script configured if you're using a specific ESLint setup).

- **`npm run preview`**
  Serves the production build from the `dist` folder locally. This is a good way to check if the production build works correctly before deploying. It's not a full web server but is useful for a quick check.

- **(If configured for GitHub Pages deployment using `gh-pages` package)**
    - **`npm run predeploy`**: (Often configured to run `npm run build` automatically before deploying).
    - **`npm run deploy`**: Deploys the contents of the `dist` folder to a `gh-pages` branch (or as configured).

## Environment Variables

This project currently does not rely on custom environment variables. However, if you need to add them (e.g., for an API key for an embedded map in the future):

1.  Create a `.env` file in the project root.
2.  Add your variables, prefixed with `VITE_` (e.g., `VITE_API_KEY=yourkeyhere`).
3.  Access them in your code using `import.meta.env.VITE_VARIABLE_NAME`.
4.  **Important:** Add `.env` to your `.gitignore` file to avoid committing sensitive information. For deployment, configure these variables directly in your hosting provider's settings.

## Website Sections

The website is a single scrolling page with the following sections, accessible via the navigation bar:

1.  **Home (Hero Section):** Welcoming banner with a headline, sub-headline, and a call to action.
2.  **About Us:** Information about the farm's history, values, and mission.
3.  **Our Products:** Showcases the farm's produce and services using a card-based layout.
4.  **Our Impact:** Highlights the farm's contribution to the local community and sustainability efforts.
5.  **Gallery:** A visual showcase of life and activities at A&A Agro Farm.
6.  **Drone Tour:** Features drone footage videos of the farm.
7.  **Contact Us:** Provides contact details, an address (placeholder), operating hours, and an embedded map.

## Key Features

- **Responsive Design:** Adapts to various screen sizes for optimal viewing on desktop, tablets, and mobile devices using Tailwind CSS's responsive prefixes.
- **Component-Based Architecture:** Built with reusable React components for maintainability and scalability.
- **Sticky Navigation Bar:** Easy navigation that stays at the top of the page.
- **Mobile Hamburger Menu:** User-friendly menu for smaller screens with ARIA attributes for accessibility.
- **Smooth Scrolling:** Clicking navigation links smoothly scrolls to the corresponding section, accounting for the fixed navbar height.
- **Dynamic "Back to Top" Button:** Appears on scroll to allow users to quickly return to the top of the page.
- **Tailwind CSS Styling:** Modern, utility-first styling for a clean and maintainable codebase.
- **Lazy Loading for Images:** Native `loading="lazy"` attribute used on images to improve initial page load performance.
- **Semantic HTML & Basic Accessibility:** Structured for clarity with ARIA attributes where appropriate (e.g., `aria-label`, `aria-expanded`).
- **Vite Powered:** Fast development server and optimized production builds.
- **Video Background & Embeds:** Demonstrates use of local video for hero background and embedded videos for drone footage.

## Placeholder Content

This website currently uses placeholder text and images throughout its sections (e.g., contact details, product descriptions, gallery images, map).

**Action Required:**

- **Replace all placeholder content** with actual information, high-quality images, and accurate details relevant to A&A Agro Farm Limited before final deployment.
- Image placeholders are sourced from `https://placehold.co/`. Update `src` and `alt` attributes for images used _within the application_.
- Text placeholders are generally enclosed in `[...]` or are generic descriptions.

## Deployment

The production build of this website (generated in the `dist` folder via `npm run build`) consists of static files and can be deployed to various hosting platforms.

**Recommended Platforms for Static Sites:**

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Firebase Hosting

For detailed deployment instructions, please refer to the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) document in this repository. _(Ensure this file exists or integrate key deployment steps here if preferred)._

**Build Command:**

```bash
npm run build
```
