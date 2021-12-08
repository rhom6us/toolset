"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotModuleReplacement = exports.miniCssExtractPlugin = exports.extractCssFiles = exports.createIndexHtml = exports.defineNodeEnvConst = exports.workletPlugin = exports.reachRefresh = void 0;
var tslib_1 = require("tslib");
var react_refresh_webpack_plugin_1 = (0, tslib_1.__importDefault)(require("@pmmmwh/react-refresh-webpack-plugin"));
var html_webpack_plugin_1 = (0, tslib_1.__importDefault)(require("html-webpack-plugin"));
var mini_css_extract_plugin_1 = (0, tslib_1.__importDefault)(require("mini-css-extract-plugin"));
var path_1 = (0, tslib_1.__importDefault)(require("path"));
var webpack_1 = require("webpack");
var plugin_1 = (0, tslib_1.__importDefault)(require("worker-url/plugin"));
var settings_1 = require("./settings");
exports.reachRefresh = new react_refresh_webpack_plugin_1.default({
    forceEnable: true,
    esModule: true
});
exports.workletPlugin = new plugin_1.default();
exports.defineNodeEnvConst = new webpack_1.EnvironmentPlugin({ NODE_ENV: 'development' });
exports.createIndexHtml = new html_webpack_plugin_1.default({
    title: 'Webpack App',
    // template: `!!html-loader?minimize=false&url=false!${path.resolve(rendererSourceDir, 'template.html')}`,
    filename: "".concat('index', ".html"),
    // "chunks": [entry],
    inject: 'body',
    // "compile": true,
    // chunks: 'all',
    // excludeChunks: [],
    // "nodeModules": "C:\\dev\\fndebrid\\node_modules",
    meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
    template: path_1.default.join(settings_1.projectDir, 'public/index.html')
});
/**
 * Seperates css into a seperate bundle in order to prevent brief flash of unstyled content.
 */
exports.extractCssFiles = new mini_css_extract_plugin_1.default({
    filename: '[id].styles.css',
    chunkFilename: '[id].styles.css',
    // moduleFilename: (name) => '[id].styles.css'
});
exports.miniCssExtractPlugin = mini_css_extract_plugin_1.default;
exports.hotModuleReplacement = new webpack_1.HotModuleReplacementPlugin();
