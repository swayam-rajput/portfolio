'use client'
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export const GithubStats = ({username}:{username:string}) => {
    const { theme } = useTheme();
    const github_theme = {
        // light: ["#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373"],
        // dark:  ["#1f1f1f", "#2a2a2a", "#3a3a3a", "#525252", "#737373"],

        light: ["#eef7f1", "#cfe9d6", "#9fd5b2", "#5fbf86", "#2e8f5a"],
        dark:  ["#202020", "#163524", "#1f5c3d", "#2f8a5a", "#4fc27f"],
    };

    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) return null;

    return (
        <GitHubCalendar renderBlock={(block) => {
            return React.cloneElement(block, {
                strokeWidth: 0
            })
        }} blockMargin={1.5} blockSize={11.5} fontSize={12} className="text-muted-foreground custom-scrollbar pb-8" colorScheme={theme as "dark" | "light" | undefined} blockRadius={1} maxLevel={4} username={username} theme={github_theme} />
    );
}