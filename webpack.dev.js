const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  // devtool: "none",
  devServer: {
    // localhost port override
    port: 4517,
    // where live server looks at: files are not created (only in memory) but are still served
    // contentBase: __dirname + './public/index.html'
    contentBase: path.resolve(__dirname, "./dist"),
    // contentBase: path.resolve(__dirname, './public/index.html')
    // save changes to disk rather then RAM memory
    // writeToDisk: true,
    historyApiFallback: true,
    progress: true,
    // inline: true,
    // proxy used w/nodemon that runs db server, sets live-server to devServer.port 
    proxy: {
      // '/api': 'http://localhost:5000' // Server Api - http:localhost:5000 + '/api/destination' ###Default Proxy
      // remove api from url -> 'http://localhost:5000' + '/destination'
      '/api': {
        target: 'http:localhost:5000',
        pathRewrite: {'^/api': ''}
      }
    }
  },
  entry: {
    // index: "./resources/assets/js/index.js"    // for adonis
    index: "./src/js/index.js", // for react/mern
    // app: "./src/js/particles/app.js"
  },
  output: {
    // when using webpack dev server publicPath dictates where the server observes changes (use this option if not using writeToDisk: true or gulp live-server). Should be the same directory as path option
    // publicPath: './dist',
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist")
    // inject vanilla js into the dom
    // libraryTarget: 'window'
    // library: 'umd'
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // when using adonis/ejs - comment out the entire plugins section
  // plugins: [  // ---
  //   new HtmlWebpackPlugin({  // ---
  //     inject: false,  // set to false to stop WP from creating "default" script tags in html   // ---
  //     // template: resolveAppPath('/public/index.html')
  //     template: "./src/index.html",  // ---
  //     // template: "./assets/views/index.html"
  //     // filename: "index.html"
  //     // template: "./public/index.html",
  //     // filename: "index.html" // for prod, destination is output url
  //   }),  // ---
  // ],  // ---
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        // test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      // ========================================
      // uncomment if not using gulp for images (e.g. import via react)
      // {
      //   test: /\.(svg|png|jpg|jpeg|gif)$/i,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[name].[ext]",
      //       // esModule: false,
      //       outputPath: "img",
      //       // publicPath: "./img",
      //       // emitFile: true
      //     },
      //   },
      // },
      // end of section
      // ========================================
      // ========================================
      // uncomment if not using gulp or if importing stylings through react components
      // {
      //   test: /\.scss$/,
      //   use: [
      //     "style-loader", //3. Inject styles into DOM in style tag
      //     "css-loader", //2. Turns css into commonjs
      //     "sass-loader" //1. Turns sass into css
      //   ]
      // }
      // end of section
      // ========================================
    ]
  }
};

// "server": "webpack-dev-server --config webpack.dev.js --open",
// "webpack-dev": "webpack --config webpack.dev.js",
// "webpack-dev": "webpack --mode development --env.NODE_ENV=dev",
// "webpack-prod": "webpack --mode production --env.NODE_ENV=production",