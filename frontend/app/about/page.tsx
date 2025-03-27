"use client";
import { useRouter } from "next/navigation";
import { AppBar } from "../Components/AppBar";
import { TechStackSlider } from "../Components/TechStackSlider";
import { SocialBar } from "../Components/SocialBar";
export default function(){
    const router = useRouter();
    return <div className="">
        <AppBar/>
        <div className="flex flex-col items-center">
            <div className="flex justify-between px-10 items-center w-[900px] border border-gray-900 rounded-lg">
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
                            <button className="" onClick={()=>router.push("https://x.com/akshxdevs")}>
                                <img src="./twitter (2).svg" alt="" className="w-6 h-6 hover:text-green-600 "/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <TechStackSlider/>
            </div>
            <div className="w-[900px] p-10 mb-10 border border-gray-700 rounded-xl">
                <h1 className="text-slate-300">Code, coffee, and chaos—DMs open for all things Web3 & beyond! ☕⚡</h1>
                <div className="flex gap-5">
                    <div>
                        <button className="p-3 my-5 border border-gray-700 text-slate-300">Contact me</button>
                    </div>
                    <div>
                        <button className="p-3 my-5 border border-gray-700 text-slate-300">Buy me! ☕</button>
                    </div>
                </div>
            </div>
            <div className="w-[950px] px-10 pb-10 mb-5">
                <p className="text-slate-400 text-sm">Engineered & fueled by @akshxdevs — where innovation meets execution.🛠️</p>
            </div>
            <div>
                <SocialBar/>
            </div>
        </div>
    </div>
}