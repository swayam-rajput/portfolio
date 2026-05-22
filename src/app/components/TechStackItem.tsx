'use client'
import { ReactNode,useEffect,useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import MinimalTooltip from "@/components/ui/minimal-tooltip";
type Props = {
    title:string,
    child: ReactNode;
    className?:string;
    grayscale?:number;
};

export const TechStackItem = ({ title,child, className='', grayscale = 0 }: Props) => {
    if (grayscale > 0) {
        //  className += ' grayscale'
    }
    const [stateOpen, setOpened] = useState(false);
    useEffect(() => {
        if (stateOpen) {
            setTimeout(() => {
                setOpened(!stateOpen);
            }, 1000);
        }
    }, [stateOpen]);
    return (
        
        <div   className="tsi cursor-pointer relative  transition-all    inline-flex  items-center justify-center size-12 sm:scale-100 scale-90 rounded-full">
            {/* <div className={"absolute inset-0      rounded-full -rotate-45 border-4 border-transparent  "} ></div> */}
            
            <TooltipProvider disableHoverableContent={true}>
                <Tooltip open={stateOpen} >
                    <TooltipTrigger onMouseEnter={()=>setOpened(true)} asChild>
                    <div onClick={()=>setOpened(true)} className={"z-0 w-14 h-14  overflow-clip rounded-full flex items-center justify-center transition-all  "+className}>
                        {child}
                    </div>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={0} side="bottom" className="rounded-md px-2.5 py-1.5 dark:bg-zinc-700 bg-zinc-100 opacity-100 text-black dark:text-white  whitespace-nowrap pointer-events-none transition-all duration-100 ease-out z-50 ">
                        {title}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            {/* <MinimalTooltip  className="text[15px] px-2 " position="bottom" text={title} >
                <div className="z-0 w-14 h-14 overflow-clip flex items-center justify-center transition-all">
                    {child}
                </div>

            </MinimalTooltip> */}
        </div>
        
        // <div className="flex">
        //     <div className="scale-50 flex " >{child}</div>
        //     <div className="items-center flex" >{title}</div>

        // </div>
    );
};

