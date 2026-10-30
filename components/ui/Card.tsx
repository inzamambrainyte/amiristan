"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  StarFour,
  FileDoc,
  Chats,
  Image as ImageIcon,
  Timer,
  Laptop,
  ChartLineUp,
  Wallet,
  UserCircle,
  ArrowsOut,
  Lightning,
  PuzzlePiece,
} from "@phosphor-icons/react";
import { CardItem } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  StarFour,
  FileDoc,
  Chats,
  Image: ImageIcon,
  Timer,
  Laptop,
  ChartLineUp,
  Wallet,
  UserCircle,
  ArrowsOut,
  Lightning,
  PuzzlePiece,
};

export const Card: React.FC<CardItem> = ({
  title,
  description,
  iconName,
  badge,
}) => {
  const IconComponent = iconMap[iconName] || StarFour;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center justify-start text-center p-[30px] bg-[#ecedf1] rounded-[25px] shadow-neu-card border border-[#a6abbd]/20 h-full gap-6 relative overflow-hidden"
    >
      <motion.div
        initial={{ clipPath: "circle(0% at 0% 0%)" }}
        animate={{
          clipPath: isHovered
            ? "circle(150% at 0% 0%)"
            : "circle(0% at 0% 0%)",
        }}
        transition={{
          duration: isHovered ? 1.4 : 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="absolute inset-0 bg-gradient-to-br from-[#faae40] via-[#f38020] to-[#d96b0f] pointer-events-none z-0"
      />

      <div className="relative z-10 w-[100px] h-[100px] rounded-full flex items-center justify-center bg-[#ecedf1] shadow-neu-icon text-[#f38020] shrink-0">
        <IconComponent size={48} weight="regular" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <h3
            className={`text-xl font-semibold tracking-tight transition-colors duration-500 ${
              isHovered ? "text-white" : "text-[#1c1c1c]"
            }`}
          >
            {title}
          </h3>
          {badge && (
            <span
              className={`text-xs font-medium px-2.5 py-0.5 rounded-full border transition-all duration-500 ${
                isHovered
                  ? "bg-white/15 text-white border-white/40"
                  : "bg-[#f38020]/10 text-[#f38020] border-[#f38020]/25"
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        <p
          className={`text-sm sm:text-base leading-relaxed max-w-sm transition-colors duration-500 ${
            isHovered ? "text-white/95" : "text-[#4d4d4d]"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;

