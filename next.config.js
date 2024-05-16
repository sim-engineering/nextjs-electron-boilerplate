/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// const baseUrl = "/home/sarabov/code/tride-museum/out";
const baseUrl = "";

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: baseUrl,
  env: {
    baseUrl,
  },
  reactStrictMode: true,
});
