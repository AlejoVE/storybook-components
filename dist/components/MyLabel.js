"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./MyLabel.css");
var MyLabel = function (_a) {
    var label = _a.label, _b = _a.size, size = _b === void 0 ? 'normal' : _b, allCaps = _a.allCaps, color = _a.color, fontColor = _a.fontColor;
    return ((0, jsx_runtime_1.jsx)("span", { className: "".concat(size, " ").concat(color), style: fontColor ? { color: "".concat(fontColor) } : {}, children: allCaps ? label.toUpperCase() : label }));
};
exports.MyLabel = MyLabel;
