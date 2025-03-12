# Visual Data Science Lab Website

##  Website Features
This website showcases:

- Recent publications and research papers
- Lab members and collaborators
- Research projects
- News and updates
- Available positions (students, postdocs, programmers)

## The website is built with:

- Astro - Modern static site builder
- Tailwind CSS - Utility-first CSS framework
- TypeScript - Typed JavaScript
##  Project Structure
```txt
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── NewsItem.astro
│   │   ├── PaperCard.astro
│   │   ├── PersonCard.astro
│   │   └── ...
│   ├── data/            # JSON data files
│   │   ├── materials.json
│   │   ├── news.json
│   │   ├── projects.json
│   │   ├── publications.json
│   │   └── venues.json
│   ├── layouts/         # Page layout templates
│   │   ├── Layout.astro
│   │   └── PositionsLayout.astro
│   ├── lib/            # Utility functions
│   │   └── utils.ts
│   ├── pages/          # Website pages (routes)
│   │   ├── about/
│   │   ├── index.astro
│   │   ├── papers/
│   │   ├── people/
│   │   ├── positions/
│   │   └── ...
│   ├── styles/         # Global CSS files
│   │   ├── font.css
│   │   ├── global.css
│   │   └── no-preflight.css
│   └── types/          # TypeScript type definitions
│       ├── people.ts
│       ├── publication.ts
│       └── venue.ts
└── package.json        # Project dependencies and scripts
```

## Installation
1. Clone this repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at http://localhost:4321

Available Scripts
- npm  dev - Start development server
- npm  build - Build the site for production
- npm  preview - Preview the production build locally
- npm  astro - Run Astro CLI commands

##  Content Management
The website content is primarily managed through JSON files in the src/data/ directory:

- publications.json - Academic publications
- news.json - News and updates
- projects.json - Research projects
- venues.json - Conference and journal information
- materials.json - Additional materials
- people.json - Lab members and collaborators

## Data Types
The website uses TypeScript for type safety. Main data types include:

- Person: Faculty, researchers, students, alumni, and collaborators
- Publication: Research papers with metadata
- Project: Research projects with descriptions
- Venue: Publication venues (conferences, journals)

##  Page Structure
- Home: Recent publications and news
- Papers: Complete list of publications organized by year
- People: Lab members categorized by role
- About: Information about the lab's mission and focus
- Positions: Available positions and opportunities

## Contributing

For contributions, refer to the [Contribuiting file](CONTRIBUTION.md).


## Contact

Visual Data Science Lab - EMAp FGV

- Email: visualdslab@gmail.com
- Website: http://visualdslab.com/