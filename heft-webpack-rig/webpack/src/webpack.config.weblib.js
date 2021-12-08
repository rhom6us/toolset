"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
var tslib_1 = require("tslib");
var loaders_1 = require("./loaders");
var rules = (0, tslib_1.__importStar)(require("./rules"));
var settings_1 = require("./settings");
var webpack_config_common_1 = (0, tslib_1.__importDefault)(require("./webpack.config.common"));
exports.configuration = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, webpack_config_common_1.default), { output: (0, tslib_1.__assign)((0, tslib_1.__assign)({}, webpack_config_common_1.default.output), { 
        // module: true,
        library: {
            // name: '__[name]',
            type: 'commonjs2'
        } }), 
    // optimization: {
    //     concatenateModules: true
    // },
    // experiments: {
    //     ...config.experiments,
    //     outputModule: true
    // },
    // externalsType: 'module',
    /**
     * PEER DEPENDANCIES
     */
    externals: {
        "realm-web": "commonjs realm-web",
        react: 'commonjs react',
        "@rhom6us/audio-context": "commonjs @rhom6us/audio-context"
    }, 
    /**
     * Webpack will generate code like import * as X from '...' for externals used in a module.
     */
    devtool: 'source-map', 
    // devtool: "eval-cheap-module-source-map",
    target: 'web', mode: settings_1.isDev ? 'development' : 'production', 
    // entry: entryPoint,//path.join(projectDir, 'src/index.ts'),
    // entry: [
    //    // 'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    //    // 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    //     entryPoint // Your appʼs entry point
    // ],
    resolve: (0, tslib_1.__assign)((0, tslib_1.__assign)({}, webpack_config_common_1.default.resolve), { extensions: (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], webpack_config_common_1.default.resolve.extensions, true), [
            '.css', '.wasm'
        ], false), fallback: (0, tslib_1.__assign)({}, webpack_config_common_1.default.resolve.fallback) }), module: (0, tslib_1.__assign)((0, tslib_1.__assign)({}, webpack_config_common_1.default.module), { rules: [
            // rules.workletRule,
            // rules.workerRule,
            rules.wasmRule,
            rules.wavRule,
            {
                test: /\.js$/,
                enforce: 'pre',
                use: [require.resolve('source-map-loader')]
            },
            // rules.globalStylesheetRule,
            rules.stylesheetRule,
            rules.imageRule,
            rules.fontRule,
            // rules.htmlRule,
        ] }), plugins: (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], webpack_config_common_1.default.plugins, true), (0, loaders_1.onlyif)(settings_1.isDev), true) });
exports.default = exports.configuration;
