import type { ManifestOptions } from "vite-plugin-pwa";
import colors from "tailwindcss/colors";

export const seoConfig = {
  baseUrl: "https://tbyc-astro-wordpress.netlify.app",
  description:
    "The Thorpe Bay Yacht Club is a friendly and welcoming sailing club located in Thorpe Bay, Southend-on-Sea, UK. We cater to sailors of all ages and abilities, offering a variety of activities and facilities for members to enjoy.",
  type: "website",
  image: {
    url: "/maskable_icon_x512.png",
    alt: "Cartoon sailing boat",
    width: 512,
    height: 512,
  },
  siteName: "Thorpe Bay Yacht Club",
};

export const manifest: Partial<ManifestOptions> = {
  name: seoConfig.siteName,
  short_name: "TBYC",
  description: seoConfig.description,
  theme_color: colors.sky[800],
  background_color: "#ffffff",
  display: "minimal-ui",
  icons: [
    {
      src: "/maskable_icon_x48.png",
      sizes: "48x48",
      type: "image/png",
    },
    {
      src: "/maskable_icon_x72.png",
      sizes: "72x72",
      type: "image/png",
    },
    {
      src: "/maskable_icon_x96.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      src: "/maskable_icon_x128.png",
      sizes: "128x128",
      type: "image/png",
    },
    {
      src: "/maskable_icon_x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/maskable_icon_x384.png",
      sizes: "384x384",
      type: "image/png",
    },
    {
      src: "/maskable_icon_x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
};
