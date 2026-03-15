# ILOHA OpenLab LLC Company Website

This repository contains the source code for the official website of **ILOHA OpenLab LLC**.

The website is accessible at: [https://www.iloha-openlab.com/](https://www.iloha-openlab.com/)

## 🚀 Built With

-   [Astro](https://astro.build/) - The web framework for content-driven websites.
-   [TypeScript](https://www.typescriptlang.org/) - For type-safe development.

## 📁 Project Structure

Inside the project, you'll find the following folders and files:

-   `public/`: Static assets like images and fonts.
-   `src/`:
    -   `content/`: Content collections (news, etc.).
    -   `i18n/`: Internationalization configuration and translations.
    -   `layouts/`: Common page layouts.
    -   `pages/`: The website's routing and page components (multilingual: `en/` and `ja/`).
    -   `styles/`: Global CSS and styling.
-   `astro.config.mjs`: Astro configuration file.

## 🛠️ Getting Started

To run the project locally, ensure you have [Node.js](https://nodejs.org/) installed.

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The site will be available at `http://localhost:4321`.

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 📄 License and Trademark

The source code of this website is licensed under the [MIT License](LICENSE).

**Important:** The ILOHA OpenLab LLC name and logo are trademarks of ILOHA OpenLab LLC. These trademarks are not covered by the MIT License and may not be used without prior written permission.
For guidance on using logo assets to link to our website, please refer to the [Logo Usage Guide](LOGO_GUIDE.md).
