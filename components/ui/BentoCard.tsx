"use client";

import React from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    description?: string;
}

export default function BentoCard({
    children,
    className = "",
    title,
    description,
}: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bento-card p-6 flex flex-col ${className}`}
        >
            {title && (
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-secondary serif leading-tight">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-sm text-muted mt-1 font-medium">
                            {description}
                        </p>
                    )}
                </div>
            )}
            {children}
        </motion.div>
    );
}
