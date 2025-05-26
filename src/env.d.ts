/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BUCKET_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
