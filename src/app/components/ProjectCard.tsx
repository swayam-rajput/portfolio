import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ProjectCard = ({
    img_src='',
    title='',
    description='',
    tech_stack=[],
    link='',
    link_url=''}
) => {
    console.log(img_src);
    return (
        <div className="flex flex-col p-8 rounded-lg justify-between shadow hover:shadow-md border transition ">
            <div className="flex flex-col gap-2">
                <div className="img">
                    <img src={img_src}  alt={title} width={600} loading="lazy" className="flex rounded-md md:h-44  w-full object-cover "/>
                </div>
                    <div className="title  font-semibold text-lg font-sans mt-2 ">{title}</div>
            
                <div className="descript text-sm text-gray-500 mb-6">{description}</div>

            </div>
            <div className=" flex  flex-col items-start justify-between gap-4">

                <div className="gap-1.5 flex-wrap text-xs flex ">
                    {tech_stack.map((tag,index)=>(
                        <div key={index} className="dark:bg-zinc-700 duration-150 bg-zinc-300/70 px-2 py-1 shadow opacity-80 hover:opacity-100  text-xs scale-95 rounded-sm">{tag}</div>
                    ))}
                </div>
                <div className="link">
                    {/* add a github link for the project */}
                    <Link target="_blank" href={link_url}>
                        <Button className="md:h-8 px-2.5 text-xs shadow shadow-inherit font-bold hover:bg-opacity-80 dark:hover:bg-opacity-70 dark:text-black text-white dark:bg-zinc-200 tracking-wide bg-zinc-700" variant={'default'} size={"sm"}>{link}
                            <svg width="21" height="21" viewBox="0 0 22 24" xmlns="http://www.w3.org/2000/svg" className="fill-white dark:fill-black" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path> </g> </g></svg>

                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
