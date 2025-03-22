import { Button } from '@/components/ui/button';

import React from 'react'

const CertificateCard = ({
    title='',
    description='',
    image='',
    site='',
    link='',
    buttonText='View',
    buttonLink=''
}) => {
    return (
        <div className="flex p-8 rounded-lg shadow hover:shadow-md transition border  ">
            <div className="flex justify-between  flex-col md:flex-row-reverse flex-grow gap-4 md:gap-8">
                
                <div className="flex justify-end shrink-0 ">
                        <a target='_blank' className='flex' href={link}>
                            <img src={image} alt={title}  loading="eager" className="flex border dark:border-none border-gray-300 rounded-md outline-none md:h-44 w-full  object-cover "/>
                        </a>
                </div>
                
                <div className="flex justify-between flex-col ">
                    <div className='flex flex-col gap-3'>
                        <div className=" font-bold text-lg font-sans mt-2 ">{title}</div>
                        <div className="opacity-80 font-medium flex-wrap cursor-default text-sm flex items-center gap-1 rounded-md">
                            {site}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        </div>
                        <div className=" text-ellipsis  text-sm text-gray-400 mb-4">{description}</div>
                    </div>
                    <div className='flex '>
                        <a target='_blank' className='flex' href={buttonLink}>
                            <Button className="px-2.5 h-8 text-xs shadow-sm shadow-inherit font-bold hover:bg-opacity-80 dark:hover:bg-opacity-70 dark:text-black text-white dark:bg-gray-100 bg-gray-700 gap-1" variant={'default'} size={"sm"}>{buttonText}
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className='mb-1' strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>

                            </Button>

                        </a>
                    </div>
                </div>
                
            </div>
            {/* <div className="hidden flex  flex-col items-start justify-between gap-4">
                <div className="gap-1 flex-wrap text-xs flex ">
                    {tech_stack.map((tag,index)=>(
                        <div key={index} className="dark:bg-slate-800 duration-150 bg-gray-200 px-2 py-1 shadow opacity-80 hover:opacity-100 cursor-default text-xs scale-95 rounded-md">{tag}</div>
                        ))}
                </div>
                <div className="link">
                    add a github link for the project
                    <Link target="blank" href={link_url}>
                    </Link>
                </div>
            </div> */}
        </div>
    );
}

export default CertificateCard