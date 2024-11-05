'use client'

import { Button } from "@/components/ui/button";
import { Projects } from "./components/Projects";
import Link from "next/link";
import { Socials } from "./components/Socials";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";

export default function Home() {
    
    return (
        <div className="flex  flex-col  gap-16">
        <div className="">
            {/* <Navbar/> */}
        </div>
        {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
        <main className="grow">
            <div className=" flex flex-col gap-16 pb-16"> 
                {/* line above is the parent */}
                <div className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
                    <img fetchPriority="high" width='175' height='175' className="shadow-md aspect-square overflow-clip rounded-md object-cover" src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    <div className="flex flex-col gap-1 mr-2">
                        <h1 className="text-3xl font-bold font-quicksand ">Simon says Hello!</h1>
                        <div className=" mt-4 text-gray-400 text-background ">19 year old guy who loves to code and watch movies</div>  
                        <div className="opacity-90 text-background"></div>  
                        <div className="mt-8 flex items-center gap-10">
                            <a href="" className="flex flex-row">
                                <Button variant={'outline'} className="bg-transparent shadow-sm hover:bg-slate-100 dark:hover:bg-accent  border-slate-200 dark:border-slate-800" >
                                    Resume
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" ml-2 size-5 opacity-80"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                                </Button>
                            </a>
                            <Socials/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-6 mb-16 flex-col">
                <h1 className="font-quicksand font-semibold text-xl">things I know</h1>
                <TechStack/>
            </div>


            {/* tab */}
            <Experience/>
            
            <div className="flex flex-col mt-2 px-2 gap-6">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-lg font-semibold font-quicksand">projects</h1>
                    <Link href={'/projects'}>
                    <Button variant={'ghost'} className=" opacity-80 hover:opacity-100 ">see more {'->'}</Button>
                    </Link>
                </div>
                <Projects limit={2}/>
            </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <div>
            
            </div>
        </footer>
        </div>
    );
}
