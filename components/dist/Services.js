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
exports.Services = void 0;
var lucide_react_1 = require("lucide-react");
var ServiceCard_1 = require("./ServiceCard");
var services = [
    {
        title: "Artificial Intelligence",
        icon: React.createElement(lucide_react_1.Brain, { size: 56 }),
        color: "#22d3ee",
        progress: 95,
        description: "Machine Learning, Deep Learning, NLP and Computer Vision.",
        technologies: [
            "TensorFlow",
            "PyTorch",
            "GPT",
        ]
    },
    {
        title: "VR/AR Development",
        icon: React.createElement(lucide_react_1.Blocks, { size: 56 }),
        color: "#a855f7",
        progress: 90,
        description: "Virtual and Augmented Reality experiences.",
        technologies: [
            "Unity",
            "Unreal",
            "ARKit",
        ]
    },
    {
        title: "Blockchain & Web3",
        icon: React.createElement(lucide_react_1.Cpu, { size: 56 }),
        color: "#10b981",
        progress: 85,
        description: "Smart contracts, DApps and DeFi solutions.",
        technologies: [
            "Ethereum",
            "Solidity",
            "DeFi",
        ]
    },
    {
        title: "IoT & Edge Computing",
        icon: React.createElement(lucide_react_1.Radio, { size: 56 }),
        color: "#f59e0b",
        progress: 80,
        description: "Smart city and edge computing solutions.",
        technologies: [
            "Arduino",
            "Raspberry Pi",
            "5G",
        ]
    },
    {
        title: "Quantum Computing",
        icon: React.createElement(lucide_react_1.Atom, { size: 56 }),
        color: "#6366f1",
        progress: 60,
        description: "Quantum algorithms and machine learning research.",
        technologies: [
            "Qiskit",
            "Cirq",
            "Q#",
        ]
    },
    {
        title: "Metaverse Development",
        icon: React.createElement(lucide_react_1.Globe, { size: 56 }),
        color: "#ec4899",
        progress: 75,
        description: "Digital twins and immersive virtual worlds.",
        technologies: [
            "Unreal",
            "Omniverse",
            "WebXR",
        ]
    },
];
exports.Services = function () {
    return (React.createElement("section", { id: "services", className: "py-24" },
        React.createElement("div", { className: "container mx-auto px-6" },
            React.createElement("div", { className: "mb-16 text-center" },
                React.createElement("h2", { className: "mb-6 text-5xl font-bold" },
                    React.createElement("span", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" }, "Serivisi za Future")),
                React.createElement("p", { className: "mx-auto max-w-2xl text-xl text-muted-foreground" }, "Dukoresha tekenoloji za kijyambere zitarafata ku isi")),
            React.createElement("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3" }, services.map(function (service) { return (React.createElement(ServiceCard_1.ServiceCard, __assign({ key: service.title }, service))); })))));
};
