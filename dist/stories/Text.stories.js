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
exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// import { MyLabel } from "../../components/MyLabel";
var Text_1 = require("./Text");
exports.default = {
    title: 'Example/MyText',
    componenet: Text_1.Text,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Text_1.Text, __assign({}, args), void 0); };
exports.Basic = Template.bind({});
exports.AllCaps = Template.bind({});
exports.Secondary = Template.bind({});
