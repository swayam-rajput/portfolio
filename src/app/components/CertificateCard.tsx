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
                
                <div className="sm:flex justify-end shrink-0 hidden ">
                        <a target='_blank' className='flex' href={link}>
                            <img src={image} alt={title}  loading="lazy" className="flex  border dark:border-none border-gray-300 rounded-md outline-none md:h-44 w-full  object-cover "/>
                        </a>
                </div>
                
                <div className="flex justify-between flex-col ">
                    <div className='flex flex-col gap-3'>
                        <div className=" font-semibold text-lg font-sans mt-2 ">{title}</div>
                        <div className="opacity-90 font-medium flex-wrap  text-sm flex items-center gap-1 ">
                            {site}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        </div>
                        <div className=" text-ellipsis  text-sm text-gray-500 mb-4">{description}</div>
                    </div>
                    <div className='flex '>
                        <a target='_blank' className='flex' href={buttonLink}>
                            <Button className="px-2.5 h-8 text-xs shadow-sm shadow-inherit font-bold hover:bg-opacity-80 dark:hover:bg-opacity-70 dark:text-black text-white dark:bg-zinc-100 bg-zinc-700 tracking-wide " variant={'default'} size={"sm"}>{buttonText}
                                <svg width="20" height="20" viewBox="0 0 22 24" xmlns="http://www.w3.org/2000/svg" className="fill-white dark:fill-black" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path> </g> </g></svg>
                            </Button>

                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default CertificateCard
