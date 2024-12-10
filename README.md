# 🌐 lasarohlink-frontend

LasarohLink is a URL shortening application built for anyone who needs quick and efficient link management.

### 🔗 Project Links 

- **Production Frontend**: [https://lasaroh.link/](https://lasaroh.link/)
- **Backend API**: [https://github.com/lasaroh/lasarohlink-backend.git](https://github.com/lasaroh/lasarohlink-backend.git)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Footer.astro
|   |   └── FormUrlShortener.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
|   └── scripts/
│       └── UrlShortener.js
└── package.json
└── .env
```

## Description of Folders and Files

- **`public/`**: Contains static assets such as images or favicons. These files are served as-is and do not get processed by Astro.
- **`src/components/`**: Includes reusable components, like `Footer.astro` for the footer and `FormUrlShortener.astro` for the URL shortening form.
- **`src/layouts/`**: Contains layout templates, such as `Layout.astro`, used for consistent page structure.
- **`src/pages/`**: Houses `.astro` or `.md` files, each exposed as a route based on its file name.
- **`src/scripts/`**: Stores JavaScript files, such as `UrlShortener.js`, for dynamic functionality.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📄 Astro Docs

[Documentation](https://docs.astro.build) or [Discord server](https://astro.build/chat).

## Local Deployment

To run the frontend in your local environment, follow these steps:

1. **Install dependencies**:
   - Make sure Node.js is installed on your machine. Download it from [Node.js official site](https://nodejs.org/)
   - Install the project dependencies with:
     ```bash
     npm install
     ```

2. **Set up environment variables**:
   - Create a `.env` file in the root of the project and add the following environment variable:
     ```env
     VITE_APIDOMAIN=https://localhost:7273 # Replace this with your API's base URL
     ```
   - Note: The `VITE_` prefix is required to access the variable withing the project.

3. **Run the app**
   ```bash
   npm run dev
   ```
