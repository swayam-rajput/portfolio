import {MinimalTooltip} from "@/components/ui/minimal-tooltip";

export const Socials = () => {
    return (
        <section className="flex gap-4 group ">
            
            <MinimalTooltip text="GitHub" position="bottom">
            <a href="https://github.com/swayam-rajput" target="_blank" className="group-hover:opacity-40 hover:!opacity-100 transition text-muted-foreground opacity-60" rel="noopener noreferrer" title="GitHub"><span className="sr-only">GitHub</span>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" width="21" height="21" fill="none" strokeWidth="2" strokeLinecap="round" stroke="currentColor" strokeLinejoin="round" className=""><path fill="none"     d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"/></svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="21" height="21" viewBox="0 0 24 24"><path d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"></path></svg>
            </a>
            </MinimalTooltip>
            <MinimalTooltip text="Email" position="bottom">
            <a href="contact" target="_blank" className="group-hover:opacity-40 hover:!opacity-100 transition text-muted-foreground opacity-60" rel="noopener noreferrer" title="Work Email"><span className="sr-only">Email</span>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/svg:opacity-100 hover:stroke-red-600 transition-colors lucide size-5" aria-hidden="true"> <path d="M2 3.5H22V20.5H2V3.5Z" strokeLinejoin="round"></path><path d="M2 7L12 12L22 7"></path></svg>*/}
                <svg className="group-hover/svg:opacity-100 hover:text-red-600 transition-colors " xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 2 24 24"><path d="M20 20H4v-2h16v2ZM4 18H2V6h2v12Zm18 0h-2V6h2v12Zm-8-4h-4v-2h4v2Zm-4-2H8v-2h2v2Zm6 0h-2v-2h2v2Zm-8-2H6V8h2v2Zm10 0h-2V8h2v2Zm2-4H4V4h16v2Z"/></svg>
            </a>
            </MinimalTooltip>
            
            <MinimalTooltip text="Cal" position="bottom">
            <a href="https://cal.com/samrajput" target="_blank" className="group-hover:opacity-40 hover:!opacity-100 transition text-muted-foreground opacity-60" rel="noopener noreferrer" title="Cal"><span className="sr-only">Cal</span>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" strokeWidth={3} stroke="currentColor"   viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path></svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={20} height={20} viewBox="0 0 24 24"><path d="M19 22H5v-2h14v2ZM5 8h14V6h2v14h-2V10H5v10H3V6h2v2Zm4 10H7v-2h2v2Zm4 0h-2v-2h2v2Zm-4-4H7v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 4h6V2h2v2h2v2H5V4h2V2h2v2Z"/></svg>
            </a>
            </MinimalTooltip>
            


        </section>
    )
}

