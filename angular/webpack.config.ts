import { container } from "webpack";
const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:4202/",
    uniqueName: "angular",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  devServer: {
    port: 4202,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    hot: true,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "angular",
      filename: "remoteEntry.js",
      remotes: {
        reactAppCra: `reactAppCra@http://localhost:3000/remoteEntry.js`,
        // settings_user: `settings_user@http://localhost:3002/remoteEntry.js`,
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
};
