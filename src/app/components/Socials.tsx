import {MinimalTooltip} from "@/components/ui/minimal-tooltip";

export const Socials = () => {
    return (
        <section className="flex gap-4 group ">
            <MinimalTooltip text="GitHub" position="bottom">
            <a href="https://github.com/swayam-rajput" target="_blank" className="group-hover:opacity-40 hover:!opacity-100 transition text-muted-foreground opacity-60" rel="noopener noreferrer" title="GitHub"><span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" width="21" height="21" fill="none" strokeWidth="2" strokeLinecap="round" stroke="currentColor" strokeLinejoin="round" className=""><path fill="none"     d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"/></svg>
            </a>
            </MinimalTooltip>
            <MinimalTooltip text="Email" position="bottom">
            <a href="contact" target="_blank" className="group-hover:opacity-40 hover:!opacity-100 transition text-muted-foreground opacity-60" rel="noopener noreferrer" title="Work Email"><span className="sr-only">Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/svg:opacity-100 hover:stroke-red-600 transition-colors lucide size-5" aria-hidden="true">
                 <path d="M2 3.5H22V20.5H2V3.5Z" strokeLinejoin="round"></path>
                 <path d="M2 7L12 12L22 7"></path>
                </svg>
            </a>
            </MinimalTooltip>
            <MinimalTooltip text="Leetcode" position="bottom">
            
            <a href="https://leetcode.com/u/swayam_rajput" target="_blank" className="group-hover:opacity-40 hover:!opacity-100 transition text-muted-foreground opacity-60" rel="noopener noreferrer" title="Leetcode"><span className="sr-only">Leetcode</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 1 24 24" fill="none" className="stroke-current" role="img" stroke="currentColor" >
                    <path d="M14 3L4 13L12 21L16 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M14 3L12 5M4 13L12 5M12 5L16 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M11 13H20" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
            </a>
            </MinimalTooltip>
        </section>
    )
}

