
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
    progress: number;
    className?:string;
};

export const TechStackItem = ({ title,child, progress=100,className='' }: Props) => {
    // const col = ''
    let col = 'border-neutral-200 '
    if (progress>=25){
        col +=' dark:border-t-slate-700 border-t-gray-300  '
    }if(progress>=50){
        col+= ' dark:border-l-slate-700 border-l-gray-300  '
    }if(progress>=75){
        col+= ' dark:border-b-slate-700 border-b-gray-300  '
    }if(progress>=100){
        col+= ' dark:border-r-slate-700 border-r-gray-300  '
    }
    if(progress<25) col=''

    const [stateOpen, setOpened] = useState(false);
    useEffect(() => {
        if (stateOpen) {
            setTimeout(() => {
                setOpened(!stateOpen);
            }, 1000);
        }
    }, [stateOpen]);    
    return (
        <div  className="relative shadow transition-all hover:shadow-md dark:bg-[linear-gradient(145deg,#111111,#222222)] bg-[linear-gradient(145deg,#dfe1e3,#ffffff)]   inline-flex cursor-pointer  items-center justify-center w-16 h-16 rounded-full">
            <div style={{
                borderColor: `conic-gradient(#4caf50 ${progress * 3.6}deg, #e0e0e0 0deg)`,
            }} className={"absolute inset-0  rounded-full -rotate-45 border-4   dark:shadow-md border-transparent  "+col} ></div>
            
            <TooltipProvider disableHoverableContent={true}>
                <Tooltip open={stateOpen} >
                    <TooltipTrigger onMouseEnter={()=>setOpened(true)} asChild>
                    <div onClick={()=>setOpened(true)} className={"z-10 w-14 h-14  overflow-clip rounded-full flex items-center justify-center "+className}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
                            {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v8l4 4" /> */}
                        {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
                        {child}
                    </div>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={8} side="bottom" className=" font-quicksand dark:bg-[linear-gradient(145deg,#111111,#222222)] bg-[linear-gradient(145deg,#dfe1e3,#ffffff)] ">
                        {title}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
        

    );
};

