// src/components/common/Card.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Reusable Card component with multiple variants and styles
 * 
 * Props:
 * - variant: "default" | "elevated" | "outlined" | "gradient" | "hover"
 * - padding: "sm" | "md" | "lg" | "xl"
 * - hover: boolean (enable hover effects)
 * - clickable: boolean (make card clickable)
 * - to: string (React Router Link path)
 * - href: string (external link)
 * - onClick: function
 * - className: string
 * - children: ReactNode
 * - icon: React component (icon from lucide-react)
 * - title: string
 * - subtitle: string
 * - footer: ReactNode
 * - image: string (image URL)
 * - imageAlt: string
 */

const variants = {
  default: "bg-white border border-slate-200 shadow-sm",
  elevated: "bg-white border border-slate-200 shadow-lg",
  outlined: "bg-transparent border-2 border-slate-300",
  gradient: "bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 border border-indigo-100",
  hover: "bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-indigo-300",
};

const paddings = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
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
  footer,
  image,
  imageAlt = "",
  ...props
}) {
  const baseClasses = `
    rounded-2xl transition-all duration-300
    ${variants[variant] || variants.default}
    ${paddings[padding] || paddings.md}
    ${hover || clickable ? "cursor-pointer hover:-translate-y-1" : ""}
    ${className}
  `;

  const cardContent = (
    <>
      {/* Image */}
      {image && (
        <div className="relative w-full h-48 mb-4 -mx-6 -mt-6 first:rounded-t-2xl overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          {variant === "gradient" && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          )}
        </div>
      )}

      {/* Icon */}
      {Icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
      )}

      {/* Title */}
      {title && (
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm text-slate-500 mb-4">{subtitle}</p>
      )}

      {/* Content */}
      {children && (
        <div className={title || subtitle ? "mt-4" : ""}>{children}</div>
      )}

      {/* Footer */}
      {footer && (
        <div className="mt-6 pt-6 border-t border-slate-200">{footer}</div>
      )}

      {/* Clickable indicator */}
      {(clickable || to || href) && (
        <div className="flex items-center gap-2 mt-6 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-semibold">Learn more</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </>
  );

  const cardProps = {
    className: `${baseClasses} ${clickable || to || href ? "group" : ""}`,
    ...props,
  };

  // Render as React Router Link
  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Link to={to} {...cardProps}>
          {cardContent}
        </Link>
      </motion.div>
    );
  }

  // Render as external link
  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...cardProps}
        >
          {cardContent}
        </a>
      </motion.div>
    );
  }

  // Render as clickable div
  if (onClick || clickable) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
        {...cardProps}
      >
        {cardContent}
      </motion.div>
    );
  }

  // Render as regular div
  return (
    <div {...cardProps}>
      {cardContent}
    </div>
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

export function ClickableCard(props) {
  return <Card clickable hover {...props} />;
}

