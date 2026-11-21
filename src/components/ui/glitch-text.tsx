'use client'

import { useEffect, useState, type ElementType } from 'react'
import styles from './glitch-text.module.css'

type Props = {
    children: string
    as?: ElementType
    /** hover: on pointer hover. burst: random short glitches. loop: always glitching. */
    mode?: 'hover' | 'burst' | 'loop'
    /** burst mode: min and max ms between glitches */
    interval?: [number, number]
    className?: string
}

const BURST_MS = 380

export function GlitchText({
    children,
    as: Tag = 'span',
    mode = 'hover',
    interval = [2500, 6000],
    className = '',
}: Props) {
    const [burst, setBurst] = useState(false)
    const [min, max] = interval

    useEffect(() => {
        if (mode !== 'burst') return
        let timer: ReturnType<typeof setTimeout>

        const schedule = () => {
            timer = setTimeout(() => {
                setBurst(true)
                timer = setTimeout(() => {
                    setBurst(false)
                    schedule()
                }, BURST_MS)
            }, min + Math.random() * (max - min))
        }

        schedule()
        return () => clearTimeout(timer)
    }, [mode, min, max])

    const classes = [
        styles.glitch,
        mode === 'hover' ? styles.hover : '',
        mode === 'loop' || burst ? styles.on : '',
        className,
    ].join(' ')

    return (
        <Tag className={classes} data-text={children}>
            {children}
        </Tag>
    )
}
