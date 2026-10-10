'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'

const leafColors = ["#334932", "#4B6239", "#87A454", "#ACBE62"]

const makeLeafConfig = (originX: number, originY: number, windDirX = 0) => {
    const duration = 3.5 + Math.random() * 4
    // Wind direction biases the sway toward the cursor's direction
    const windBias = windDirX * (20 + Math.random() * 20)
    const sway1 = windBias * 0.3 + Math.random() * 16 - 8
    const sway2 = sway1 + windBias * 0.3 + Math.random() * 20 - 10
    const sway3 = sway2 + windBias * 0.2 + Math.random() * 16 - 8
    const sway4 = sway3 + windBias * 0.2 + Math.random() * 24 - 12

    return {
        color: leafColors[Math.floor(Math.random() * leafColors.length)],
        duration,
        size: 2,
        rotate: [0, Math.random() * 200 - 100, Math.random() * 400 - 200],
        xKeyframes: [originX, originX + sway1, originX + sway2, originX + sway3, originX + sway4],
        yEnd: originY + 80 + Math.random() * 30,
    }
}

const SpawnedLeaf = ({
    id, originX, originY, windDirX, onDone
}: {
    id: number
    originX: number
    originY: number
    windDirX: number
    onDone: (id: number) => void
}) => {
    const [config] = useState(() => makeLeafConfig(originX, originY, windDirX))

    return (
        <motion.div
            initial={{ x: originX, y: originY, opacity: 0, rotate: 0, scale: 1.4 }}
            animate={{
                x: config.xKeyframes,
                y: config.yEnd,
                opacity: [0, 1, 1, 0.2, 0],
                rotate: config.rotate,
                scale: 1,
            }}
            transition={{ duration: config.duration, ease: "easeIn" }}
            onAnimationComplete={() => onDone(id)}
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: `${config.size}px`,
                height: `${config.size}px`,
                backgroundColor: config.color,
                pointerEvents: 'none',
            }}
        />
    )
}

const AmbientLeaf = ({ delay }: { delay: number }) => {
    const [config, setConfig] = useState<ReturnType<typeof makeLeafConfig> | null>(null)
    useEffect(() => {
        setConfig(makeLeafConfig(0, 0, 0))
    }, [])

    if (!config) return null
    return (
        <motion.div
            initial={{ x: config.xKeyframes[0], y: 5, opacity: 0, rotate: 0 }}
            animate={{
                x: config.xKeyframes,
                y: 90,
                opacity: [0, 0.9, 0.9, 0.5, 0],
                rotate: config.rotate,
            }}
            transition={{
                duration: config.duration,
                repeat: Infinity,
                delay,
                ease: "easeIn",
            }}
            style={{
                position: 'absolute',
                left: '50%',
                top: '5%',
                width: `${config.size}px`,
                height: `${config.size}px`,
                backgroundColor: config.color,
                boxShadow: '1px 1px 0px rgba(0,0,0,0.08)',
                pointerEvents: 'none',
            }}
        />
    )
}

type SpawnedLeafData = { id: number; originX: number; originY: number; windDirX: number }

export const Tree = () => {
    const treeRef = useRef<HTMLDivElement>(null)
    const nextId = useRef(0)

    const [spawnedLeaves, setSpawnedLeaves] = useState<SpawnedLeafData[]>([])
    const [isPressed, setIsPressed] = useState(false)
    
    const ambientLeaves = Array.from({ length: 8 }, (_, i) => i)

    const getSpawnOrigin = useCallback(() => {
        const rect = treeRef.current?.getBoundingClientRect()
        if (!rect) return { x: 36, y: 20 }
        return {
            x: rect.width * (0.3 + Math.random() * 0.4),
            y: rect.height * (0.05 + Math.random() * 0.25),
        }
    }, [])

    const spawnLeaf = useCallback((windDirX = 0) => {
        const { x, y } = getSpawnOrigin()
        const id = nextId.current++
        setSpawnedLeaves(prev => [...prev, { id, originX: x, originY: y, windDirX }])
    }, [getSpawnOrigin])

    const removeLeaf = useCallback((id: number) => {
        setSpawnedLeaves(prev => prev.filter(l => l.id !== id))
    }, [])


    // Click: burst of wind-blown leaves + contract from top
    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        setIsPressed(true)
        const rect = treeRef.current?.getBoundingClientRect()
        if (!rect) return

        // Wind direction from where on the tree they clicked
        const clickRelX = (e.clientX - rect.left) / rect.width
        const windDir = clickRelX < 0.5 ? -1 : 1

        // Burst 3-5 leaves blown by the click's wind
        const count = 3 + Math.floor(Math.random() * 3)
        for (let i = 0; i < count; i++) {
            setTimeout(() => spawnLeaf(windDir), i * 40)
        }
    }, [spawnLeaf])

    const handlePointerUp = useCallback(() => {
        setIsPressed(false)
    }, [])



    return (
        <motion.div data-cuelume-press='count' data-cuelume-theme='mech' data-cuelume-emphasis='subtle'
            ref={treeRef}
            className="relative select-none"
            style={{
                width: 73,
                height: 81,
                cursor: 'pointer',
                transformOrigin: 'bottom center',
                perspective: 200,
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            animate={{
                // Contract from top on press: scaleY from top origin
                scaleY: isPressed ? 0.92 : 1,
                scaleX: isPressed ? 1.04 : 1,
            }}
            transition={{
                rotateY: { type: 'spring', stiffness: 200, damping: 20 },
                scaleY: isPressed
                    ? { duration: 0.08, ease: 'easeIn' }
                    : { type: 'spring', stiffness: 300, damping: 15 },
                scaleX: isPressed
                    ? { duration: 0.08, ease: 'easeIn' }
                    : { type: 'spring', stiffness: 300, damping: 15 },
            }}
        >
            <Image
                alt=""
                src="/tree.png"
                width={73}
                height={81}
                draggable={false}
                style={{
                    imageRendering: 'pixelated',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    display: 'block',
                }}
            />

            <div
                aria-hidden
                style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    overflow: 'visible',
                    zIndex: 20,
                }}
            >
                {ambientLeaves.map(i => (
                    <AmbientLeaf key={i} delay={i * 1.1} />
                ))}
                <AnimatePresence>
                    {spawnedLeaves.map(({ id, originX, originY, windDirX }) => (
                        <SpawnedLeaf
                            key={id}
                            id={id}
                            originX={originX}
                            originY={originY}
                            windDirX={windDirX}
                            onDone={removeLeaf}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}