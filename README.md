# Personal Portfolio Website

This repository contains the source code for my personal portfolio website. The website showcases my skills, projects, and professional background as a full-stack web developer, with a focus on both frontend and backend technologies.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Contact](#contact)

## Project Overview

The **Personal Portfolio Website** is designed to highlight my professional journey and technical abilities through an interactive, responsive, and modern design. The portfolio is divided into various sections that include:

- A header section with my name, social media links, and company affiliations.
- An **About Me** section detailing my education, skills in frontend and backend development, and technology stack.
- A **Projects** section where I showcase key projects I've worked on, including project descriptions and direct links to the live applications or repositories.
- Animations and a dynamic carousel are integrated into the **Projects** section to enhance the user experience.
- The website is designed to be fully responsive across all device sizes, ensuring a smooth experience on both desktop and mobile devices.

## Technologies Used

This project utilizes a range of modern web development tools and libraries, including:

- **React**: For building the user interface and handling component-based structure.
- **Chakra UI**: A customizable component library that provides flexible and accessible UI components.
- **React-Slick**: For the carousel slider feature used in the Projects section.
- **JavaScript (ES6+)**: For interactive features and dynamic content.
- **HTML5 & CSS3**: For structuring and styling the webpage.
- **Icon Libraries**: Includes `react-icons` for implementing free, scalable icons.

## Features

- **Responsive Design**: The website adapts to various screen sizes, from mobile phones to large desktop monitors.
- **Projects Carousel**: Interactive carousel that showcases my projects with smooth animations and scaling effects on hover.
- **Modal Popups**: Detailed project descriptions are accessible through modals that appear when clicking "Learn More" in the Projects section.
- **Optimized Performance**: Ensures fast load times with efficient asset management and lazy loading.

## Project Structure

```bash
├── public
│   ├── assets
│   ├── CV.pdf
│   ├── index.html
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── AboutMe.js
│   │   ├── Projects.js
│   │   ├── ModalProject.js
│   ├── PortafolioApp.js
│   ├── index.js
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```

- **`components/`**: Contains the main UI components like `Header`, `AboutMe`, `Projects`, and `ModalProject`.
- **`assets/`**: Directory for storing static images or other assets.
- **`PortafolioApp.js`**: The main application file where components are imported and rendered.
- **`helpers/`**: Directory with de actual helpers for some necesary parts of the app.

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd portfolio-website
   ```

3. **Install the required dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   The website will be available at `http://localhost:5173` in your browser.


## Future Improvements

Some planned improvements for the portfolio website include:

- **Multilingual Support**: Add translations to make the portfolio accessible to a broader audience.
- **Filter Projects**: Add 2 filters for *Company's Projects* and *Personal Projects*.

## Contact

Feel free to reach out to me for any questions or collaboration opportunities:

- **Email**: ljmora004@outlook.com
- **LinkedIn**: [Linkedin Profile](https://www.linkedin.com/in/luis-javier-mora-aguilar-3391662a7/details/certifications/)
- **GitHub**: [GitHub Profile](https://github.com/ljmor)

---

## License
<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/ljmor/luis-mora-dev">Web Portafolio</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/ljmor">Luis Mora</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""></a></p>