"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColor = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../components/MyLabel");
var meta = {
    title: 'MyLabel',
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { control: 'inline-radio' },
        color: { control: 'inline-radio' },
        allCaps: { control: 'boolean' }
    }
};
exports.default = meta;
exports.Basic = {
    args: {
        label: "Basic Label"
    }
};
exports.AllCaps = {
    args: {
        label: "All Caps Label",
        allCaps: true
    }
};
exports.Secondary = {
    args: {
        label: "Secondary Label"
    }
};
exports.CustomColor = {
    args: {
        label: "Custom Color Label",
    },
    argTypes: {
        fontColor: { control: 'color' }
    }
};
