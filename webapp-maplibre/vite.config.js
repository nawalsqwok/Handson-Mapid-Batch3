<<<<<<< HEAD
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("index.html", import.meta.url)),
        indonesia: fileURLToPath(new URL("asia/Indonesia.html", import.meta.url)),
      },
    },
  },
});
=======
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("index.html", import.meta.url)),
        indonesia: fileURLToPath(new URL("asia/Indonesia.html", import.meta.url)),
      },
    },
  },
});

>>>>>>> 73a125a (Fix asia folder name)
