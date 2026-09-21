'use client'

import { ReactNode } from "react";

type Props = {
    title: string;
    child: ReactNode;
    className?: string;
    grayscale?: number;
};

export const TechStackItem = ({
    title,
    child,
    className = '',
}: Props) => {
    return (
        <div
            className="
                group
                flex
                h-12
                w-fit
                shrink-0
                items-center
                mt-1
            "
        >
            {/* Icon */}
            <div
                className={`
                    flex
                    size-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    ${className}
                `}
            >
                {child}
            </div>

            {/* Text */}
            <div
                className="
                    grid
                    grid-cols-[0fr]
                    transition-[grid-template-columns]
                    duration-300
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:grid-cols-[1fr]
                "
            >
                <div className="overflow-hidden">
                    <span
                        className="
                            text-xs
                            block
                            whitespace-nowrap
                            pl-1
                            pr-2
                        "
                    >
                        {title}
                    </span>
                </div>
            </div>
        </div>
    );
};