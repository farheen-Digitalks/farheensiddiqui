"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  percent: number;
};

export default function SkillCircle({ title, percent }: Props) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (percent / 100) * circumference;

  return (
    <div
      className="
        w-[210px] h-[250px]
        rounded-3xl
        bg-[rgb(var(--card))]
        border border-[rgb(var(--border))]
        flex flex-col items-center justify-center
        shadow-sm
      "
    >
      <h4 className="mb-4 font-medium text-sm text-[rgb(var(--text))]">
        {title}
      </h4>

      <div className="relative">
        <svg width="180" height="180" className="rotate-[-90deg]">
          {/* Background ring */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="10"
            fill="none"
          />

          {/* Animated progress ring */}
          <motion.circle
            cx="90"
            cy="90"
            r={radius}
            stroke={`rgb(var(--accent))`}
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference} // start = empty
            strokeLinecap="round"
            animate={{ strokeDashoffset: targetOffset }} // animate to value
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>

        {/* Percentage inside circle (normal orientation) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xl font-semibold text-[rgb(var(--text))]">
            {percent}%
          </p>
        </div>
      </div>
    </div>
  );
}
