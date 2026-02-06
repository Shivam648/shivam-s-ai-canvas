import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ThemeAwareImageProps {
  src: string;
  alt: string;
  className?: string;
  variant?: "hero" | "card" | "subtle";
}

/**
 * Theme-aware image component that automatically adjusts image appearance
 * based on the current theme (dark/light mode).
 * 
 * Uses CSS filters to adapt dark-mode-first illustrations for light mode:
 * - Inverts colors
 * - Adjusts hue to maintain brand colors
 * - Modifies contrast and brightness for optimal appearance
 */
const ThemeAwareImage = ({ 
  src, 
  alt, 
  className,
  variant = "card" 
}: ThemeAwareImageProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={cn("bg-muted animate-pulse rounded-2xl", className)} />
    );
  }

  const isLightMode = theme === "light";

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "transition-all duration-500 ease-out",
        isLightMode && "theme-image-light",
        // Apply different filter intensities based on variant
        isLightMode && variant === "hero" && "theme-image-hero",
        isLightMode && variant === "card" && "theme-image-card",
        isLightMode && variant === "subtle" && "theme-image-subtle",
        className
      )}
    />
  );
};

export default ThemeAwareImage;
