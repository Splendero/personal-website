/// <reference types="vite/client" />

// vite-imagetools imports such as "photo.png?w=640&format=webp" resolve to an asset URL.
declare module "*&format=webp" {
  const src: string;
  export default src;
}

declare module "*?format=webp" {
  const src: string;
  export default src;
}
