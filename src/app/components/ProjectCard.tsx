import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ProjectCard = ({
    img_src=null,
    title='',
    description='',
    tech_stack=[],
    link='',
    link_url=''}
) => {
    return (
        <div className="flex flex-col p-8 rounded-lg justify-between shadow border  ">
            <div className="flex flex-col gap-2">
                <div className="img">
                    <img src={img_src} width={600} loading="eager" className="flex rounded-md outline-none h-40 w-full object-cover "/>
                </div>
                <div className="title  font-medium text-lg font-sans mt-2 ">{title}</div>
                <div className="descript text-sm text-gray-400 mb-6">{description}</div>

            </div>
            <div className=" flex  flex-col items-start justify-between gap-4">

                <div className="gap-1 flex-wrap text-xs flex ">
                    {tech_stack.map((tag,index)=>(
                        <div key={index} className="dark:bg-slate-800 bg-gray-200 px-2 py-1 text-xs scale-95 rounded-md">{tag}</div>
                    ))}
                </div>
                <div className="link">
                    {/* add a github link for the project */}
                    <Link target="blank" href={link_url}>
                        <Button className="h-8 px-2 text-xs font-bold hover:bg-opacity-80 dark:hover:bg-opacity-70 dark:text-black text-white dark:bg-white bg-black" variant={'default'} size={"sm"}>{link}</Button>
                    
                    </Link>
                </div>
            </div>
        </div>
    );
}