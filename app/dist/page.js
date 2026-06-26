"use strict";
exports.__esModule = true;
var Hero_1 = require("@/components/Hero");
var ScrollProgress_1 = require("@/components/ScrollProgress");
function HomePage() {
    return (React.createElement("main", { className: "relative min-h-screen overflow-x-hidden bg-black text-white" },
        React.createElement(ScrollProgress_1.ScrollProgress, null),
        React.createElement(Hero_1.Hero, null)));
}
exports["default"] = HomePage;
