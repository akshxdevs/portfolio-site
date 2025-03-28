"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageRouter = void 0;
const express_1 = require("express");
const types_1 = require("../types");
const db_1 = require("../db/db");
const router = (0, express_1.Router)();
router.get("/createproject", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedBody = types_1.projectSchema.safeParse(req.body);
        if (!parsedBody.success) {
            return res.status(402).json({ message: "Invalid Inputs!", error: parsedBody.error.errors });
        }
        const { projectTitle, projectDescription, githubLink, projectImg } = parsedBody.data;
        const createProject = yield db_1.prismaClient.projects.create({
            data: {
                projectTitle,
                projectDescription,
                githubLink,
                projectImg
            }
        });
        res.json({
            message: "Project Uploaded Successfully!",
            projectDetails: createProject
        });
    }
    catch (error) {
        res.status(411).json({ message: "Something went wrong!!" });
    }
}));
router.get("/getallprojects", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getallprojects = yield db_1.prismaClient.projects.findMany({});
        if (getallprojects) {
            res.json({
                message: "Project Fetched Successfully!",
                projects: getallprojects
            });
        }
    }
    catch (error) {
        res.status(411).json({ message: "Something went wrong!!" });
    }
}));
exports.pageRouter = router;
