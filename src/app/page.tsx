'use client'

import { Button } from "@/components/ui/button";
import { Projects } from "./components/Projects";
import Link from "next/link";
import { Socials } from "./components/Socials";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Image from "next/image";
import Certificate from "./components/Certificate";
import { ArrowRight , FileCode2Icon, Github, TerminalIcon } from "lucide-react";
import AnimationWrapper from "@/components/ui/animwrapper";
import { LinkPreview } from "@/components/ui/link-preview";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import React from "react";
import { GithubStats } from "./components/GithubStats";
import { AnimatePresence, motion } from "framer-motion";


export default function Home() {

    return (
        <main className="flex flex-col sm:px-2 px-0 gap-16">
                <div></div>
                {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
                <section className="grow flex flex-col gap-8">
                    <div className=" flex flex-col gap-16 z-10  pb-16"> 
                        {/* line above is the parent */}
                        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                            <div className="flex flex-col gap-1 mr-2">
                        {/* <Image 
                                alt="pfp" 
                                fetchPriority="high" 
                                width={120} 
                                height={120} 
                                className=" aspect-square md:translate-x-0 -translate-x-8 overflow-clip rounded-full shadow-md border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition object-cover" 
                                src="/pfp-nobg.png"
                            /> */}
                                {/* need to add my photo when hovered over the name https://dribbble.com/shots/12909488-Clipped-Image-Reveal-on-Hover */}
                                <h1 className="text-3xl font-medium max-w-fit cursor-default  animate-underline">Swayam Rajput</h1>

                                <div className=" w-fit text-gray-500 text-center flex gap-1 cursor-default text-background ">
                                    <p className="animate-underline">20</p> • 
                                    <p className="animate-underline">programmer</p> • 
                                    <p className="animate-underline">designer</p>
                                </div>  
                                {/* <div className="opacity-90 text-background"></div>   */}
                                <div className="mt-8 flex items-center gap-10">

                                        <LinkPreview  className="flex flex-row rounded-sm border border-border"  isStatic imageSrc="/resume.png" url="https://drive.google.com/file/d/1jPTrLtIH0V0E5whY0t2JqudRM-DLBFEE/view?usp=drive_link">
                                            {/* <Link href= target="_blank" rel="noopener noreferrer"> */}
                                            <Button variant={'outline'}  className="bg-transparent shadow-md hover:shadow hover:bg-zinc-100 dark:hover:bg-accent hover:border-zinc-100  border-zinc-300 dark:border-zinc-800
                                        dark:hover:border-zinc-800">
                                            
                                            Resume
                                            <svg width="18" className="ml-2" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M26.7075 10.2925L19.7075 3.2925C19.6146 3.19967 19.5042 3.12605 19.3829 3.07586C19.2615 3.02568 19.1314 2.9999 19 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V14C5 14.2652 5.10536 14.5196 5.29289 14.7071C5.48043 14.8946 5.73478 15 6 15C6.26522 15 6.51957 14.8946 6.70711 14.7071C6.89464 14.5196 7 14.2652 7 14V5H18V11C18 11.2652 18.1054 11.5196 18.2929 11.7071C18.4804 11.8946 18.7348 12 19 12H25V27H22C21.7348 27 21.4804 27.1054 21.2929 27.2929C21.1054 27.4804 21 27.7348 21 28C21 28.2652 21.1054 28.5196 21.2929 28.7071C21.4804 28.8946 21.7348 29 22 29H25C25.5304 29 26.0391 28.7893 26.4142 28.4142C26.7893 28.0391 27 27.5304 27 27V11C27.0001 10.8686 26.9743 10.7385 26.9241 10.6172C26.8739 10.4958 26.8003 10.3854 26.7075 10.2925ZM20 6.41375L23.5863 10H20V6.41375Z" fill="currentColor"></path>
                                                <path d="M17.9522 18.0017C18.0834 17.9952 18.2146 18.0147 18.3383 18.059C18.5878 18.1483 18.7917 18.333 18.9052 18.5725C19.0186 18.8121 19.0323 19.0869 18.9433 19.3365L16.4433 26.3365C16.374 26.5308 16.2462 26.699 16.0776 26.8178C15.909 26.9367 15.7077 27.0005 15.5014 27.0005C15.2951 27.0005 15.0938 26.9367 14.9252 26.8178C14.7566 26.699 14.6289 26.5308 14.5595 26.3365L12.0595 19.3365C12.0105 19.2118 11.9871 19.0786 11.9906 18.9446C11.9941 18.8107 12.0244 18.6789 12.0799 18.5569C12.1353 18.435 12.2147 18.3254 12.3133 18.2347C12.4119 18.144 12.5277 18.0741 12.6538 18.029C12.78 17.9839 12.9139 17.9647 13.0476 17.9724C13.1814 17.98 13.3122 18.0145 13.4324 18.0738C13.5525 18.133 13.6596 18.2158 13.7471 18.3171C13.8347 18.4185 13.901 18.5365 13.942 18.664L15.5008 23.0265L17.0595 18.664C17.1037 18.5403 17.1719 18.4265 17.2601 18.3291C17.3483 18.2318 17.4548 18.1527 17.5736 18.0965C17.6923 18.0404 17.821 18.0081 17.9522 18.0017Z" fill="currentColor"></path>
                                                <path d="M8 25C6.8975 25 6 23.875 6 22.5C6 21.125 6.8975 20 8 20C8.24131 20.0054 8.47899 20.0598 8.69861 20.16C8.91822 20.2601 9.11518 20.4039 9.2775 20.5825C9.46174 20.7702 9.71248 20.8777 9.97543 20.8818C10.2384 20.8859 10.4924 20.7863 10.6824 20.6045C10.8724 20.4227 10.9831 20.1733 10.9907 19.9105C10.9982 19.6476 10.9018 19.3924 10.7225 19.2C10.3743 18.8252 9.95323 18.5254 9.48508 18.3191C9.01694 18.1127 8.51159 18.0041 8 18C5.79375 18 4 20.0187 4 22.5C4 24.9812 5.79375 27 8 27C8.51159 26.9959 9.01694 26.8873 9.48508 26.6809C9.95323 26.4746 10.3743 26.1748 10.7225 25.8C10.9018 25.6076 10.9982 25.3524 10.9907 25.0895C10.9831 24.8267 10.8724 24.5773 10.6824 24.3955C10.4924 24.2137 10.2384 24.1141 9.97543 24.1182C9.71248 24.1223 9.46174 24.2298 9.2775 24.4175C9.11518 24.5961 8.91822 24.7399 8.69861 24.84C8.47899 24.9402 8.24131 24.9946 8 25Z" fill="currentColor"></path>
                                            </svg>
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" ml-2 size-5 opacity-80"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg> */}
                                        </Button>
                                        {/* </Link> */}
                                        </LinkPreview>
                                    
                                        <Socials/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <section className="custom-scrollbar overflow-x-hidden text-muted-foreground w-full"> */}
                    <GithubStats username="swayam-rajput" ></GithubStats>
                    {/* </section> */}
                    

                    <div className="flex gap-6 z-0 mb-10 sm:mx-0 mx-2 flex-col">
                        <span className="flex gap-2 flex-row items-center">
                            
                            <span className=" font-semibold flex items-center text-xl">Tech Stack </span>    

                        </span>
                        <TechStack/>
                        {/* Simplify tech stack div to show it in text also, easy to copy */}
                        
                    </div>
                    {/* tab */}
                    <div className="">
                        <div className="flex flex-row pl-2 items-center gap-2.5">
                            
                            <h1 className=" font-semibold flex text-xl">Experience</h1>

                        </div>
                        <Experience />

                    </div>
                    <div className="flex flex-col mt-2 mb-6 px-2 gap-6">
                            <div className="flex flex-row items-center justify-between">
                                <Link href={'/projects'} className="flex w-full group justify-between">                        
                                    <div className="  items-center flex  gap-3">
                                        <p className="text-2xl opacity-80 group-hover:opacity-85 dark:opacity-100 dark:group-hover:opacity-70 transition-all font-bold"><TerminalIcon/></p> 
                                        <p className="text-lg opacity-80 group-hover:opacity-100 font-semibold dark:opacity-100  transition-all  dark:group-hover:opacity-70  font-spacegrotesk"> Proof of Work</p>
                                    </div>
                                    <p className="group-hover:translate-x-1.5 text-2xl opacity-80 scale-90  group-hover:opacity-85 dark:opacity-100 dark:group-hover:opacity-70 transition-all  "><ArrowRight /></p>
                                    
                                </Link>
                            </div>
                            {/* <div className="md:flex hidden"> */}
                                <Projects limit={2}/>
                            {/* </div> */}
                    </div>
{/*                     
                    <div className="flex flex-col mt-2 px-2 gap-6">
                        <div className="flex group flex-row items-center ">
                            <Link href={'/certifications'} className="flex w-full justify-between group gap-4">
                                <div className="flex items-center justify-between  gap-2">
                                    <p className="text-2xl opacity-80  scale-90 group-hover:opacity-85 dark:opacity-100 dark:group-hover:opacity-70 transition-all  "><FileCode2Icon strokeWidth={1.5}/></p>
                                    <p className="text-lg opacity-80 group-hover:opacity-100 font-semibold dark:opacity-100  transition-all  dark:group-hover:opacity-70 font-spacegrotesk">Certifications</p>
                                </div>
                                <p className="group-hover:translate-x-1.5 translate-y-0.5 text-2xl opacity-80 scale-90  group-hover:opacity-85 dark:opacity-100 dark:group-hover:opacity-70 transition-all  "><ArrowRight/></p>
                                
                            </Link>
                        </div>
                        <Certificate showImage={false} limit={2}/>
                    </div> */}
                </section>
        </main>
    );
        
}
