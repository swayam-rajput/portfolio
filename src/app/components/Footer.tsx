import Link from "next/link"
import { Socials } from "./Socials"

const Footer = () => {
    return (
        <div className="sticky flex justify-center items-center flex-col-reverse sm:flex-row gap-6 sm:justify-between px-4 top-0 py-6">
            <p className=" flex flex-col text-center text-xs text-muted-foreground">
                <span>© 2024</span> 
                {/* <a className="link" href="/">tedawf.com</a>  */}
            </p>
            <Link className="flex flex-row justify-center items-center py-4 hover:opacity-85 active:opacity-50 text-sm transition-all text-gray-400 dark:text-gray-300 font-mono font-semibold" href={'/contact'} >{'<'}
            contact me
            {'>'}</Link >
            <Socials/>        
        </div>
    )
}

export default Footer