"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./text.css");
var Text = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'normal' : _b;
    return ((0, jsx_runtime_1.jsx)("p", __assign({ className: "".concat(size) }, { children: "Hola Mundo" }), void 0));
};
exports.Text = Text;
