import * as React from "react";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { type VariantProps, cva } from "class-variance-authority";
import type { Transition } from "motion/react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

const defaultTransition: Transition = { type: "spring", stiffness: 400, damping: 30 };

const TabsContext = React.createContext<{
    layoutId?: string;
    variant?: "default" | "line" | "card";
    transition?: Transition;
}>({});

export interface TabsProps extends TabsPrimitive.Root.Props {
    layoutId?: string;
    transition?: Transition;
}

function Tabs({ className, orientation = "horizontal", layoutId: customLayoutId, transition, children, ...props }: TabsProps) {
    const defaultLayoutId = React.useId();
    const layoutId = customLayoutId ?? defaultLayoutId;

    return (
        <TabsContext.Provider value={{ layoutId, transition }}>
            <TabsPrimitive.Root
                data-slot="tabs"
                data-orientation={orientation}
                className={cn("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", className)}
                {...props}>
                {children}
            </TabsPrimitive.Root>
        </TabsContext.Provider>
    );
}

const tabsListVariants = cva(
    "rounded-xl p-[3px] group-data-horizontal/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col relative",
  {
        variants: {
            variant: {
                default: "bg-muted",
                line: "gap-1 bg-transparent",
                card: "bg-card",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

export interface TabsListProps extends TabsPrimitive.List.Props, VariantProps<typeof tabsListVariants> {}

function TabsList({ className, variant = "default", children, ...props }: TabsListProps) {
    const parentContext = React.useContext(TabsContext);

    return (
        <TabsContext.Provider value={{ ...parentContext, variant: variant ?? "default" }}>
            <TabsPrimitive.List
                data-slot="tabs-list"
                data-variant={variant}
                className={cn(tabsListVariants({ variant }), className)}
                {...props}>
                {children}
            </TabsPrimitive.List>
        </TabsContext.Provider>
    );
}

export interface TabsTriggerProps extends TabsPrimitive.Tab.Props {
    indicatorClassName?: string;
    transition?: Transition;
}

function TabsTrigger({ className, indicatorClassName, transition: triggerTransition, children, ...props }: TabsTriggerProps) {
    const parentContext = React.useContext(TabsContext);
    const layoutId = parentContext.layoutId;
    const variant = parentContext.variant ?? "default";
    const transition = triggerTransition ?? parentContext.transition ?? defaultTransition;

    return (
        <TabsPrimitive.Tab
            data-slot="tabs-trigger"
            {...props}
            render={(tabProps, state) => (
                <button
                    {...tabProps}
                    className={cn(
                        "focus-visible:border-ring/20 text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative z-10 inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors outline-none group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        state.active && "text-foreground dark:text-foreground shadow-sm font-medium",
                        className,
                    )}>
                    {state.active &&
                        (variant === "line" ? (
                            <motion.div
                                layoutId={`${layoutId}-indicator`}
                                className={cn(
                                    "bg-foreground absolute group-data-[orientation=horizontal]/tabs:inset-x-0 group-data-[orientation=horizontal]/tabs:-bottom-px group-data-[orientation=horizontal]/tabs:h-0.5 group-data-[orientation=vertical]/tabs:inset-y-0 group-data-[orientation=vertical]/tabs:-right-px group-data-[orientation=vertical]/tabs:w-0.5",
                                    indicatorClassName,
                                )}
                                transition={transition}
                            />
                        ) : (
                            <motion.div
                                layoutId={`${layoutId}-pill`}
                                className={cn(
                                    "absolute inset-0 -z-10 rounded-xl",
                                    variant === "card"
                                        ? "bg-card border border-border shadow-xs"
                                        : "bg-popover border border-input dark:bg-muted shadow-xs",
                                    indicatorClassName,
                                )}
                                transition={transition}
                            />
                        ))}
                    <span className="relative z-10 flex items-center justify-center gap-1.5">{children}</span>
                </button>
            )}
        />
    );
}

export interface TabsContentProps extends TabsPrimitive.Panel.Props {}

function TabsContent({ className, children, ...props }: TabsContentProps) {
    return (
        <TabsPrimitive.Panel
            data-slot="tabs-content"
            keepMounted
            {...props}
            render={(panelProps, state) => (
                <div {...panelProps} className={cn("flex-1 text-sm outline-none", className)}>
                    <AnimatePresence mode="wait" initial={false}>
                        {!state.hidden && (
                            <motion.div
                                key={props.value ?? "tab-panel"}
                                initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -4, filter: "blur(2px)" }}
                                transition={{ duration: 0.2, ease: "easeOut" }}>
                                {children}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        />
    );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
