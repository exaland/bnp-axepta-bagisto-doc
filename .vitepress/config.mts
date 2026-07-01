import { defineConfig } from "vitepress";
import { redirects, makeRedirectHtml } from "./_redirects";
import fs from "fs";
import path from "path";

// Function to generate sitemap
function generateSitemap(outputDir) {
  const baseUrl = "https://docs.ExalandStore.com";
  const srcDir = path.join(process.cwd(), "src");

  const getAllMarkdownFiles = (dir, prefix = "") => {
    const files = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    entries.forEach((entry) => {
      const fullPath = path.join(dir, entry.name);
      const pathPrefix = prefix ? `${prefix}/${entry.name}` : entry.name;

      if (entry.isDirectory() && entry.name !== "public") {
        files.push(...getAllMarkdownFiles(fullPath, pathPrefix));
      } else if (
        entry.isFile() &&
        entry.name.endsWith(".md") &&
        entry.name !== "index.md"
      ) {
        const urlPath = pathPrefix.replace(/\.md$/, "");
        files.push(urlPath);
      }
    });

    return files;
  };

  const mdFiles = getAllMarkdownFiles(srcDir);
  const sitemapUrls = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    ...mdFiles.map((file) => ({
      url: `/${file}`,
      priority: "0.8",
      changefreq: "weekly",
    })),
  ];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (item) => `  <url>
    <loc>${baseUrl}${item.url}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  fs.writeFileSync(
    path.join(outputDir, "sitemap.xml"),
    sitemapContent,
    "utf-8",
  );
  console.log(
    `✅ Sitemap generated: ${path.join(outputDir, "sitemap.xml")} with ${sitemapUrls.length} URLs`,
  );
}

// Vite plugin to serve sitemap.xml dynamically
function sitemapPlugin() {
  return {
    name: "sitemap-plugin",
    apply: "serve",
    configResolved(config) {
      // Generate sitemap to public folder on server start
      const publicDir = path.join(process.cwd(), "src/public");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      generateSitemap(publicDir);
      console.log("✅ Sitemap plugin initialized for dev server");
    },
  };
}

export default defineConfig({
  lang: "fr-FR",
  title: "Documentation utilisateur ExalandStore",
  description: "Documentation utilisateur ExalandStore",

  vite: {
    server: {
      host: "0.0.0.0",
    },
    plugins: [sitemapPlugin()],
  },

  srcDir: "./src",

  head: [
    [
      "meta",
      {
        name: "google-site-verification",
        content: "elxsIWt5ea-SmaO99B5RD3z_35WCl-hLJejTZEfVu4I",
      },
    ],
    ["link", { rel: "icon", type: "image/png", href: "/favicon.ico" }],
    [
      "script",
      {},
      `
       (function () {
       let script = document.createElement('script');

       script.innerHTML = 'window.chatbotConfig = { url: "https://ask.ExalandStore.com:5000/chat" };';

       document.body.appendChild(script);
       })();;
       `,
    ],
    [
      "script",
      {
        src: "https://ExalandStore.github.io/ai-chatbot/chatbot.js",
        async: true,
      },
    ],
  ],

  themeConfig: {
    siteTitle: false,

    logo: {
      light: "/logo_axepta.png",
      dark: "/logo_axeptadark.png",
    },

    nav: [
      // { text: "Dev Docs", link: "https://devdocs.ExalandStore.com/" },
      // { text: "Extensions", link: "https://exaland.app/extensions/" },
      // { text: "Community Forum", link: "https://forums.exaland.app/" },
      { text: "Nous contacter", link: "https://exaland.app/contact/" },
    ],


    lastUpdated: {
      text: "Derniere mise a jour",
      formatOptions: {
        dateStyle: "full",
      },
    },

    sidebar: [
      {
        text: "Introduction",
        link: "/getting-started/introduction",
      },

      {
       text: "Avant de commencer",
        collapsed: false,
        items: [
          { text: "Installation", link: "/getting-started/installation" },
          { text: "Configuration", link: "/getting-started/configuration" },
          { text: "Paiements de test", link: "/getting-started/paymenttest" },
          { text: "Désinstallation", link: "/getting-started/desinstallation" },
  
  
        ],
      },


      // {
      //   text: "Native Mobile App",
      //   link: "/open-source-mobile-app/open-source-mobile-app",
      // },
    ],

    outline: {
      level: "deep",
    },

    footer: {
      message:
        'Publie sous <a href="https://www.exaland.app" target="_blank" class="mit-license">licence</a>.',
      copyright: `Copyright © ${new Date().getFullYear()} Exaland`,
    },

    search: {
      provider: "local",
    },
  },

  buildEnd(siteConfig) {
    const outDir = siteConfig.outDir;

    // Generate sitemap
    generateSitemap(outDir);

    Object.entries(redirects).forEach(([from, to]) => {
      if (from.includes("*")) {
        console.warn(`⚠️ Skipping wildcard redirect: ${from} -> ${to}`);
        return;
      }

      let filePath;

      if (from.endsWith(".html")) {
        filePath = path.join(outDir, from);
      } else {
        filePath = path.join(outDir, from, "index.html");
      }

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, makeRedirectHtml(to), "utf-8");
      console.log(`✅ Redirect created: ${from} -> ${to}`);
    });
  },

  configResolved(config) {
    // Generate sitemap for dev server in public folder
    const publicDir = path.join(process.cwd(), "src/public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    generateSitemap(publicDir);
  },
});
