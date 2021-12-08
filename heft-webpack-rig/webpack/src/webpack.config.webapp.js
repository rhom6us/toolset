"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
var tslib_1 = require("tslib");
var loaders_1 = require("./loaders");
var plugins = (0, tslib_1.__importStar)(require("./plugins"));
var rules = (0, tslib_1.__importStar)(require("./rules"));
var settings_1 = require("./settings");
var webpack_config_common_1 = (0, tslib_1.__importDefault)(require("./webpack.config.common"));
exports.configuration = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, webpack_config_common_1.default), { devtool: "source-map", devServer: {
        port: 9080
    }, 
    // stats: 'verbose',
    // entry: [
    //     ...(Array.isArray(config.entry) ? config.entry : [config.entry]),
    //     `./node_modules/@fndj/core/src/web-audio/FnMeter/FnMeter.worklet.ts`
    // ],
    // target: 'node14',
    target: 'web', mode: settings_1.isDev ? 'development' : 'production', 
    // entry: entryPoint,//path.join(projectDir, 'src/index.ts'),
    // entry: [
    //    // 'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    //    // 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    //     entryPoint // Your appʼs entry point
    // ],
    output: (0, tslib_1.__assign)((0, tslib_1.__assign)({}, webpack_config_common_1.default.output), { 
        // chunkLoading: "import",
        publicPath: '/' }), resolve: (0, tslib_1.__assign)((0, tslib_1.__assign)({}, webpack_config_common_1.default.resolve), { extensions: (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], webpack_config_common_1.default.resolve.extensions, true), [
            '.css',
        ], false) }), module: (0, tslib_1.__assign)((0, tslib_1.__assign)({}, webpack_config_common_1.default.module), { rules: [
            rules.wavRule,
            // rules.typescriptRule,
            {
                test: /\.js$/,
                enforce: 'pre',
                use: [require.resolve('source-map-loader')]
            },
            rules.globalStylesheetRule,
            rules.stylesheetRule,
            rules.imageRule,
            rules.fontRule,
            rules.htmlRule,
        ] }), plugins: (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], webpack_config_common_1.default.plugins, true), (0, loaders_1.onlyif)(settings_1.isDev), true), [
        // isDev && plugins.hotModuleReplacement,
        plugins.createIndexHtml,
        plugins.extractCssFiles,
    ], false), experiments: (0, tslib_1.__assign)((0, tslib_1.__assign)({}, webpack_config_common_1.default.experiments), { outputModule: true }) });
exports.default = exports.configuration;
