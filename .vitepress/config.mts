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
      light: "/logo.png",
      dark: "/logo.png",
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
        text: "Types de produits",
        collapsed: false,
        items: [
          { text: "Produit simple", link: "/product-types/simple-product" },
          {
            text: "Produit configurable",
            link: "/product-types/configurable-product",
          },
          { text: "Produit virtuel", link: "/product-types/virtual-product" },
          { text: "Produit groupé", link: "/product-types/bundle-product" },
          { text: "Produit pack", link: "/product-types/grouped-product" },
          {
            text: "Produit telechargeable",
            link: "/product-types/downloadable-product",
          },
          { text: "Produit de reservation", link: "/product-types/booking-product" },
        ],
      },

      {
        text: "Categorie",
        collapsed: false,
        items: [{ text: "Creer une categorie", link: "/category/create-category" }],
      },

      {
        text: "Attributs",
        collapsed: false,
        items: [
          { text: "Types d'entree d'attribut", link: "/attribute/attribute-input" },
          {
            text: "Creer des attributs produit",
            link: "/attribute/product-attribute",
          },
          { text: "Famille d'attributs", link: "/attribute/attribute-family" },
        ],
      },

      {
        text: "Commandes",
        collapsed: false,
        items: [
          { text: "Creer une commande", link: "/orders/create-order" },
          { text: "Creer une facture", link: "/orders/create-invoice" },
          { text: "Creer une expedition", link: "/orders/create-shipment" },
          { text: "Creer des remboursements", link: "/orders/create-refunds" },
          { text: "Transactions", link: "/orders/transactions" },
        ],
      },
      {
        text: "Clients",
        collapsed: false,
        items: [
          { text: "Creer un client", link: "/customer/create-customer" },
          { text: "Groupe de clients", link: "/customer/customer-group" },
          {
            text: "Tarification de groupe client",
            link: "/customer/customer-group-price",
          },
          { text: "Avis client", link: "/customer/customer-review" },
        ],
      },

      {
        text: "CMS",
        collapsed: false,
        items: [{ text: "Creer une page CMS", link: "/cms/create-cms" }],
      },

      {
        text: "Marketing",
        collapsed: false,
        items: [
          { text: "Regles panier", link: "/marketing/cart-rules" },
          { text: "Regles catalogue", link: "/marketing/catalog-rules" },
          { text: "Modeles d'email", link: "/marketing/email-templates" },
          { text: "Evenements", link: "/marketing/events" },
          { text: "Campagnes", link: "/marketing/campaigns" },
          {
            text: "Abonnements newsletter",
            link: "/marketing/newsletter-subscription",
          },
          { text: "Sitemaps", link: "/marketing/sitemaps" },
          { text: "Reecriture d'URL", link: "/marketing/url-rewrite" },
          { text: "Termes de recherche", link: "/marketing/search-terms" },
          { text: "Synonymes de recherche", link: "/marketing/search-synonyms" },
        ],
      },

      {
        text: "Rapports",
        collapsed: false,
        items: [
          { text: "Ventes", link: "/reporting/sales-report" },
          { text: "Clients", link: "/reporting/customers-report" },
          { text: "Produits", link: "/reporting/product-report" },
        ],
      },

      {
        text: "Parametres",
        collapsed: false,
        items: [
          { text: "Locales", link: "/settings/locales" },
          { text: "Devises", link: "/settings/currencies" },
          { text: "Taux de change", link: "/settings/exchange-rates" },
          { text: "Source d'inventaire", link: "/settings/inventory-source" },
          { text: "Canaux", link: "/settings/channels" },
          { text: "Utilisateurs", link: "/settings/users" },
          { text: "Roles", link: "/settings/roles" },
          { text: "Themes", link: "/settings/themes" },
          { text: "Taxes", link: "/settings/taxes" },
          { text: "Transfert de donnees", link: "/settings/data-transfer" },
        ],
      },

      {
        text: "Configuration",
        collapsed: false,
        items: [
          { text: "Adresse", link: "/configure/address" },
          { text: "Attribut", link: "/configure/attribute" },
          { text: "Commandes en attente", link: "/configure/back-orders" },
          { text: "Google Captcha", link: "/configure/google-captcha" },
          { text: "Captcha", link: "/configure/captcha" },
          { text: "Page panier", link: "/configure/cart-view-page" },
          { text: "Paiement", link: "/configure/checkout" },
          {
            text: "Choix configurables",
            link: "/configure/configurable-choices",
          },
          { text: "Contenu", link: "/configure/content" },
          {
            text: "Configuration des taux de change",
            link: "/configure/exchange-rates-configurations",
          },
          { text: "Contenu copyright", link: "/configure/coyright-content" },
          { text: "Scripts personnalises", link: "/configure/custom-scripts" },
          { text: "Design", link: "/configure/design" },
          { text: "Parametres email", link: "/configure/email-settings" },
          { text: "Frontend", link: "/configure/frontend" },
          { text: "GDPR", link: "/configure/gdpr" },
          { text: "Paiement invite", link: "/configure/guest-checkout" },
          { text: "Taille d'image", link: "/configure/image-size" },
          { text: "Parametres facture", link: "/configure/invoice-settings" },
          { text: "Magic AI", link: "/configure/magic-ai" },
          { text: "Notifications", link: "/configure/notifications" },
          { text: "Parametres commande", link: "/configure/orders-settings" },
          { text: "Methodes de paiement", link: "/configure/payment-methods" },
          { text: "Tarification", link: "/configure/pricing" },
          { text: "Page produit", link: "/configure/product-view-page " },
          { text: "Avis", link: "/configure/review" },
          { text: "Extraits enrichis", link: "/configure/rich-snippets" },
          { text: "Parametres", link: "/configure/settings" },
          { text: "Methodes de livraison", link: "/configure/shipping-methods" },
          { text: "Livraison", link: "/configure/shipping" },
          { text: "Partage social", link: "/configure/social-share" },
          { text: "Taxes", link: "/configure/taxes" },
          { text: "Unite de poids", link: "/configure/weight-unit" },
        ],
      },

      {
        text: "Authentification a 2 facteurs",
        link: "/authentication/2fa-authentication",
      },

      {
        text: "Methodes de livraison",
        link: "/shipping-method/shipping-methods",
      },

      {
        text: "Methodes de paiement",
        link: "/payment-method/payment-methods",
      },

      // {
      //   text: "Multi Vendor Marketplace",
      //   collapsed: false,
      //   items: [
      //     {
      //       text: "Introduction",
      //       link: "/multi-vendor-marketplace/introduction",
      //     },
      //     {
      //       text: "Vendor Management",
      //       link: "/multi-vendor-marketplace/vendor-management",
      //     },
      //     {
      //       text: "Dealership Management",
      //       link: "/multi-vendor-marketplace/dealership-management",
      //     },
      //     {
      //       text: "Order Management",
      //       link: "/multi-vendor-marketplace/order-management",
      //     },
      //     {
      //       text: "Commission Management",
      //       link: "/multi-vendor-marketplace/commission-management",
      //     },
      //     {
      //       text: "Product Management",
      //       link: "/multi-vendor-marketplace/product-management",
      //     },
      //     {
      //       text: "Rating Management",
      //       link: "/multi-vendor-marketplace/rating-management",
      //     },
      //     {
      //       text: "Payment Management",
      //       link: "/multi-vendor-marketplace/payment-management",
      //     },
      //     {
      //       text: "Return Merchandise Authorization (RMA)",
      //       link: "/multi-vendor-marketplace/return-merchandise-authorization",
      //     },
      //     {
      //       text: "Seller Catalog Bulk Upload",
      //       link: "/multi-vendor-marketplace/seller-catalog-bulk-upload",
      //     },
      //     {
      //       text: "Seller Attributes",
      //       link: "/multi-vendor-marketplace/seller-attributes",
      //     },
      //     {
      //       text: "Seller Attributes",
      //       link: "/multi-vendor-marketplace/seller-attributes",
      //     },
      //     {
      //       text: "Seller Subscription Management",
      //       link: "/multi-vendor-marketplace/seller-subscription-management",
      //     },
      //     {
      //       text: "Mass Payout Management",
      //       link: "/multi-vendor-marketplace/mass-payout-management",
      //     },
      //     {
      //       text: "Communications",
      //       link: "/multi-vendor-marketplace/communications",
      //     },
      //   ],
      // },

      // {
      //   text: "B2B Marketplace",
      //   collapsed: false,
      //   items: [
      //     { text: "Introduction", link: "/b2b-marketplace/introduction" },
      //     {
      //       text: "Request for Quotes",
      //       link: "/b2b-marketplace/request-for-quotes",
      //     },
      //     {
      //       text: "Buyer Seller Communication",
      //       link: "/b2b-marketplace/buyer-seller-communication",
      //     },
      //     {
      //       text: "Supplier Microsite",
      //       link: "/b2b-marketplace/supplier-microsite",
      //     },
      //     { text: "Buying leads", link: "/b2b-marketplace/buying-leads" },
      //     {
      //       text: "Review Management",
      //       link: "/b2b-marketplace/b2b-marketplace-review",
      //     },
      //   ],
      // },

      // {
      //   text: "Multi Tenant Ecommerce",
      //   collapsed: false,
      //   items: [
      //     {
      //       text: "Introduction",
      //       link: "/multi-tenant-ecommerce/introduction",
      //     },
      //     {
      //       text: "Super Admin Management",
      //       link: "/multi-tenant-ecommerce/super-admin-management",
      //     },
      //     {
      //       text: "Tenant Management",
      //       link: "/multi-tenant-ecommerce/tenant-management",
      //     },
      //     {
      //       text: "CName Mapping",
      //       link: "/multi-tenant-ecommerce/cname-mapping",
      //     },
      //   ],
      // },

      // {
      //   text: "B2B eCommerce Platform",
      //   collapsed: false,
      //   items: [
      //     {
      //       text: "Introduction",
      //       link: "/b2b-ecommerce-platform/introduction",
      //     },
      //     {
      //       text: "Company Registration",
      //       link: "/b2b-ecommerce-platform/company-registration",
      //     },
      //     {
      //       text: "Role Based Permissions",
      //       link: "/b2b-ecommerce-platform/role-based-permissions",
      //     },
      //     {
      //       text: "Purchase Orders",
      //       link: "/b2b-ecommerce-platform/purchase-orders",
      //     },
      //     {
      //       text: "Requisition Lists",
      //       link: "/b2b-ecommerce-platform/requisition-lists",
      //     },
      //     { text: "Quick Order", link: "/b2b-ecommerce-platform/quick-order" },
      //     {
      //       text: "Request for Quote",
      //       link: "/b2b-ecommerce-platform/request-for-quote",
      //     },
      //     {
      //       text: "Quotation Handling",
      //       link: "/b2b-ecommerce-platform/quotation-handling",
      //     },
      //   ],
      // },

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
