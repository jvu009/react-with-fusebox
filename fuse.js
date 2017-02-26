const fb = require('fuse-box');

// Create FuseBox instance
const fuseBox = new fb.FuseBox({
  homeDir: 'src/client',
  sourceMap: {
    bundleReference: 'sourcemaps.js.map',
    outFile: './dist/sourcemaps.js.map',
  },
  outFile: './dist/bundle.js',
  plugins: [
    fb.CSSPlugin(),
    fb.BabelPlugin(),
  ],
});

fuseBox.devServer('> index.jsx', {
  port: 4000,
  httpServer: false
});
