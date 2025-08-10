# ⚡ Portfolio

> A personal portfolio website showcasing projects and skills.

[![Version](https://img.shields.io/npm/v/portfolio?style=for-the-badge)](https://www.npmjs.com/package/portfolio)


## 📚 Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [File Structure](#file-structure)
- [Features](#features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Usage](#usage)
  - [Execution Options](#execution-options)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)


## Description

This project is a frontend portfolio website built using React.js, showcasing my skills and projects through an interactive and visually appealing user interface.  The website utilizes React components for modularity and organization, with styling provided by Tailwind CSS.  The website's core functionality revolves around displaying my projects, skills, education, and contact information.  Key components include a hero section, about me, education, projects, and a contact form.


## Tech Stack

[![React](https://img.shields.io/badge/React-20B2CA?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/vite-B460FF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![PostCSS](https://img.shields.io/badge/PostCSS-164F76?style=for-the-badge&logo=postcss&logoColor=white)](https://postcss.org/)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![✨ Made with ReadME Wiz](https://img.shields.io/badge/✨%20Made%20with-ReadME%20Wiz-blueviolet?style=for-the-badge&logo=markdown&logoColor=white)](https://github.com/PIYUSH1SAINI/ReadMe-wiz.git)


## Architecture Overview

```mermaid
graph TD
    A[App.jsx] --> B(Navbar);
    A --> C(Hero);
    A --> D(About);
    A --> E(Works);
    A --> F(Education);
    A --> G(Feedbacks);
    A --> H(Contact);
    A --> I(Loader);

```

## File Structure

```mermaid
graph TD
    A[index.html] --> B(src);
    B --> C(App.jsx);
    B --> D(components);
    D --> E(About.jsx);
    D --> F(Contact.jsx);
    D --> G(Education.jsx);
    D --> H(Feedbacks.jsx);
    D --> I(Hero.jsx);
    D --> J(Works.jsx);
    D --> K(Loader.jsx);
    D --> L(Navbar.jsx);
    B --> M(styles.js);
    B --> N(constants);
    B --> O(utils);
    B --> P(hoc);
    B --> Q(canvas);
    B --> R(assets);
    A --> S[vite.config.js];
    A --> T[postcss.config.js];
    A --> U[tailwind.config.js];
    A --> V[main.jsx];
    A --> W[index.css];

```


## Features

-   **Responsive Design:**  Adapts seamlessly to various screen sizes.
-   **Smooth Animations:** Uses Framer Motion for engaging transitions.
-   **Interactive 3D Canvas:**  A visually appealing 3D element on the homepage.
-   **Modular Components:** Built with reusable React components for maintainability.
-   **Contact Form:** Allows visitors to easily get in touch.
-   **Project Showcase:**  Displays a portfolio of completed projects.

## Installation

### Prerequisites

> [!NOTE]
> Node.js >=14 and npm (or yarn) are required.

### Setup

1. **Clone Repository**: Clone the repository from GitHub and set up the project locally for development or modification.
   ```bash
   git clone https://github.com/raghavG0212/Portfolio.git
   cd Portfolio
   npm install
   ```

## Usage

### Execution Options

#### Frontend Execution

To start the development server, run:

```bash
npm run dev
```

This will open the application in your browser.  Any changes you make to the code will be reflected automatically.

To build the application for production, run:

```bash
npm run build
```

This will create an optimized build in the `dist` folder.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.


## Contributors

<a href="https://github.com/raghavG0212" target="_blank"><img src="https://avatars.githubusercontent.com/raghavG0212?s=60&v=4" width="60" height="60" alt="@raghavG0212" title="@raghavG0212" style="border-radius: 50%; margin-right: 10px;" onerror="this.src='https://github.com/identicons/raghavG0212.png'" /></a>

## License

MIT License



<a href="https://github.com/PIYUSH1SAINI/ReadMe-wiz.git" target="_blank">
      <img src="https://res.cloudinary.com/dy1znaiby/image/upload/v1754320207/ReadMe-wiz-logo_k3uq6w.png" alt="ReadMe Wiz Logo" width="300"/>
    </a>
