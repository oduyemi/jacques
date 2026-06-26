"use client";
"use strict";
exports.__esModule = true;
exports.ContactForm = void 0;
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var textarea_1 = require("@/components/ui/textarea");
var select_1 = require("@/components/ui/select");
var lucide_react_1 = require("lucide-react");
function ContactForm() {
    return (React.createElement("form", { className: "space-y-6" },
        React.createElement("div", { className: "grid gap-6 md:grid-cols-2" },
            React.createElement(input_1.Input, { placeholder: "John Doe" }),
            React.createElement(input_1.Input, { type: "email", placeholder: "johndoe@example.com" })),
        React.createElement(select_1.Select, null,
            React.createElement(select_1.SelectTrigger, null,
                React.createElement(select_1.SelectValue, { placeholder: "Hitamo serivisi" })),
            React.createElement(select_1.SelectContent, null,
                React.createElement(select_1.SelectItem, { value: "ai" }, "Artificial Intelligence"),
                React.createElement(select_1.SelectItem, { value: "vr" }, "VR/AR Development"),
                React.createElement(select_1.SelectItem, { value: "blockchain" }, "Blockchain & Web3"),
                React.createElement(select_1.SelectItem, { value: "iot" }, "IoT & Edge Computing"),
                React.createElement(select_1.SelectItem, { value: "quantum" }, "Quantum Computing"),
                React.createElement(select_1.SelectItem, { value: "metaverse" }, "Metaverse Development"))),
        React.createElement(textarea_1.Textarea, { rows: 6, placeholder: "Your message here..." }),
        React.createElement(button_1.Button, { className: "w-full bg-gradient-to-r from-cyan-500 to-purple-500 mt-24" },
            "Ohereza Ubutumwa",
            React.createElement(lucide_react_1.Send, { className: "ml-2 h-4 w-4" }))));
}
exports.ContactForm = ContactForm;
