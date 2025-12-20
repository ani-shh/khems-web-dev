"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/cn";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "What needs cleaning? (e.g., 'Sofa in Baneshwor' or 'Office deep clean')",
  className,
}: SearchBarProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-2xl mx-auto",
        className
      )}
    >
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <Search size={20} className="text-gray-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full pl-14 pr-6 py-4 md:py-5",
          "bg-white rounded-full",
          "border-2 border-gray-200",
          "text-gray-900 text-base md:text-lg placeholder:text-gray-400",
          "focus:border-[#0D9488] focus:ring-4 focus:ring-[#0D9488]/10 focus:outline-none",
          "shadow-sm hover:shadow-md focus:shadow-md",
          "transition-all duration-200"
        )}
      />
    </div>
  );
}
