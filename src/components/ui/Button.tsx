"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200",
          // Variants
          {
            "bg-[#0D9488] text-white hover:bg-[#0F766E] active:bg-[#115E59]":
              variant === "primary",
            "border border-gray-200 text-gray-900 hover:bg-gray-50 active:bg-gray-100":
              variant === "secondary",
            "text-gray-600 hover:text-gray-900 hover:bg-gray-50":
              variant === "ghost",
          },
          // Sizes
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-2.5 text-base": size === "md",
            "px-8 py-3 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
