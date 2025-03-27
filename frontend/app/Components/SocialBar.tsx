import { useRouter } from "next/navigation"

export const SocialBar = () => {
    const router = useRouter();
    return <div>
        <div className="w-[950px] px-10 mb-5 flex flex-col justify-center items-center">
            <div className="flex gap-3">
                <div>
                    <button onClick={()=>router.push("mailto:akshxdevs@gmail.com")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </button>
                </div>
                <div>
                    <button className="" onClick={()=>router.push("https://x.com/akshxdevs")}>
                    <img width="28" height="28" src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1"/>
                    </button>
                </div>
                <div>
                    <img width="28" height="28" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
                </div>
                <div>
                    <img width="28" height="28" src="https://img.icons8.com/3d-fluency/94/instagram-logo.png" alt="instagram-logo"/>
                </div>
                <div>
                    <button onClick={()=>router.push("https://github.com/akshxdevs")}>
                        <img width="28" height="28" src="https://img.icons8.com/3d-fluency/94/github-logo.png" alt="github-logo"/>
                    </button>
                </div>
            </div>
            <div className="flex gap-3 text-slate-500">
                <div>
                    <p>akshxdevs</p>
                </div>
                <div className="py-2">
                <img width="10" height="10" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/full-stop--v2.png" alt="full-stop--v2"/>
                </div>
                <div>
                    2025
                </div>
            </div>
            <div>
                <p className="text-slate-500">This site is made using my own theme.</p>
            </div>
        </div>
    </div>
}