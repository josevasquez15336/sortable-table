import vue from "@vitejs/plugin-vue";

/** @type {import('vite').UserConfig} */
export default {
  plugins: [vue()],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "jsdom",
  },
};
