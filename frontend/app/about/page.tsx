"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AppBar } from "../Components/AppBar";
import { SocialBar } from "../Components/SocialBar";
import { TechStackSlider } from "../Components/TechStackSlider";
import "../globals.css";
import { useRecoilValue } from "recoil";
import { themeToggleState } from "../recoil/atom";
export default function(){
    const [showContactModel,setShowContactModel] = useState(false);
    const theme = useRecoilValue(themeToggleState);
    const modelRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(()=>{
        const handleOutsideClick = (e:MouseEvent) => {
            if (modelRef.current && !modelRef.current.contains(e.target as Node)) {
                setShowContactModel(false)
            }
        };
        window.addEventListener("mousedown",handleOutsideClick);
        return () => window.removeEventListener("mousedown",handleOutsideClick);
    },[])

    return <div className={theme == "dark" ? "bg-black text-white" : "bg-white text-black"}>
        <AppBar/>
        <div className="flex flex-col items-center">
            <div ref={modelRef} className="flex justify-between px-10 items-center w-[900px] border border-gray-900 rounded-lg">
                <div className="w-[510px]">
                    <h1 className="py-2 font-bold text-xl">engineer.</h1>
                    <p>Hey, I’m Akash!</p>
                    <p>I’m a 21-year-old builder with a passion for Web3, Full Stack Development, and cutting-edge tech. From crafting sleek user interfaces to diving deep into decentralized systems, I thrive on pushing the limits of what’s possible.</p>
                    <p className="py-2">What do I do?
                    I craft scalable apps, break things (for learning, obviously), and make the internet a cooler place.</p>
                    <p>I thrive on building seamless digital experiences, optimizing performance, and making complex tech ridiculously simple.</p>
                    <p className="py-2">Why does it matter? Because the future is being built one line of code at a time, and I’m here to make sure it’s fast, scalable, and actually works. Whether it’s Web3, AI, or next-gen software, I’m all about turning ideas into impact. Let’s build something epic. 😎💻</p>
                </div>
                <div className="">
                    <img 
                        src="/WhatsApp Image 2025-03-27 at 11.15.46.jpeg" 
                        alt="profile-pic" 
                        className="w-60 h-60 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-slate-400 font-light text-sm text-center p-2">Builder. Innovator. Explorer.</p>
                    </div>
                    <div className="flex justify-center items-center gap-5 pb-5">
                        <div>
                            <button onClick={()=>router.push("mailto:akshxdevs@gmail.com")}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            {theme == "dark" ? (
                                <button className="" onClick={()=>router.push("https://x.com/akshxdevs")}>
                                    <img src="./twitter (2).svg" alt="" className="w-6 h-6 hover:text-green-600 "/>
                                </button>
                            ) :(
                                <button>
                                    <img width="23" height="23" src="https://img.icons8.com/ios/50/twitterx--v1.png" alt="twitterx--v1"/>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <TechStackSlider/>
            </div>
            <div className="w-[700px] px-10 pt-5 pb-2 mb-8 border border-gray-700 rounded-xl">
                <h1 className="text-slate-300">Code, coffee, and chaos—DMs open for all things Web3 & beyond! ☕⚡</h1>
                <div className="flex gap-5">
                    <div>
                        <button className="p-3 my-5 border border-gray-700 text-slate-300" onClick={()=>{
                            setShowContactModel(true);
                        }}>Contact me</button>
                    </div>
                    <div>
                        <button className="p-3 my-5 border border-gray-700 text-slate-300">Buy me! ☕</button>
                    </div>
                </div>
            </div>
            <div className="w-[700px] py-2 font-semibold text-sm text-center">
                If you’re into Web3, tech, or just wanna debate the best coffee for late-night coding, hit me up on Twitter                     <a 
                        href="https://x.com/akshxdevs" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        @akshxdevs
                    </a> —let’s geek out! 🌐🔥
            </div>
            <div className="w-[700px] px-10 pb-10 mb-5 text-center text-slate-400 text-sm">
                    Engineered & fueled by @akshxdevs — where innovation meets execution. 🛠️
            </div>
            <div>
                <SocialBar/>
            </div>
        </div>
        {showContactModel && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-screen">
                <div className="bg-white rounded-lg shadow-lg py-10 px-10 max-w-lg w-full">
                    <div className="flex flex-col justify-center items-center w-full">
                        <h1 className="text-black font-bold text-xl text-center">Slide Into My Inbox 📬✨</h1>
                        <form action="https://getform.io/f/bdrnmkxb" method="POST" className="w-full flex flex-col gap-3">
                            <input type="text" name="name" required
                                className="w-full px-4 py-3 text-black bg-slate-50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 shadow-md transition-all duration-300"
                                placeholder="What do they call you? 🤔"/>
                            <input type="email" name="email" required
                                className="w-full px-4 py-3 text-black bg-slate-50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 shadow-md transition-all duration-300"
                                placeholder="Your inbox HQ 📩"/>
                            <textarea name="message" required placeholder="Drop a message, let’s connect!"
                                className="w-full px-4 py-3 h-32 text-black bg-slate-50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 shadow-md transition-all duration-300 resize-none"/>
                                <button type="submit"  
                                    className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95">
                                    Send Message ✉️
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        )}
    </div>
}