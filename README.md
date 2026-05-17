# Internshala Internship Search Page Clone

A responsive frontend clone of the Internshala Internship Search Page built using React.js.  
This project was created as part of an internship assignment and focuses on frontend functionality, reusable components, responsive UI, and frontend filtering logic.

---

## Features

- Responsive Navbar with Mobile Hamburger Menu
- Internship Listing Page
- Frontend-only Filtering
  - Filter by Profile
  - Filter by Location
  - Filter by Duration
  - Filter by Stipend
- Dynamic Internship Count
- Review/Testimonial Section
- FAQ Accordion Section
- Career Links Section
- Responsive Footer
- Mobile Responsive Design

---

## Tech Stack

- React.js
- JavaScript (ES6+)
- CSS Modules
- Fetch API

---

## Folder Structure

```bash
src
│
├── assets
│   ├── Navbar
│   ├── Footerimgs
│   ├── ReviewSection
│   └── other-assets
│
├── components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── FAQ.jsx
│   ├── Review.jsx
│   ├── CareerLinks.jsx
│   └── other-components
│
├── features
│   └── internshipSearch
│       ├── components
│       │   ├── FilterSidebar.jsx
│       │   ├── InternshipCard.jsx
│       │   └── InternshipList.jsx
│       │
│       ├── pages
│       │   └── SearchPage.jsx
│       │
│       └── styles
│           ├── SearchPage.module.css
│           ├── FilterSidebar.module.css
│           └── InternshipCard.module.css
│
├── Styles
│   ├── Navbar.module.css
│   ├── Footer.module.css
│   ├── FAQ.module.css
│   ├── Review.module.css
│   └── other-style-files
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## API Used

```bash
https://internshala.com/hiring/search
```

Internship data is fetched once and all filtering is handled completely on the frontend.

---

## Installation & Setup

Clone the repository:

```bash
git clone <your-repository-link>
```

Move into the project folder:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Responsive Design

The application is fully responsive across:
- Desktop
- Tablet
- Mobile devices

Special attention was given to:
- Mobile navigation
- Flexible layouts
- Preventing horizontal overflow
- Responsive internship cards

---

## Future Improvements

- Search functionality
- Pagination
- Internship details page
- Dark mode
- Backend integration
- Authentication

---

## Author

Akash Tirkey
