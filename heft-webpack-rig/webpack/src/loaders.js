"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.node_loader = exports.ts_loader = exports.babel_loader = exports.threadLoader = exports.sassLoader = exports.postcssLoader = exports.css_loader = exports.css_hot_loader = exports.css_extract_loader = exports.onlyif = void 0;
var tslib_1 = require("tslib");
var mini_css_extract_plugin_1 = (0, tslib_1.__importDefault)(require("mini-css-extract-plugin"));
var postcss_import_1 = (0, tslib_1.__importDefault)(require("postcss-import"));
var postcss_preset_env_1 = (0, tslib_1.__importDefault)(require("postcss-preset-env"));
var react_refresh_typescript_1 = (0, tslib_1.__importDefault)(require("react-refresh-typescript"));
var settings_1 = require("./settings");
function onlyif(test) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (test) {
        return args;
    }
    return [];
}
exports.onlyif = onlyif;
/**
 * Seperates css into a seperate bundle in order to prevent brief flash of unstyled content.
 */
exports.css_extract_loader = mini_css_extract_plugin_1.default.loader;
// export function css_extract_loader(options?: MiniCssExtractPlugin.LoaderOptions) {
//   return {
//     loader: MiniCssExtractPlugin.loader,
//     options
//   };
// }
function css_hot_loader(options) {
    return {
        loader: require.resolve('css-hot-loader'),
        options: options
    };
}
exports.css_hot_loader = css_hot_loader;
function css_loader(options) {
    return {
        loader: require.resolve('css-loader'),
        options: options
    };
}
exports.css_loader = css_loader;
exports.postcssLoader = {
    loader: 'postcss-loader',
    options: {
        sourceMap: settings_1.isDev,
        postcssOptions: {
            plugins: [(0, postcss_import_1.default)(), (0, postcss_preset_env_1.default)()]
        },
    },
};
exports.sassLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: settings_1.isDev,
    },
};
exports.threadLoader = {
    loader: 'thread-loader',
};
function babel_loader() {
    var features = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        features[_i] = arguments[_i];
    }
    return {
        loader: require.resolve('babel-loader'),
        options: {
            plugins: (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], onlyif(features.includes('top_level_await'), '@babel/plugin-syntax-top-level-await'), true), onlyif(features.includes('class_properties'), '@babel/plugin-proposal-class-properties'), true), onlyif(features.includes('jsx_self'), '@babel/plugin-transform-react-jsx-self'), true), onlyif(features.includes('jsx_source'), '@babel/plugin-transform-react-jsx-source'), true)
        }
    };
}
exports.babel_loader = babel_loader;
function ts_loader() {
    var features = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        features[_i] = arguments[_i];
    }
    return {
        loader: require.resolve('ts-loader'),
        options: {
            getCustomTransformers: function () { return ({
                before: onlyif(features.includes('react_refresh'), (0, react_refresh_typescript_1.default)()),
            }); },
            transpileOnly: features.includes('transpile_only')
            // configFile: "C:\\dev\\fndebrid\\tsconfig.json"
        },
    };
}
exports.ts_loader = ts_loader;
exports.node_loader = {
    loader: 'node-loader'
};
