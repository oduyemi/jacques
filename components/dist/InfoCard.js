"use strict";
exports.__esModule = true;
exports.ContactInfoCard = void 0;
var card_1 = require("@/components/ui/card");
function ContactInfoCard(_a) {
    var title = _a.title, value = _a.value, Icon = _a.icon, color = _a.color;
    return (React.createElement(card_1.Card, { className: "border-white/10 bg-white/5 p-6 backdrop-blur-xl" },
        React.createElement("div", { className: "flex items-center gap-4" },
            React.createElement("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r " + color },
                React.createElement(Icon, { className: "h-5 w-5 text-white" })),
            React.createElement("div", null,
                React.createElement("h3", { className: "font-semibold" }, title),
                React.createElement("div", { className: "text-muted-foreground" }, value)))));
}
exports.ContactInfoCard = ContactInfoCard;
