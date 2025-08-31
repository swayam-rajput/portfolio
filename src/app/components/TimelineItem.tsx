
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface Prop {
    name: string;
    href: string;
    title: string;
    logo: { src: string | null; svg: string | null; alt: string }
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
                        <img
                            className="aspect-square h-full  scale-50 w-full bg-background object-contain"
                            alt={logo.alt ?? null}
                            src={logo.src ?? ""}
                        />
                    </span>
                    :(
                        
                        <span className="relative flex pr-0.5 pt-0.5 overflow-hidden rounded-full aspect-square size-12 border justify-center items-center ">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="36" height="36"    className="opacity-80 dark:stroke-white stroke-black dark:fill-white fill-black" 
                            dangerouslySetInnerHTML={{__html:logo.svg??""}}>
                            
                            </svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none">
                                    <path d="M9.12015 8.16C10.1529 7.38542 10.6693 6.99813 11.2364 6.84884C11.737 6.71706 12.2632 6.71705 12.7638 6.84883C13.331 6.99812 13.8474 7.38541 14.8801 8.15999L20.5868 12.44C21.7448 13.3085 22.3238 13.7427 22.5308 14.275C22.7122 14.7413 22.7122 15.2586 22.5308 15.7249C22.3238 16.2573 21.7448 16.6915 20.5868 17.56L14.8801 21.84C13.8474 22.6146 13.331 23.0019 12.7638 23.1512C12.2632 23.2829 11.737 23.2829 11.2364 23.1512C10.6693 23.0019 10.1529 22.6146 9.12014 21.84L3.41349 17.56C2.25552 16.6915 1.67654 16.2573 1.4695 15.7249C1.28816 15.2586 1.28816 14.7413 1.46951 14.275C1.67655 13.7427 2.25553 13.3085 3.41349 12.44L9.12015 8.16Z" fill="url(#1752500502793-639649_layers_existing_0_b0rh2cs4r)" data-glass="origin" mask="url(#1752500502793-639649_layers_mask_lh5t9hjjm)"></path>
                                    <path d="M9.12015 8.16C10.1529 7.38542 10.6693 6.99813 11.2364 6.84884C11.737 6.71706 12.2632 6.71705 12.7638 6.84883C13.331 6.99812 13.8474 7.38541 14.8801 8.15999L20.5868 12.44C21.7448 13.3085 22.3238 13.7427 22.5308 14.275C22.7122 14.7413 22.7122 15.2586 22.5308 15.7249C22.3238 16.2573 21.7448 16.6915 20.5868 17.56L14.8801 21.84C13.8474 22.6146 13.331 23.0019 12.7638 23.1512C12.2632 23.2829 11.737 23.2829 11.2364 23.1512C10.6693 23.0019 10.1529 22.6146 9.12014 21.84L3.41349 17.56C2.25552 16.6915 1.67654 16.2573 1.4695 15.7249C1.28816 15.2586 1.28816 14.7413 1.46951 14.275C1.67655 13.7427 2.25553 13.3085 3.41349 12.44L9.12015 8.16Z" fill="url(#1752500502793-639649_layers_existing_0_b0rh2cs4r)" data-glass="clone" filter="url(#1752500502793-639649_layers_filter_kkalz5ssh)" clipPath="url(#1752500502793-639649_layers_clipPath_il5y28du5)"></path>
                                    <path d="M9.12015 2.15999C10.1529 1.38542 10.6693 0.998128 11.2364 0.848835C11.737 0.717055 12.2632 0.717055 12.7638 0.848834C13.331 0.998124 13.8474 1.38541 14.8801 2.15999L20.5868 6.43998C21.7448 7.30845 22.3238 7.74269 22.5308 8.27503C22.7122 8.74132 22.7122 9.25864 22.5308 9.72492C22.3238 10.2573 21.7448 10.6915 20.5868 11.56L14.8801 15.84C13.8474 16.6146 13.331 17.0019 12.7638 17.1512C12.2632 17.2829 11.737 17.2829 11.2364 17.1512C10.6693 17.0019 10.1529 16.6146 9.12014 15.84L3.41349 11.56C2.25552 10.6915 1.67654 10.2573 1.4695 9.72492C1.28816 9.25864 1.28816 8.74132 1.46951 8.27504C1.67655 7.74269 2.25553 7.30846 3.41349 6.43998L9.12015 2.15999Z" fill="url(#1752500502793-639649_layers_existing_1_b23jvecwf)" data-glass="blur"></path>
                                    <path d="M11.237 0.848781C11.7375 0.717108 12.2639 0.717038 12.7644 0.848781C13.3314 0.998119 13.8479 1.38584 14.8806 2.1603L20.5866 6.44056C21.7446 7.30903 22.3239 7.74317 22.5309 8.27552C22.7121 8.74164 22.7121 9.25861 22.5309 9.72473C22.3239 10.2571 21.7446 10.6912 20.5866 11.5597L14.8806 15.8399L14.194 16.3507C13.5865 16.7934 13.1897 17.0395 12.7644 17.1515L12.5749 17.1944C12.1953 17.2685 11.805 17.2685 11.4255 17.1944L11.237 17.1515C10.8117 17.0395 10.4147 16.7933 9.80733 16.3507L9.12081 15.8399L3.4138 11.5597C2.25593 10.6913 1.67649 10.2571 1.46947 9.72473C1.31093 9.31688 1.29097 8.86987 1.4099 8.45227L1.46947 8.27552C1.62471 7.87635 1.98934 7.53197 2.65013 7.01868L3.4138 6.44056L9.12081 2.1603C10.0243 1.48266 10.5323 1.10089 11.0251 0.916164L11.237 0.848781ZM12.5729 1.57436C12.1975 1.47557 11.8029 1.47554 11.4274 1.57436C11.0366 1.67728 10.6561 1.94538 9.57003 2.75991L3.86399 7.04017C3.27389 7.48274 2.87129 7.78513 2.58665 8.04114C2.30554 8.29399 2.20972 8.44147 2.16868 8.547C2.05534 8.83843 2.05534 9.16182 2.16868 9.45325C2.20973 9.55878 2.30557 9.70629 2.58665 9.95911C2.87129 10.2151 3.27391 10.5175 3.86399 10.9601L9.57003 15.2403C10.6561 16.0549 11.0366 16.323 11.4274 16.4259C11.8029 16.5247 12.1975 16.5247 12.5729 16.4259C12.9638 16.323 13.3443 16.0549 14.4304 15.2403L20.1374 10.9601C20.7272 10.5177 21.1292 10.215 21.4137 9.95911C21.6947 9.70637 21.7906 9.55877 21.8317 9.45325C21.945 9.16182 21.945 8.83843 21.8317 8.547C21.7906 8.44148 21.6948 8.2939 21.4137 8.04114C21.1292 7.7852 20.7272 7.48254 20.1374 7.04017L14.4304 2.75991C13.3443 1.94534 12.9638 1.67725 12.5729 1.57436Z" fill="url(#1752500502793-639649_layers_existing_2_j9tnotxte)"></path>
                                    <defs>
                                    <linearGradient id="1752500502793-639649_layers_existing_0_b0rh2cs4r" x1="12" y1="6.75" x2="12" y2="23.25" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#575757"></stop>
                                        <stop offset="1" stopColor="#151515"></stop>
                                    </linearGradient>
                                    <linearGradient id="1752500502793-639649_layers_existing_1_b23jvecwf" x1="12" y1=".75" x2="12" y2="17.25" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#E3E3E5" stopOpacity=".6"></stop>
                                        <stop offset="1" stopColor="#BBBBC0" stopOpacity=".6"></stop>
                                    </linearGradient>
                                    <linearGradient id="1752500502793-639649_layers_existing_2_j9tnotxte" x1="12" y1=".75" x2="12" y2="10.305" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#fff"></stop>
                                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <filter id="1752500502793-639649_layers_filter_kkalz5ssh" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
                                        <feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                                    </filter>
                                    <clipPath id="1752500502793-639649_layers_clipPath_il5y28du5">
                                        <path d="M9.12015 2.15999C10.1529 1.38542 10.6693 0.998128 11.2364 0.848835C11.737 0.717055 12.2632 0.717055 12.7638 0.848834C13.331 0.998124 13.8474 1.38541 14.8801 2.15999L20.5868 6.43998C21.7448 7.30845 22.3238 7.74269 22.5308 8.27503C22.7122 8.74132 22.7122 9.25864 22.5308 9.72492C22.3238 10.2573 21.7448 10.6915 20.5868 11.56L14.8801 15.84C13.8474 16.6146 13.331 17.0019 12.7638 17.1512C12.2632 17.2829 11.737 17.2829 11.2364 17.1512C10.6693 17.0019 10.1529 16.6146 9.12014 15.84L3.41349 11.56C2.25552 10.6915 1.67654 10.2573 1.4695 9.72492C1.28816 9.25864 1.28816 8.74132 1.46951 8.27504C1.67655 7.74269 2.25553 7.30846 3.41349 6.43998L9.12015 2.15999Z" fill="url(#1752500502793-639649_layers_existing_1_b23jvecwf)"></path>
                                    </clipPath>
                                    <mask id="1752500502793-639649_layers_mask_lh5t9hjjm">
                                        <rect width="100%" height="100%" fill="#404040"></rect>
                                        <path d="M9.12015 2.15999C10.1529 1.38542 10.6693 0.998128 11.2364 0.848835C11.737 0.717055 12.2632 0.717055 12.7638 0.848834C13.331 0.998124 13.8474 1.38541 14.8801 2.15999L20.5868 6.43998C21.7448 7.30845 22.3238 7.74269 22.5308 8.27503C22.7122 8.74132 22.7122 9.25864 22.5308 9.72492C22.3238 10.2573 21.7448 10.6915 20.5868 11.56L14.8801 15.84C13.8474 16.6146 13.331 17.0019 12.7638 17.1512C12.2632 17.2829 11.737 17.2829 11.2364 17.1512C10.6693 17.0019 10.1529 16.6146 9.12014 15.84L3.41349 11.56C2.25552 10.6915 1.67654 10.2573 1.4695 9.72492C1.28816 9.25864 1.28816 8.74132 1.46951 8.27504C1.67655 7.74269 2.25553 7.30846 3.41349 6.43998L9.12015 2.15999Z" fill="#000"></path>
                                    </mask>
                                    </defs>
                                </g>
                            </svg>
                        </span>

                    )
                }
                </a>
            }


            <div className="flex flex-1 flex-col mt-2 justify-start gap-1">                    
                <h2 className="font-medium font-sans leading-none">{name}</h2>
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
                <p className="text-sm font-medium    text-muted-foreground">{title}</p>
                {description && (
                    <ul className="ml-4 opacity-60 list-outside list-disc">
                        {description.map((desc, i) => (
                        <li key={i} className=" pr-8 text-sm dark:prose-invert">
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
                        <Button className="dark:text-white text-black shadow-sm h-7 text-xs hover:bg-zinc-200 dark:hover:bg-zinc-200  bg-transparent  dark:hover:bg-accent  border dark:border-zinc-800 border-zinc-200 " variant={"default"} size={"sm"}>
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