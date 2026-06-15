import Link from "next/link"
import { Socials } from "./Socials"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Footer = () => {
    
    return (
        
        <div className=" flex justify-center items-center flex-col-reverse sm:flex-row gap-6 sm:justify-between px-4 my-4 top-0 py-6">
            <span className=" flex flex-col md:items-start items-center font-outfit text-[13px] text-muted-foreground ">
                {/* <span>© {new Date().getFullYear()}</span>  */}
                <p>Designed by</p>
                <span className="group relative flex h-5 flex-col overflow-hidden">
                    <span className="transition-transform duration-300 group-hover:-translate-y-full">
                        <p className="text-foreground font-medium">Swayam</p>
                    
                    </span>
                    <span className="transition-transform duration-300 group-hover:-translate-y-full">
                        <p className="text-foreground font-medium">Swayam</p>
                    
                    </span>
                </span>
            </span>
            {/* <Image alt="" width={73} height={81} src={"/summer.png"}/> */}
            <Link className="py-4 opacity-85 hover:opacity-100 active:opacity-50 text-sm transition-all" href={'/contact'}>
                <Button variant={"ghost"} className="inline-flex cursor-crosshair group px-3 py-0.5 transition-all duration-200  ">
                    <span className="relative flex h-5 flex-col overflow-hidden">
                        <span className="transition-transform duration-300 group-hover:-translate-y-full">
                        Contact Me
                        </span>
                        <span className="transition-transform duration-300 group-hover:-translate-y-full">
                        Contact Me
                        </span>
                    </span>
                </Button>
            </Link >
            <Socials/>
        </div>
    )
}

export default Footer