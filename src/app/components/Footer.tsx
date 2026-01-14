import Link from "next/link"
import { Socials } from "./Socials"
import { Button } from "@/components/ui/button"

const Footer = () => {
    
    return (
        
        <div className=" flex justify-center items-center flex-col-reverse sm:flex-row gap-6 sm:justify-between px-4 my-4 top-0 py-6">
            <p className=" flex flex-col text-center text-xs text-muted-foreground">
                <span>© {new Date().getFullYear()}</span> 
                {/* <a className="link" href="/">tedawf.com</a>  */}
            </p>
            <Link className="flex flex-row justify-center items-center py-4 opacity-85 hover:opacity-100 active:opacity-50 text-sm transition-all   text-gray-500 dark:text-gray-400 font-semibold" href={'/contact'}>
            <Button variant={"link"} className="inline-flex  px-3 py-0.5 transition-all duration-200 shadow-white/20 shadow-xl hover:shadow-none ">
            {/* inline-flex items-center text-xs max-w-full gap-2  font-medium cursor-pointer border border-border-tertiary border-dashed rounded-none group bg-bg-base font-mono text-white shadow-white/5 shadow-xl transition-all duration-200 hover:shadow-none */}
                Contact Me
            </Button>
            {/* contact me */}</Link >
            <Socials/>        
        </div>
    )
}

export default Footer