'use client'

import { Button } from "@/components/ui/button";
import { Projects } from "./components/Projects";
import Link from "next/link";
import { Socials } from "./components/Socials";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Image from "next/image";
import Certificate from "./components/Certificate";
import { ArrowRight , FileCode2Icon, TerminalIcon } from "lucide-react";

export default function Home() {
    const age = new Date().getFullYear() - 2005;    
    return (
        <div className="flex flex-col  gap-16">
            <div className="">
                {/* <Navbar/> */}
            </div>
            
            {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
            <main className="grow flex flex-col gap-8">
                <div className=" flex flex-col gap-16  pb-16"> 
                    {/* line above is the parent */}
                    <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                    {/* <Image 
                            alt="pfp" 
                            fetchPriority="high" 
                            width={175} 
                            height={175} 
                            className=" aspect-square md:translate-x-0 -translate-x-8 overflow-clip rounded-full shadow-md border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition object-cover" 
                            src="/pfp-nobg.png"
                        /> */}
                        <div className="flex flex-col gap-1 mr-2">
                            {/* need to add my photo when hovered over the name https://dribbble.com/shots/12909488-Clipped-Image-Reveal-on-Hover */}
                            <h1 className="text-3xl font-medium  ">Swayam Rajput</h1>
                            {/* <div className=" mt-4 text-gray-400 text-background ">{age} year old guy who loves to code</div>   */}
                            {/* <div className="opacity-90 text-background"></div>   */}
                            <div className="mt-8 flex items-center gap-10">
                                <a href="" className="flex flex-row">
                                    <Button variant={'outline'} disabled className="bg-transparent shadow hover:bg-zinc-100 dark:hover:bg-accent hover:border-zinc-300  border-zinc-200 dark:border-zinc-800">
                                        Resume
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" ml-2 size-5 opacity-80"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                                    </Button>
                                </a>
                                <Socials/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-6 mb-16 sm:mx-0 mx-2 flex-col">
                    <h1 className=" font-semibold flex items-center text-xl">things I know</h1>    
                    <TechStack/>
                    {/* Simplify tech stack div to show it in text also, easy to copy */}
                    
                </div>


                {/* tab */}
                <Experience/>
                
                <div className="flex flex-col mt-2 mb-6 px-2 gap-6">
                    <div className="flex flex-row items-center justify-between">
                        <Link href={'/projects'} className="flex w-full group justify-between">                        
                            <div className="items-center flex  gap-3">
                                <p className="text-2xl opacity-80 group-hover:opacity-85 dark:opacity-100 dark:group-hover:opacity-70 transition-all font-bold"><TerminalIcon/></p> 
                                <p className="text-lg opacity-80 group-hover:opacity-100 font-semibold dark:opacity-100  transition-all  dark:group-hover:opacity-70  font-spacegrotesk"> projects</p>
                            </div>
                            <p className="text-2xl opacity-80 scale-90  group-hover:opacity-85 dark:opacity-100 dark:group-hover:opacity-70 transition-all  "><ArrowRight /></p>
                            
                        </Link>
                    </div>
                    {/* <div className="md:flex hidden"> */}
                        <Projects limit={2}/>
                    {/* </div> */}
                </div>

                <div className="flex flex-col mt-2 px-2 gap-6">
                    <div className="flex flex-row items-center justify-between">
                        <Link href={'/certifications'} className="flex w-full group justify-between">
                            <div className="flex items-center justify-between  gap-2">
                                <p className="text-2xl opacity-80 scale-90  group-hover:opacity-85 dark:opacity-100 dark:group-hover:opacity-70 transition-all  "><FileCode2Icon strokeWidth={1.5}/></p>
                                <p className="text-lg opacity-80 group-hover:opacity-100 font-semibold dark:opacity-100  transition-all  dark:group-hover:opacity-70 font-spacegrotesk">certifications</p>
                            </div>
                            <p className="text-2xl opacity-80 scale-90  group-hover:opacity-85 dark:opacity-100 dark:group-hover:opacity-70 transition-all  "><ArrowRight/></p>
                            
                        </Link>
                    </div>
                    {/* <div className="md:flex hidden"> */}
                        <Certificate limit={2}/>
                    {/* </div> */}
                </div>
            </main>
        </div>
    );
        
}
