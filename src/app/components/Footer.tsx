import Link from "next/link"
import { Socials } from "./Socials"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Footer = () => {
    
    return (
        
        <div className=" flex justify-center items-center flex-col-reverse sm:flex-row gap-6 sm:justify-between px-4 my-4 top-0 py-6">
            <span className=" flex flex-col font-outfit text-[13px] text-muted-foreground">
                <span>Designed by <p className="animate-underline text-foreground pb-0.5 font-medium">Swayam</p></span>
                <span>© {new Date().getFullYear()}</span> 
            </span>
            {/* <Image alt="" width={73} height={81} src={"/summer.png"}/> */}
            <Link className="py-4 opacity-85 hover:opacity-100 active:opacity-50 text-sm transition-all" href={'/contact'}>
                <Button variant={"link"} className="inline-flex  px-3 py-0.5 transition-all duration-200  ">
                    Contact Me
                </Button>
            </Link >
            <Socials/>
        </div>
    )
}

export default Footer