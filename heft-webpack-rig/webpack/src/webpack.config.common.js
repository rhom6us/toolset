"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = (0, tslib_1.__importDefault)(require("path"));
var plugins_1 = require("./plugins");
var settings_1 = require("./settings");
exports.default = {
    // devtool: 'eval-source-map',
    context: settings_1.projectDir,
    entry: path_1.default.join(settings_1.projectDir, 'lib', 'index.js'),
    output: {
        path: path_1.default.join(path_1.default.resolve('.'), 'dist'),
        // filename: `[name]${isDev ? '' : '.[contenthash]'}.js`,
        clean: false,
        //   // chunkFilename: `[name]${isDev ? '' : '.[contenthash]'}.js`,
        //   //  devtoolModuleFilenameTemplate: 'ala:///[resource-path]?[loaders]',
        // devtoolModuleFilenameTemplate: (info: Record<'absoluteResourcePath' | 'allLoaders' | 'hash' | 'id' | 'loaders' | 'resource' | 'resourcePath' | 'namespace', string>) => {
        //   const result = `alla://@fndj/${path.relative(rootDir, path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"))}`;
        // }
        // devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
    },
    // entry: {
    //   app: path.join(__dirname, 'lib', 'index.js')
    // },
    // output: {
    //   path: path.join(__dirname, 'dist'),
    //   filename: '[name]_[contenthash].js'
    // },
    stats: {
    // warnings: false,
    // warningsFilter: /export .* was not found in/,
    },
    resolve: {
        fallback: {
            url: require.resolve('url'),
            crypto: false /*require.resolve('crypto-browserify')*/,
            path: false /*require.resolve('path-browserify')*/,
            os: false /*require.resolve('os-browserify/browser')*/,
            http: false /*require.resolve('stream-http')*/,
            stream: false /*require.resolve('stream-browserify')*/,
            zlib: false /*require.resolve('zlib-browserify')*/,
            util: false /*require.resolve('util/')*/,
            child_process: false,
            http2: false,
            dns: false /*require.resolve('chrome-dns')*/,
            net: false /*require.resolve('net-browserify')*/,
            tls: false /*require.resolve('util/')*/,
            fs: false /*require.resolve('util/')*/,
        },
        alias: {
        // '@': path.resolve(rendererSourceDir),
        // '~main': path.resolve(mainSourceDir),
        // '~renderer': path.resolve(rendererSourceDir),
        // '~common': path.resolve(commonSourceDir),
        // common: path.resolve(commonSourceDir),
        },
        extensions: ['.js', '.jsx', '.json'],
    },
    // node: {
    //   __dirname: true,
    //   __filename: true,
    // },
    // optimization: {
    //   nodeEnv: process.env.NODE_ENV,
    //   namedModules: true,
    //   noEmitOnErrors: true,
    //   // moduleIds: 'hashed',
    //   // runtimeChunk: 'single',
    //   // splitChunks: {
    //   //   cacheGroups: {
    //   //     vendor: {
    //   //       test: /[\\/]node_modules[\\/]/,
    //   //       name: 'vendor',
    //   //       chunks: 'all',
    //   //     },
    //   //   },
    //   // },
    // },
    plugins: [
        plugins_1.workletPlugin
        // plugins.nodePolyfill,
        // isDev && plugins.webpackBar,
        // plugins.tsChecker,
        // plugins.cleanBuildDir,
        // plugins.defineStaticDirConst,
        // plugins.defineNodeEnvConst,
    ].filter(Boolean),
    module: {
        rules: [],
    },
    experiments: {
        topLevelAwait: true,
        asset: true,
    },
    ignoreWarnings: [/Failed to parse source map/],
}; // as webpack.Configuration;
