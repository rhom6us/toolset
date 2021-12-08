"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleBuilder = void 0;
var tslib_1 = require("tslib");
function iif() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var fallback = args.splice(-1, 1);
    for (var _a = 0, _b = args; _a < _b.length; _a++) {
        var _c = _b[_a], test = _c[0], value = _c[1];
        if (test) {
            return value;
        }
    }
    return fallback;
}
var RuleBuilder = /** @class */ (function () {
    function RuleBuilder(isDev) {
        this.isDev = isDev;
    }
    RuleBuilder.prototype.result = function (tag) {
        var result = (0, tslib_1.__assign)({}, this);
        delete result.isDev;
        return result;
    };
    RuleBuilder.prototype.extend = function (rule) {
        return Object.assign(new RuleBuilder(this.isDev), this, rule);
    };
    RuleBuilder.prototype.when = function (test) {
        return this.extend({
            test: test
        });
    };
    ;
    RuleBuilder.prototype.butNotWhen = function () {
        var _a;
        var exclude = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            exclude[_i] = arguments[_i];
        }
        return this.extend({
            exclude: (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], ((_a = this.exclude) !== null && _a !== void 0 ? _a : []), true), exclude, true),
        });
    };
    ;
    RuleBuilder.prototype.asAsset = function (inline) {
        if (inline === void 0) { inline = undefined; }
        return this.extend({
            type: inline === undefined ? 'asset' :
                inline ? 'asset/inline' :
                    'asset/resource'
            // type: iif(
            //     [inline === undefined, 'asset' as const],
            //     [inline, 'asset/inline' as const],
            //     'asset/resource' as const),
            // generator: {
            //     dataUrl: content => {
            //         content = content.toString();
            //         return svgToMiniDataURI(content);
            //     }
            // }
        });
    };
    ;
    RuleBuilder.prototype.withResourceQuery = function (resourceQuery) {
        return this.extend({ resourceQuery: resourceQuery });
    };
    ;
    RuleBuilder.prototype.usingDev = function () {
        var use = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            use[_i] = arguments[_i];
        }
        return this.using.apply(this, use);
        // return this.isDev ? this.using(...use) : this
    };
    ;
    RuleBuilder.prototype.usingProd = function () {
        var use = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            use[_i] = arguments[_i];
        }
        return this.using.apply(this, use);
        // return this.isDev ? this : this.using(...use);
    };
    ;
    RuleBuilder.prototype.using = function () {
        var _a;
        var use = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            use[_i] = arguments[_i];
        }
        return this.extend({
            use: (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], ((_a = this.use) !== null && _a !== void 0 ? _a : []), true), use, true),
        });
    };
    return RuleBuilder;
}());
exports.RuleBuilder = RuleBuilder;
;
