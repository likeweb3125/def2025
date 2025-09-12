import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import ComingSoon from "../common/ComingSoon";

export default function ForumSection({
  id,
  year,
  thumb,
  link,
  item,
}: {
  id: string;
  year: string;
  thumb: string;
  link: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
}) {
  const { t } = useLanguage();
  return (
    <div
      className="section pb-[100px] max-[500px]:pb-12 flex gap-[60px] max-[1280px]:gap-[30px] max-[1200px]:flex-col max-[1200px]:items-center max-[360px]:gap-6"
      id={id}
      style={{ scrollMarginTop: "160px" }}
    >
      {/* 중앙: 썸네일 이미지 */}
      <div className="relative w-full max-w-[320px]">
        <figure className="w-full h-auto lg:h-[460px] rounded-[20px_0px_20px_0px] overflow-hidden shadow-[12px_12px_24px_0px_#00000029]">
          <Image
            src={thumb}
            alt={`DEF ${year} Digital Economy Forum`}
            width={320}
            height={460}
            className="w-full lg:w-80 h-auto lg:h-[460px] object-cover"
          />
        </figure>
        <div className="mt-4">
          {link ? (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-80 h-[62px] px-6 py-4 bg-[#F4F7F9] border border-[#055DA5] text-[#055DA5] rounded-lg font-semibold text-[20px] hover:opacity-90 transition-opacity flex items-center justify-center flex items-center gap-2"
            >
              <Image
                src="/images/icons/icon-play.png"
                alt="Play"
                width={20}
                height={20}
              />
              <span>{t.pastEvents.watchVideo}</span>
            </Link>
          ) : (
            <button className="w-full lg:w-80 h-[62px] px-6 py-4 bg-[#F4F7F9] border border-[#055DA5] text-[#055DA5] rounded-lg font-semibold text-[20px] flex items-center justify-center flex items-center gap-2 opacity-50 cursor-not-allowed">
              <Image
                src="/images/icons/icon-play.png"
                alt="Play"
                width={20}
                height={20}
              />
              <span>{t.pastEvents.watchVideo}</span>
            </button>
          )}
        </div>
      </div>

      {/* 오른쪽: 콘텐츠/준비중 영역 */}
      <div className="w-full flex-1">
        {item.isContent ? (
          <div className="bg-[canvas] h-full flex flex-col">
            <p className="text-transparent bg-clip-text py-4 bg-[linear-gradient(123.75deg,#055DA5_2.12%,#02243F_100%)] max-[360px]:pt-0">
              <span className="font-bold text-[28px] break-keep max-[360px]:text-[20px]">
                {item.title}
              </span>
            </p>

            <p className="text-black mb-2 text-[20px] font-[500] break-keep max-[360px]:text-[18px]">
              {item.date}
            </p>

            <div
              className="text-[18px] text-[#666666] break-keep max-[360px]:text-[16px]"
              dangerouslySetInnerHTML={{
                __html: item.content.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        ) : (
          <ComingSoon />
        )}
      </div>
    </div>
  );
}
