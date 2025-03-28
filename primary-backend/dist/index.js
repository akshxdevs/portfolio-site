"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const page_1 = require("./routes/page");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/about", page_1.pageRouter);
// app.use("/home",);
// app.use("/projects",);
// app.use("/contact-me",);
app.listen(config_1.PORT, () => {
    console.log(`server running on ${config_1.PORT}`);
});
