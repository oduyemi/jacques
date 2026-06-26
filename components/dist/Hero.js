"use client";
"use strict";
exports.__esModule = true;
exports.Hero = void 0;
var image_1 = require("next/image");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
var early_access_1 = require("@/dialogues/early-access");
var schedule_conversation_1 = require("@/dialogues/schedule-conversation");
exports.Hero = function () {
    return (React.createElement("section", { className: "relative min-h-screen overflow-hidden bg-black" },
        React.createElement("div", { className: "absolute inset-0" },
            React.createElement("div", { className: "absolute inset-0 bg-black" }),
            React.createElement("div", { className: "absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-amber-500/10 blur-[180px]" }),
            React.createElement("div", { className: "absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-zinc-700/20 blur-[140px]" }),
            React.createElement("div", { className: "\r\n          absolute inset-0\r\n          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),\r\n          linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]\r\n          bg-[size:90px_90px]\r\n        " })),
        React.createElement("div", { className: "\r\n        pointer-events-none\r\n        absolute\r\n        left-0\r\n        top-24\r\n        hidden\r\n        select-none\r\n        text-[12rem]\r\n        font-black\r\n        tracking-tight\r\n        text-white/[0.03]\r\n        xl:block\r\n      " }, "JACQUES"),
        React.createElement("div", { className: "relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-8" },
            React.createElement("div", { className: "grid w-full gap-16 lg:grid-cols-2" },
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, className: "flex flex-col justify-center" },
                    React.createElement("div", { className: "\r\n              mb-8\r\n              inline-flex\r\n              w-fit\r\n              items-center\r\n              gap-2\r\n              rounded-full\r\n              border\r\n              border-amber-500/20\r\n              bg-amber-500/10\r\n              px-4\r\n              py-2\r\n            " },
                        React.createElement("span", { className: "h-2 w-2 rounded-full bg-amber-400" }),
                        React.createElement("span", { className: "text-sm font-medium tracking-widest text-amber-300" }, "COMING SOON")),
                    React.createElement("p", { className: "mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500" }, "Jacques Epangue"),
                    React.createElement("h1", { className: "\r\n              text-4xl md:text-5xl lg:text-6xl\r\n              font-bold\r\n              leading-[0.95]\r\n              tracking-tight\r\n              text-white" },
                        "Transforming",
                        React.createElement("span", { className: "block text-amber-400" }, "French Food Excellence"),
                        "Into North American",
                        React.createElement("span", { className: "block" }, "Market Success")),
                    React.createElement("p", { className: "\r\n              mt-4\r\n              max-w-2xl\r\n              text-md\r\n              leading-relaxed\r\n              text-zinc-400\r\n            " }, "Jacques Epangue helps French food producers, exporters, and emerging culinary brands enter and thrive in North American markets through strategic trade development, B2B partnerships, and commercial growth initiatives."),
                    React.createElement("div", { className: "\r\n              mt-4\r\n              border-l-2\r\n              border-amber-400\r\n              pl-6\r\n            " },
                        React.createElement("div", { className: "space-y-2 text-zinc-300" },
                            React.createElement("p", null, "International Trade Strategy"),
                            React.createElement("p", null, "B2B Market Development"),
                            React.createElement("p", null, "Food & Beverage Expansion"),
                            React.createElement("p", null, "Cross-Border Commercial Growth"))),
                    React.createElement("div", { className: "mt-2 flex flex-wrap gap-4 mt-3" },
                        React.createElement(early_access_1.EarlyAccessDialog, null,
                            React.createElement(button_1.Button, { size: "lg", className: "h-14 rounded-full bg-amber-500 px-8 text-black hover:bg-amber-400" },
                                "Request Early Access",
                                React.createElement(lucide_react_1.ArrowRight, { className: "ml-2 h-4 w-4" }))),
                        React.createElement(schedule_conversation_1.ScheduleConversationDialog, null,
                            React.createElement(button_1.Button, { variant: "outline", size: "lg", className: "h-14 rounded-full border-white/15 bg-white/[0.03] text-white" }, "Schedule a Conversation")))),
                React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, className: "relative" },
                    React.createElement(TradeRoute, null),
                    React.createElement("div", { className: "\r\n              relative\r\n              mx-auto\r\n              h-[700px]\r\n              overflow-hidden\r\n              rounded-[40px]\r\n              border\r\n              border-white/10\r\n            " },
                        React.createElement(image_1["default"], { src: "/images/jacques.jpg", alt: "Jacques Epangue", fill: true, priority: true, className: "object-cover" }),
                        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" }),
                        React.createElement(framer_motion_1.motion.div, { animate: {
                                y: [0, -8, 0]
                            }, transition: {
                                duration: 5,
                                repeat: Infinity
                            }, className: "\r\n                absolute\r\n                bottom-8\r\n                left-8\r\n                max-w-sm\r\n                rounded-3xl\r\n                border\r\n                border-white/10\r\n                bg-black/50\r\n                p-6\r\n                backdrop-blur-xl\r\n              " },
                            React.createElement("p", { className: "text-lg font-semibold text-white" }, "Jacques Epangue"),
                            React.createElement("p", { className: "mt-2 text-zinc-300" }, "International Trade Strategist"),
                            React.createElement("p", { className: "text-zinc-400" }, "Food & Beverage Market Expansion"),
                            React.createElement("p", { className: "mt-3 text-sm text-amber-400" }, "Consulting for Culinary Excellence")))))),
        React.createElement("div", { className: "mt-10 flex flex-wrap gap-4" },
            React.createElement(early_access_1.EarlyAccessDialog, null),
            React.createElement(schedule_conversation_1.ScheduleConversationDialog, null))));
};
function TradeRoute() {
    return (React.createElement("div", { className: "\r\n      pointer-events-none\r\n      absolute\r\n      -left-24\r\n      top-20\r\n      z-10\r\n      hidden\r\n      lg:block\r\n    " },
        React.createElement("svg", { width: "500", height: "300" },
            React.createElement(framer_motion_1.motion.circle, { cx: "80", cy: "150", r: "8", fill: "#f59e0b" }),
            React.createElement(framer_motion_1.motion.circle, { cx: "420", cy: "120", r: "8", fill: "#f59e0b" }),
            React.createElement(framer_motion_1.motion.path, { d: "M80 150 C180 40, 320 40, 420 120", fill: "transparent", stroke: "#f59e0b", strokeWidth: "2", strokeDasharray: "8 8", initial: {
                    pathLength: 0
                }, animate: {
                    pathLength: 1
                }, transition: {
                    duration: 3,
                    ease: "easeInOut"
                } }),
            React.createElement("text", { x: "40", y: "180", fill: "#f59e0b", fontSize: "14" }, "France"),
            React.createElement("text", { x: "380", y: "100", fill: "#f59e0b", fontSize: "14" }, "North America"))));
}
