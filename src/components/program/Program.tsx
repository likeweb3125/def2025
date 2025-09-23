"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import ComingSoon from "@/components/common/ComingSoon";

export default function Program() {
  const { t } = useLanguage();

  return (
    <div>
      {/* 프로그램 헤더 섹션 */}
      <section className="px-10 max-[768px]:px-0">
        <div className="relative h-[360px] max-w-[1920px] max-[768px]:pt-[50px] rounded-[40px_0_40px_0] overflow-hidden mx-auto flex-col flex items-center justify-center max-[768px]:rounded-none max-[500px]:h-[227px]">
          {/* 배경 이미지 */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/hero.jpg')]"></div>

          {/* 콘텐츠 */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl font-bold text-white text-center">
              {t.program.title}
            </h2>

            {/* 프로그램 설명 텍스트 */}
            {/* <div className="text-white text-center">
              <p className="font-normal text-xl leading-[150%] tracking-[0%]">
                {t.program.subtitle}
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <div className="py-16 px-10 max-[500px]:p-[60px_20px]">
        {/* <div className="max-w-[1360px] mx-auto min-h-[480px] [&>div]:py-[100px] max-[500px]:[&>div]:py-[70px]">
          <ComingSoon />
        </div> */}
        <div className="max-w-[1360px] mx-auto w-full border-t-[3px] border-[#111111]">
          <table className="w-full">
            <colgroup>
              <col width="16%" />
              <col width="44%" />
              <col width="45%" />
            </colgroup>
            <thead className="sr-only">
              <tr className="border-collapse ">
                <th>time</th>
                <th>title</th>
                <th>contents</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  time: "10:30 ~ 10:50",
                  title: t.program.table.firstTitle,
                  contents: t.program.table.firstContents,
                },
                {
                  time: "10:50 ~ 11:00",
                  title: t.program.table.secondTitle,
                  contents: t.program.table.secondContents,
                },
                {
                  time: "11:00 ~ 11:20",
                  title: t.program.table.thirdTitle,
                  contents: t.program.table.thirdContents,
                },
                {
                  time: "11:20 ~ 11:40",
                  title: t.program.table.fourthTitle,
                  contents: t.program.table.fourthContents,
                },
                {
                  time: "11:40 ~ 12:00",
                  title: t.program.table.fifthTitle,
                  contents: t.program.table.fifthContents,
                },
                {
                  time: "12:00 ~ 14:00",
                  title: t.program.table.sixthTitle,
                  contents: t.program.table.sixthContents,
                },
                {
                  time: "14:00 ~ 15:00",
                  title: t.program.table.seventhTitle,
                  contents: t.program.table.seventhContents,
                },
                {
                  time: "15:00 ~ 16:00",
                  title: t.program.table.eighthTitle,
                  contents: t.program.table.eighthContents,
                },
              ].map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="border-collapse border-b border-[#D4D7DD] text-[#333]"
                  >
                    <td className="align-top py-10 px-5 text-[18px]">
                      {item.time}
                    </td>
                    <td className="align-top">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.title }}
                        className="py-10"
                      />
                    </td>
                    <td className="align-top">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.contents }}
                        className="py-10"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
