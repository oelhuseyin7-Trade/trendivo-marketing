import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, prefix = "", suffix = "", duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [motionValue, inView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      // Format with commas if large number, or just rounded if small
      const formatted = latest >= 1000 
        ? Math.floor(latest).toLocaleString('en-US') 
        : Math.floor(latest).toString();
        
      setDisplayValue(formatted);
    });
  }, [springValue]);

  return (
    <span ref={ref} className="font-display">
      {prefix}{displayValue}{suffix}
    </span>
  );
}
