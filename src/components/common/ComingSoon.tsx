import { useLanguage } from "@/contexts/LanguageContext";
import { FadeLoader } from "react-spinners";

export default function ComingSoon() {
  const { t } = useLanguage();
  return (
    <div className="bg-[canvas] border-[8px] border-[#F4F7F9] p-6 h-full flex flex-col items-center justify-center max-[768px]:py-[100px] max-[500px]:py-[70px]">
      <div className="flex justify-center mb-6">
        <FadeLoader
          width={6}
          height={22}
          radius={4}
          margin={9}
          // speedMultiplier={0}
        />
        {/* <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div> */}
      </div>
      <div className="text-center">
        <div
          className="text-[#333333] font-bold mb-4 text-lg lg:text-xl"
          dangerouslySetInnerHTML={{
            __html: t.pastEvents.contentPreparation,
          }}
        />
        <div
          className="text-[#333333] leading-relaxed text-sm lg:text-base"
          dangerouslySetInnerHTML={{
            __html: t.pastEvents.contentPreparationDesc.replace(
              /\n/g,
              "<br />"
            ),
          }}
        />
      </div>
    </div>
  );
}
