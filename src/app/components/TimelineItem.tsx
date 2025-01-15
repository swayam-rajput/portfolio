
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface Prop {
    name: string;
    href: string;
    title: string;
    logo: {"src":string,"svg":string | null,"alt":string};
    start: string;
    end?: string;
    description?: string[];
    links?: { name: string; href: string }[];
}
  
const TimelineItem = ({ name,href,title,logo,start,end,description,links }:Prop) => {
    // useEffect(() => {
    //     const checkImage = async () => {
    //         try {
    //             const response = await fetch(logo.src);
    //             setValid(response.ok ? 200 : 404);
    //         } catch (error) {
    //             setValid(404);
    //         }
    //     };

    //     if (logo.src) {
    //         checkImage();
    //     }
    // }, [logo.src]);
    
    
    return (
        <li className="relative ml-10 py-4">
            {
                <a target="_blank" className="absolute -left-16 top-4 flex items-center justify-center z-30 bg-background rounded-full " href={href}>
                {
                    logo.src
                    ?
                    <span className={`relative flex shrink-0 overflow-hidden border rounded-full size-12 `}>
                        {/* {logo.src ? <img className="aspect-square h-full w-full bg-background object-contain" alt={logo.alt??null} src={logo.src?logo.src:""}/> : logo.svg } */}
                        
                        <img
                            className="aspect-square h-full  scale-50 w-full bg-background object-contain"
                            alt={logo.alt ?? null}
                            src={logo.src ?? ""}
                        />
                    </span>
                    :(
                        
                        <span className="relative flex pr-0.5 pt-0.5 overflow-hidden rounded-full aspect-square size-12 border justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="36" height="36" stroke="currentColor" fill="currentColor"   className="opacity-80" 
                            dangerouslySetInnerHTML={{__html:logo.svg||""}}>
                            
                            </svg>
                        </span>

                    )
                }
                </a>
            }


            <div className="flex flex-1 flex-col mt-2 justify-start gap-1">
                
                
            <h2 className="font-semibold leading-none">{name}</h2>
            <div className="text-xs text-muted-foreground">
                {start && end ?
                    (<>
                        <span>{start}</span>
                        <span> - </span>
                        <span>{end}</span>    
                    </>
                    )
                    :<span className=""></span>
                }
            </div>
            <p className="text-sm text-muted-foreground">{title}</p>
            {description && (
                <ul className="ml-4 opacity-80 list-outside list-disc">
                    {description.map((desc, i) => (
                    <li key={i} className="prose pr-8 text-sm dark:prose-invert">
                        {desc}
                    </li>
                    ))}
                </ul>
                )}
            </div>
            {links && links.length > 0 && (
                <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                {links?.map((link, idx) => (
                    <Link href={link.href} target="_blank" key={idx} className="flex">
                        {/* <Button className="h-8 px-2 text-xs py-0  font-bold hover:bg-opacity-80 dark:hover:bg-opacity-70 dark:text-black text-white dark:bg-white bg-black" variant={'default'} size={"sm"}> */}
                        <Button className="dark:text-white text-black shadow-sm h-7 text-xs hover:bg-slate-200 dark:hover:bg-slate-200  bg-transparent  dark:hover:bg-accent  border dark:border-slate-800 border-slate-200 " variant={"default"} size={"sm"}>
                            {link.name}
                        </Button>
                    </Link>
                ))}
                </div>
            )}
            </li>
    )
}

export default TimelineItem