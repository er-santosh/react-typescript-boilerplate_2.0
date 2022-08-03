declare var require: any;
declare var __dirname: any;

const path = require("path");
const {
  compilerOptions: { paths },
} = require("./tsconfig.json");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

export default {
  webpack: {
    alias: Object.keys(paths).reduce(
      (all, alias) => ({
        ...all,
        [alias.replace("/*", "")]: path.resolve(
          __dirname,
          "src",
          paths[alias][0].replace("/*", "")
        ),
      }),
      {}
    ),
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
      }),
    ],
  },
};
