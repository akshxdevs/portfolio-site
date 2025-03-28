import { prismaClient } from "../db/db";

async function Main() {
    await prismaClient.projects.create({
        data:{
            projectTitle:"Grocery-App",
            projectDescription:"Seamless grocery shopping—fresh picks, fast delivery, and hassle-free checkout at your fingertips.",
            githubLink:"https://github.com/akshxdevs/Grocery-App",
            projectImg:""
        }
    })
    await prismaClient.projects.create({
        data:{
            projectTitle:"Blog-App",
            projectDescription:"A sleek and intuitive platform to share ideas, explore insights, and connect through powerful storytelling.",
            githubLink:"https://github.com/akshxdevs/Blog-App",
            projectImg:""
        }
    })
    await prismaClient.projects.create({
        data:{
            projectTitle:"Social-Media-App",
            projectDescription:"Connect, share, and chat seamlessly—your social world, all in one place.",
            githubLink:"https://github.com/akshxdevs/Social-Media-App",
            projectImg:""
        }
    })
}

Main();