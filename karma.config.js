module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {pattern: 'node_modules/es6-shim/es6-shim.min.js', watched: false},
      {pattern: 'spec.bundle.js', watched: false}
    ],
    exclude: [],
    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap']
    },
    webpack: {
      resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json'],
        alias: {
          'app': './app'
        }
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/},
          {test: /\.json$/, loader: 'json'}
        ]
      },
      stats: {colors: true, reasons: true},
      debug: false
    },
    wepackServer: {
      noInfo: true
    },
    reporters: ['progress', 'html'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Firefox']
  });
};
