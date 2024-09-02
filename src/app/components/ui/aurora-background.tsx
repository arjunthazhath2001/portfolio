"use client";
import { cn } from "@/app/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col min-h-screen items-center justify-start text-slate-950 transition-bg z-10", // Changed z-index to ensure it is above the grid
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden z-20 opacity-50">
          <div
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(110deg,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-300)_10%,var(--indigo-500)_15%,var(--blue-400)_1%,var(--violet-300)_25%,var(--blue-400)_30%)]
            [background-image:var(--aurora)]
            dark:[background-image:var(--aurora)]
            [background-size:200%,_200%]
            [background-position:30%_50%,30%_50%]
            filter blur-[20px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--aurora)] 
            after:dark:[background-image:var(--aurora)]
            after:[background-size:200%,_200%] 
            after:[background-attachment:fixed]  
            after:mix-blend-difference
            pointer-events-none
            absolute inset-0 will-change-transform
            `
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
