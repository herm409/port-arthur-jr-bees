/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_CONTEXT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
