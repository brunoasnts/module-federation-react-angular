const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: 'auto',
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          // Naming host module
          name: 'reactAppCra',
          filename: 'remoteEntry.js',
          // Turning any exposed modules into remote entry points.
          // Which means that any module that is exposed will be available for other modules to consume.
          // Eager means that the module will be loaded as soon as the container starts.
          exposes: {
            './Button': './src/components/Button',
            './Systems': './src/components/systems',
          },
          // List of dependencies to share with other modules
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
              eager: true
            },
            'react-dom': {
              singleton: true,
              requiredVersion: deps['react-dom'],
              eager: true
            },
          },
        }),
      ],
    },
  },
});
