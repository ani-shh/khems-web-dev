"use client";

import { useState } from "react";
import { MapPin, Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import { useTypewriter } from "@/hooks/useTypewriter";

const SEARCH_SUGGESTIONS = [
  "My sofa has stains from last week's party...",
  "We're moving out next Friday, need the apartment spotless",
  "Our office needs daily cleaning, about 2000 sq ft",
  "The water tank hasn't been cleaned in 6 months",
  "Kids spilled juice on the carpet again...",
  "Need marble floor polishing before Dashain",
  "Looking for a reliable cleaning team for our hotel",
  "Just renovated our house, there's dust everywhere",
];

interface HeroSearchBarProps {
  onSearch?: (query: string, location: string) => void;
  className?: string;
}

export function HeroSearchBar({ onSearch, className }: HeroSearchBarProps) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("Kathmandu");
  const [isFocused, setIsFocused] = useState(false);

  const animatedPlaceholder = useTypewriter({
    phrases: SEARCH_SUGGESTIONS,
    typingSpeed: 70,
    deletingSpeed: 35,
    pauseDuration: 2500,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query, location);
  };

  // Show animated placeholder only when input is empty and not focused
  const showAnimatedPlaceholder = !query && !isFocused;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className={cn(
          "w-full",
          "bg-white rounded-lg",
          "border border-gray-200 shadow-sm",
          "flex flex-col md:flex-row",
          "overflow-hidden",
          className
        )}
      >
        {/* Query Input */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder=""
            className={cn(
              "w-full px-4 py-4 md:py-5",
              "text-gray-900 text-base",
              "border-b md:border-b-0 md:border-r border-gray-200",
              "focus:outline-none"
            )}
          />
          {/* Animated Placeholder Overlay */}
          {showAnimatedPlaceholder && (
            <div className="absolute inset-0 flex items-center px-4 pointer-events-none">
              <span className="text-gray-400 text-base">
                {animatedPlaceholder}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          )}
        </div>

        {/* Location Input */}
        <div className="relative flex items-center">
          <MapPin size={18} className="absolute left-4 text-gray-400" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className={cn(
              "w-full md:w-40 lg:w-48 pl-10 pr-4 py-4 md:py-5",
              "text-gray-900 text-base placeholder:text-gray-400",
              "border-b md:border-b-0 border-gray-200",
              "focus:outline-none"
            )}
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className={cn(
            "bg-gradient-to-r from-[#0D9488] to-[#0F766E] text-white",
            "px-6 md:px-8 py-4 md:py-5",
            "font-semibold text-base",
            "hover:from-[#0F766E] hover:to-[#115E59] transition-all",
            "flex items-center justify-center gap-2"
          )}
        >
          <Search size={18} className="md:hidden" />
          <span>Search</span>
        </button>
      </form>

      {/* Powered by Zunkiree AI Badge */}
      <div className="flex items-center gap-1.5 mt-3 ml-1">
        <Sparkles size={14} className="text-violet-500" />
        <span className="text-sm text-gray-400">
          Powered by <span className="font-medium text-violet-600">Zunkiree AI</span>
        </span>
      </div>
    </div>
  );
}
