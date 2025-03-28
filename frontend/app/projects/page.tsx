"use client";
import axios from "axios";
import { AppBar } from "../Components/AppBar";
import { BACKEND_URL } from "@/config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function(){
    const [projects,setProjects] = useState<any[]>([]);
    const router = useRouter();
    const getAllProjects = async() => {
        const res = await axios.get(`${BACKEND_URL}`)
        if (res) {
            console.log(res.data);
            setProjects(res.data.projects)
        }
    }
    useEffect(()=>{
        getAllProjects();
    },[])
    return <div>
        <div>
            <AppBar/>
        </div>
        <div className="w-full flex justify-center items-center">
            <div className="py-5 w-[900px]">
                <h1 className="text-4xl font-extrabold">Projects</h1>
            </div>
        </div>
        <div className="w-full flex justify-center items-center">
            <div className="pb-10 border-b border-gray-700 w-[900px]">
                <h1 className="text-2xl font-semibold text-slate-300">Some projects I've built and contributed to.</h1>
            </div>
        </div>
        <div className="w-full flex justify-center items-center py-16">
            <div className="w-[900px]">
                {projects.length > 0 ? (
                    <div className="grid grid-cols-3 gap-5">
                        {projects.map((project, index) => (
                            <div key={index} className="border rounded-xl p-5 flex flex-col items-center justify-between w-full h-[320px] bg-black shadow-md transition-all duration-300 hover:shadow-lg">
                                <img 
                                    src={project.projectImg} 
                                    alt="Project Image" 
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                                <div className="flex flex-col items-center text-center w-full flex-grow px-2">
                                    <h1 className="text-lg font-semibold truncate w-full">{project.projectTitle}</h1>
                                    <p className="text-sm text-gray-500 overflow-hidden line-clamp-2">{project.projectDescription}</p>
                                </div>
                                <div className="w-full flex justify-start">
                                    <button onClick={() => router.push(project.githubLink)}>
                                        <img width="28" height="28" src="https://img.icons8.com/3d-fluency/94/github-logo.png" alt="github-logo"/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <span className="text-gray-500">No projects</span>
                )}
            </div>
        </div>
    </div>
}