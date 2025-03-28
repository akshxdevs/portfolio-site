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
const db_1 = require("../db/db");
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield db_1.prismaClient.projects.create({
            data: {
                projectTitle: "Grocery-App",
                projectDescription: "Seamless grocery shopping—fresh picks, fast delivery, and hassle-free checkout at your fingertips.",
                githubLink: "https://github.com/akshxdevs/Grocery-App",
                projectImg: ""
            }
        });
        yield db_1.prismaClient.projects.create({
            data: {
                projectTitle: "Blog-App",
                projectDescription: "A sleek and intuitive platform to share ideas, explore insights, and connect through powerful storytelling.",
                githubLink: "https://github.com/akshxdevs/Blog-App",
                projectImg: ""
            }
        });
        yield db_1.prismaClient.projects.create({
            data: {
                projectTitle: "Social-Media-App",
                projectDescription: "Connect, share, and chat seamlessly—your social world, all in one place.",
                githubLink: "https://github.com/akshxdevs/Social-Media-App",
                projectImg: ""
            }
        });
    });
}
Main();
