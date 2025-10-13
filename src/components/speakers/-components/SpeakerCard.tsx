import Image from "next/image";

type SpeakerCardProps = {
  item: {
    name: string;
    position: string;
    session: string;
    sessionDesc: string;
    image: string | null;
  };
};
export function SpeakerCard({ item }: SpeakerCardProps) {
  return (
    <div className="@container speaker-card p-6 aspect-[325/400] overflow-hidden group cursor-pointer transition-all duration-300">
      <div className="relative z-10 h-full flex flex-col">
        {/* 이름 */}
        <h3
          className="text-[28px] leading-[54px] font-bold text-[#333333] mb-2 transition-colors duration-300 min-[768px]:group-hover:text-[#00F8FA] @[310px]:text-[36px] @[310px]:leading-[42px]"
          dangerouslySetInnerHTML={{
            __html: item.name.replace(/\n/g, "<br />"),
          }}
        />

        {/* 직책 */}
        <p
          className="text-[14px] @[310px]:text-[16px] text-[#666666] mb-4 transition-colors duration-300 min-[768px]:group-hover:text-[#DDDDDD]"
          dangerouslySetInnerHTML={{
            __html: item.position.replace(/\n/g, "<br />"),
          }}
        />

        {/* 구분선 */}
        <div
          className="mb-4 transition-colors duration-300"
          style={{
            width: "40px",
            height: "1px",
            background: "#D9D9D9",
            opacity: 1,
          }}
        ></div>

        {/* 세션명 */}
        <h4
          className="text-[18px] @[310px]:text-[20px] font-bold text-[#333333] mb-1 transition-colors duration-300 min-[768px]:group-hover:text-white"
          dangerouslySetInnerHTML={{
            __html: item.session.replace(/\n/g, "<br />"),
          }}
        />

        {/* 설명 */}
        <div
          className="text-[16px] text-[#333333] @[310px]:text-[18px] mb-6 flex-grow transition-colors duration-300 min-[768px]:group-hover:text-white"
          dangerouslySetInnerHTML={{
            __html: item.sessionDesc.replace(/\n/g, "<br />"),
          }}
        />
      </div>
      {/* 배경 로고 - 우측 하단 */}
      <div className="absolute bottom-0 right-0 opacity-5 z-5">
        <Image
          src="/images/logos/logo_white.png"
          alt="DEF Logo Background"
          width={200}
          height={100}
          className="w-32 h-auto object-contain"
        />
      </div>

      {/* 좌측 하단 로고 */}
      <div className="absolute bottom-4 left-4 z-50">
        <Image
          src="/images/logos/logo_white.png"
          alt="DEF Logo Left"
          width={200}
          height={100}
          className="w-24 h-auto object-contain"
        />
      </div>

      <div className="absolute bottom-[1px] right-[1px] overflow-hidden z-[20] min-[768px]:group-hover:rounded-[0px_0px_20px_0px] transition-all duration-300">
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            className="object-cover rounded-tl-3xl w-full h-full max-w-[220px]"
            width={220}
            height={180}
            unoptimized={true}
          />
        )}
      </div>
    </div>
  );
}
