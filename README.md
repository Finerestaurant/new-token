# new-token Hugo Blog

This is a personal blog and research notes site built using Hugo with the PaperMod theme.

## About

This blog serves as a repository for personal research notes, technical explorations, and insights into AI architecture and cognitive models.

## Technologies Used

-   **Static Site Generator:** Hugo
-   **Theme:** PaperMod

## Local Development

To run this blog locally:

1.  **Install Hugo:** If you don't have Hugo installed, follow the official installation guide: [https://gohugo.io/installation/](https://gohugo.io/installation/)
2.  **Clone the repository:**
    ```bash
    git clone https://github.com/Finerestaurant/new-token.git
    cd new-token
    git submodule update --init --recursive # Initialize themes like PaperMod
    ```
3.  **Run the development server:**
    ```bash
    hugo server -D
    ```
    This will start a local server, usually at `http://localhost:1313/`. The `-D` flag includes draft content.

## Content Structure

Content is managed within the `content/` directory. Markdown files (`.md`) are used for blog posts and pages.

## Deployment

This site is deployed to GitHub Pages. The deployment workflow is configured in `.github/workflows/deploy.yml`.

## Configuration

-   **Hugo Configuration:** `hugo.toml` contains the main configuration for the site, including menus, params, and theme settings.
-   **Theme Configuration:** PaperMod theme specific configurations can be found in `themes/PaperMod/`.

---

**Note:** This README has been updated to reflect the migration from Astro/Starlight to Hugo and the PaperMod theme. Previous content related to Astro has been removed.
