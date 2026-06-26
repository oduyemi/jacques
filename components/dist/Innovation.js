"use client";
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
exports.__esModule = true;
exports.Innovation = void 0;
var lucide_react_1 = require("lucide-react");
var InnovationCard_1 = require("./InnovationCard");
var AssistantCard_1 = require("./AssistantCard");
var innovations = [
    {
        title: "Neural Networks",
        description: "Advanced AI ubwenge bw'ibyapa",
        icon: lucide_react_1.Brain,
        color: "from-cyan-500 to-blue-500",
        textColor: "text-cyan-400"
    },
    {
        title: "Digital Twins",
        description: "Virtual representations of real-world systems",
        icon: lucide_react_1.Cuboid,
        color: "from-purple-500 to-pink-500",
        textColor: "text-purple-400"
    },
    {
        title: "Green Computing",
        description: "Sustainable technology solutions",
        icon: lucide_react_1.Leaf,
        color: "from-green-500 to-emerald-500",
        textColor: "text-green-400"
    },
];
exports.Innovation = function () {
    return (React.createElement("section", { id: "innovation", className: "py-24" },
        React.createElement("div", { className: "container mx-auto px-6" },
            React.createElement("div", { className: "mb-16 text-center" },
                React.createElement("h2", { className: "mb-6 text-5xl font-bold" },
                    React.createElement("span", { className: "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" }, "Innovation Lab")),
                React.createElement("p", { className: "mx-auto max-w-2xl text-xl text-muted-foreground" }, "Twereka ibintu bifatika by'ejo hazaza")),
            React.createElement("div", { className: "grid gap-12 lg:grid-cols-2" },
                React.createElement("div", { className: "space-y-6" }, innovations.map(function (item) { return (React.createElement(InnovationCard_1.InnovationCard, __assign({ key: item.title }, item))); })),
                React.createElement(AssistantCard_1.AIAssistantCard, null)))));
};
