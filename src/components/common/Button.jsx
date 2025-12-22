// src/components/common/Button.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Loader2,
  ChevronRight,
  Download,
  ExternalLink,
} from "lucide-react";

/**
 * Reusable Button component with multiple variants and styles
 * 
 * Props:
 * - variant: "primary" | "secondary" | "outline" | "ghost" | "danger" | "gradient"
 * - size: "sm" | "md" | "lg"
 * - fullWidth: boolean
 * - loading: boolean
 * - disabled: boolean
 * - icon: React component (icon from lucide-react)
 * - iconPosition: "left" | "right"
 * - as: "button" | "link" | "a" (for external links)
 * - to: string (for React Router Link)
 * - href: string (for external links)
 * - onClick: function
 * - className: string
 * - children: ReactNode
 */

const variants = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl",
  secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300 shadow-md hover:shadow-lg",
  outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
  ghost: "text-slate-700 hover:bg-slate-100",
  danger: "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl",
  gradient: "bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = "right",
  as = "button",
  to,
  href,
  onClick,
  className = "",
  children,
  ...props
}) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-full
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  const iconSize = size === "sm" ? 16 : size === "lg" ? 20 : 18;

  const content = (
    <>
      {loading ? (
        <>
          <Loader2 size={iconSize} className="animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === "left" && (
            <Icon size={iconSize} className="shrink-0" />
          )}
          <span>{children}</span>
          {Icon && iconPosition === "right" && (
            <Icon size={iconSize} className="shrink-0" />
          )}
          {!Icon && variant === "primary" && iconPosition === "right" && (
            <ArrowRight size={iconSize} className="shrink-0 transition-transform group-hover:translate-x-1" />
          )}
        </>
      )}
    </>
  );

  const buttonProps = {
    className: baseClasses,
    disabled: disabled || loading,
    ...props,
  };

  // Render as React Router Link
  if (as === "link" && to) {
    return (
      <motion.div
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      >
        <Link to={to} className={`${baseClasses} group`} {...buttonProps}>
          {content}
        </Link>
      </motion.div>
    );
  }

  // Render as external link
  if (as === "a" && href) {
    return (
      <motion.div
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      >
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${baseClasses} group`}
          {...buttonProps}
        >
          {content}
          <ExternalLink size={iconSize - 2} className="opacity-70" />
        </a>
      </motion.div>
    );
  }

  // Render as button
  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      onClick={onClick}
      className={`${baseClasses} group`}
      {...buttonProps}
    >
      {content}
    </motion.button>
  );
}

// Pre-configured button variants for convenience
export function PrimaryButton(props) {
  return <Button variant="primary" {...props} />;
}

export function SecondaryButton(props) {
  return <Button variant="secondary" {...props} />;
}

export function OutlineButton(props) {
  return <Button variant="outline" {...props} />;
}

export function GhostButton(props) {
  return <Button variant="ghost" {...props} />;
}

export function DangerButton(props) {
  return <Button variant="danger" {...props} />;
}

export function GradientButton(props) {
  return <Button variant="gradient" {...props} />;
}

