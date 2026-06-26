"use client";
"use strict";
exports.__esModule = true;
exports.ScheduleConversationDialog = void 0;
var dialog_1 = require("@/components/ui/dialog");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var textarea_1 = require("@/components/ui/textarea");
var select_1 = require("@/components/ui/select");
exports.ScheduleConversationDialog = function () {
    return (React.createElement(dialog_1.Dialog, null,
        React.createElement(dialog_1.DialogTrigger, { asChild: true },
            React.createElement(button_1.Button, { variant: "outline", size: "lg", className: "\r\n          h-14\r\n          rounded-full\r\n          border-white/15\r\n          bg-white/[0.03]\r\n          text-white\r\n        " }, "Schedule A Conversation")),
        React.createElement(dialog_1.DialogContent, { className: "max-w-3xl border-white/10 bg-black text-white" },
            React.createElement(dialog_1.DialogHeader, null,
                React.createElement(dialog_1.DialogTitle, { className: "text-2xl" }, "Schedule a Conversation"),
                React.createElement(dialog_1.DialogDescription, { className: "text-zinc-400" }, "Let's discuss your goals, market opportunities and expansion strategy.")),
            React.createElement("form", { className: "space-y-5 pt-4" },
                React.createElement("div", { className: "grid gap-4 md:grid-cols-2" },
                    React.createElement(input_1.Input, { placeholder: "Full Name" }),
                    React.createElement(input_1.Input, { placeholder: "Company Name" })),
                React.createElement("div", { className: "grid gap-4 md:grid-cols-2" },
                    React.createElement(input_1.Input, { placeholder: "Position / Title" }),
                    React.createElement(input_1.Input, { type: "email", placeholder: "Business Email" })),
                React.createElement(input_1.Input, { placeholder: "Phone Number" }),
                React.createElement(input_1.Input, { placeholder: "Company Website" }),
                React.createElement(select_1.Select, null,
                    React.createElement(select_1.SelectTrigger, null,
                        React.createElement(select_1.SelectValue, { placeholder: "Current Market" })),
                    React.createElement(select_1.SelectContent, null,
                        React.createElement(select_1.SelectItem, { value: "france" }, "France"),
                        React.createElement(select_1.SelectItem, { value: "europe" }, "Europe"),
                        React.createElement(select_1.SelectItem, { value: "usa" }, "United States"),
                        React.createElement(select_1.SelectItem, { value: "canada" }, "Canada"),
                        React.createElement(select_1.SelectItem, { value: "international" }, "International"))),
                React.createElement(select_1.Select, null,
                    React.createElement(select_1.SelectTrigger, null,
                        React.createElement(select_1.SelectValue, { placeholder: "Business Type" })),
                    React.createElement(select_1.SelectContent, null,
                        React.createElement(select_1.SelectItem, { value: "producer", className: "text-white" }, "Food Producer"),
                        React.createElement(select_1.SelectItem, { value: "beverage" }, "Beverage Producer"),
                        React.createElement(select_1.SelectItem, { value: "exporter" }, "Exporter"),
                        React.createElement(select_1.SelectItem, { value: "distributor" }, "Distributor"),
                        React.createElement(select_1.SelectItem, { value: "retail" }, "Retail Brand"))),
                React.createElement(textarea_1.Textarea, { rows: 5, placeholder: "What would you like to discuss?" }),
                React.createElement(select_1.Select, null,
                    React.createElement(select_1.SelectTrigger, null,
                        React.createElement(select_1.SelectValue, { placeholder: "Timeline" })),
                    React.createElement(select_1.SelectContent, null,
                        React.createElement(select_1.SelectItem, { value: "immediate" }, "Immediate"),
                        React.createElement(select_1.SelectItem, { value: "3months" }, "Within 3 Months"),
                        React.createElement(select_1.SelectItem, { value: "6months" }, "Within 6 Months"),
                        React.createElement(select_1.SelectItem, { value: "exploring" }, "Exploring Options"))),
                React.createElement(button_1.Button, { className: "\r\n            w-full\r\n            bg-amber-500\r\n            text-black\r\n            hover:bg-amber-400\r\n          " }, "Request Consultation"),
                React.createElement("p", { className: "text-xs text-zinc-500" }, "Your information will remain strictly confidential and will be reviewed directly.")))));
};
