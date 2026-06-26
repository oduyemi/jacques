"use client";
"use strict";
exports.__esModule = true;
exports.Stats = void 0;
var react_countup_1 = require("react-countup");
var framer_motion_1 = require("framer-motion");
var stats = [
    {
        value: 100,
        suffix: "+",
        label: "AI Models",
        color: "text-cyan-400"
    },
    {
        value: 50,
        suffix: "+",
        label: "VR Projects",
        color: "text-purple-400"
    },
    {
        value: 200,
        suffix: "+",
        label: "Clients",
        color: "text-pink-400"
    },
    {
        value: 99,
        suffix: "%",
        label: "Success Rate",
        color: "text-green-400"
    },
];
exports.Stats = function () {
    return (React.createElement("div", { className: "mt-16 grid grid-cols-2 gap-6 md:grid-cols-4" }, stats.map(function (stat, index) { return (React.createElement(framer_motion_1.motion.div, { key: stat.label, initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: {
            delay: index * 0.1
        }, viewport: { once: true }, whileHover: {
            y: -10
        }, className: "rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl" },
        React.createElement("div", { className: "mb-2 text-3xl font-bold " + stat.color },
            React.createElement(react_countup_1["default"], { end: stat.value, duration: 2 }),
            stat.suffix),
        React.createElement("p", { className: "text-sm text-muted-foreground" }, stat.label))); })));
};
