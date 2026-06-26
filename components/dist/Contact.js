"use client";
"use strict";
exports.__esModule = true;
exports.Contact = void 0;
var lucide_react_1 = require("lucide-react");
var fa_1 = require("react-icons/fa");
var ContactForm_1 = require("./ContactForm");
var InfoCard_1 = require("./InfoCard");
exports.Contact = function () {
    return (React.createElement("section", { id: "contact", className: "py-24" },
        React.createElement("div", { className: "container mx-auto px-6" },
            React.createElement("div", { className: "mb-16 text-center" },
                React.createElement("h2", { className: "mb-6 text-5xl font-bold" },
                    React.createElement("span", { className: "bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent" }, "Twandikire")),
                React.createElement("p", { className: "mx-auto max-w-2xl text-xl text-muted-foreground" }, "Reka dukore hamwe ikintu gishya cy'ejo hazaza")),
            React.createElement("div", { className: "grid gap-12 lg:grid-cols-2" },
                React.createElement("div", { className: "rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl" },
                    React.createElement(ContactForm_1.ContactForm, null)),
                React.createElement("div", { className: "space-y-6" },
                    React.createElement(InfoCard_1.ContactInfoCard, { title: "Email", value: "jacquesepangue@gmail.com", icon: lucide_react_1.Mail, color: "from-cyan-500 to-blue-500" }),
                    React.createElement(InfoCard_1.ContactInfoCard, { title: "Phone", value: "+250 788 123 456", icon: lucide_react_1.Phone, color: "from-purple-500 to-pink-500" }),
                    React.createElement(InfoCard_1.ContactInfoCard, { title: "Aho duba", value: React.createElement(React.Fragment, null,
                            "Kigali, Rwanda",
                            React.createElement("br", null),
                            "KG 123 St, Nyarugenge"), icon: lucide_react_1.MapPin, color: "from-green-500 to-emerald-500" }),
                    React.createElement("div", { className: "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl" },
                        React.createElement("h3", { className: "mb-4 font-semibold text-yellow-400" }, "Dukurikire"),
                        React.createElement("div", { className: "flex gap-4" }, [fa_1.FaTwitter, fa_1.FaLinkedinIn, fa_1.FaInstagram, fa_1.FaGithub].map(function (Icon, i) { return (React.createElement("button", { key: i, className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:scale-110" },
                            React.createElement(Icon, { className: "h-4 w-4" }))); }))))))));
};
