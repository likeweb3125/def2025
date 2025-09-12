import { ForumListType } from "@/types/forum";
import Link from "next/link";

export default function ForumYear({
  item,
  isActive,
}: {
  item: ForumListType;
  isActive: boolean;
}) {
  return (
    <Link
      href={`#${item.year}`}
      draggable={false}
      className={`grid grid-cols-[130px_1fr] gap-4 max-[1280px]:grid-cols-[100px_1fr] max-[950px]:grid-cols-[80px_1fr] max-[500px]:grid-cols-[40px_1fr] max-[500px]:gap-2 items-center ${
        isActive
          ? "text-[#055DA5] leading-[76px] text-[62px] max-[1280px]:text-[50px] max-[1280px]:leading-[40px] max-[950px]:text-[40px] max-[950px]:leading-[40px] max-[500px]:text-[20px] max-[500px]:leading-[20px]"
          : "text-[#000000] leading-[49px] text-[40px] max-[1280px]:text-[30px] max-[1280px]:leading-[30px] max-[950px]:text-[28px] max-[950px]:leading-[28px] max-[768px]:grid-cols-1 max-[768px]:inline-flex max-[500px]:text-[18px] max-[500px]:leading-[18px]"
      }`}
    >
      <p
        className={`text-transparent bg-clip-text bg-[linear-gradient(123.75deg,#055DA5_2.12%,#02243F_100%)] ${
          isActive ? "" : "max-[768px]:hidden"
        }`}
      >
        <span className="font-bold">{isActive ? "DEF" : ""}</span>
      </p>
      <p className="text-right bg-[canvas] max-[768px]:bg-transparent">
        <span
          className={`font-bold ${
            isActive
              ? "text-[#333333]"
              : "outline-text  max-[768px]:!text-[#F4F7F9]"
          }`}
        >
          {item.year}
        </span>
      </p>
    </Link>
  );
}
