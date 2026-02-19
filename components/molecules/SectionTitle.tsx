"use client";

/**
 * SectionTitle molecule
 * Consistent heading pattern for all page sections
 * Includes subtitle, alignment options, and scroll reveal animation
 */

import { motion } from "framer-motion";
import { scrollReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    label?: string;
    align?: "left" | "center" | "right";
    className?: string;
    rightAction?: React.ReactNode;
}

export default function SectionTitle({
    title,
    subtitle,
    label,
    align = "center",
    className,
    rightAction,
}: SectionTitleProps) {
    return (
        <motion.div
            {...scrollReveal}
            className={cn(
                "mb-12 flex flex-col gap-4",
                align === "center" && "items-center text-center",
                align === "left" && "items-start text-left",
                align === "right" && "items-end text-right",
                // Mobile layout for rightAction:
                rightAction ? "md:flex-row md:items-end md:justify-between" : "",
                className
            )}
        >
            <div className={cn("space-y-3", rightAction && "flex-1")}>
                {label && (
                    <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider font-body">
                        {label}
                    </span>
                )}
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-muted font-body max-w-2xl text-base md:text-lg">
                        {subtitle}
                    </p>
                )}
            </div>
            {rightAction && <div className="shrink-0">{rightAction}</div>}
        </motion.div>
    );
}

export type { SectionTitleProps };
