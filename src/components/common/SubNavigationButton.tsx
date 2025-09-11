"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import LoadingLink from "../LoadingLink";

export default function SubNavigationButton({
  tabs,
  className,
}: {
  tabs: { id: string; label: string; href: string }[];
  className?: string;
}) {
  const pathname = usePathname();
  const rootClassName = cn(
    "flex justify-center items-center mb-8 w-full flex rounded-[40px] border-2 border-[#4AC8F4] overflow-hidden",
    className
  );
  return (
    <div
      className={rootClassName}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
      }}
    >
      {tabs.map((item, index) => (
        <LoadingLink
          href={item.href}
          key={index}
          className="flex-1 text-center block py-4 hover:bg-white/10 max-[500px]:py-3 px-5 h-full flex items-center justify-center"
        >
          <span
            className={`cursor-pointer font-medium transition-colors ${
              item.href === pathname ? "text-[#4AC8F4]" : "text-white"
            }`}
          >
            {item.label}
          </span>
        </LoadingLink>
      ))}
    </div>
  );
}
