// src/components/common/BreadCrumbs.jsx

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

/**
 * Enhanced BreadCrumbs component with:
 * - Home icon for first item
 * - Smooth animations
 * - Better styling and hover effects
 * - Responsive design
 * - Accessibility improvements
 * - Proper dark theme support
 */

export function BreadCrumbs({ 
  items = [], 
  showHome = true,
  className = "",
  separator = "chevron" // "chevron" | "slash" | "dot"
}) {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from location if items not provided
  const breadcrumbItems = items.length > 0 
    ? items 
    : generateBreadcrumbsFromPath(location.pathname);

  const SeparatorIcon = () => {
    if (separator === "slash") {
      return <span className="mx-2 text-sm text-white/30">/</span>;
    }
    if (separator === "dot") {
      return <span className="mx-2 text-white/30">•</span>;
    }
    return <ChevronRight size={14} className="flex-shrink-0 mx-1 text-white/30" />;
  };

  if (breadcrumbItems.length === 0) return null;

  return (
    <nav 
      className={`mb-8 ${className}`}
      aria-label="Breadcrumb"
    >
      <motion.ol 
        className="flex flex-wrap items-center gap-1"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const isHome = index === 0 && showHome;

          return (
            <motion.li
              key={index}
              className="flex items-center gap-1"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
            >
              {index > 0 && <SeparatorIcon />}

              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  itemProp="item"
                  className="group flex items-center gap-1.5 text-[var(--text-gray)] hover:text-[var(--accent-blue-light)] transition-all duration-200 text-sm"
                >
                  {isHome ? (
                    <>
                      <Home 
                        size={15} 
                        className="transition-all duration-200 group-hover:scale-110 group-hover:text-[var(--accent-blue-light)]" 
                      />
                      <span className="sr-only">Home</span>
                    </>
                  ) : (
                    <span itemProp="name" className="hover:underline underline-offset-2">
                      {item.label}
                    </span>
                  )}
                </Link>
              ) : (
                <span
                  itemProp="name"
                  className={`flex items-center gap-1.5 text-sm ${
                    isLast 
                      ? "text-white font-semibold" 
                      : "text-[var(--text-gray)]"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {isHome && showHome ? (
                    <>
                      <Home size={15} className="text-[var(--accent-blue-light)]" />
                      <span className="sr-only">Home</span>
                    </>
                  ) : (
                    item.label
                  )}
                </span>
              )}
              <meta itemProp="position" content={index + 1} />
            </motion.li>
          );
        })}
      </motion.ol>
    </nav>
  );
}

/**
 * Generate breadcrumbs from pathname
 * Example: /services/risk-advisory -> [{label: "Home", href: "/"}, {label: "Services", href: "/services"}, {label: "Risk Advisory"}]
 */
function generateBreadcrumbsFromPath(pathname) {
  if (pathname === "/") return [{ label: "Home" }];

  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = [{ label: "Home", href: "/" }];

  segments.forEach((segment, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");
    
    // Format label: risk-advisory -> Risk Advisory
    const label = segment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Last segment doesn't get a link
    if (index === segments.length - 1) {
      breadcrumbs.push({ label });
    } else {
      breadcrumbs.push({ label, href: path });
    }
  });

  return breadcrumbs;
}

/**
 * Alternative compact breadcrumb variant for tight spaces
 */
export function BreadCrumbsCompact({ items = [], className = "" }) {
  if (items.length === 0) return null;

  return (
    <nav className={`text-xs ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-[var(--text-gray)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && <span className="text-white/20">/</span>}
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="hover:text-[var(--accent-blue-light)] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-white font-medium" : ""}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}