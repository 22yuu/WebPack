// __dirname, path module

const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
});

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js",
//   },
//   target: "node",
//   mode: "production",
// };
