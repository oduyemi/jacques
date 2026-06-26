"use client";
"use strict";
exports.__esModule = true;
exports.Navbar = void 0;
var link_1 = require("next/link");
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
var framer_motion_1 = require("framer-motion");
var navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Innovation", href: "#innovation" },
    { label: "Contact", href: "#contact" },
];
exports.Navbar = function () {
    return (React.createElement("nav", { className: "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl" },
        React.createElement("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4" },
            React.createElement(framer_motion_1.motion.div, { whileHover: { scale: 1.05 }, className: "flex items-center gap-2" },
                React.createElement(lucide_react_1.Rocket, { className: "h-6 w-6 text-purple-400" }),
                React.createElement(link_1["default"], { href: "#home", className: "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-transparent" }, "Ibyiza byacu")),
            React.createElement("div", { className: "hidden items-center gap-3 lg:flex" }, navItems.map(function (item) { return (React.createElement(link_1["default"], { key: item.label, href: item.href, className: "rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white" }, item.label)); })),
            React.createElement(button_1.Button, { variant: "ghost", size: "icon", className: "lg:hidden" },
                React.createElement(lucide_react_1.Menu, null)))));
};
