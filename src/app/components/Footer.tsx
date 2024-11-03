import { Socials } from "./Socials"

const Footer = () => {
    return (
        <div className="sticky flex justify-center items-center flex-col-reverse sm:flex-row gap-6 sm:justify-between px-4 top-0 py-6">
            <p className="text-center text-xs text-muted-foreground">
                <span>© 2024</span> 
                {/* <a className="link" href="/">tedawf.com</a>  */}
            </p>
            <Socials/>        
        </div>
    )
}

export default Footer