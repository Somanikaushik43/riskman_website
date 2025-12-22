// src/components/layout/PageBanner.jsx
import React from "react";

export default function PageBanner({ 
  title, 
  subheading, 
  backgroundImage,
  overlay = true,
  overlayOpacity = "0.6"
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-cyan-600 text-white">
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/80 to-cyan-900/70"
          style={{ 
            opacity: backgroundImage ? overlayOpacity : 0.2 
          }}
        />
      )}
      
      {/* Pattern Overlay (default subtle pattern) */}
      {!backgroundImage && (
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} 
        />
      )}

      {/* Content */}
      <div className="relative w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-16 lg:py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
          {title.split(' ')[0]}
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          {title}
        </h1>
        {subheading && (
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/90">
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}