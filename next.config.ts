// next.config.js
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract({
  experimental: {
    appDir: true, // App Router 사용
  },
});
