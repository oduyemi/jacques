"use client";
"use strict";
exports.__esModule = true;
exports.EarlyAccessDialog = void 0;
var react_1 = require("react");
var dialog_1 = require("@/components/ui/dialog");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var textarea_1 = require("@/components/ui/textarea");
var select_1 = require("@/components/ui/select");
var lucide_react_1 = require("lucide-react");
exports.EarlyAccessDialog = function () {
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    return (React.createElement(dialog_1.Dialog, { open: open, onOpenChange: setOpen },
        React.createElement(dialog_1.DialogTrigger, { asChild: true },
            React.createElement(button_1.Button, { size: "lg", className: "\r\n          h-14\r\n          rounded-full\r\n          bg-amber-500\r\n          px-8\r\n          text-black\r\n          hover:bg-amber-400\r\n        " },
                "Request Early Access",
                React.createElement(lucide_react_1.ArrowRight, { className: "ml-2 h-4 w-4" }))),
        React.createElement(dialog_1.DialogContent, { className: "max-w-2xl border-white/10 bg-black text-white" },
            React.createElement(dialog_1.DialogHeader, null,
                React.createElement(dialog_1.DialogTitle, { className: "text-2xl" }, "Request Early Access"),
                React.createElement(dialog_1.DialogDescription, { className: "text-zinc-400" }, "Be among the first to receive updates, insights and launch announcements.")),
            React.createElement("form", { className: "space-y-5 pt-4" },
                React.createElement("div", { className: "grid gap-4 md:grid-cols-2" },
                    React.createElement(input_1.Input, { placeholder: "First Name" }),
                    React.createElement(input_1.Input, { placeholder: "Last Name" })),
                React.createElement(input_1.Input, { placeholder: "Company" }),
                React.createElement(input_1.Input, { placeholder: "Role / Position" }),
                React.createElement(input_1.Input, { type: "email", placeholder: "Business Email" }),
                React.createElement(select_1.Select, null,
                    React.createElement(select_1.SelectTrigger, null,
                        React.createElement(select_1.SelectValue, { placeholder: "Market of Interest" })),
                    React.createElement(select_1.SelectContent, null,
                        React.createElement(select_1.SelectItem, { value: "usa" }, "United States"),
                        React.createElement(select_1.SelectItem, { value: "canada" }, "Canada"),
                        React.createElement(select_1.SelectItem, { value: "north-america" }, "North America"),
                        React.createElement(select_1.SelectItem, { value: "europe" }, "Europe"),
                        React.createElement(select_1.SelectItem, { value: "other" }, "Other"))),
                React.createElement(select_1.Select, null,
                    React.createElement(select_1.SelectTrigger, null,
                        React.createElement(select_1.SelectValue, { placeholder: "Primary Interest" })),
                    React.createElement(select_1.SelectContent, null,
                        React.createElement(select_1.SelectItem, { value: "market-entry" }, "Market Entry Strategy"),
                        React.createElement(select_1.SelectItem, { value: "b2b" }, "B2B Development"),
                        React.createElement(select_1.SelectItem, { value: "trade" }, "Trade Partnerships"),
                        React.createElement(select_1.SelectItem, { value: "expansion" }, "Brand Expansion"),
                        React.createElement(select_1.SelectItem, { value: "distribution" }, "Distribution Networks"))),
                React.createElement(textarea_1.Textarea, { rows: 4, placeholder: "Message (Optional)" }),
                React.createElement(button_1.Button, { className: "\r\n            w-full\r\n            bg-amber-500\r\n            text-black\r\n            hover:bg-amber-400\r\n          " }, "Request Access"),
                React.createElement("p", { className: "text-xs text-zinc-500" }, "All inquiries are reviewed personally and treated with complete confidentiality.")))));
};
