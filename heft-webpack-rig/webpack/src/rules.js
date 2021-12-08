"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlRule = exports.fontRule = exports.imageRule = exports.stylesheetRule = exports.globalStylesheetRule = exports.wavRule = exports.wasmRule = void 0;
var builder_1 = require("./builder");
var loaders_1 = require("./loaders");
var settings_1 = require("./settings");
var node_modules = /node_modules/i;
//#region code
var builder = new builder_1.RuleBuilder(settings_1.isDev);
exports.wasmRule = builder.when(/\.wasm$/i).asAsset(true).result();
exports.wavRule = builder.when(/\.wav$/i).asAsset(false).result();
// export const typescriptRule = builder
//   .when(/\.[tj]sx?$/i)
//   .butNotWhen(node_modules)
//   .usingDev(babel_loader('top_level_await', 'class_properties', 'jsx_self', 'jsx_source'))
//   .usingProd(babel_loader('top_level_await', 'class_properties'))
//   .usingDev(ts_loader('react_refresh', 'transpile_only'))
//   .usingProd(ts_loader())
//   .result('typescriptRule');
// export const typescriptRule: RuleSetRule = {
//   test: /\.[tj]sx?$/i,
//   exclude: [node_modules],
//   use: [
//     babel_loader('top_level_await', 'class_properties'),
//     ...onlyif(isDev, ts_loader('react_refresh', 'transpile_only')),
//     ...onlyif(!isDev, ts_loader()),
//   ],
// }
// export const jsRule: RuleSetRule = {
//   test: /\.js$/i,
//   exclude: [node_modules],
//   use: [ts_with_react_refresh_loader],
// };
// export const scriptRule: RuleSetRule = {
//   test: /\.(j|t)sx?$/i,
//   exclude: [node_modules],
//   use: [babelLoader],
// };
//#endregion
//#region styles
exports.globalStylesheetRule = {
    test: /\b(global|vars)\.s?css$/i,
    use: [
        (0, loaders_1.css_hot_loader)(),
        loaders_1.css_extract_loader,
        (0, loaders_1.css_loader)({
            importLoaders: 2,
            modules: false,
            sourceMap: true,
        }),
        loaders_1.postcssLoader,
        loaders_1.sassLoader
    ],
};
// export const globalStylesheetRule = builder.when(/\b(global|vars)\.s?css$/i)
//   .usingDev(css_hot_loader())
//   .using(css_extract_loader)
//   .usingDev(
//     css_loader({
//       importLoaders: 2,
//       modules: false,
//       sourceMap: true,
//     })
//   )
//   .usingProd(
//     css_loader({
//       importLoaders: 2,
//       modules: false,
//       sourceMap: false,
//     })
//   )
//   .using(
//     postcssLoader,
//     sassLoader,
//   )
//   .result('global stylesheet rule');
exports.stylesheetRule = builder.when(/\.s?css$/i).butNotWhen(exports.globalStylesheetRule.test, node_modules)
    .usingDev((0, loaders_1.css_hot_loader)({
    cssModule: true
}))
    .using(loaders_1.css_extract_loader)
    .usingDev((0, loaders_1.css_loader)({
    importLoaders: 2,
    modules: true,
    import: true,
    sourceMap: true,
}))
    .usingProd((0, loaders_1.css_loader)({
    importLoaders: 2,
    modules: true,
    import: true,
    sourceMap: false,
}))
    .using(loaders_1.postcssLoader, loaders_1.sassLoader)
    .result('stylesheetRule');
// export const globalStylesheetRule: RuleSetRule = {
//   test: /\b(global|vars)\.s?css$/i,
//   use: [
//     ...onlyif(isDev, css_hot_loader()),
//     cssExtractLoader(),
//     css_loader({
//       importLoaders: 2,
//       modules: false,
//       sourceMap: isDev,
//     }),
//     postcssLoader,
//     sassLoader
//   ],
// };
// export const stylesheetRule: RuleSetRule = {
//   test: /\.s?css$/i,
//   exclude: /\b(global|vars)\.s?css$/i,
//   use: [
//     ...onlyif(isDev, css_hot_loader({ cssModule: true })),
//     cssExtractLoader({ esModule: true }),
//     css_loader({
//       importLoaders: 2,
//       modules: true,
//       import: true,
//       sourceMap: isDev,
//     }),
//     postcssLoader,
//     sassLoader
//   ],
// };
//#endregion
exports.imageRule = builder.when(/\.(png|jpg|gif)$/i)
    .asAsset()
    .result();
exports.fontRule = builder.when(/\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i)
    .asAsset()
    .result();
exports.htmlRule = builder.when(/\.(html)$/i)
    .using('html-loader')
    .result('htmlRule');
