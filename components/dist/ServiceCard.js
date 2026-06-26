"use client";
"use strict";
exports.__esModule = true;
exports.ServiceCard = void 0;
var framer_motion_1 = require("framer-motion");
var card_1 = require("@/components/ui/card");
var CircularProgress_1 = require("./CircularProgress");
exports.ServiceCard = function (_a) {
    var title = _a.title, description = _a.description, icon = _a.icon, color = _a.color, technologies = _a.technologies, progress = _a.progress;
    return (React.createElement(framer_motion_1.motion.div, { whileHover: {
            y: -12,
            rotateX: 3,
            rotateY: 3
        }, transition: {
            type: "spring",
            stiffness: 300
        } },
        React.createElement(card_1.Card, { className: "group h-full border-white/10 bg-white/5 p-8 backdrop-blur-xl" },
            React.createElement("div", { className: "mb-6 text-5xl transition-transform duration-300 group-hover:scale-110" }, icon),
            React.createElement("h3", { className: "mb-4 text-2xl font-bold", style: { color: color } }, title),
            React.createElement("p", { className: "mb-6 text-muted-foreground" }, description),
            React.createElement("div", { className: "mb-6 flex flex-wrap gap-2" }, technologies.map(function (tech) { return (React.createElement("span", { key: tech, className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm" }, tech)); })),
            React.createElement(CircularProgress_1.CircularProgress, { value: progress, color: color }))));
};
