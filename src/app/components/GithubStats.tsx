'use client'
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion, AnimatePresence } from "framer-motion";
import { Github3DCalendar } from "@/components/github-calendar";
import './tooltips.css'

export const GithubStats = ({ username }: { username: string }) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [show3D, setShow3D] = useState(false);

    const github_theme = {
        light: ["#f3f3f395", "#cfe9d6", "#9fd5b2", "#5fbf86", "#2e8f5a"],
        dark:  ["#202020",   "#163524", "#1f5c3d", "#2f8a5a", "#4fc27f"],
    };

    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return (
        <div>
            {/* 2D / 3D toggle */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
                <button
                    onClick={() => setShow3D((v) => !v)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "4px 12px",
                        borderRadius: 6,
                        border: "1px solid rgba(128,128,128,0.25)",
                        background: "transparent",
                        color: "inherit",
                        fontSize: 12,
                        cursor: "pointer",
                        opacity: 0.65,
                        transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.65")}
                    title={show3D ? "Switch to flat view" : "Switch to 3D view"}
                >
                    {show3D ? (
                        <>
                            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <rect x="1" y="1" width="6" height="6" rx="1" />
                                <rect x="9" y="1" width="6" height="6" rx="1" />
                                <rect x="1" y="9" width="6" height="6" rx="1" />
                                <rect x="9" y="9" width="6" height="6" rx="1" />
                            </svg>
                            2D
                        </>
                    ) : (
                        <>
                            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <path d="M8 1.5L14.5 5V11L8 14.5L1.5 11V5Z" />
                                <path d="M8 1.5V14.5" />
                                <path d="M1.5 5L14.5 5" />
                            </svg>
                            3D
                        </>
                    )}
                </button>
            </div>

            <AnimatePresence mode="wait">
                {show3D ? (
                    <motion.div
                        key="3d"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                    >
                        <Github3DCalendar username={username} height={210} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="2d"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <GitHubCalendar
                            renderBlock={(block) =>
                                React.cloneElement(block, {
                                    strokeWidth: 0,
                                    className: "hover:stroke-black dark:hover:stroke-[#fff] hover:stroke-1",
                                })
                            }
                            blockMargin={1.5}
                            blockSize={11.5}
                            fontSize={12}
                            className="text-muted-foreground custom-scrollbar pb-8"
                            colorScheme={theme as "dark" | "light" | undefined}
                            blockRadius={1}
                            maxLevel={4}
                            username={username}
                            theme={github_theme}
                            tooltips={{
                                activity: {
                                    text: (activity) => {
                                        const date = new Date(activity.date);
                                        const formatted = new Intl.DateTimeFormat("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            weekday: "short",
                                        }).format(date);
                                        return `[${activity.count}] ${formatted}`;
                                    },
                                    placement: "top",
                                    offset: 0,
                                    hoverRestMs: 50,
                                },
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
