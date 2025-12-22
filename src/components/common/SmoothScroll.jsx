import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    // 1. Register GSAP plugin
    gsap.registerPlugin(ScrollTrigger);

    // 2. Create Lenis instance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // 3. Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 4. Add Lenis to GSAP ticker
    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // 5. Disable GSAP lag smoothing
    gsap.ticker.lagSmoothing(0);

    // 6. Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
