"use client";
"use strict";
exports.__esModule = true;
exports.AIAssistantCard = void 0;
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
function AIAssistantCard() {
    return (React.createElement("div", { className: "rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl" },
        React.createElement("div", { className: "mb-6 flex items-center gap-3" },
            React.createElement("div", { className: "h-8 w-8 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" }),
            React.createElement("div", null,
                React.createElement("div", { className: "font-semibold text-cyan-400" }, "AI Assistant"),
                React.createElement("div", { className: "text-xs text-muted-foreground" }, "Online"))),
        React.createElement("div", { className: "space-y-4" },
            React.createElement("div", { className: "rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-4" },
                React.createElement("p", { className: "text-sm text-gray-300" }, "Muraho! Ndi AI Assistant wacu wa kijyambere.")),
            React.createElement("div", { className: "rounded-lg bg-white/5 p-4 text-sm text-gray-300" },
                React.createElement("ul", { className: "space-y-2" },
                    React.createElement("li", null, "\u2022 Machine Learning model development"),
                    React.createElement("li", null, "\u2022 VR/AR application design"),
                    React.createElement("li", null, "\u2022 Blockchain smart contracts"),
                    React.createElement("li", null, "\u2022 IoT architecture")))),
        React.createElement(button_1.Button, { className: "mt-6 w-full bg-gradient-to-r from-cyan-500 to-purple-500" },
            "Ganira na AI",
            React.createElement(lucide_react_1.MessageCircle, { className: "ml-2 h-4 w-4" }))));
}
exports.AIAssistantCard = AIAssistantCard;
