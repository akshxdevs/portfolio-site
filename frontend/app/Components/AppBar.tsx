"use client";

import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { themeToggleState } from "../recoil/atom";

export const AppBar = () => {
    const router = useRouter();
    const [theme, setTheme] = useRecoilState(themeToggleState)

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-between p-10 pb-5 items-center w-[900px] font-semibold text-lg">
                <button className="text-3xl outline-none border-none" onClick={()=>router.push("/about")}>akshxdevs</button>
                <div className="flex gap-5">
                    <button onClick={() => router.push("/blogs")}>blogs</button>
                    <button onClick={() => router.push("/projects")}>projects</button>
                    <button onClick={toggleTheme} className="outline-none">
                        {theme === "dark" ? 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg> 
                            : 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};
