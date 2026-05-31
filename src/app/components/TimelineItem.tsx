"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LucideBriefcase, LucideGraduationCap, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

interface Prop {
    name: string;
    href: string;
    title: string;
    logo: { src: string | null; type: string | null; alt: string }
    start: string;
    end?: string;
    description?: string[];
    links?: { name: string; href: string }[];
}

const TimelineItem = ({ name,href,title,logo,start,end,description,links }:Prop) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasContent = (description && description.length > 0) || (links && links.length > 0);

    return (
        <li className="relative ml-10 py-4">
            <span className="absolute -left-16 top-4 flex items-center justify-center z-30 rounded-full ">
            {
                logo.src
                ?
                <span className={`relative flex shrink-0 overflow-hidden border rounded-full size-12 `}>
                    <img
                        className="aspect-square h-full scale-50 w-full bg-muted/50 object-contain"
                        alt={logo.alt ?? "Logo"}
                        src={logo.src ?? ""}
                        loading="lazy"
                    />
                </span>
                :(
                    <span className="relative flex pr-0.5 pt-0.5 overflow-hidden rounded-full aspect-square size-12 border dark:bg-muted bg-background justify-center items-center ">
                        { logo.type == 'edu' ? <LucideGraduationCap strokeWidth={2} className="opacity-60 size-5"/> : <LucideBriefcase strokeWidth={2} className="opacity-60 size-5"/>}
                    </span>
                )
            }
            </span>

            <div className="flex flex-1 flex-col mt-2 justify-start gap-1">
                <div 
                    className={`flex items-start justify-between ${hasContent ? 'cursor-pointer select-none' : ''}`}
                    onClick={() => hasContent && setIsOpen(!isOpen)}
                >
                    <div className="flex flex-col gap-1">
                        <h2 className="font-medium leading-none">{name}</h2>
                        <div className="text-xs text-muted-foreground/90 mt-1">
                            {start && end ?
                                (<>
                                    <span>{start}</span>
                                    <span> — </span>
                                    <span>{end}</span>
                                    {/* add duration in months */}

                                </>)
                                : <span></span>
                            }
                        </div>
                        <p className="text-sm font-medium text-muted-foreground mt-1">{title}</p>
                    </div>
                    
                    {hasContent && (
                        <motion.span
                            initial={false}
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 480, damping: 28 }}
                            className="inline-flex size-8 shrink-0 items-center justify-center text-muted-foreground mt-1"
                        >
                            <ChevronDown className="size-4" />
                        </motion.span>
                    )}
                </div>

                {hasContent && (
                    <motion.div
                        initial={false}
                        animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                        }}
                        transition={{
                            height: { duration: 0.3, ease: "easeOut" },
                            opacity: { duration: 0.2, ease: "easeOut" },
                        }}
                        className="overflow-hidden"
                    >
                        <div className="pt-2">
                            {description && (
                                <ul className="ml-4 opacity-60 list-outside list-disc">
                                    {description.map((desc, i) => (
                                    <li key={i} className="pr-8 text-sm dark:prose-invert">
                                        {desc}
                                    </li>
                                    ))}
                                </ul>
                            )}
                            {links && links.length > 0 && (
                                <div className="mt-3 flex flex-row flex-wrap items-start gap-2 pb-1" onClick={(e) => e.stopPropagation()}>
                                {links?.map((link, idx) => (
                                    <Link href={link.href} target="_blank" key={idx} className="flex">
                                        <Button className="dark:text-white text-black shadow-sm h-7 text-xs hover:bg-zinc-200 dark:hover:bg-zinc-200 bg-transparent dark:hover:bg-accent border dark:border-zinc-800 border-zinc-200" variant={"default"} size={"sm"}>
                                            {link.name}
                                        </Button>
                                    </Link>
                                ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </li>
    )
}

export default TimelineItem