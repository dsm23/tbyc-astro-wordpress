/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_URL: string;
  readonly GTAG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
