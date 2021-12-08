"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outDir = exports.entryPoint = exports.projectDir = exports.isDev = void 0;
var tslib_1 = require("tslib");
var path_1 = (0, tslib_1.__importDefault)(require("path"));
exports.isDev = true; // process.env.NODE_ENV !== 'production';
exports.projectDir = path_1.default.resolve('.');
// const packageJson = fs.readFileSync(path.join('.', 'package.json'));
// const pkg = JSON.parse(packageJson as any);
// export const entryPoint: string = pkg.main;
exports.entryPoint = process.env['npm_package_main'] || process.env['npm_package_browser']; //  pkg.main;
// This will be running from "./packages/@fndj/main/" or the like.
// Get back up to the root dir
// export const rootDir = path.resolve(path.join(projectDir, '../../../'));
// export const staticSourceDir = path.join(rootDir, 'static');
exports.outDir = (path_1.default.join(exports.projectDir, 'dist'));
