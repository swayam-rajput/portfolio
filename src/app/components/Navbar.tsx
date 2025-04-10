'use client'
import Link from "next/link";
import { useState, useRef } from "react";

export const Navbar = () => {
    const [isDark,setDark] = useState(true);
    const [hoverStyle, setHoverStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const navRef = useRef<HTMLUListElement>(null);
    
    const toggleMode = ()=>{
        document.documentElement.style.colorScheme =    isDark ? 'dark':'light'
        // document.documentElement.style.backgroundColor =  isDark ? '#020617':'#f8fafc';
        // document.documentElement.style.color =  isDark ? 'white' : 'black'
        document.documentElement.classList.replace(!isDark ? 'dark':'light',isDark ? 'dark':'light')
        // document.body.classList.replace(!isDark ? 'dark':'light',isDark ? 'dark':'light')
		// document.documentElement.style.transition= 'all .4s'
		// document.body.style.transition= 'all .2s'
        
        console.log(document.documentElement.style.colorScheme)    
        console.log(document.documentElement.style.backgroundColor)  ;
        console.log(document.documentElement.style.color)   
		setDark(!isDark);
	}

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
        <header className="sticky top-0 z-50 bg-background/10 rounded-sm  -mx-4 px-4 pb-5 pt-6 backdrop-blur-lg">
            <nav ref = {navRef} className="flex  items-center justify-between " onMouseLeave={handleMouseLeave}
                >
                <ul 
                    className="relative md:-mx-2  flex text-sm sm:text-base  gap-4 md:gap-10 "
                >
                    <div
                        className="absolute py-4 md:mx-2 -z-20 top-1/2 -translate-y-1/2 h-9 rounded-md dark:bg-gray-800 bg-gray-200 transition-all duration-200"
                        style={{
                            left: hoverStyle.left,
                            width: hoverStyle.width,
                            opacity: hoverStyle.opacity
                        }}
                    />
                    <li className="px-1" onMouseEnter={handleMouseEnter}>
                        <Link href={'/'}  className={navitemstyle}>
                            home
                        </Link>
                    </li>

                    <li className="px-1" onMouseEnter={handleMouseEnter}>
                        <Link href={'/projects'}  className={navitemstyle}>
                            projects
                        </Link>
                    </li>
                    <li className="px-1" onMouseEnter={handleMouseEnter}>
                        <Link href={'/certifications'}  className={navitemstyle}>
                            certifications
                        </Link>
                    </li>
                    {/* <Link href={'/'} className="hover:opacity-100 opacity-80 transition border-white border-opacity-0 hover:border-opacity-100 cursor-pointer">certifications</Link> */}
                </ul>
                <div className="flex justify-end">
                    <button onClick={toggleMode} onMouseEnter={handleMouseEnter} className="transition  hover:text-accent-foreground duration-300 rounded-sm px-2 py-2">
                    {
                        !isDark?
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
                    }
                    </button>
                </div>
            </nav>

        </header>
      
    );
}

