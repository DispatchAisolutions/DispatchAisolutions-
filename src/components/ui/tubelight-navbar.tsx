import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  value: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  activeTab: string;
  onTabChange: (value: string) => void;
  className?: string;
}

export function NavBar({ items, activeTab, onTabChange, className }: NavBarProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center gap-3 bg-black/40 backdrop-blur-lg py-1 px-1 rounded-full">
        {items.map((item) => {
          const isActive = activeTab === item.value;

          return (
            <button
              key={item.value}
              onClick={() => onTabChange(item.value)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-colors flex-1",
                "text-gray-400 hover:text-white",
                isActive && "text-white",
              )}
            >
              <span>{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#2a2a2a] rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                    <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
