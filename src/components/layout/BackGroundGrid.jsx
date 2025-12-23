import React from 'react';

const BackgroundGrid = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#05051e] h-full pointer-events-none">
            {/* Container for the grid items */}
            <div className="absolute inset-0 flex flex-wrap content-start justify-center">
                {/* Adjusted opacity and border color for visibility */}
                {Array.from({ length: 80 }).map((_, i) => (
                    <div
                        key={i}
                        className="w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 m-1 border border-white/10 rounded-[2.5rem]"
                    ></div>
                ))}
            </div>

            {/* Reduced gradient opacity so grid shows through more clearly - Fades to Black */}
            <div className="absolute inset-0 block bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>
    );
};

export default BackgroundGrid;
