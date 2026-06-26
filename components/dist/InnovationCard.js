"use client";
"use strict";
exports.__esModule = true;
exports.InnovationCard = void 0;
var card_1 = require("@/components/ui/card");
var framer_motion_1 = require("framer-motion");
function InnovationCard(_a) {
    var title = _a.title, description = _a.description, Icon = _a.icon, color = _a.color, textColor = _a.textColor;
    return (React.createElement(framer_motion_1.motion.div, { whileHover: {
            scale: 1.03
        } },
        React.createElement(card_1.Card, { className: "border-white/10 bg-white/5 p-6 backdrop-blur-xl" },
            React.createElement("div", { className: "flex items-center gap-4" },
                React.createElement("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r " + color },
                    React.createElement(Icon, { className: "h-6 w-6 text-white" })),
                React.createElement("div", null,
                    React.createElement("h3", { className: "text-xl font-bold " + textColor }, title),
                    React.createElement("p", { className: "text-muted-foreground" }, description))))));
}
exports.InnovationCard = InnovationCard;
