// src/components/common/Card.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Reusable Card component with multiple variants and styles
 * Optimized for dark theme with modern design
 * 
 * Props:
 * - variant: "default" | "elevated" | "outlined" | "gradient" | "hover" | "glow"
 * - padding: "sm" | "md" | "lg" | "xl"
 * - hover: boolean (enable hover effects)
 * - clickable: boolean (make card clickable)
 * - to: string (React Router Link path)
 * - href: string (external link)
 * - onClick: function
 * - className: string
 * - children: ReactNode
 * - icon: React component (icon from lucide-react or react-icons)
 * - title: string
 * - subtitle: string
 * - description: string
 * - footer: ReactNode
 * - image: string (image URL)
 * - imageAlt: string
 * - badge: string (optional badge text)
 * - showArrow: boolean (show arrow indicator)
 */

const variants = {
  default: "bg-[var(--dark-navy-light)] backdrop-blur-sm border border-white/5",
  elevated: "bg-[var(--dark-navy-light)] backdrop-blur-sm border border-white/10 shadow-xl shadow-black/20",
  outlined: "bg-transparent border-2 border-white/20",
  gradient: "bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 backdrop-blur-sm border border-white/10",
  hover: "bg-[var(--dark-navy-light)] backdrop-blur-sm border border-white/5 hover:border-[var(--accent-blue)]/50 hover:shadow-xl hover:shadow-[var(--accent-blue)]/20",
  glow: "bg-[var(--dark-navy-light)] backdrop-blur-sm border border-white/5 hover:border-[var(--accent-blue)]/50 hover:shadow-2xl hover:shadow-[var(--accent-blue)]/30",
};

const paddings = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10 md:p-12",
};

export default function Card({
  variant = "default",
  padding = "md",
  hover = false,
  clickable = false,
  to,
  href,
  onClick,
  className = "",
  children,
  icon: Icon,
  title,
  subtitle,
  description,
  footer,
  image,
  imageAlt = "",
  badge,
  showArrow = true,
  ...props
}) {
  const baseClasses = `
    rounded-2xl transition-all duration-300 relative overflow-hidden group
    ${variants[variant] || variants.default}
    ${paddings[padding] || paddings.md}
    ${hover || clickable ? "cursor-pointer" : ""}
    ${className}
  `;

  const cardContent = (
    <>
      {/* Glow effect for hover variants */}
      {(variant === "glow" || variant === "hover") && (
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-400 pointer-events-none"
          initial={{ opacity: 0 }}
        />
      )}

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Image */}
        {image && (
          <div className="relative w-full h-48 mb-6 -mx-6 -mt-6 overflow-hidden first:rounded-t-2xl">
            <motion.img
              src={image}
              alt={imageAlt}
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-navy-light)] to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
            
            {/* Badge on image */}
            {badge && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[var(--accent-blue)]/90 backdrop-blur-sm text-white text-xs font-semibold">
                {badge}
              </div>
            )}
          </div>
        )}

        {/* Icon */}
        {Icon && (
          <motion.div
            className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] group-hover:shadow-xl transition-shadow"
            whileHover={{
              scale: 1.15,
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{ duration: 0.5 }}
          >
            {typeof Icon === 'function' ? (
              <Icon className="w-6 h-6 text-white" />
            ) : (
              <div className="text-2xl text-white">{Icon}</div>
            )}
          </motion.div>
        )}

        {/* Title */}
        {title && (
          <motion.h3
            className="mb-2 text-xl font-bold transition-colors text-white/90 group-hover:text-white"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm text-[var(--accent-blue-light)] font-semibold mb-3 uppercase tracking-wide">
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-[var(--text-gray)] leading-relaxed group-hover:text-white/90 transition-colors line-clamp-3">
            {description}
          </p>
        )}

        {/* Content */}
        {children && (
          <div className={title || subtitle || description ? "mt-4" : ""}>
            {children}
          </div>
        )}

        {/* Footer */}
        {footer && (
          <div className="pt-6 mt-6 transition-colors border-t border-white/10 group-hover:border-white/30">
            {footer}
          </div>
        )}

        {/* Clickable indicator with arrow */}
        {(clickable || to || href) && showArrow && (
          <motion.div
            className="flex items-center gap-2 mt-6 text-[var(--accent-blue-light)] font-semibold group-hover:text-white transition-colors"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm">Learn more</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={14} />
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );

  const cardProps = {
    className: baseClasses,
    ...props,
  };

  // Render as React Router Link
  if (to) {
    return (
      <Link to={to} {...cardProps}>
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          {cardContent}
        </motion.div>
      </Link>
    );
  }

  // Render as external link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...cardProps}
      >
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          {cardContent}
        </motion.div>
      </a>
    );
  }

  // Render as clickable div
  if (onClick || clickable) {
    return (
      <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.03, y: -5 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        {...cardProps}
      >
        {cardContent}
      </motion.div>
    );
  }

  // Render as regular div with hover effect
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -3 } : {}}
      transition={{ duration: 0.3 }}
      {...cardProps}
    >
      {cardContent}
    </motion.div>
  );
}

// Pre-configured card variants for convenience
export function ElevatedCard(props) {
  return <Card variant="elevated" {...props} />;
}

export function OutlinedCard(props) {
  return <Card variant="outlined" {...props} />;
}

export function GradientCard(props) {
  return <Card variant="gradient" {...props} />;
}

export function HoverCard(props) {
  return <Card variant="hover" hover {...props} />;
}

export function GlowCard(props) {
  return <Card variant="glow" hover {...props} />;
}

export function ClickableCard(props) {
  return <Card clickable hover {...props} />;
}

// Special card variants for specific use cases
export function ServiceCard(props) {
  return <Card variant="glow" hover showArrow {...props} />;
}

export function IndustryCard(props) {
  return <Card variant="glow" hover showArrow {...props} />;
}

export function FeatureCard(props) {
  return <Card variant="gradient" padding="lg" {...props} />;
}

export function TestimonialCard(props) {
  return <Card variant="elevated" padding="lg" showArrow={false} {...props} />;
}