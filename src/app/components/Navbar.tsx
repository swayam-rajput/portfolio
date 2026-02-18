'use client'
import Link from "next/link";
import { useState, useRef, useEffect, ReactElement } from "react";
import Cat from "./Cat";
import { SunIcon } from "@/components/ui/sun";
import { MoonIcon } from "@/components/ui/moon";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
export const Navbar = () => {
    const [hoverStyle, setHoverStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const navRef = useRef<HTMLUListElement>(null);
    const [catShown, setCatShown] = useState(false)


    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        const nav = navRef.current;
        const target = e.currentTarget;
        if (nav && target) {
            const navRect = nav.getBoundingClientRect();
            const itemRect = target.getBoundingClientRect();
            setHoverStyle({
                left: itemRect.left - navRect.left,
                width: itemRect.width,
                opacity: 1
            });
        }
    };

    const handleMouseLeave = () => {
        setHoverStyle(prev => ({ ...prev, opacity: 0 }));
    };

    const navitemstyle = 'flex relative px-2 py-1 flex-row opacity-80 active:opacity-100  hover:opacity-100 cursor-pointer'
    
    return (
        <>
        {catShown && <Cat/>}

            <header className="sticky top-0 w-full z-50 sm:pt-4">            
                <div className="dark:bg-[#29292980]/25  bg-zinc-300/30 shadow-sm rounded-lg sm:mx-0 -mx-4 px-4 pb-5 pt-6 backdrop-blur-[18px]">
                    <nav  className="flex items-center justify-between " 
                        >
                        <ul ref = {navRef} onMouseLeave={handleMouseLeave}
                            className="relative  flex text-sm sm:text-base  gap-0.5 md:gap-4 ">
                                <div
                                    className="absolute py-4 shadow -z-20 top-1/2 -translate-y-1/2 h-7 sm:h-9 rounded-md dark:bg-zinc-600/40 bg-zinc-300/60 transition-all duration-200"
                                    style={{
                                        left: hoverStyle.left,
                                        width: hoverStyle.width,
                                        opacity: hoverStyle.opacity
                                    }}
                                />
                            <li className="sm:px-1 transition sm:opacity-80 opacity-60 hover:opacity-100 px-0.5" onMouseEnter={handleMouseEnter}>
                                <Link href={'/'}  className={navitemstyle}>
                                    home
                                </Link>
                            </li>

                            <li className="sm:px-1 transition sm:opacity-80 opacity-60 hover:opacity-100 px-0.5" onMouseEnter={handleMouseEnter}>
                                <Link href={'/projects'}  className={navitemstyle}>
                                    projects
                                </Link>
                            </li>

                            <li className="sm:px-1 transition sm:opacity-80 opacity-60 hover:opacity-100 px-0.5" onMouseEnter={handleMouseEnter}>
                                <Link href={'/certifications'}  className={navitemstyle}>
                                    certifications
                                </Link>
                            </li>
                            {/* <li className="sm:px-1 transition sm:opacity-80 opacity-60 hover:opacity-100 px-0.5" onMouseEnter={handleMouseEnter}>
                                <Link href={'/contact'}  className={navitemstyle}>
                                    contact
                                </Link>
                            </li> */}
                        </ul>
                        <div onMouseLeave={handleMouseLeave} className="flex justify-end flex-row-reverse gap-2 ">
                            {/* <button onClick={toggleMode} onMouseEnter={handleMouseEnter} className="transition  hover:text-accent-foreground duration-300 rounded-sm px-2 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                    {
                                        (!isDark)?
                                        (<>
                                            <circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
                                            </>)
                                        :
                                        (<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>)
                                    
                                    }
                                </svg>
                            </button> */}

                            <AnimatedThemeToggler onMouseEnter={handleMouseEnter} className="transition  hover:text-accent-foreground duration-200 rounded-sm px-2 py-2"/>
                                
                                <button onMouseEnter={handleMouseEnter} onClick={()=>{setCatShown(prev=>!prev)}} className="transition  hover:text-accent-foreground duration-200 rounded-sm px-1 py-2">
                                
                                <svg width="28"  height="28" className={` stroke-current ${!catShown?'opacity-80':''}`} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                                        {
                                            catShown?
                                            ''
                                            :
                                            (<path d="M320 320 80 80"  strokeWidth={18}></path>)

                                        }
                                        
                                        <path d="M104.841 145.759C84.3825 103.24 113.976 93.8934 138.062 126.769"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M278.45 125.67C310.018 85.9248 316.458 123.485 306.365 156.355"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M174.149 149.888C174.479 144.709 174.812 139.541 175.142 134.374"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M208.585 156.344C208.228 146.42 209.43 136.477 210.574 126.629"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M241.358 149.884C243.072 144.904 242.021 139.545 242.355 134.378"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M164.116 198.803C205.073 198.238 196.821 210.153 161.861 223.33"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M237.844 197.687C203.614 212.709 210.546 206.414 236.697 223.526"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M196.887 254.533C179.946 255.472 195.528 273.667 210.195 255.646"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M193.39 286.642C181.827 291.678 175.892 289.505 167.537 282.956"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M197.268 282.956C206.418 297.428 220.936 292.334 232.171 282.956"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M109.366 231.278C96.7847 231.121 76.1524 227.207 68 226.11"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M111.951 256.852C96.0698 257.608 82.1144 261.134 69.2927 267.182"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M333 214.223C316.165 216.03 302.204 220.205 289.049 228.707"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M331.965 262.448C318.367 258.875 304.68 258.572 290.599 258.572"  strokeOpacity="0.9" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                                    </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        
        </>
        
    );
}

