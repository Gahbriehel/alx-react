const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry file for Webpack to start bundling
  output: {
    filename: "bundle.js", // Name of the output file
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Clears previous content in 'dist' each build
  },
  module: {
    rules: [
      {
        test: /\.css$/, // CSS files
        use: ["style-loader", "css-loader"], // Applies style-loader and css-loader
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Image files
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]", // Naming for output images
              outputPath: "images", // Output directory for images
            },
          },
          "image-webpack-loader", // Optimizes images
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve content from 'dist'
    },
    compress: true,
    port: 3000,
    hot: true, // Enables hot module replacement
  },
  devtool: "inline-source-map", // Inline source mapping for debugging
};
