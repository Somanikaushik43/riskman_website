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
    if (separator === "slash") return <span className="text-slate-400 mx-2">/</span>;
    if (separator === "dot") return <span className="text-slate-400 mx-2">•</span>;
    return <ChevronRight size={14} className="text-slate-400 mx-1" />;
  };

  if (breadcrumbItems.length === 0) return null;

  return (
    <nav 
      className={`flex items-center flex-wrap gap-1 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center flex-wrap gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
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
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {index > 0 && <SeparatorIcon />}

              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  itemProp="item"
                  className="group flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  {isHome ? (
                    <>
                      <Home 
                        size={16} 
                        className="transition-transform group-hover:scale-110 group-hover:text-indigo-600" 
                      />
                      <span className="sr-only">Home</span>
                    </>
                  ) : (
                    <span itemProp="name">{item.label}</span>
                  )}
                </Link>
              ) : (
                <span
                  itemProp="name"
                  className={`flex items-center gap-1.5 ${
                    isLast 
                      ? "text-slate-900 font-semibold" 
                      : "text-slate-600"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {isHome && showHome ? (
                    <>
                      <Home size={16} />
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
      </ol>
    </nav>
  );
}

/**
 * Generate breadcrumbs from pathname
 * Example: /services/risk-advisory -> [{label: "Services", href: "/services"}, {label: "Risk Advisory"}]
 */
function generateBreadcrumbsFromPath(pathname) {
  if (pathname === "/") return [{ label: "Home" }];

  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = [{ label: "Home", href: "/" }];

  segments.forEach((segment, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");
    const label = segment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    if (index === segments.length - 1) {
      breadcrumbs.push({ label });
    } else {
      breadcrumbs.push({ label, href: path });
    }
  });

  return breadcrumbs;
}
