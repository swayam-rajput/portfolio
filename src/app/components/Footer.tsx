import Link from "next/link"
import { Socials } from "./Socials"

const Footer = () => {
    return (
        
        <div className=" flex justify-center items-center flex-col-reverse sm:flex-row gap-6 sm:justify-between px-4 my-4 top-0 py-6">
            <p className=" flex flex-col text-center text-xs text-muted-foreground">
                <span>© {new Date().getFullYear()}</span> 
                {/* <a className="link" href="/">tedawf.com</a>  */}
            </p>
            <Link className="flex flex-row justify-center items-center py-4 opacity-85 hover:opacity-100 active:opacity-50 text-sm transition-all underline underline-offset-2  text-gray-500 dark:text-gray-400 font-mono font-semibold" href={'/contact'} >{'<'}
            contact me
            {'>'}</Link >
            <Socials/>        
        </div>
    )
}

export default Footer