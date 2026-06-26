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
            React.createElement(button_1.Button, { size: "lg", className: "\r\n            h-14\r\n            rounded-full\r\n            bg-amber-500\r\n            px-8\r\n            text-black\r\n            hover:bg-amber-400\r\n          " },
                "Request Early Access",
                React.createElement(lucide_react_1.ArrowRight, { className: "ml-2 h-4 w-4" }))),
        React.createElement(dialog_1.DialogContent, { className: "\r\n          max-w-2xl\r\n          border\r\n          border-white/10\r\n          bg-black/95\r\n          text-white\r\n          backdrop-blur-xl\r\n          shadow-[0_0_80px_rgba(245,158,11,0.08)]\r\n        " },
            React.createElement(dialog_1.DialogHeader, null,
                React.createElement(dialog_1.DialogTitle, { className: "text-2xl font-semibold" }, "Request Early Access"),
                React.createElement(dialog_1.DialogDescription, { className: "text-zinc-400" }, "Be among the first to receive updates, insights, strategic content, and launch announcements.")),
            React.createElement("form", { className: "space-y-6 pt-6" },
                React.createElement("div", { className: "grid gap-4 md:grid-cols-2" },
                    React.createElement(input_1.Input, { placeholder: "First Name", className: "\r\n                h-12\r\n                border-white/10\r\n                bg-zinc-900/80\r\n                text-white\r\n                placeholder:text-zinc-500\r\n                focus-visible:border-amber-500/50\r\n                focus-visible:ring-amber-500/20\r\n              " }),
                    React.createElement(input_1.Input, { placeholder: "Last Name", className: "\r\n                h-12\r\n                border-white/10\r\n                bg-zinc-900/80\r\n                text-white\r\n                placeholder:text-zinc-500\r\n                focus-visible:border-amber-500/50\r\n                focus-visible:ring-amber-500/20\r\n              " })),
                React.createElement(input_1.Input, { placeholder: "Company", className: "\r\n              h-12\r\n              border-white/10\r\n              bg-zinc-900/80\r\n              text-white\r\n              placeholder:text-zinc-500\r\n              focus-visible:border-amber-500/50\r\n              focus-visible:ring-amber-500/20\r\n            " }),
                React.createElement(input_1.Input, { placeholder: "Role / Position", className: "\r\n              h-12\r\n              border-white/10\r\n              bg-zinc-900/80\r\n              text-white\r\n              placeholder:text-zinc-500\r\n              focus-visible:border-amber-500/50\r\n              focus-visible:ring-amber-500/20\r\n            " }),
                React.createElement(input_1.Input, { type: "email", placeholder: "Business Email", className: "\r\n              h-12\r\n              border-white/10\r\n              bg-zinc-900/80\r\n              text-white\r\n              placeholder:text-zinc-500\r\n              focus-visible:border-amber-500/50\r\n              focus-visible:ring-amber-500/20\r\n            " }),
                React.createElement("div", { className: "grid gap-4 md:grid-cols-2" },
                    React.createElement(select_1.Select, null,
                        React.createElement(select_1.SelectTrigger, { className: "\r\n                  h-12\r\n                  border-white/10\r\n                  bg-zinc-900/80\r\n                  text-white\r\n                  hover:border-amber-500/30\r\n                " },
                            React.createElement(select_1.SelectValue, { placeholder: "Market of Interest" })),
                        React.createElement(select_1.SelectContent, { position: "popper", sideOffset: 8, className: "\r\n                  z-[100]\r\n                  max-h-60\r\n                  overflow-y-auto\r\n                  border-white/10\r\n                  bg-zinc-950\r\n                  text-white\r\n                " },
                            React.createElement(select_1.SelectItem, { value: "usa" }, "United States"),
                            React.createElement(select_1.SelectItem, { value: "canada" }, "Canada"),
                            React.createElement(select_1.SelectItem, { value: "north-america" }, "North America"),
                            React.createElement(select_1.SelectItem, { value: "europe" }, "Europe"),
                            React.createElement(select_1.SelectItem, { value: "other" }, "Other"))),
                    React.createElement(select_1.Select, null,
                        React.createElement(select_1.SelectTrigger, { className: "\r\n                  h-12\r\n                  border-white/10\r\n                  bg-zinc-900/80\r\n                  text-white\r\n                  hover:border-amber-500/30\r\n                " },
                            React.createElement(select_1.SelectValue, { placeholder: "Primary Interest" })),
                        React.createElement(select_1.SelectContent, { position: "popper", sideOffset: 8, className: "\r\n                  z-[100]\r\n                  max-h-60\r\n                  overflow-y-auto\r\n                  border-white/10\r\n                  bg-zinc-950\r\n                  text-white\r\n                " },
                            React.createElement(select_1.SelectItem, { value: "market-entry" }, "Market Entry Strategy"),
                            React.createElement(select_1.SelectItem, { value: "b2b" }, "B2B Development"),
                            React.createElement(select_1.SelectItem, { value: "trade" }, "Trade Partnerships"),
                            React.createElement(select_1.SelectItem, { value: "expansion" }, "Brand Expansion"),
                            React.createElement(select_1.SelectItem, { value: "distribution" }, "Distribution Networks")))),
                React.createElement(textarea_1.Textarea, { rows: 5, placeholder: "Message (Optional)", className: "\r\n              min-h-[140px]\r\n              border-white/10\r\n              bg-zinc-900/80\r\n              text-white\r\n              placeholder:text-zinc-500\r\n              focus-visible:border-amber-500/50\r\n              focus-visible:ring-amber-500/20\r\n            " }),
                React.createElement(button_1.Button, { className: "\r\n              h-12\r\n              w-full\r\n              bg-amber-500\r\n              font-medium\r\n              text-black\r\n              transition-all\r\n              hover:bg-amber-400\r\n            " }, "Request Access"),
                React.createElement("p", { className: "text-center text-xs leading-relaxed text-zinc-500" }, "All inquiries are reviewed personally and treated with complete confidentiality.")))));
};
