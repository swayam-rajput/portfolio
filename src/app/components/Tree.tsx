'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import Image from 'next/image'

// Using the green palette from the GitHub calendar for consistency
const leafColors = ["#334932" , "#4B6239" , "#87A454" , "#ACBE62"]

const Leaf = ({ delay }: { delay: number }) => {
    // Randomize initial horizontal position and color once on mount
    const [config] = useState(() => {
        const duration = 4.5 + Math.random() * 4.5;

        return {
            xStart: Math.random() * 60 - 30, 
            color: leafColors[Math.floor(Math.random() * leafColors.length)],
            duration, // Varying fall speeds
            delay: -Math.random() * duration,
            repeatDelay: Math.random() * 3,
            xSway: [
                Math.random() * 20 - 10, 
                Math.random() * 40 - 20, 
                Math.random() * 20 - 10,
                Math.random() * 50 - 25
            ]
        }
    })

    return (
        <motion.div
            initial={{ y: 5, x: config.xStart, opacity: 0 }}
            animate={{ 
                y: 90, // Fall distance matching the tree height
                x: config.xSway.map(s => config.xStart + s),
                opacity: [0, 1, 1, 0.6, 0],
            }}
            transition={{ 
                duration: config.duration, 
                repeat: Infinity, 
                delay: delay,
                ease: "linear"
            }}
            style={{
                position: 'absolute',
                width: '3px',
                height: '3px',
                backgroundColor: config.color,
                left: '50%',
                top: '5%',
                boxShadow: '1px 1px 0px rgba(0,0,0,0.05)', // Subtle pixel depth
            }}
        />
    )
}

export const Tree = () => {
    const [leaves, setLeaves] = useState<number[]>([])

    useEffect(() => {
        setLeaves(Array.from({ length: 15 }, (_, i) => i))
    }, [])

    return (
        <div className="relative h-fit">
            <Image 
                alt="" 
                src={'/summer.png'} 
                width={73} 
                height={81} 
                style={{ imageRendering: "pixelated" }} 
            />
            <div className="absolute inset-0 pointer-events-none z-20">
                {leaves.map((i) => (
                    <Leaf key={i} delay={i * 0.8} />
                ))}
            </div>
        </div>
    )
}
