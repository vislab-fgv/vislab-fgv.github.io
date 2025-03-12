# Contributing to the Visual Data Science Lab Website

This guide explains how to contribute to the Visual Data Science Lab website. It's designed for lab members who need to add or update content such as publications, people, projects, or news.

## Getting Started

1. **Fork the repository** or **create a new branch** if you already have access
2. **Name your branch** following this convention: `name/<action>-<description>`
   - Example: `john/add-zigzagnetviz-paper` or `maria/update-legal-anaytics-project-info`
3. **Make your changes** following the guidelines below
4. **Submit a Pull Request (PR)** when you're ready

## Content Management Process

All website content is stored in JSON files located in the `src/data/` directory:

- `publications.json` - Research papers
- `people.json` - Lab members and collaborators
- `projects.json` - Research projects
- `news.json` - News and updates
- `venues.json` - Conference and journal information
- `materials.json` - Additional materials

## Adding Content

### Step 1: Upload Required Files to Cloudflare

If your contribution includes images or PDFs:

1. Upload your files to Cloudflare
2. Note the relative path to your uploaded files

### Step 2: Update the Appropriate JSON File

Determine which JSON file needs updating based on your contribution type.

#### Adding a New Publication

Edit `src/data/publications.json`:

```json
{
    "id": 50,
    "title": "Assessing Timber Trade Networks and Supply Chains in Brazil",
    "venue_id": 36,
    "venue": "NATSUSTAIN",
    "web_name": "TimberChain",
    "year": 2025,
    "bibtext": null,
    "pdf": "/files/papers/2025-TimberChainNATSUSTAIN.pdf",
    "thumbnail": "/images/thumbs/2025-TimberChain.png",
    "figure": "/images/figures/2025-TimberChain.png",
    "caption": "The five largest connected components for the Ipe\u2019s TTN.",
    "start_page": null,
    "end_page": null,
    "volume": null,
    "issue": null,
    "editors": 0,
    "publisher": 0,
    "location": 0,
    "abstract": "Forest degradation in the Brazilian Amazon is driven by factors such as fire, mining, and illegal logging. The Brazilian government has implemented control mechanisms to combat illegal timber extraction that have positively impacted deforestation rates. Under these regulations, all wood products, from raw logs to processed lumber, must be registered in control systems before transportation. This allows analysis of wood products transported between companies over time. However, the existence of three partially integrated control systems complicates a full analysis of the timber market. This study integrates data from these systems to create Timber Trade Networks (TTNs), which help identify companies or groups operating outside expected standards. We also propose a method to trace probable supply chains of timber companies, addressing long-standing government concerns about timber traceability. Among the results, we show that certain TTNs have components that operate without connections with licensed forests, suggesting that unregistered timber is input into those components, which is illegal. Additionally, we illustrate how supply chain analysis can significantly enhance customer confidence in the legality of purchased timber products.",
    "visible": 1,
    "mod_date": "2025-01-08",
    "note": null,
    "pub_date": "2025-01-06",
    "url": "https://www.nature.com/articles/s41893-024-01491-8",
    "authors": [19, 130, 131, 5, 132, 133, 134, 135, 1]
  },
```

#### Adding a New Person

Edit `src/data/people.json`:

```json
{
    "id": 1,
    "first_name": "Jorge",
    "last_name": "Poco",
    "display_name": "Jorge Poco",
    "affiliation": "FGV EMAp",
    "org": "Getulio Vargas Foundation",
    "email": "jorge.poco@fgv.br",
    "url": "http://visualdslab.com/~jpocom/",
    "status": "faculty",
    "visible": 1.0,
    "image": "images/people/jorgepoco.png",
    "nickname": null,
    "position": "Associate Professor",
    "interests": "Visualization and Data Science",
    "alumni_main_research": null,
    "alumni_position": null,
    "order": 1
  }
```

#### Adding a New Project

Edit `src/data/projects.json`:

```json
{
  "id": 1,
  "title": "Urban Mobility Analysis",
  "web_name": "UrbanMobilityAnalysis",
  "figure": "/projects/UrbanMobilityAnalysis.png",
  "abstract": "Urban Mobility is a research project that aims to develop visual systems that help to visualize, analyze, and understand the behavior of urban transport in different cities. This project covers methods of visualization, pattern detection, and functional analysis. This project aims to develop tools that allow visualizing and analyzing large amounts of spatial-temporal data of urban mobility through different visualization techniques, pattern detection, and functional analysis. The current project consists of two main approaches: The first one presents TaxiVis, a system that allows the analysis of the behavior of New York City's taxis through different visual components. The second presents a vector-based model that allows the analysis of traffic dynamics. This model is based on the vehicles' speed and direction, which allows it to detect interesting mobility patterns in New York City.",
  "caption": null,
  "description": "Urban Mobility aims to develop visual systems that help to visualize and analyze",
  "visible": true,
  "type": "c",
  "papers": [6, 8, 10, 29]
}
```

#### Adding a New Venue

Edit `src/data/venues.json`:

```json
{
  "id": 1,
  "nickname": "InfoVis",
  "full_name": "IEEE Trans. Visualization & Comp. Graphics (Proc. InfoVis)",
  "venue_type": "J"
}
```

#### Adding News

Edit `src/data/news.json`:

```json
{
  "id": 32,
  "text": "New paper accepted <a href=\"\/papers\/MLSV\/\"><b>Empirical analysis of Binding Precedent efficiency in the Brazilian Supreme Court via Similar Case Retrieval<\/b><\/a>.",
  "mod_date": "2024-07-23",
  "pub_date": "2024-07-23",
  "visible": 0
}
```

#### Adding Materials

Edit `src/data/materials.json`:

```json
{
  "id": 60,
  "pub_id": 45,
  "name": "Code",
  "material": null,
  "link": "https:\/\/github.com\/visual-ds\/plausible-nlp-explanations"
}
```

### Step 3: Test Your Changes

If you have a Node environment set up:

1. Install dependencies if you haven't done so:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

> [!NOTE]
> If you don't have a Node environment set up, you can use the live preview feature on GitHub

3. Open your browser at http://localhost:4321 to verify your changes

### Step 4: Submit Your Pull Request

1. Commit your changes with a clear message:
   ```bash
   git add .
   git commit -m "Add new paper: Paper Title"
   ```

2. Push your branch:
   ```bash
   git push origin your-branch-name
   ```

3. Create a Pull Request on GitHub

## Best Practices

1. **Use clear IDs** that are unique and descriptive or sequential (e.g., `id: 123` or `id: "paper-title"`)
2. **Optimize images** before uploading them to Cloudflare (use tools like TinyPNG or ImageOptim)
3. **Maintain consistency** in formatting and style
4. **Check for broken links** before submitting
5. **Include all required fields** for each content type

## Getting Help

If you're unsure about any part of the contribution process, please reach out to:

- Email: visualdslab@gmail.com

## Code of Conduct

Please respect the lab's code of conduct when contributing:

1. Be respectful and inclusive
2. Communicate clearly
3. Give proper attribution
4. Follow the established conventions

Thank you for contributing to the Visual Data Science Lab website!