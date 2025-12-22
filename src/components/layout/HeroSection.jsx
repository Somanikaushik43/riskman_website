import React, { useEffect, useState } from 'react';
import BackgroundGrid from './BackgroundGrid';

// Reusable Counter Component
const StatCounter = ({ end, suffix = "", label, subLabel }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [end]);

    return (
        <div className="flex flex-col pl-4">
            <div className="text-5xl lg:text-6xl font-medium text-white mb-2 font-sans tracking-tight">
                {count}{suffix}
            </div>
            <div className="text-lg text-white font-medium leading-tight">{label}</div>
            <div className="text-lg text-white font-medium leading-tight">{subLabel}</div>
        </div>
    );
};

const HeroSection = () => {
    return (
        <section className="relative pt-32 md:pt-36 pb-20 md:pb-40 px-6 sm:px-8 md:px-10 lg:px-12 max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-8 items-start min-h-screen bg-[#05051e]">

          <BackgroundGrid/>

            {/* Left Column: Text, Search, Stats - Increased z-index to 20 to stack above right column */}
            <div className="lg:col-span-7 flex flex-col pt-10 relative z-20 w-full pl-4 lg:pl-10">

                {/* Top Left Floating Icon (Calculator) - Adjusted closer to avoid overflow */}
                <div className="absolute left-0 -top-10 items-center justify-center w-16 h-16 bg-[#1a1a2e] rounded-2xl border border-white/10 shadow-2xl flex animate-bounce duration-[3000ms]">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                </div>

                {/* Floating Icon (Pie Chart) - To the right of the heading text */}
                <div className="absolute left-[350px] lg:left-[450px] -top-8  items-center justify-center w-16 h-16 bg-[#1a1a2e] rounded-2xl border border-white/10 shadow-2xl flex animate-pulse duration-[4000ms] z-20">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                </div>

                <h1 className="text-6xl lg:text-[6.5rem] font-bold text-white leading-[1.05] mb-12 tracking-tight">
                    Clarity, Risk <br />
                    <span className="text-white">Value</span> <br />
                    <span className="text-white">Assurance</span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-16 font-light">
                    Empowering your business with precise audits, trusted insights, and assurance services that drive transparency and growth.
                </p>

                {/* Search Section Wrapper */}
                <div className="relative w-full max-w-3xl mb-12">
                    {/* Search Bar */}
                    <div className="bg-white rounded-full p-2 flex items-center shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full relative z-20 h-[4.5rem]">
                        <input
                            type="text"
                            placeholder="Internal Audit Services"
                            className="flex-1 bg-transparent border-none outline-none px-6 text-gray-800 placeholder-gray-500 text-lg font-medium h-full min-w-0"
                        />
                        <button className="bg-[#5a5afc] hover:bg-[#4a4af0] text-white px-8 py-3 rounded-full font-semibold transition-colors text-lg h-full whitespace-nowrap shadow-md">
                            Search Service
                        </button>
                    </div>
                </div>

                {/* Tags Row with Floating Icons - Flexbox layout for proper alignment */}
                <div className="relative flex flex-wrap items-center gap-4 mb-24 z-30">

                    {/* "S" Icon - Static Flex Item */}
                    <div className="flex items-center justify-center w-14 h-14 bg-[#0a0a2e] rounded-2xl border border-white/10 shadow-lg shrink-0">
                        <span className="text-2xl font-bold text-white">S</span>
                    </div>

                    {["Risk Assurance", "Systems Audit", "ESG Assurance"].map((tag) => (
                        <div key={tag} className="flex items-center gap-2 px-6 py-3 bg-[#1a1a3a] border border-white/10 rounded-full text-gray-200 text-sm cursor-pointer hover:bg-[#252545] transition-colors shadow-lg whitespace-nowrap">
                            <span className="text-xs text-gray-400">✕</span> {tag}
                        </div>
                    ))}

                    {/* "Coins" Icon - Static Flex Item */}
                    {/* <div className="flex items-center justify-center w-14 h-14 bg-[#0a0a2e] rounded-2xl border border-white/10 shadow-lg hidden xl:flex shrink-0">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div> */}
                </div>

                {/* Stats Numbers aligned with grid columns */}
                <div className="grid grid-cols-3 gap-12 mt-auto pb-10">
                    <StatCounter end={15} suffix="+" label="Audit" subLabel="Excellence" />
                    <StatCounter end={98} suffix="%" label="Client" subLabel="Loyalty" />
                    <StatCounter end={25} suffix="+" label="Certified" subLabel="Auditors" />
                </div>
            </div>

            {/* Right Column: Image and Cards - FROM SECOND DOCUMENT */}
            <div className="lg:col-span-5 flex flex-col items-center relative">
          
                {/* Floating Icon: Top Left of Image (PieChart) */}
                {/* <div className="absolute -left-20 -top-1 p-4 bg-white/5 border border-white/10 rounded-2xl text-blue-400 backdrop-blur-sm hidden xl:block animate-pulse duration-[4000ms]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                </div> */}

                {/* Floating Icon: Bottom Left of Image (Grid) */}
                <div className="absolute -left-20 bottom-40 p-5 bg-white/5 border border-white/10 rounded-2xl text-slate-400 backdrop-blur-sm hidden xl:block animate-bounce duration-[3000ms]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                    </svg>
                </div>

                {/* <div className="absolute right-[350px] lg:right-[450px] -bottom-1 items-center justify-center w-16 h-16 bg-[#1a1a2e] rounded-2xl border border-white/10 shadow-2xl flex animate-pulse duration-[4000ms] z-20">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                </div> */}


                {/* Main Image */}
                <div className="relative w-full mb-5">
                    <div className="rounded-[1rem] overflow-hidden p-2">
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                            alt="Professional Team" 
                            className="w-full h-auto rounded-[1rem] object-cover aspect-[4/5]" 
                        />
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-[#4F46E5] p-8 rounded-[1rem] text-white flex flex-col justify-between min-h-[250px] shadow-2xl hover:-translate-y-2 transition-transform duration-500">
                        <div className="p-3 bg-white/20 rounded-xl w-fit">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-xl leading-tight">15+ Years Service</p>
                            <p className="text-xs opacity-70">We’ve built a reputation for precision, trust, and integrity—supporting organizations across industries for over a decade.</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[1rem] text-slate-900 flex flex-col justify-between min-h-[250px] shadow-2xl hover:-translate-y-2 transition-transform duration-500">
                        <div className="p-3 bg-slate-100 rounded-xl w-fit text-blue-600">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-xl leading-tight">Trusted Insight</p>
                            <p className="text-xs text-slate-500">We’ve built a reputation for precision, trust, and integrity—supporting organizations across industries for over a decade.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;




