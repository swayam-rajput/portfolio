
import { ReactNode,useEffect,useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
type Props = {
    title:string,
    child: ReactNode;
    className?:string;
    grayscale?:number;
};

export const TechStackItem = ({ title,child, className='', grayscale = 0 }: Props) => {
    if (grayscale > 0) {
         className += ' grayscale'
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
        
        <div   className="tsi cursor-pointer relative shadow transition-all hover:shadow-md dark:bg-[linear-gradient(145deg,#111111,#222222)] bg-[linear-gradient(145deg,#dfe1e3,#ffffff)]   inline-flex  items-center justify-center w-16 h-16 rounded-full">
            {/* <div className={"absolute inset-0      rounded-full -rotate-45 border-4 border-transparent  "} ></div> */}
            
            <TooltipProvider disableHoverableContent={true}>
                <Tooltip open={stateOpen} >
                    <TooltipTrigger onMouseEnter={()=>setOpened(true)} asChild>
                    <div onClick={()=>setOpened(true)} className={"z-0 w-14 h-14  overflow-clip rounded-full flex items-center justify-center transition-all hover:grayscale-0 "+className}>
                        {child}
                    </div>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={8} side="bottom" className=" dark:bg-[linear-gradient(145deg,#111111,#222222)] bg-[linear-gradient(145deg,#dfe1e3,#ffffff)] ">
                        {title}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
        
        // <div className="flex">
        //     <div className="scale-50 flex " >{child}</div>
        //     <div className="items-center flex" >{title}</div>

        // </div>
    );
};

