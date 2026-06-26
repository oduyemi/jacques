"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var utils_1 = require("@/lib/utils");
var inter = google_1.Inter({ subsets: ['latin'], variable: '--font-sans' });
exports.metadata = {
    title: "Jacques Epangue | International Trade Strategist | Food & Beverage Market Expansion",
    description: "Consulting for Culinary Excellence"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", className: utils_1.cn("h-full", "antialiased", inter.variable, inter.variable, "font-sans", inter.variable) },
        React.createElement("body", { className: "min-h-full flex flex-col" }, children)));
}
exports["default"] = RootLayout;
