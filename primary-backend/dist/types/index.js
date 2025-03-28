"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectSchema = void 0;
const zod_1 = require("zod");
exports.projectSchema = zod_1.z.object({
    projectTitle: zod_1.z.string(),
    projectDescription: zod_1.z.string(),
    githubLink: zod_1.z.string().trim(),
    projectImg: zod_1.z.string().trim().optional()
});
