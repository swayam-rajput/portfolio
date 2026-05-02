'use client'
import { useTheme } from "next-themes";
import React, { cloneElement, useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { hover, motion } from "framer-motion";
// import 'react-github-calendar/tooltips.css'
import './tooltips.css'
export const GithubStats = ({username}:{username:string}) => {
    const { theme } = useTheme();
    const github_theme = {
        // light: ["#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373"],
        // dark:  ["#1f1f1f", "#2a2a2a", "#3a3a3a", "#525252", "#737373"],

        light: ["#f3f3f395", "#cfe9d6", "#9fd5b2", "#5fbf86", "#2e8f5a"],
        dark:  ["#202020", "#163524", "#1f5c3d", "#2f8a5a", "#4fc27f"],
    };

    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    const [hovered, setHovered] = useState<{
        count: number
        date: string
        x: number
        y: number
    } | null>(null)
    const hideTimeout = useRef<NodeJS.Timeout | null>(null)
    if (!mounted) return null;
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseLeave={() => setHovered(null)}
            transition={{ duration: .4, ease: 'linear' }}
        >
            <GitHubCalendar renderBlock={(block,activity) => {
                    return React.cloneElement(block, {
                        strokeWidth: 0,
                        className: "cursor-pointer hover:opacity-50 hover:stroke-black hover:stroke-2",
                        onMouseOver: (e) => {
                            if (hideTimeout.current) clearTimeout(hideTimeout.current)
                            setHovered({count:activity.count, date:activity.date, x:e.clientX, y:e.clientY})
                        },
                        onMouseLeave: () => {
                            hideTimeout.current = setTimeout(() => {
                                setHovered(null)
                            }, 10) 
                        }
                    })
                }} blockMargin={1.5} blockSize={11.5} fontSize={12} className="text-muted-foreground custom-scrollbar  " colorScheme={theme as "dark" | "light" | undefined} blockRadius={1} maxLevel={4} username={username} theme={github_theme} 
            />
            
            {hovered && (
                <div
                    className="
                        fixed z-50 md:block hidden
                        px-2 py-1 text-[11px] font-medium
                        rounded-md min-w-24 text-center
                        bg-zinc-200 dark:bg-zinc-700
                        pointer-events-none
                        shadow-md
                    "
                    style={{
                        left: hovered.x,
                        top: hovered.y - 30,
                        transform: 'translateX(-50%)',
                        maxWidth: 'calc(100vw - 80px)',
                    }}
                    >
                    {(() => {
                    const date = new Date(hovered.date)
                    const formatted = new Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: 'numeric',
                        weekday: 'short',
                    }).format(date)

                    return `${hovered.count == 0 ? 'No' : hovered.count } ${hovered.count > 1 ? 'contributions' : 'contribution'} on ${formatted}`
                    })()}
                </div>
                )}
        </motion.div>
    );
}
