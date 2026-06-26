"use client";
"use strict";
exports.__esModule = true;
exports.CircularProgress = void 0;
exports.CircularProgress = function (_a) {
    var value = _a.value, color = _a.color;
    var radius = 42;
    var circumference = 2 * Math.PI * radius;
    var offset = circumference -
        (value / 100) * circumference;
    return (React.createElement("div", { className: "relative h-16 w-16" },
        React.createElement("svg", { className: "-rotate-90", viewBox: "0 0 100 100" },
            React.createElement("circle", { cx: "50", cy: "50", r: radius, strokeWidth: "6", fill: "transparent", className: "stroke-white/10" }),
            React.createElement("circle", { cx: "50", cy: "50", r: radius, strokeWidth: "6", fill: "transparent", stroke: color, strokeLinecap: "round", strokeDasharray: circumference, strokeDashoffset: offset })),
        React.createElement("div", { className: "absolute inset-0 flex items-center justify-center text-sm font-bold" },
            value,
            "%")));
};
