"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface VideoServiceCardProps {
  title: string;
  href: string;
  videoSrc?: string;
  posterImage?: string;
  index?: number;
}

export function VideoServiceCard({
  title,
  href,
  videoSrc,
  posterImage,
  index = 0,
}: VideoServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const hasVideo = videoSrc && !videoError;

  // Intersection Observer - detect when card is near viewport
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(card); // Only need to detect once
          }
        });
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-play video when it's ready and in view
  useEffect(() => {
    if (isVideoReady && isInView && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isVideoReady, isInView]);

  // Handle video ready to play
  const handleCanPlay = () => {
    setIsVideoReady(true);
  };

  // Handle video error
  const handleVideoError = () => {
    setVideoError(true);
  };

  // Hover handlers - just for visual effects now, video already playing
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={href}
        className="group block relative overflow-hidden rounded-3xl aspect-[3/4]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Poster Image - Always visible initially, fades when video ready */}
        {posterImage && (
          <Image
            src={posterImage}
            alt={title}
            fill
            className={cn(
              "absolute inset-0 w-full h-full object-cover",
              "transition-all duration-700",
              isHovered && "scale-110",
              // Fade out poster when video is ready and playing
              isVideoReady && hasVideo ? "opacity-0" : "opacity-100"
            )}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={index < 2} // Prioritize first 2 images
          />
        )}

        {/* Video - Only load when in view, fades in when ready */}
        {hasVideo && isInView && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={handleCanPlay}
            onError={handleVideoError}
            className={cn(
              "absolute inset-0 w-full h-full object-cover",
              "transition-all duration-700",
              isHovered && "scale-110",
              // Fade in video when ready
              isVideoReady ? "opacity-100" : "opacity-0"
            )}
          />
        )}

        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-white font-semibold text-lg mb-1">
            {title}
          </h3>
          <div
            className={cn(
              "flex items-center gap-1 text-white/80 text-sm",
              "transition-all duration-300",
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            )}
          >
            <span>View service</span>
            <ChevronRight
              size={16}
              className={cn(
                "transition-transform duration-300",
                isHovered && "translate-x-1"
              )}
            />
          </div>
        </div>

        {/* Hover border effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-3xl transition-all duration-300",
            "ring-0 ring-white/50",
            isHovered && "ring-4"
          )}
        />
      </Link>
    </motion.div>
  );
}
