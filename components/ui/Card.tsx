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

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group flex flex-col items-center justify-start text-center p-[30px] bg-[#ecedf1] rounded-[25px] transition-all duration-300 shadow-neu-card hover:shadow-[0_16px_36px_rgba(243,128,32,0.3)] hover:border-[#f38020]/40 border border-white/50 h-full gap-6 relative overflow-hidden"
    >
      <motion.div
        variants={{
          rest: {
            clipPath: "circle(0% at 0% 0%)",
            opacity: 0,
          },
          hover: {
            clipPath: "circle(150% at 0% 0%)",
            opacity: 1,
            transition: {
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        }}
        className="absolute inset-0 bg-gradient-to-br from-[#faae40] via-[#f38020] to-[#d96b0f] pointer-events-none z-0"
      />

      <div className="relative z-10 w-[100px] h-[100px] rounded-full flex items-center justify-center bg-[#ecedf1] group-hover:bg-white shadow-neu-icon group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.18)] text-[#f38020] transition-all duration-300 shrink-0">
        <IconComponent size={48} weight="regular" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <h3 className="text-xl font-semibold text-[#1c1c1c] group-hover:text-white tracking-tight transition-colors duration-300">
            {title}
          </h3>
          {badge && (
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#f38020]/10 text-[#f38020] border border-[#f38020]/25 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40 transition-all duration-300">
              {badge}
            </span>
          )}
        </div>

        <p className="text-sm sm:text-base text-[#4d4d4d] group-hover:text-white/95 leading-relaxed max-w-sm transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;

