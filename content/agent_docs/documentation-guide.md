---
title: "Documentation Guide"
date: 2026-02-24
tags: ["style-guide", "documentation"]
---

## 1. Document Structure

Each document should have a clear and consistent structure.

-   **Title:** A clear and descriptive title.
-   **Frontmatter:** Metadata for the document (see below).
-   **Introduction:** A brief introduction that summarizes the document's purpose and content.
-   **Body:** The main content, organized into sections with clear headings.
-   **Conclusion:** A summary of the key points.

## 2. Frontmatter

Use YAML frontmatter at the beginning of each Markdown file.

```yaml
---
title: "Your Document Title"
date: YYYY-MM-DD
description: "A brief description of the document."
tags: ["relevant", "tags"]
---
```

-   `title`: The title of the document.
-   `date`: The publication date.
-   `description`: A short summary for SEO and previews.
-   `tags`: Relevant keywords to categorize the content.

## 3. Code Blocks

-   Always specify the language for code blocks to enable syntax highlighting.
-   Use descriptive filenames or comments where appropriate.

```javascript
// Example of a clear code block
function helloWorld() {
  console.log("Hello, World!");
}
```

## 4. Linking

-   **Internal Links:** Use relative paths to link to other documents within the site. Example: `[Writing Style](./writing-style.md)`.
-   **External Links:** Use full URLs for external links. Example: `[Hugo](https://gohugo.io/)`.
